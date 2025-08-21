import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Star, Sparkles, Crown, ArrowRight, MapPin } from "lucide-react"

const hotels = [
  {
    name: "Hotel Hilton",
    slug: "hilton",
    icon: Building2,
    description: "Elegancia clásica con la comodidad de un ascensor privado.",
    image: "/elegant-classic-hilton.png",
    location: "Jr. Las Perlas con Av. Jardines",
    rooms: "120 Habitaciones",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "Hotel Ritz",
    slug: "ritz",
    icon: Crown,
    description: "Lujo asequible con tarifas flexibles por noche o por horas.",
    image: "/luxury-hotel.png",
    location: "Jr. Las Perlas con Av. Jardines",
    rooms: "85 Suites",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    name: "Hotel Vegas",
    slug: "vegas",
    icon: Sparkles,
    description: "El más nuevo y moderno, con Smart TVs de 60 pulgadas.",
    image: "/modern-vegas-hotel.png",
    location: "Jr. Las Perlas con Av. Jardines",
    rooms: "200 Habitaciones",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    name: "Hotel Venus",
    slug: "venus",
    icon: Star,
    description: "Ideal para grupos y familias, con habitaciones dobles y triples.",
    image: "/celestial-luxury-hotel.png",
    location: "Av. 13 de Enero con Orquideas",
    rooms: "150 Habitaciones",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
]

export function HotelsGrid() {
  return (
    <section id="hotels-section" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Nuestros Hoteles de Lujo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada hotel ofrece una experiencia única, diseñada para superar tus expectativas y crear recuerdos
            inolvidables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel) => {
            const Icon = hotel.icon
            return (
              <Card key={hotel.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${hotel.image}')` }}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`p-2 rounded-lg ${hotel.bgColor}`}>
                      <Icon className={`h-5 w-5 ${hotel.color}`} />
                    </div>
                    <CardTitle className="text-lg">{hotel.name}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{hotel.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {hotel.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Building2 className="w-4 h-4 mr-2" />
                      {hotel.rooms}
                    </div>
                  </div>

                  <Link href={`/hotels/${hotel.slug}`}>
                    <Button className="w-full group-hover:bg-primary/90 transition-colors">
                      Explorar Hotel
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
