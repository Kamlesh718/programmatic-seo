import Header from "@/components/Header";
import RestaurantItem from "@/components/RestaurantItem";
import { getAllTags, locations, searchRestaurants } from "@/data/restaurants";
import { Metadata } from "next";
import { cache } from "react";

interface PageProps {
  params:Promise<{location:string,q:string}>
}
// Refresh cached pages once every 24 hours
export const revalidate = 86400 // 24 * 60 * 60

// To cache pages
// Only work when we compile the project
export async function generateStaticParams(){
  const allTags = await getAllTags({
    // If there are many pages, you can only render a subset at compile-time. The rest will be rendered and cached at first access
    // limit:10
  })
  // Fetched and rendered pages at build time
  return allTags.map(tag=>locations.map(location=>(
    {
      location,q:tag
    }
  ))).flat();

  // To cache pages when they are access for the first time
  // return []
}

const getRestaurants = cache(searchRestaurants)

export async function generateMetadata({params}:PageProps):Promise<Metadata>{
  const {q,location} = await params;
  const qDecoded = decodeURIComponent(q)
  const locationDecoded = decodeURIComponent(location)

  const results = await getRestaurants(qDecoded,locationDecoded)

  return {
    title:`Top ${results.length} ${qDecoded} near ${locationDecoded} - Updated ${new Date().getFullYear()}`,
    description:`Find the best ${qDecoded} near ${locationDecoded}`
  }
}

async function Page({params}:PageProps) {
  const {q,location} = await params;
  const qDecoded = decodeURIComponent(q)
  const locationDecoded = decodeURIComponent(location)

  const results = await searchRestaurants(qDecoded,locationDecoded)
  return (
    <div>
      <Header q={qDecoded} location={locationDecoded}/>
      <main className="container mx-auto space-y-8 px-4 py-8">
        {/* Headlines are important for SEO */}
        <h1 className="text-center text-3xl font-bold">
          Top {results.length} {qDecoded} near {locationDecoded}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map(restautant=>(
            <RestaurantItem key={restautant.id} restaurant={restautant}/>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Page