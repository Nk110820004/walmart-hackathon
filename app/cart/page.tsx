import { Navbar } from "@/components/layout/navbar"
import { CartPage } from "@/components/cart/cart-page"
import { Footer } from "@/components/layout/footer"

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CartPage />
      <Footer />
    </div>
  )
}
