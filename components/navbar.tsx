'use client'

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { Terminal } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Process", href: "#how-we-operate" },
  { name: "Solutions", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
]

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) {
  e.preventDefault();
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img src="/logo.svg" alt="Mure AI Logo" className="w-8 h-8" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">Mure AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={e => handleNavClick(e, item.href)}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black dark:bg-white transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
} 