import { Navigation } from "@/components/navigation"
import { ReservationForm } from "@/components/reservation-form"
import { ChatbotWidget } from "@/components/chatbot-widget"

export default function ReservationsPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4">Reserva tu Estancia de Lujo</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Completa tu reserva en pocos pasos y prepárate para vivir una experiencia hotelera excepcional
          </p>
        </div>
        <ReservationForm />
      </div>
      <ChatbotWidget />
    </main>
  )
}
