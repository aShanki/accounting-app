'use client';

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    // Basic validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Show success message
      toast.success('Account created successfully!');
      
      // Redirect to login page
      router.push('/login');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to create account');
    } finally {
      setIsLoading(false);
    }
  }

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

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-gray-200">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-200">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
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
              name="email"
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
              name="password"
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
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
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