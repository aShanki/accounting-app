import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black/95">
      <Card className="w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white">
            Welcome Back
          </h1>
          <p className="text-gray-400 mt-2">
            Sign in to your account to continue
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-200">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-200">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <Link 
              href="/forgot-password"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-400">Don&apos;t have an account?</span>{" "}
          <Link 
            href="/signup" 
            className="text-white hover:text-gray-200 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  )
}