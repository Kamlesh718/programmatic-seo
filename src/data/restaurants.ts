export interface Restaurant {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
  cuisine: string;
  address: string;
  phone: string;
  hours: string;
  reviews: number;
  tags: string[];
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Sushi Master SF",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
    rating: 4.8,
    price: "$$$",
    cuisine: "Japanese",
    address: "456 Fillmore St, San Francisco, CA",
    phone: "(415) 987-6543",
    hours: "11:00 AM - 11:00 PM",
    reviews: 456,
    tags: ["Lunch", "Dinner", "Sushi Bars"],
  },
  {
    id: 2,
    name: "Golden Dragon SF",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop&q=60",
    rating: 4.7,
    price: "$$",
    cuisine: "Chinese",
    address: "768 Grant Ave, San Francisco, CA",
    phone: "(415) 666-7777",
    hours: "11:00 AM - 10:00 PM",
    reviews: 321,
    tags: ["Lunch", "Dinner", "Chinese"],
  },
  {
    id: 3,
    name: "Mission Tacos",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=60",
    rating: 4.6,
    price: "$",
    cuisine: "Mexican",
    address: "2234 Mission St, San Francisco, CA",
    phone: "(415) 777-8888",
    hours: "10:00 AM - 10:00 PM",
    reviews: 567,
    tags: ["Lunch", "Dinner", "Mexican"],
  },
  {
    id: 4,
    name: "Marina Steakhouse",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=60",
    rating: 4.9,
    price: "$$$$",
    cuisine: "Steakhouse",
    address: "3300 Fillmore St, San Francisco, CA",
    phone: "(415) 123-4567",
    hours: "5:00 PM - 11:00 PM",
    reviews: 234,
    tags: ["Dinner", "Steak", "Fine Dining"],
  },
  {
    id: 5,
    name: "Fog City Pizza",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800&auto=format&fit=crop&q=60",
    rating: 4.5,
    price: "$$",
    cuisine: "Pizza",
    address: "1512 Columbus Ave, San Francisco, CA",
    phone: "(415) 555-1234",
    hours: "11:00 AM - 10:00 PM",
    reviews: 345,
    tags: ["Lunch", "Dinner", "Pizza"],
  },
  {
    id: 6,
    name: "Noe Valley Brunch",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop&q=60",
    rating: 4.4,
    price: "$$",
    cuisine: "Breakfast",
    address: "3901 24th St, San Francisco, CA",
    phone: "(415) 777-9876",
    hours: "8:00 AM - 3:00 PM",
    reviews: 289,
    tags: ["Breakfast", "Brunch", "Coffee"],
  },
  {
    id: 19,
    name: "Sakura SF",
    image:
      "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=800&auto=format&fit=crop&q=60",
    rating: 4.6,
    price: "$$",
    cuisine: "Japanese",
    address: "2223 Market St, San Francisco, CA",
    phone: "(415) 444-5555",
    hours: "11:30 AM - 10:00 PM",
    reviews: 234,
    tags: ["Lunch", "Dinner", "Sushi Bars"],
  },
  {
    id: 20,
    name: "Tsunami Sushi SF",
    image:
      "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&auto=format&fit=crop&q=60",
    rating: 4.7,
    price: "$$$$",
    cuisine: "Japanese",
    address: "1306 Fulton St, San Francisco, CA",
    phone: "(415) 333-4444",
    hours: "12:00 PM - 11:00 PM",
    reviews: 567,
    tags: ["Lunch", "Dinner", "Sushi Bars", "Fine Dining"],
  },
  {
    id: 7,
    name: "Sushi Master Chicago",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format&fit=crop&q=60",
    rating: 4.7,
    price: "$$$",
    cuisine: "Japanese",
    address: "555 N State St, Chicago, IL",
    phone: "(312) 888-9999",
    hours: "11:00 AM - 11:00 PM",
    reviews: 678,
    tags: ["Lunch", "Dinner", "Sushi Bars"],
  },
  {
    id: 8,
    name: "Golden Dragon Chicago",
    image:
      "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&auto=format&fit=crop&q=60",
    rating: 4.6,
    price: "$$",
    cuisine: "Chinese",
    address: "999 Devon Ave, Chicago, IL",
    phone: "(312) 555-6666",
    hours: "11:00 AM - 10:00 PM",
    reviews: 432,
    tags: ["Lunch", "Dinner", "Chinese"],
  },
  {
    id: 9,
    name: "Deep Dish Heaven",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
    rating: 4.7,
    price: "$$",
    cuisine: "Pizza",
    address: "742 N Wells St, Chicago, IL",
    phone: "(312) 222-3333",
    hours: "11:00 AM - 11:00 PM",
    reviews: 789,
    tags: ["Lunch", "Dinner", "Pizza"],
  },
  {
    id: 10,
    name: "Wrigleyville Steakhouse",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=60",
    rating: 4.8,
    price: "$$$$",
    cuisine: "Steakhouse",
    address: "3501 N Clark St, Chicago, IL",
    phone: "(312) 444-5555",
    hours: "4:00 PM - 11:00 PM",
    reviews: 567,
    tags: ["Dinner", "Steak", "Fine Dining"],
  },
  {
    id: 11,
    name: "Pilsen Mexican Grill",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop&q=60",
    rating: 4.5,
    price: "$",
    cuisine: "Mexican",
    address: "1235 W 18th St, Chicago, IL",
    phone: "(312) 777-8888",
    hours: "10:00 AM - 10:00 PM",
    reviews: 345,
    tags: ["Lunch", "Dinner", "Mexican"],
  },
  {
    id: 12,
    name: "Logan Square Brunch",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=60",
    rating: 4.6,
    price: "$$",
    cuisine: "Breakfast",
    address: "2537 N Kedzie Ave, Chicago, IL",
    phone: "(312) 999-1111",
    hours: "7:00 AM - 3:00 PM",
    reviews: 234,
    tags: ["Breakfast", "Brunch", "Coffee"],
  },
  {
    id: 21,
    name: "Umami Chicago",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop&q=60",
    rating: 4.9,
    price: "$$$$",
    cuisine: "Japanese",
    address: "723 W Randolph St, Chicago, IL",
    phone: "(312) 666-7777",
    hours: "4:00 PM - 11:00 PM",
    reviews: 890,
    tags: ["Dinner", "Sushi Bars", "Fine Dining"],
  },
  {
    id: 22,
    name: "Fuji Sushi",
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&auto=format&fit=crop&q=60",
    rating: 4.5,
    price: "$$",
    cuisine: "Japanese",
    address: "2345 N Lincoln Ave, Chicago, IL",
    phone: "(312) 555-4444",
    hours: "11:30 AM - 10:00 PM",
    reviews: 456,
    tags: ["Lunch", "Dinner", "Sushi Bars"],
  },
  {
    id: 13,
    name: "Sushi Master Miami",
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&auto=format&fit=crop&q=60",
    rating: 4.8,
    price: "$$$",
    cuisine: "Japanese",
    address: "222 Brickell Ave, Miami, FL",
    phone: "(305) 888-7777",
    hours: "11:00 AM - 11:00 PM",
    reviews: 345,
    tags: ["Lunch", "Dinner", "Sushi Bars"],
  },
  {
    id: 14,
    name: "Golden Dragon Miami",
    image:
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&auto=format&fit=crop&q=60",
    rating: 4.6,
    price: "$$",
    cuisine: "Chinese",
    address: "567 NW 27th St, Miami, FL",
    phone: "(305) 999-8888",
    hours: "11:00 AM - 10:00 PM",
    reviews: 678,
    tags: ["Lunch", "Dinner", "Chinese"],
  },
  {
    id: 15,
    name: "South Beach Steakhouse",
    image:
      "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=800&auto=format&fit=crop&q=60",
    rating: 4.9,
    price: "$$$$",
    cuisine: "Steakhouse",
    address: "801 Ocean Drive, Miami Beach, FL",
    phone: "(305) 111-2222",
    hours: "5:00 PM - 11:00 PM",
    reviews: 432,
    tags: ["Dinner", "Steak", "Fine Dining"],
  },
  {
    id: 16,
    name: "Little Havana Cafe",
    image:
      "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=800&auto=format&fit=crop&q=60",
    rating: 4.8,
    price: "$$",
    cuisine: "Cuban",
    address: "1567 SW 8th St, Miami, FL",
    phone: "(305) 777-6666",
    hours: "8:00 AM - 10:00 PM",
    reviews: 678,
    tags: ["Breakfast", "Lunch", "Dinner", "Cuban"],
  },
  {
    id: 17,
    name: "Coral Way Pizza",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=60",
    rating: 4.5,
    price: "$$",
    cuisine: "Pizza",
    address: "2550 SW 22nd St, Miami, FL",
    phone: "(305) 333-4444",
    hours: "11:00 AM - 11:00 PM",
    reviews: 567,
    tags: ["Lunch", "Dinner", "Pizza"],
  },
  {
    id: 18,
    name: "Coconut Grove Brunch",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&auto=format&fit=crop&q=60",
    rating: 4.7,
    price: "$$",
    cuisine: "Breakfast",
    address: "3416 Main Hwy, Miami, FL",
    phone: "(305) 222-5555",
    hours: "8:00 AM - 3:00 PM",
    reviews: 345,
    tags: ["Breakfast", "Brunch", "Coffee"],
  },
  {
    id: 23,
    name: "Sushi Zen Miami",
    image:
      "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=800&auto=format&fit=crop&q=60",
    rating: 4.8,
    price: "$$$",
    cuisine: "Japanese",
    address: "1035 N Miami Ave, Miami, FL",
    phone: "(305) 444-3333",
    hours: "12:00 PM - 11:00 PM",
    reviews: 567,
    tags: ["Lunch", "Dinner", "Sushi Bars"],
  },
  {
    id: 24,
    name: "Ocean Drive Sushi",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop&q=60",
    rating: 4.7,
    price: "$$$$",
    cuisine: "Japanese",
    address: "1424 Ocean Drive, Miami Beach, FL",
    phone: "(305) 666-5555",
    hours: "4:00 PM - 12:00 AM",
    reviews: 789,
    tags: ["Dinner", "Sushi Bars", "Fine Dining"],
  },
];

export async function searchRestaurants(q: string, location: string) {
  // Pretend we're making a request to our DB/API
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const searchWords = q?.split(" ").filter(Boolean) || [];

  return restaurants
    .filter((restaurant) =>
      searchWords.every(
        (word) =>
          restaurant.name.toLowerCase().includes(word.toLowerCase()) ||
          restaurant.cuisine.toLowerCase().includes(word.toLowerCase()) ||
          restaurant.tags.some((tag) =>
            tag.toLowerCase().includes(word.toLowerCase())
          )
      )
    )
    .filter((restaurant) =>
      restaurant.address.toLowerCase().includes(location.toLowerCase())
    )
    .sort((a, b) => b.rating - a.rating);
}

export const locations = ["San Francisco, CA", "Chicago, IL", "Miami, FL"];

export async function getAllTags({ limit }: { limit?: number } = {}) {
  // Pretend we're fetching these from the DB
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return restaurants
    .slice(0, limit)
    .reduce<string[]>(function (acc, restaurant) {
      return acc.concat(restaurant.tags);
    }, []);
}
