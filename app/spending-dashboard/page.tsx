import { Navbar } from "@/components/layout/navbar"
import { SpendingDashboard } from "@/components/dashboard/spending-dashboard"
import { Footer } from "@/components/layout/footer"

export default function SpendingDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SpendingDashboard />
      <Footer />
    </div>
  )
}
