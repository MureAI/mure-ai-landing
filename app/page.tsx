import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import Navbar from "@/components/navbar"
import {
  ArrowRight,
  Bot,
  Cog,
  Users,
  Zap,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Shield,
  Cpu,
  Database,
  Network,
  Terminal,
  Code,
  Activity,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="fixed inset-0 grid-pattern opacity-40"></div>
      <div className="fixed inset-0 noise"></div>

      {/* Geometric Elements */}
      <div className="fixed top-20 left-10 w-32 h-32 border border-gray-200 dark:border-gray-800 rotate-45 opacity-20"></div>
      <div className="fixed top-40 right-20 w-24 h-24 border border-gray-200 dark:border-gray-800 rounded-full opacity-20"></div>
      <div className="fixed bottom-40 left-20 w-16 h-16 bg-gray-900 dark:bg-white opacity-5 rotate-12"></div>
      <div className="fixed bottom-20 right-40 w-20 h-20 border border-gray-200 dark:border-gray-800 opacity-20"></div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
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

          {/* Terminal/Dashboard Mockup */}
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
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "99.9%", label: "Uptime SLA", icon: Shield },
              { metric: "10ms", label: "Response Time", icon: Zap },
              { metric: "500+", label: "Deployments", icon: Database },
              { metric: "24/7", label: "Support", icon: Network },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-xl mb-4 group-hover:scale-105 transition-transform">
                  <stat.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <div className="text-3xl font-display font-bold text-black dark:text-white mb-1">{stat.metric}</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-full px-3 py-1 mb-8">
                <Code className="w-4 h-4" />
                <span className="text-sm font-medium">Platform Overview</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-8 leading-tight">
                <span className="text-gradient">Enterprise-Grade</span>
                <br />
                <span className="text-black dark:text-white">AI Infrastructure</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Built for scale, security, and performance. Our platform processes millions of operations daily for
                Fortune 500 companies, delivering consistent results with enterprise-grade reliability.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Scalable Architecture", desc: "Auto-scaling infrastructure handles peak loads" },
                  { title: "Security First", desc: "SOC 2 Type II compliant with end-to-end encryption" },
                  { title: "Real-time Analytics", desc: "Monitor performance with millisecond precision" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white dark:text-black" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-black dark:text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono text-gray-500">System Metrics</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>

                  {[
                    { label: "CPU Usage", value: "23%", bar: "23%" },
                    { label: "Memory", value: "1.2GB", bar: "45%" },
                    { label: "Network", value: "850MB/s", bar: "67%" },
                    { label: "Requests", value: "12.5K/min", bar: "89%" },
                  ].map((metric, index) => (
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
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="how-we-operate" className="py-32 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-full px-3 py-1 mb-8">
              <Terminal className="w-4 h-4" />
              <span className="text-sm font-medium">Deployment Process</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-8">
              <span className="text-gradient">Three-Step</span>
              <br />
              <span className="text-black dark:text-white">Integration</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-px bg-gray-200 dark:bg-gray-800 transform -translate-y-1/2 z-0"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-px bg-gray-200 dark:bg-gray-800 transform -translate-y-1/2 z-0"></div>

            {[
              {
                step: "01",
                title: "Analysis & Discovery",
                description:
                  "Comprehensive audit of existing systems, identification of automation opportunities, and performance baseline establishment.",
                icon: Database,
                code: "$ mure analyze --deep-scan",
              },
              {
                step: "02",
                title: "Custom Development",
                description:
                  "Tailored AI agent development with your specific requirements, integrated testing, and performance optimization.",
                icon: Cpu,
                code: "$ mure build --custom-config",
              },
              {
                step: "03",
                title: "Deploy & Monitor",
                description:
                  "Production deployment with real-time monitoring, performance analytics, and continuous optimization protocols.",
                icon: Network,
                code: "$ mure deploy --production",
              },
            ].map((item, index) => (
              <Card
                key={index}
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
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-full px-3 py-1 mb-8">
              <Cog className="w-4 h-4" />
              <span className="text-sm font-medium">AI Solutions</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-8">
              <span className="text-gradient">Production-Ready</span>
              <br />
              <span className="text-black dark:text-white">AI Modules</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((service, index) => (
              <Card
                key={index}
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
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-full px-3 py-1 mb-8">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Engineering Team</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-8">
              <span className="text-gradient">World-Class</span>
              <br />
              <span className="text-black dark:text-white">Engineering</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Sarah Chen",
                role: "Chief Executive Officer",
                bio: "Former AI Director at Google. 15+ years in ML and enterprise automation.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Marcus Rodriguez",
                role: "Chief Technology Officer",
                bio: "Ex-Microsoft Principal Engineer. Expert in scalable AI systems.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Emily Watson",
                role: "Head of AI Research",
                bio: "PhD Computer Science MIT. Published NLP researcher.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "James Park",
                role: "VP of Operations",
                bio: "Former McKinsey consultant. Process optimization specialist.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 h-20 rounded-xl object-cover mb-4 group-hover:scale-105 transition-transform"
                  />
                  <CardTitle className="text-lg font-display font-bold text-black dark:text-white mb-1">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                      <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                      <Twitter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-full px-3 py-1 mb-8">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Get Started</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-8 leading-tight">
                <span className="text-gradient">Deploy AI</span>
                <br />
                <span className="text-black dark:text-white">In Production</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                Schedule a technical consultation to discuss your automation requirements and deployment strategy.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", detail: "hello@mure-ai.com" },
                  { icon: Phone, title: "Phone", detail: "+1 (555) 123-4567" },
                  { icon: MapPin, title: "Office", detail: "123 Innovation Drive\nSan Francisco, CA 94105" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-black dark:text-white mb-1">{contact.title}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">
                        {contact.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-display font-bold text-black dark:text-white">
                  Request Access
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Get started with enterprise AI automation in 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input
                      placeholder="John"
                      className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Work Email</label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
                  <Input
                    placeholder="Your Company"
                    className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Use Case</label>
                  <Textarea
                    placeholder="Describe your automation requirements..."
                    rows={4}
                    className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                  />
                </div>

                <Button className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 font-medium py-3 group">
                  Submit Request
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-8 h-8 bg-black dark:bg-white"></div>
                  <div className="absolute inset-1 bg-gray-50 dark:bg-gray-950"></div>
                  <Terminal className="absolute inset-0 w-8 h-8 text-black dark:text-white p-1.5" />
                </div>
                <span className="text-xl font-display font-bold tracking-tight">Mure AI</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                Enterprise AI automation platform for modern businesses.
              </p>
              <div className="flex space-x-3">
                {[Linkedin, Twitter].map((Icon, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                  >
                    <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                title: "Platform",
                links: ["Documentation", "API Reference", "Status", "Changelog"],
              },
              {
                title: "Solutions",
                links: ["Customer Service", "Process Automation", "Analytics", "Quality Assurance"],
              },
              {
                title: "Company",
                links: ["About", "Team", "Careers", "Contact"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-display font-semibold text-black dark:text-white mb-4 text-sm uppercase tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">&copy; 2024 Mure AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
