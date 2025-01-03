import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="relative max-w-5xl mx-auto">
          <h1 className="font-display text-6xl tracking-[-0.02em] leading-[1.2] mb-6 text-white">
            Simplify Your Personal Finance Management
          </h1>
          <p className="text-xl leading-relaxed mb-8 text-neutral-300">
            Track your expenses, monitor multiple accounts, and stay on top of your finances
            with our intelligent automation platform.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-neutral-100 transition-colors" asChild>
            <Link href="/dashboard">Get Started Free</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl tracking-[-0.02em] leading-[1.2] text-center mb-12 text-white">
            Everything you need to manage your finances
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 bg-neutral-900 hover:bg-neutral-800 transition-colors">
              <h3 className="font-display text-xl tracking-[-0.02em] leading-[1.2] mb-3 text-white">Transaction Tracking</h3>
              <p className="text-neutral-400 leading-relaxed">
                Easily log and categorize your income and expenses across multiple accounts.
              </p>
            </Card>
            <Card className="p-6 border-0 bg-neutral-900 hover:bg-neutral-800 transition-colors">
              <h3 className="font-display text-xl tracking-[-0.02em] leading-[1.2] mb-3 text-white">Real-time Balances</h3>
              <p className="text-neutral-400 leading-relaxed">
                Always know your current balance across GCash, Bank, PayPal, and cash accounts.
              </p>
            </Card>
            <Card className="p-6 border-0 bg-neutral-900 hover:bg-neutral-800 transition-colors">
              <h3 className="font-display text-xl tracking-[-0.02em] leading-[1.2] mb-3 text-white">Smart Analytics</h3>
              <p className="text-neutral-400 leading-relaxed">
                Get insights into your spending patterns and financial health.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4">
        <div className="relative max-w-6xl mx-auto">
          <h2 className="font-display text-3xl tracking-[-0.02em] leading-[1.2] text-center mb-12 text-white">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-6 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors">
              <h3 className="font-display text-xl tracking-[-0.02em] leading-[1.2] mb-4 text-white">🚀 Automated Calculations</h3>
              <p className="text-neutral-400 leading-relaxed">
                Never worry about manual calculations again. Our system automatically updates
                all your balances in real-time.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors">
              <h3 className="font-display text-xl tracking-[-0.02em] leading-[1.2] mb-4 text-white">🔒 Secure & Reliable</h3>
              <p className="text-neutral-400 leading-relaxed">
                Your financial data is encrypted and backed up daily for peace of mind.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors">
              <h3 className="font-display text-xl tracking-[-0.02em] leading-[1.2] mb-4 text-white">📱 Access Anywhere</h3>
              <p className="text-neutral-400 leading-relaxed">
                Manage your finances from any device, anytime, anywhere.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors">
              <h3 className="font-display text-xl tracking-[-0.02em] leading-[1.2] mb-4 text-white">📊 Export & Reports</h3>
              <p className="text-neutral-400 leading-relaxed">
                Generate detailed reports and export your data to Excel whenever needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl tracking-[-0.02em] leading-[1.2] mb-6 text-white">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl leading-relaxed mb-8 text-neutral-300">
            Join thousands of users who are already managing their finances smarter.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-neutral-100 transition-colors" asChild>
            <Link href="/dashboard">Start Your Free Account</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}