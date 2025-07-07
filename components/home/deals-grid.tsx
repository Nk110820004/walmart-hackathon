import { ProductCard } from "@/components/ui/product-card"

const deals = [
  {
    id: 1,
    name: 'Samsung 55" 4K Smart TV',
    price: 399.99,
    originalPrice: 599.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
    reviews: 1234,
    discount: 33,
  },
  {
    id: 2,
    name: "Apple AirPods Pro",
    price: 199.99,
    originalPrice: 249.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    reviews: 5678,
    discount: 20,
  },
  {
    id: 3,
    name: "Nike Air Max Sneakers",
    price: 89.99,
    originalPrice: 120.0,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.3,
    reviews: 892,
    discount: 25,
  },
  {
    id: 4,
    name: "Instant Pot Duo 7-in-1",
    price: 79.99,
    originalPrice: 99.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    reviews: 3456,
    discount: 20,
  },
  {
    id: 5,
    name: "Dyson V11 Vacuum",
    price: 449.99,
    originalPrice: 599.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.6,
    reviews: 2134,
    discount: 25,
  },
  {
    id: 6,
    name: "KitchenAid Stand Mixer",
    price: 279.99,
    originalPrice: 349.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    reviews: 1567,
    discount: 20,
  },
]

export function DealsGrid() {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold walmart-text-blue">Flash Deals</h2>
        <span className="text-red-600 font-semibold">Limited Time Offers</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {deals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
