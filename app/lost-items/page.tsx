import { Navigation } from "@/components/navigation"
import { LostItemForm } from "@/components/lost-item-form"
import { FoundItemsSection } from "@/components/found-items-section"
import { ChatbotWidget } from "@/components/chatbot-widget"

export default function LostItemsPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4">Objetos Perdidos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Olvidaste algo durante tu estancia? Te ayudamos a recuperar tus pertenencias de manera rápida y segura
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LostItemForm />
          </div>
          <div className="lg:col-span-1">
            <FoundItemsSection />
          </div>
        </div>
      </div>
      <ChatbotWidget />
    </main>
  )
}
