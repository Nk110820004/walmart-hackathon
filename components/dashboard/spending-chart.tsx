"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"

interface SpendingChartProps {
  data: Array<{
    month: string
    total: number
    grocery: number
    health: number
    electronics: number
  }>
}

export function SpendingChart({ data }: SpendingChartProps) {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value, name) => [`$${value}`, name]} labelFormatter={(label) => `Month: ${label}`} />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#0071CE" strokeWidth={3} name="Total Spending" />
          <Line type="monotone" dataKey="grocery" stroke="#10B981" strokeWidth={2} name="Grocery" />
          <Line type="monotone" dataKey="electronics" stroke="#3B82F6" strokeWidth={2} name="Electronics" />
          <Line type="monotone" dataKey="health" stroke="#EF4444" strokeWidth={2} name="Health" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
