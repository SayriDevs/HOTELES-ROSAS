import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HotelsGrid } from "@/components/hotels-grid"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MapLoader } from "@/components/map-loader"
import { ChatbotWidget } from "@/components/chatbot-widget"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HotelsGrid />
      <FeaturesSection />
      <TestimonialsSection />
      <MapLoader />
      <ChatbotWidget />
    </main>
  )
}
