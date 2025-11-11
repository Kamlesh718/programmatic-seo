import banner from "@/assets/restaurant-banner.jpg";
import Header from "@/components/Header";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <div className="relative h-96 w-full">
          <Image
            src={banner}
            alt="Restaurant Finder"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end space-y-2 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
            <h1 className="text-center text-3xl font-bold xl:text-4xl">
              Find the best restaurants near you
            </h1>
            <p className="text-center text-lg">
              Search for your favorite cuisine, restaurant, or dish
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
