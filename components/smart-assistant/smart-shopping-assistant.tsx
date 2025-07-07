"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Mic, MicOff, Bot, User } from "lucide-react"
import { ProductCard } from "@/components/ui/product-card"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  products?: any[]
  timestamp: Date
}

const sampleProducts = [
  {
    id: 1,
    name: "Organic Chicken Breast",
    price: 8.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
    reviews: 234,
  },
  {
    id: 2,
    name: "Fresh Broccoli",
    price: 2.49,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.3,
    reviews: 156,
  },
  {
    id: 3,
    name: "Brown Rice",
    price: 3.99,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    reviews: 89,
  },
]

export function SmartShoppingAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "Hi! I'm your Smart Shopping Assistant. I can help you find products, create shopping lists, suggest healthy meals, and remind you about restocks. What can I help you with today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let assistantResponse: Message

      if (input.toLowerCase().includes("healthy dinner") || input.toLowerCase().includes("meal plan")) {
        assistantResponse = {
          id: (Date.now() + 1).toString(),
          type: "assistant",
          content:
            "Great choice! Here are some healthy dinner options I found for you. These ingredients will help you create nutritious meals:",
          products: sampleProducts,
          timestamp: new Date(),
        }
      } else if (input.toLowerCase().includes("restock") || input.toLowerCase().includes("remind")) {
        assistantResponse = {
          id: (Date.now() + 1).toString(),
          type: "assistant",
          content:
            "I'll set up restock reminders for you! Based on your purchase history, you typically need to restock milk every 5 days, bread every 3 days, and eggs every week. Would you like me to add these to your shopping list?",
          timestamp: new Date(),
        }
      } else {
        assistantResponse = {
          id: (Date.now() + 1).toString(),
          type: "assistant",
          content:
            "I understand you're looking for help with shopping. I can assist with finding products, meal planning, creating shopping lists, and setting up restock reminders. Could you be more specific about what you need?",
          timestamp: new Date(),
        }
      }

      setMessages((prev) => [...prev, assistantResponse])
      setIsLoading(false)
    }, 1500)
  }

  const toggleVoiceInput = () => {
    setIsListening(!isListening)
    // In a real app, you would implement speech recognition here
    if (!isListening) {
      setTimeout(() => {
        setInput("I need ingredients for a healthy dinner plan")
        setIsListening(false)
      }, 2000)
    }
  }

  const quickActions = [
    "Healthy dinner plan",
    "Weekly grocery list",
    "Restock reminders",
    "Budget-friendly meals",
    "Organic products",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold walmart-text-blue mb-4">Smart Shopping Assistant</h1>
          <p className="text-gray-600">Your AI-powered shopping companion for smarter, healthier choices</p>
        </div>

        <Card className="h-[600px] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center space-x-2">
              <Bot className="h-5 w-5 walmart-text-blue" />
              <span>Chat Assistant</span>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.type === "user" ? "walmart-blue text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === "assistant" && <Bot className="h-4 w-4 mt-1 flex-shrink-0" />}
                      {message.type === "user" && <User className="h-4 w-4 mt-1 flex-shrink-0" />}
                      <div className="flex-1">
                        <p>{message.content}</p>
                        {message.products && (
                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {message.products.map((product) => (
                              <div key={product.id} className="bg-white rounded-lg p-3 border">
                                <ProductCard product={product} />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="border-t p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {quickActions.map((action) => (
                  <Badge
                    key={action}
                    variant="outline"
                    className="cursor-pointer hover:bg-blue-50"
                    onClick={() => setInput(action)}
                  >
                    {action}
                  </Badge>
                ))}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <div className="flex-1 relative">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything about shopping, meals, or products..."
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    className="pr-12"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
                      isListening ? "text-red-500" : "text-gray-400"
                    }`}
                    onClick={toggleVoiceInput}
                  >
                    {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>
                </div>
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="walmart-blue hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
