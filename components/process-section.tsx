import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Database, Cpu, Network, MessageCircle } from "lucide-react"
import { FadeIn, SlideIn } from "./ui/animation-wrappers"

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "We’ll discuss your business to find where AI automation can save you time and simplify your work.",
    icon: MessageCircle,
    code: "$ mure analyze --find-opportunities",
  },
  {
    step: "02",
    title: "Custom Workflow",
    description:
      "We build the tools that integrate seamlessly into your existing routine without any complicated learning curve.",
    icon: Cpu,
    code: "$ mure build --custom-fit",
  },
  {
    step: "03",
    title: "Deploy & Support",
    description:
      "You choose: we deploy and monitor for you, or you deploy and we’re here to help whenever needed.",
    icon: Network,
    code: "$ mure deploy --easy-launch",
  },
]

export default function ProcessSection() {
  return (
    <section id="how-we-operate" className="py-32 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-full px-3 py-1 mb-8">
              <Terminal className="w-4 h-4" />
              <span className="text-sm font-medium">Deployment Process</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Three-Step</span>
              <br />
              <span className="text-black dark:text-white">Workflow</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-px bg-gray-200 dark:bg-gray-800 transform -translate-y-1/2 z-0"></div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-px bg-gray-200 dark:bg-gray-800 transform -translate-y-1/2 z-0"></div>

          {processSteps.map((item, index) => (
            <SlideIn key={index} direction="up" delay={index * 0.2}>
              <Card
                className="relative border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:shadow-lg transition-all duration-300 group z-10"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
                      {item.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-display font-bold text-black dark:text-white mb-4">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {item.description}
                  </CardDescription>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3 font-mono text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">
                    {item.code}
                  </div>
                </CardContent>
              </Card>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  )
} 