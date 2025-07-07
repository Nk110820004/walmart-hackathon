"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ui/product-card"
import { Camera, Upload, Search, Loader2 } from "lucide-react"

const mockResults = [
  {
    id: 1,
    name: "Similar Red Dress",
    price: 29.99,
    originalPrice: 39.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.3,
    reviews: 156,
    discount: 25,
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: 34.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
    reviews: 234,
  },
  {
    id: 3,
    name: "Casual Red Top",
    price: 19.99,
    originalPrice: 24.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.2,
    reviews: 89,
    discount: 20,
  },
  {
    id: 4,
    name: "Designer Red Blouse",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    reviews: 312,
  },
]

export function VisualSearchPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [hasSearched, setHasSearched] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isCameraActive, setIsCameraActive] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
        performSearch()
      }
      reader.readAsDataURL(file)
    }
  }

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsCameraActive(true)
      }
    } catch (error) {
      console.error("Error accessing camera:", error)
    }
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current
      const video = videoRef.current
      const context = canvas.getContext("2d")

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      if (context) {
        context.drawImage(video, 0, 0)
        const imageData = canvas.toDataURL("image/png")
        setUploadedImage(imageData)

        // Stop camera
        const stream = video.srcObject as MediaStream
        stream.getTracks().forEach((track) => track.stop())
        setIsCameraActive(false)

        performSearch()
      }
    }
  }

  const performSearch = () => {
    setIsSearching(true)
    setHasSearched(true)

    // Simulate AI search
    setTimeout(() => {
      setSearchResults(mockResults)
      setIsSearching(false)
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold walmart-text-blue mb-4">Visual Search</h1>
          <p className="text-gray-600">Upload or snap a photo to find similar products</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Upload Image</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                {uploadedImage ? (
                  <div className="space-y-4">
                    <img
                      src={uploadedImage || "/placeholder.svg"}
                      alt="Uploaded"
                      className="max-w-full max-h-64 mx-auto rounded-lg"
                    />
                    <Button
                      onClick={() => {
                        setUploadedImage(null)
                        setSearchResults([])
                        setHasSearched(false)
                      }}
                      variant="outline"
                    >
                      Upload Different Image
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="h-12 w-12 mx-auto text-gray-400" />
                    <div>
                      <p className="text-lg font-medium">Drop your image here</p>
                      <p className="text-sm text-gray-500">or click to browse</p>
                    </div>
                    <Button onClick={() => fileInputRef.current?.click()} className="walmart-blue hover:bg-blue-700">
                      Choose File
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Camera Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="h-5 w-5" />
                <span>Take Photo</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-gray-300 rounded-lg p-4 text-center">
                {isCameraActive ? (
                  <div className="space-y-4">
                    <video ref={videoRef} autoPlay playsInline className="w-full max-h-64 rounded-lg" />
                    <div className="flex space-x-2 justify-center">
                      <Button onClick={capturePhoto} className="walmart-blue hover:bg-blue-700">
                        Capture Photo
                      </Button>
                      <Button
                        onClick={() => {
                          const stream = videoRef.current?.srcObject as MediaStream
                          stream?.getTracks().forEach((track) => track.stop())
                          setIsCameraActive(false)
                        }}
                        variant="outline"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 py-8">
                    <Camera className="h-12 w-12 mx-auto text-gray-400" />
                    <div>
                      <p className="text-lg font-medium">Use your camera</p>
                      <p className="text-sm text-gray-500">Take a photo to search</p>
                    </div>
                    <Button onClick={startCamera} className="walmart-blue hover:bg-blue-700">
                      Start Camera
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <canvas ref={canvasRef} className="hidden" />

        {/* Search Results */}
        {hasSearched && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Search Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSearching ? (
                <div className="flex items-center justify-center py-16">
                  <div className="text-center space-y-4">
                    <Loader2 className="h-8 w-8 animate-spin mx-auto walmart-text-blue" />
                    <p className="text-lg font-medium">Analyzing your image...</p>
                    <p className="text-sm text-gray-500">Finding similar products</p>
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div>
                  <p className="text-sm text-gray-600 mb-6">Found {searchResults.length} similar products</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {searchResults.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg font-medium">No similar products found</p>
                  <p className="text-sm text-gray-500">Try uploading a different image</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
