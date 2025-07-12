import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Linkedin, Twitter } from "lucide-react"
import { FadeIn, StaggerContainer } from "./ui/animation-wrappers"

const teamMembers = [
  {
    name: "Ahmed Shabban",
    role: "Chief Executive Officer",
    bio: "Former AI Director at Google. 15+ years in ML and enterprise automation.",
    image: "/ahmed.webp",
    linkedin: "https://linkedin.com/in/ahmedshabban",
  },
  {
    name: "Duc Lee",
    role: "Chief Technology Officer",
    bio: "Ex-Microsoft Principal Engineer. Expert in scalable AI systems.",
    image: "/duc.webp",
    linkedin: "https://www.linkedin.com/in/ducleminh2611/",
  },
  {
    name: "Yunwei Cui",
    role: "Branding and Sales",
    bio: "PhD Computer Science MIT. Published NLP researcher.",
    image: "/yun.webp",
    linkedin: "https://www.linkedin.com/in/yunwei-cui-86174a188/",
  },
  {
    name: "Udayanto Atmojo",
    role: "VP of Operations",
    bio: "Former McKinsey consultant. Process optimization specialist.",
    image: "/atmojo.webp",
    linkedin: "https://www.linkedin.com/in/udayanto-dwi-atmojo/",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-32 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-full px-3 py-1 mb-8">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Engineering Team</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">World-Class</span>
              <br />
              <span className="text-black dark:text-white">Engineering</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="flex flex-col h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:shadow-lg transition-all duration-300 group"
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
              <CardContent className="flex flex-col flex-1">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex space-x-3 mt-auto">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </a>
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                    <Twitter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
} 