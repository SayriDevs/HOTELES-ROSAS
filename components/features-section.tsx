"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Package, Percent, Calendar, Wifi, Car, Utensils, Dumbbell } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Reservas Online",
    description: "Sistema de reservas 24/7 con confirmación instantánea",
    link: "/reservations",
  },
  {
    icon: MessageSquare,
    title: "Comentarios",
    description: "Comparte tu experiencia y lee reseñas de otros huéspedes",
    link: "/reviews",
  },
  {
    icon: Package,
    title: "Objetos Perdidos",
    description: "Reporta y recupera pertenencias olvidadas fácilmente",
    link: "/lost-items",
  },
  {
    icon: Percent,
    title: "Descuentos Diarios",
    description: "Ofertas especiales con palabras mágicas cada día",
    link: "/offers",
  },
]

const amenities = [
  { icon: Wifi, name: "WiFi Gratuito" },
  { icon: Car, name: "Valet Parking" },
  { icon: Utensils, name: "Restaurante Gourmet" },
  { icon: Dumbbell, name: "Gimnasio 24h" },
]

export function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Main Features */}
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Servicios Exclusivos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Disfruta de servicios diseñados para hacer tu estancia perfecta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Link key={index} href={feature.link}>
                <Card className="text-center hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Amenities */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="font-serif font-semibold text-2xl text-center mb-8">Amenidades Premium</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon
              return (
                <div key={index} className="flex items-center space-x-3 p-3 bg-background rounded-lg">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{amenity.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
