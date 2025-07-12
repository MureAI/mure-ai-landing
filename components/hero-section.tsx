'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Activity } from "lucide-react"
import { useState, useEffect } from "react"
import { FadeIn, ScaleIn } from "@/components/ui/animation-wrappers"

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
    <section className="pt-32 pb-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center relative">
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">System Status: Operational</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-4 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Enterprise AI</span>
              <br />
              <span className="text-black dark:text-white">Automation Platform</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Deploy intelligent agents that transform business operations through advanced automation, machine
              learning, and enterprise-grade AI solutions.
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
        <ScaleIn delay={1.0}>
          <div className="max-w-6xl mx-auto relative">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm font-mono text-gray-600 dark:text-gray-400">mure-ai-dashboard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-mono text-gray-500">Live</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">$</span>
                    <span>mure swarm deploy --nodes 1024 --region global</span>
                  </div>
                  <div className="pl-4">
                    <div className="text-gray-500">✓ Neural network mesh initialized</div>
                    <div className="text-gray-500">✓ 1,024 AI nodes synchronized</div>
                    <div className="text-gray-500">✓ Distributed intelligence active</div>
                    <div className="text-gray-500">✓ Swarm processing 50M+ ops/sec</div>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <span className="text-green-500">$</span>
                    <span>mure nodes status --live</span>
                  </div>
                  <div className="pl-4">
                    <div className="text-blue-400">◉ Node cluster: OPERATIONAL</div>
                    <div className="text-blue-400">◉ Quantum sync: 99.97% efficiency</div>
                    <div className="text-blue-400">◉ AI agents: 2,048 active</div>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <span className="text-green-500">$</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  )
} 