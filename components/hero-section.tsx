'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Activity } from "lucide-react"
import { useState, useEffect } from "react"
import { FadeIn, ScaleIn } from "@/components/ui/animation-wrappers"
import HeroTerminal from "@/components/hero-terminal";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  function handleScrollToSection(sectionId: string) {
    if (!mounted) return
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none opacity-20"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center relative">
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">System Status: Operational</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-4 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Enterprise AI</span>
              <br />
              <span className="text-black dark:text-white">Automation Solutions</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Deploy intelligent AI agents that transform your business through enterprise-grade automation solutions.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-base font-medium px-8 py-4 h-12 group"
                onClick={() => handleScrollToSection('contact')}
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium px-8 py-4 h-12 border-gray-300 dark:border-gray-700 bg-transparent"
                onClick={() => handleScrollToSection('services')}
              >
                View Services
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Terminal/Dashboard Mockup */}
        <HeroTerminal />
      </div>
    </section>
  )
} 