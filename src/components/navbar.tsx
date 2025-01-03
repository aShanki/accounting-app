import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-gray-800 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            FinanceTrack
          </span>
        </Link>

        {/* Main Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px] bg-gray-900 rounded-lg">
                  <li className="group">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/features/transactions"
                        className="block p-3 hover:bg-gray-800 rounded-lg"
                      >
                        <div className="text-sm font-medium text-white mb-1">
                          Transaction Management
                        </div>
                        <p className="text-sm text-gray-400">
                          Track and manage your financial transactions
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="group">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/features/analytics"
                        className="block p-3 hover:bg-gray-800 rounded-lg"
                      >
                        <div className="text-sm font-medium text-white mb-1">
                          Analytics
                        </div>
                        <p className="text-sm text-gray-400">
                          Insights into your spending patterns
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-gray-300 hover:text-white",
                  )}
                >
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-gray-300 hover:text-white",
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button 
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            asChild
          >
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}