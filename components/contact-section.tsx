import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { SlideIn, FadeIn } from "./ui/animation-wrappers"

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <SlideIn direction="left">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-full px-3 py-1 mb-8">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Get Started</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-8 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Deploy AI</span>
                <br />
                <span className="text-black dark:text-white">In Your Business</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                Schedule a free technical consultation to discuss your automation requirements and deployment strategy.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", detail: "contact@mureai.com" },
                  { icon: Phone, title: "Phone", detail: "+1 (555) 123-4567" },
                  { icon: MapPin, title: "Office", detail: "123 Innovation Drive\nSan Francisco, CA 94105" },
                ].map((contact, index) => (
                  <FadeIn key={index} delay={index * 0.2}>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center">
                        <contact.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div>
                        <div className="font-display font-semibold text-black dark:text-white mb-1">
                          {contact.title}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">
                          {contact.detail}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.2}>
            <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-display font-bold text-black dark:text-white">
                  Contact Us
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input
                      placeholder="Doe"
                      className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Work Email
                  </label>
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
          </SlideIn>
        </div>
      </div>
    </section>
  )
} 