"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Terminal, ArrowRight } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const menuItems = [
    { name: "Platform", href: "#about" },
    { name: "Solutions", href: "#services" },
    { name: "Process", href: "#how-we-operate" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  const closeMenu = () => {
    setIsVisible(false)
    setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  const openMenu = () => {
    setIsOpen(true)
    // Use requestAnimationFrame to ensure DOM is ready before starting animation
    requestAnimationFrame(() => {
      setIsVisible(true)
    })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const mobileMenuOverlay = isOpen && mounted ? (
    <div className="fixed inset-0 z-[9999] md:hidden">
      {/* Backdrop with fade animation */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeMenu}
      />

      {/* Menu Panel with slide animation */}
      <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="relative w-8 h-8">
              <div className="w-full h-full bg-black dark:bg-white rounded-sm"></div>
              <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-sm"></div>
              <Terminal className="absolute inset-0 w-full h-full text-black dark:text-white p-1.5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Mure AI</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={closeMenu}
            className="h-9 w-9 px-0"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        {/* Navigation */}
        <div className="p-6">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Button
              className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 font-medium h-12 group"
              onClick={closeMenu}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      {/* Mobile Menu Button */}
      <Button 
        variant="ghost" 
        size="sm" 
        className="md:hidden h-9 w-9 px-0" 
        onClick={() => openMenu()}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </Button>

      {/* Portal the overlay to document body */}
      {mounted && mobileMenuOverlay && createPortal(mobileMenuOverlay, document.body)}
    </>
  )
}

export default MobileMenu