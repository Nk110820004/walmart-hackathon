"use client"

import type React from "react"

import { useState } from "react"
import { Search, Camera, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSearch} className="flex items-center max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Search everything at Walmart online and in store"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 text-lg border-2 walmart-border-blue rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="submit"
              className="absolute right-0 top-0 h-full px-6 walmart-blue hover:bg-blue-700 rounded-r-full"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex ml-4 space-x-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => router.push("/visual-search")}
              className="flex items-center space-x-1"
            >
              <Camera className="h-4 w-4" />
              <span className="hidden sm:inline">Visual</span>
            </Button>
            <Button type="button" variant="outline" size="sm" className="flex items-center space-x-1 bg-transparent">
              <Mic className="h-4 w-4" />
              <span className="hidden sm:inline">Voice</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
