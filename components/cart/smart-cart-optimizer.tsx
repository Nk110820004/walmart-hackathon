"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Package, Clock, DollarSign } from "lucide-react"

const suggestions = [
  {
    type: "bundle",
    title: "Frequently Bought Together",
    description: "Save $15 when you buy these items together",
    items: ["Wireless Charger", "Phone Case"],
    savings: 15,
    icon: Package,
  },
  {
    type: "cheaper",
    title: "Similar Item for Less",
    description: "Generic brand available for 30% less",
    items: ["Generic Phone Charger"],
    savings: 12,
    icon: DollarSign,
  },
  {
    type: "delivery",
    title: "Faster Delivery Available",
    description: "Get your items by tomorrow for $3.99",
    items: [],
    savings: 0,
    icon: Clock,
  },
]

export function SmartCartOptimizer() {
  const [appliedSuggestions, setAppliedSuggestions] = useState<string[]>([])

  const applySuggestion = (suggestionType: string) => {
    setAppliedSuggestions((prev) => [...prev, suggestionType])
  }

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-yellow-50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          <span>Smart Cart Optimizer</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestions.map((suggestion) => {
          const isApplied = appliedSuggestions.includes(suggestion.type)
          const Icon = suggestion.icon

          return (
            <div
              key={suggestion.type}
              className={`p-4 rounded-lg border ${
                isApplied ? "bg-green-50 border-green-200" : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <Icon className={`h-5 w-5 mt-1 ${isApplied ? "text-green-600" : "text-blue-600"}`} />
                  <div>
                    <h4 className="font-semibold">{suggestion.title}</h4>
                    <p className="text-sm text-gray-600">{suggestion.description}</p>
                    {suggestion.savings > 0 && (
                      <Badge variant="secondary" className="mt-2">
                        Save ${suggestion.savings}
                      </Badge>
                    )}
                  </div>
                </div>
                <Button
                  size="sm"
                  variant={isApplied ? "secondary" : "default"}
                  onClick={() => applySuggestion(suggestion.type)}
                  disabled={isApplied}
                  className={isApplied ? "" : "walmart-blue hover:bg-blue-700"}
                >
                  {isApplied ? "Applied" : "Apply"}
                </Button>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
