import { Shield, Zap, Database, Network } from "lucide-react"

const stats = [
  { metric: "100%", label: "Customer Satisfaction", icon: Shield },
  { metric: "10ms", label: "Response Time", icon: Zap },
  { metric: "500+", label: "Deployments", icon: Database },
  { metric: "24/7", label: "Support", icon: Network },
]

export default function StatsGrid() {
  return (
    <section className="py-20 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
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
  )
} 