"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Heart, Target } from "lucide-react"
import { SpendingChart } from "@/components/dashboard/spending-chart"
import { HealthInsights } from "@/components/dashboard/health-insights"

const monthlyData = [
  { month: "Jan", total: 450, grocery: 280, health: 45, electronics: 125 },
  { month: "Feb", total: 520, grocery: 310, health: 60, electronics: 150 },
  { month: "Mar", total: 380, grocery: 250, health: 40, electronics: 90 },
  { month: "Apr", total: 620, grocery: 350, health: 70, electronics: 200 },
  { month: "May", total: 480, grocery: 290, health: 55, electronics: 135 },
  { month: "Jun", total: 550, grocery: 320, health: 80, electronics: 150 },
]

const categoryBreakdown = [
  { name: "Grocery", amount: 320, percentage: 58, color: "bg-green-500" },
  { name: "Electronics", amount: 150, percentage: 27, color: "bg-blue-500" },
  { name: "Health", amount: 80, percentage: 15, color: "bg-red-500" },
]

const healthMetrics = {
  processedFoodPercentage: 35,
  organicPercentage: 25,
  sugarIntake: "High",
  nutritionScore: 72,
}

export function SpendingDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("6months")
  const currentMonth = monthlyData[monthlyData.length - 1]
  const previousMonth = monthlyData[monthlyData.length - 2]
  const monthlyChange = ((currentMonth.total - previousMonth.total) / previousMonth.total) * 100

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold walmart-text-blue">Spending Dashboard</h1>
            <p className="text-gray-600">Track your spending and health insights</p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={selectedPeriod === "3months" ? "default" : "outline"}
              onClick={() => setSelectedPeriod("3months")}
              size="sm"
            >
              3M
            </Button>
            <Button
              variant={selectedPeriod === "6months" ? "default" : "outline"}
              onClick={() => setSelectedPeriod("6months")}
              size="sm"
              className="walmart-blue hover:bg-blue-700"
            >
              6M
            </Button>
            <Button
              variant={selectedPeriod === "1year" ? "default" : "outline"}
              onClick={() => setSelectedPeriod("1year")}
              size="sm"
            >
              1Y
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold">${currentMonth.total}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <div className="flex items-center mt-2">
                {monthlyChange > 0 ? (
                  <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                )}
                <span className={`text-sm ${monthlyChange > 0 ? "text-red-500" : "text-green-500"}`}>
                  {Math.abs(monthlyChange).toFixed(1)}% vs last month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Monthly</p>
                  <p className="text-2xl font-bold">
                    ${Math.round(monthlyData.reduce((sum, month) => sum + month.total, 0) / monthlyData.length)}
                  </p>
                </div>
                <ShoppingCart className="h-8 w-8 walmart-text-blue" />
              </div>
              <p className="text-sm text-gray-500 mt-2">Based on 6 months</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Health Score</p>
                  <p className="text-2xl font-bold">{healthMetrics.nutritionScore}/100</p>
                </div>
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <div className="mt-2">
                <Progress value={healthMetrics.nutritionScore} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Budget Status</p>
                  <p className="text-2xl font-bold text-green-600">On Track</p>
                </div>
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-sm text-gray-500 mt-2">$150 under budget</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="spending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="spending">Spending Analysis</TabsTrigger>
            <TabsTrigger value="health">Health Insights</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="spending" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Spending Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <SpendingChart data={monthlyData} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Category Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {categoryBreakdown.map((category) => (
                    <div key={category.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm text-gray-600">
                          ${category.amount} ({category.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${category.color} h-2 rounded-full`}
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="health" className="space-y-6">
            <HealthInsights metrics={healthMetrics} />
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <span>Money Saving Tips</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Switch to Generic Brands</h4>
                    <p className="text-sm text-green-700 mt-1">
                      Save up to $45/month by choosing store brands for common items
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Bulk Purchase Opportunities</h4>
                    <p className="text-sm text-blue-700 mt-1">Buy household items in bulk to save 15-20%</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">Seasonal Shopping</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      Plan purchases around sales cycles for maximum savings
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span>Health Improvements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800">Reduce Processed Foods</h4>
                    <p className="text-sm text-red-700 mt-1">
                      35% of your food budget goes to processed items. Try fresh alternatives.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Increase Organic Purchases</h4>
                    <p className="text-sm text-green-700 mt-1">
                      Consider organic options for the "Dirty Dozen" produce items
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Meal Planning</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      Plan weekly meals to reduce impulse purchases and food waste
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
