/*
  PersonalizedSuggestions
  -----------------------
  A simple placeholder that shows a “Personalized for you” section.
  You can later replace the static data with a Supabase query
  (e.g. based on the signed-in user’s preferences or order history).
*/

import { ProductCard } from "@/components/ui/product-card"

const suggested = [
  {
    id: 21,
    name: "Organic Almond Milk",
    price: 3.49,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
    reviews: 623,
  },
  {
    id: 22,
    name: "Bluetooth Headphones",
    price: 49.99,
    originalPrice: 69.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.4,
    reviews: 1821,
    discount: 29,
  },
  {
    id: 23,
    name: "Yoga Mat – Extra Thick",
    price: 24.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    reviews: 311,
  },
  {
    id: 24,
    name: "LED Desk Lamp",
    price: 18.99,
    originalPrice: 26.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.6,
    reviews: 957,
    discount: 30,
  },
]

export function PersonalizedSuggestions() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold walmart-text-blue mb-6">Personalized for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {suggested.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
