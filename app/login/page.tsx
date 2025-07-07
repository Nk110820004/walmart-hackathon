import { Navbar } from "@/components/layout/navbar"
import { LoginForm } from "@/components/auth/login-form"
import { Footer } from "@/components/layout/footer"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold walmart-text-blue">Sign In</h1>
            <p className="text-gray-600 mt-2">Access your Walmart account</p>
          </div>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
