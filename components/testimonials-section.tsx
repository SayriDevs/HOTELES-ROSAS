"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "Una experiencia inolvidable. El servicio fue impecable y las instalaciones de primer nivel. Definitivamente volveremos.",
    name: "Ana García",
    title: "Huésped Frecuente",
    avatar: "/woman-avatar.png",
  },
  {
    quote: "La ubicación es perfecta y el personal es increíblemente amable. Superó todas mis expectativas. ¡Totalmente recomendado!",
    name: "Carlos Sanchez",
    title: "Viajero de Negocios",
    avatar: "/man-avatar.png",
  },
  {
    quote: "El mejor hotel en el que me he alojado. Cada detalle está cuidadosamente pensado para el confort del huésped. Lujo y comodidad en un solo lugar.",
    name: "Laura Torres",
    title: "Turista",
    avatar: "/woman-avatar-2.png",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Lo que Dicen Nuestros Huéspedes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background p-6">
              <CardContent className="p-0">
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
