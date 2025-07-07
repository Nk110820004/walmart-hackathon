"use client"

import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Truck, MapPin } from "lucide-react"
import Link from "next/link"

export function CartSummary() {
  const { items, total } = useCart()

  const subtotal = total
  const tax = total * 0.08 // 8% tax
  const shipping = total > 35 ? 0 : 5.99
  const finalTotal = subtotal + tax + shipping

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal ({items.length} items)</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
        </div>

        {shipping > 0 && (
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-blue-800">Add ${(35 - total).toFixed(2)} more for FREE shipping!</p>
          </div>
        )}

        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm">
            <Truck className="h-4 w-4 text-green-600" />
            <span>Free delivery by tomorrow</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span>Free pickup available</span>
          </div>
        </div>

        <Link href="/checkout">
          <Button className="w-full walmart-yellow text-black hover:bg-yellow-300 text-lg py-3">
            Continue to Checkout
          </Button>
        </Link>

        <div className="text-center">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            Continue Shopping
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
