import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-black via-black/95 to-black/90">
        {/* Gradient Orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] opacity-20 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full blur-[100px]"></div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl"></div>
          <h1 className="text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Simplify Your Personal Finance Management
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Track your expenses, monitor multiple accounts, and stay on top of your finances
            with our intelligent automation platform.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300" asChild>
            <Link href="/dashboard">Get Started Free</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black/90 via-black/95 to-black/90">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-blue-500/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Everything you need to manage your finances
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-xl hover:shadow-purple-500/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Transaction Tracking</h3>
              <p className="text-gray-400">
                Easily log and categorize your income and expenses across multiple accounts.
              </p>
            </Card>
            <Card className="p-6 border-0 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-xl hover:shadow-blue-500/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Real-time Balances</h3>
              <p className="text-gray-400">
                Always know your current balance across GCash, Bank, PayPal, and cash accounts.
              </p>
            </Card>
            <Card className="p-6 border-0 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-xl hover:shadow-teal-500/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Smart Analytics</h3>
              <p className="text-gray-400">
                Get insights into your spending patterns and financial health.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black/90 via-black/95 to-black/90">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-white">🚀 Automated Calculations</h3>
              <p className="text-gray-400">
                Never worry about manual calculations again. Our system automatically updates
                all your balances in real-time.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-white">🔒 Secure & Reliable</h3>
              <p className="text-gray-400">
                Your financial data is encrypted and backed up daily for peace of mind.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-white">📱 Access Anywhere</h3>
              <p className="text-gray-400">
                Manage your finances from any device, anytime, anywhere.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-white">📊 Export & Reports</h3>
              <p className="text-gray-400">
                Generate detailed reports and export your data to Excel whenever needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-black/90 to-black">
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full blur-[100px]"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who are already managing their finances smarter.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300" asChild>
            <Link href="/dashboard">Start Your Free Account</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}