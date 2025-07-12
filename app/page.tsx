import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StatsGrid from "@/components/stats-grid"
import AboutSection from "@/components/about-section"
import ProcessSection from "@/components/process-section"
import ServicesSection from "@/components/services-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
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
    <div className="min-h-screen bg-white dark:bg-black transition-colors relative overflow-hidden z-[11]">
      {/* Technical Grid Background */}
      <div className="fixed inset-0 grid-pattern opacity-40 z-[10] pointer-events-none"></div>
      <div className="fixed inset-0 noise z-[10] pointer-events-none"></div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Grid */}
      <StatsGrid />

      {/* About Section */}
      <AboutSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
