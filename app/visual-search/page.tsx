import { Navbar } from "@/components/layout/navbar"
import { VisualSearchPage } from "@/components/visual-search/visual-search-page"
import { Footer } from "@/components/layout/footer"

export default function VisualSearch() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <VisualSearchPage />
      <Footer />
    </div>
  )
}
