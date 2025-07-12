"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Terminal, ArrowRight } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Platform", href: "#about" },
    { name: "Solutions", href: "#services" },
    { name: "Process", href: "#how-we-operate" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Hamburger Button */}
      <Button variant="ghost" size="sm" className="md:hidden h-9 w-9 px-0" onClick={() => setIsOpen(true)}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800 shadow-2xl z-50 md:hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-black dark:bg-white"></div>
                  <div className="absolute inset-1 bg-white dark:bg-black"></div>
                  <Terminal className="absolute inset-0 w-8 h-8 text-black dark:text-white p-1.5" />
                </div>
                <span className="text-xl font-display font-bold tracking-tight">Mure AI</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-9 w-9 px-0 text-gray-500 hover:text-black dark:hover:text-white"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col h-full">
              {/* Navigation Links */}
              <div className="flex-1 px-6 py-6">
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-all duration-200"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                {/* Get Started Button */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <Button
                    className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 font-medium h-12 group"
                    onClick={handleLinkClick}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Footer Status */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">System Operational</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
