"use client"

import { Code, CheckCircle } from "lucide-react"
import { SlideIn, FadeIn } from "./ui/animation-wrappers"

const features = [
  { title: "Automate the Mundane", desc: "Free your time with AI-powered workflows that run even when you sleep." },
  { title: "Get Ahead, Stay Ahead", desc: "Tap into the AI advantage with no technical skills. We do the heavy lifting." },
  { title: "Instant Insights", desc: "See real-time results from your automations & make faster decisions with less guesswork." },
]

const metrics = [
  { label: "CPU Usage", value: "23%", bar: "23%" },
  { label: "Memory", value: "1.2GB", bar: "45%" },
  { label: "Network", value: "850MB/s", bar: "67%" },
  { label: "Requests", value: "12.5K/min", bar: "89%" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-32 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <SlideIn direction="right">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-full px-3 py-1 mb-8">
                <Code className="w-4 h-4" />
                <span className="text-sm font-medium">Platform Overview</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-8 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Save Time</span>
                <br />
                <span className="text-black dark:text-white">For the Real Work</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Automate the repetitive. Our AI automation streamlines workflows and cuts manual overhead so you can focus on growth, with enterprise-grade reliability.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-white dark:text-black" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-black dark:text-white mb-1">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="left" delay={0.2}>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono text-gray-500">System Metrics</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>

                  {metrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-mono text-gray-600 dark:text-gray-400">{metric.label}</span>
                        <span className="font-mono text-black dark:text-white">{metric.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1">
                        <div
                          className="bg-black dark:bg-white h-1 rounded-full transition-all duration-1000"
                          style={{ width: metric.bar }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
} 