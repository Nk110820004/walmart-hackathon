import { Navbar } from "@/components/layout/navbar"
import { HeroCarousel } from "@/components/home/hero-carousel"
import { SearchBar } from "@/components/search/search-bar"
import { DealsGrid } from "@/components/home/deals-grid"
import { PersonalizedSuggestions } from "@/components/home/personalized-suggestions"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SearchBar />
      <HeroCarousel />
      <main className="container mx-auto px-4 py-8">
        <DealsGrid />
        <PersonalizedSuggestions />
      </main>
      <Footer />
    </div>
  )
}
