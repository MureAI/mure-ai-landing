import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">System Status: Operational</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-[0.9]">
            <span className="text-gradient">Enterprise AI</span>
            <br />
            <span className="text-black dark:text-white">Automation Solutions</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Deploy intelligent agents that transform business operations through advanced automation, machine
            learning, and enterprise-grade AI solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-base font-medium px-8 py-4 h-12 group"
            >
              Deploy Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-medium px-8 py-4 h-12 border-gray-300 dark:border-gray-700 bg-transparent"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 