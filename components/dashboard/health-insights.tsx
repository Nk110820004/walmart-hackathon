import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, TrendingUp, Apple } from "lucide-react"

interface HealthInsightsProps {
  metrics: {
    processedFoodPercentage: number
    organicPercentage: number
    sugarIntake: string
    nutritionScore: number
  }
}

export function HealthInsights({ metrics }: HealthInsightsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Apple className="h-5 w-5 text-green-600" />
            <span>Nutrition Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Overall Health Score</span>
              <span className="text-lg font-bold">{metrics.nutritionScore}/100</span>
            </div>
            <Progress value={metrics.nutritionScore} className="h-3" />
            <p className="text-xs text-gray-500 mt-1">Based on your purchase patterns</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Organic Foods</span>
              <span className="text-sm">{metrics.organicPercentage}%</span>
            </div>
            <Progress value={metrics.organicPercentage} className="h-2" />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Processed Foods</span>
              <Badge variant={metrics.processedFoodPercentage > 30 ? "destructive" : "secondary"}>
                {metrics.processedFoodPercentage}%
              </Badge>
            </div>
            <Progress value={metrics.processedFoodPercentage} className="h-2" />
            {metrics.processedFoodPercentage > 30 && (
              <p className="text-xs text-red-600 mt-1 flex items-center">
                <AlertTriangle className="h-3 w-3 mr-1" />
                Consider reducing processed food purchases
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Health Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-800">Great Progress!</h4>
                <p className="text-sm text-green-700">You're buying more fresh produce than 70% of shoppers</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-start space-x-3">
              <TrendingUp className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800">Room for Improvement</h4>
                <p className="text-sm text-yellow-700">Try replacing sugary snacks with nuts or fresh fruit</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-red-50 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-red-800">High Sugar Intake</h4>
                <p className="text-sm text-red-700">
                  Your sugar intake is {metrics.sugarIntake.toLowerCase()}. Consider reducing processed foods.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-3">Suggested Products</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-sm">Organic Spinach</span>
                <Badge variant="outline">High Iron</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-sm">Greek Yogurt</span>
                <Badge variant="outline">High Protein</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-sm">Almonds</span>
                <Badge variant="outline">Healthy Fats</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
