import {
  FileText,
  Book,
  Target,
  Brain,
  CalendarIcon,
  Trophy,
  Globe,
  LayoutTemplate,
} from "lucide-react";
import { FeatureCard } from "./feature-card";

const features = [
  {
    title: "Docs",
    description: "Build any page, communicate any idea.",
    icon: FileText,
    href: "/docs",
  },
  {
    title: "Wiki",
    description: "One home base for all your knowledge.",
    icon: Book,
    href: "/wiki",
  },
  {
    title: "Projects",
    description: "Manage any project from beginning to end.",
    icon: Target,
    href: "/projects",
  },
  {
    title: "Notion AI",
    description: "Finds what you need. Does what you need.",
    icon: Brain,
    href: "/ai",
  },
  {
    title: "Calendar",
    description: "See all your commitments in one place.",
    icon: CalendarIcon,
    href: "/calendar",
  },
  {
    title: "Goals",
    description: "Track progress toward what's most important.",
    icon: Trophy,
    href: "/goals",
  },
  {
    title: "Sites",
    description: "Make any page a website in minutes.",
    icon: Globe,
    href: "/sites",
  },
  {
    title: "Templates",
    description: "Get started with one of 30,000+ templates.",
    icon: LayoutTemplate,
    href: "/templates",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="space-y-20">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Everything you need
            <br />
            to do your best work.
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
