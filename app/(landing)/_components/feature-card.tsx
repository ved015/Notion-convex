import Link from "next/link"
import { type LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export function FeatureCard({ title, description, icon: Icon, href }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group block space-y-3 rounded-lg p-4 transition-colors hover:bg-gray-100"
    >
      <div className="flex items-center space-x-2">
        <Icon className="h-8 w-8" />
        <h3 className="text-xl font-semibold tracking-tight">
          {title} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </h3>
      </div>
      <p className="text-gray-500">{description}</p>
    </Link>
  )
}

