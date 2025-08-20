import { Navigation } from "@/components/navigation"
import { ReviewsSection } from "@/components/reviews-section"
import { ReviewForm } from "@/components/review-form"
import { ChatbotWidget } from "@/components/chatbot-widget"

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4">Comentarios y Reseñas</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre las experiencias de nuestros huéspedes y comparte la tuya propia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ReviewsSection />
          </div>
          <div className="lg:col-span-1">
            <ReviewForm />
          </div>
        </div>
      </div>
      <ChatbotWidget />
    </main>
  )
}
