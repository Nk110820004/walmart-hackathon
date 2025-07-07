"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"

const categories = [
  { name: "Electronics", href: "/category/electronics" },
  { name: "Fashion", href: "/category/fashion" },
  { name: "Home", href: "/category/home" },
  { name: "Grocery", href: "/category/grocery" },
  { name: "Beauty", href: "/category/beauty" },
  { name: "Sports", href: "/category/sports" },
  { name: "Auto", href: "/category/auto" },
  { name: "Baby", href: "/category/baby" },
  { name: "Health", href: "/category/health" },
  { name: "Pharmacy", href: "/category/pharmacy" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = useAuth()
  const { itemCount } = useCart()

  return (
    <nav className="walmart-blue text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>How do you want your items?</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/customer-support" className="hover:underline">
              Help
            </Link>
            {user ? (
              <Link href="/account" className="hover:underline">
                Hi, {user.email?.split("@")[0]}
              </Link>
            ) : (
              <Link href="/login" className="hover:underline">
                Sign In
              </Link>
            )}
          </div>
        </div>

        {/* Main navbar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold">
              Walmart
            </Link>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {categories.map((category) => (
                <Link key={category.name} href={category.href} className="hover:underline text-sm">
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/smart-assistant">
              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
                Smart Assistant
              </Button>
            </Link>
            <Link href="/visual-search">
              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
                Visual Search
              </Button>
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="hover:underline text-sm py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
