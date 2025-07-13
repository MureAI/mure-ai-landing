"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cog, Bot, Zap, Users, Mail, Shield } from "lucide-react"
import { FadeIn, StaggerContainer, SlideIn, ScaleIn } from "./ui/animation-wrappers"

const services = [
  {
    icon: Cog,
    title: "Workflow Automation",
    description:
      "Streamline operations with intelligent automations that plug right into your current tools.",
    features: [
      "AI process discovery & optimization",
      "100+ app integrations (e.g., Salesforce, Google)",
      "Smart rules & scheduling workflows",
    ],
    useCase: "Auto-schedule calls, send welcome emails, and assign tasks when a hot lead hits your CRM."
  },
  {
    icon: Bot,
    title: "AI Voice Support",
    description:
      "AI agents that sound human, work 24/7, and handle calls with nuance and accuracy.",
    features: [
      "Natural voice in multiple languages",
      "24/7 inbound & outbound calls",
      "Live escalation to human agents",
    ],
    useCase: "Handles bookings and support calls, while routing complex cases to your team instantly."
  },
  {
    icon: Users,
    title: "Social Media Automation",
    description:
      "Manage high-volume comments, posts, and crises with AI that knows your brand voice.",
    features: [
      "Real-time comment replies",
      "Brand sentiment monitoring",
      "Auto content scheduling",
    ],
    useCase: "Responds to mentions, posts content on time, and flags risky messages to you."
  },
  {
    icon: Shield,
    title: "AI Strategy Consulting",
    description:
      "Expert guidance to help you adopt AI with confidence and long-term value.",
    features: [
      "System audit & transformation roadmap",
      "ROI modeling & rollout planning",
      "GDPR-compliant AI implementation",
    ],
    useCase: "We assess your systems and design a phased AI plan tailored to your goals."
  },
  {
    icon: Mail,
    title: "Automated Email Outreach",
    description:
      "Personalized email flows that convert leads—without you lifting a finger.",
    features: [
      "Smart sequences based on behavior",
      "Dynamic content & A/B testing",
      "CRM integration & lead tracking",
    ],
    useCase: "Sends personalized emails that adapt to user actions, with smart follow-ups."
  },
  {
    icon: Zap,
    title: "AI Lead Generation",
    description:
      "AI that finds and qualifies leads while your team focuses on closing deals.",
    features: [
      "Auto prospecting & data enrichment",
      "Behavior-based lead scoring",
      "CRM sync & assignment routing",
    ],
    useCase: "Discovers top-fit leads from multiple sources and sends them straight to sales."
  }
]


export default function ServicesSection() {
  return (
    <section id="services" className="py-32 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-full px-3 py-1 mb-8">
              <Cog className="w-4 h-4" />
              <span className="text-sm font-medium">AI Solutions</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Production-Ready</span>
              <br />
              <span className="text-black dark:text-white">AI Modules</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.3}>
          {services.map((service, index) => (
            <SlideIn key={index} direction="up" delay={index * 0.1}>
              <ScaleIn delay={index * 0.1 + 0.1}>
                <Card
                  className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:shadow-lg transition-all duration-300 group"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <service.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <CardTitle className="text-lg font-display font-bold text-black dark:text-white mb-3">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                          <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScaleIn>
            </SlideIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
} 