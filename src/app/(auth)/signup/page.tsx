import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black/95">
      <Card className="w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white">
            Create an Account
          </h1>
          <p className="text-gray-400 mt-2">
            Start managing your finances today
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-gray-200">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-200">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                required
              />
            </div>
          </div>

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

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-gray-200">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
          >
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-400">Already have an account?</span>{" "}
          <Link 
            href="/login" 
            className="text-white hover:text-gray-200 transition-colors"
          >
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  )
}