import { Navigation } from "@/components/navigation"
import { DailyOffers } from "@/components/daily-offers"
import { SpecialPromotions } from "@/components/special-promotions"
import { DiscountValidator } from "@/components/discount-validator"
import { ChatbotWidget } from "@/components/chatbot-widget"

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4">Ofertas Especiales</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestras promociones exclusivas y descuentos diarios. ¡Cada día una nueva palabra mágica te espera!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DailyOffers />
            <SpecialPromotions />
          </div>
          <div className="lg:col-span-1">
            <DiscountValidator />
          </div>
        </div>
      </div>
      <ChatbotWidget />
    </main>
  )
}
