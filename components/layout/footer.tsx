import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop & Browse</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/electronics" className="hover:underline">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/category/fashion" className="hover:underline">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="/category/home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/category/grocery" className="hover:underline">
                  Grocery
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="hover:underline">
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/login" className="hover:underline">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:underline">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:underline">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/spending-dashboard" className="hover:underline">
                  Spending Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/customer-support" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/customer-support" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:underline">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/customer-support" className="hover:underline">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">AI Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/smart-assistant" className="hover:underline">
                  Smart Assistant
                </Link>
              </li>
              <li>
                <Link href="/visual-search" className="hover:underline">
                  Visual Search
                </Link>
              </li>
              <li>
                <Link href="/spending-dashboard" className="hover:underline">
                  Health Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-2xl font-bold">Walmart</span>
              <span className="text-sm text-gray-400">Save Money. Live Better.</span>
            </div>

            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-pink-400 cursor-pointer" />
              <Youtube className="h-5 w-5 hover:text-red-400 cursor-pointer" />
            </div>
          </div>

          <div className="text-center text-sm text-gray-400 mt-4">
            <p>&copy; 2024 Walmart Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
