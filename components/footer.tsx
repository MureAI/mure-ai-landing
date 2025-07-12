import { Terminal, Linkedin, Twitter } from "lucide-react"
import { FadeIn } from "./ui/animation-wrappers"

const footerSections = [
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
]

export default function Footer() {
  return (
    <FadeIn>
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src="/logo.svg" alt="Mure AI Logo" className="w-8 h-8" />
                <span className="text-xl font-display font-bold tracking-tight">Mure AI</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                Enterprise AI automation platform for modern businesses.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/company/mure-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                  aria-label="Mure AI on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                  aria-label="Mure AI on Twitter"
                >
                  <Twitter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </a>
              </div>
            </div>

            {footerSections.map((section, index) => (
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
            <p className="text-gray-500 text-sm">&copy; 2025 Mure AI</p>
          </div>
        </div>
      </footer>
    </FadeIn>
  )
} 