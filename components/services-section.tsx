import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cog, Bot, Zap, Users, Mail, Shield } from "lucide-react"
import { FadeIn, StaggerContainer, SlideIn, ScaleIn } from "./ui/animation-wrappers"

const services = [
  {
    icon: Bot,
    title: "Intelligent Support",
    description:
      "24/7 customer service automation with natural language processing and sentiment analysis.",
    features: ["Multi-channel integration", "Real-time escalation", "Performance analytics"],
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Workflow optimization and task automation with intelligent decision-making capabilities.",
    features: ["Document processing", "Workflow orchestration", "Error handling"],
  },
  {
    icon: Zap,
    title: "Predictive Analytics",
    description: "Advanced forecasting and trend analysis powered by machine learning algorithms.",
    features: ["Demand forecasting", "Risk assessment", "Performance prediction"],
  },
  {
    icon: Users,
    title: "Sales Intelligence",
    description: "Lead qualification and marketing automation with personalized customer engagement.",
    features: ["Lead scoring", "Campaign optimization", "Behavioral analysis"],
  },
  {
    icon: Mail,
    title: "Document AI",
    description: "Intelligent document processing with OCR, classification, and data extraction.",
    features: ["OCR processing", "Content classification", "Data validation"],
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Automated quality control with anomaly detection and compliance monitoring.",
    features: ["Anomaly detection", "Compliance checks", "Quality metrics"],
  },
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