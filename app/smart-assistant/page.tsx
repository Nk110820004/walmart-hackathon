import { Navbar } from "@/components/layout/navbar"
import { SmartShoppingAssistant } from "@/components/smart-assistant/smart-shopping-assistant"
import { Footer } from "@/components/layout/footer"

export default function SmartAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SmartShoppingAssistant />
      <Footer />
    </div>
  )
}
