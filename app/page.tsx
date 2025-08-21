import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HotelsGrid } from "@/components/hotels-grid"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ChatbotWidget } from "@/components/chatbot-widget"

const MapSection = dynamic(() => import("@/components/map-section").then((mod) => mod.MapSection), {
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-muted/30 flex items-center justify-center"><p>Cargando mapa...</p></div>,
})


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HotelsGrid />
      <FeaturesSection />
      <TestimonialsSection />
      <MapSection />
      <ChatbotWidget />
    </main>
  )
}
