import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: number
          name: string
          description: string
          price: number
          original_price: number | null
          image_url: string
          category: string
          brand: string
          rating: number
          review_count: number
          in_stock: boolean
          created_at: string
        }
        Insert: {
          name: string
          description: string
          price: number
          original_price?: number | null
          image_url: string
          category: string
          brand: string
          rating?: number
          review_count?: number
          in_stock?: boolean
        }
        Update: {
          name?: string
          description?: string
          price?: number
          original_price?: number | null
          image_url?: string
          category?: string
          brand?: string
          rating?: number
          review_count?: number
          in_stock?: boolean
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          total: number
          status: string
          created_at: string
          shipping_address: any
          items: any
        }
        Insert: {
          user_id: string
          total: number
          status?: string
          shipping_address: any
          items: any
        }
        Update: {
          status?: string
          shipping_address?: any
          items?: any
        }
      }
      reviews: {
        Row: {
          id: number
          product_id: number
          user_id: string
          rating: number
          comment: string
          created_at: string
        }
        Insert: {
          product_id: number
          user_id: string
          rating: number
          comment: string
        }
        Update: {
          rating?: number
          comment?: string
        }
      }
    }
  }
}
