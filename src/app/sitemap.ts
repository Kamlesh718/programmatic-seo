import { getAllTags, locations } from "@/data/restaurants";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
  const allTags = await getAllTags()
  const searchLandingPages = allTags.map(tag=> locations.map(location=>({
      url:`${baseUrl}/${location}/${tag}`,
      lastModified:new Date(),
      changeFrequency:"weekly",
      priorit:1,
  }))
  ).flat() as MetadataRoute.Sitemap;

  return [
    // Insert your other pages:
    {
      url:`${baseUrl}/about`,
      lastModified:"2024-12-31",
      changeFrequency:"yearly",
      priority:0.8
    },

    // Our pSEO(programmatic) pages
    ...searchLandingPages
  ]
}