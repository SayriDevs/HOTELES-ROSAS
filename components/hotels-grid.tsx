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
    description: "Confort y accesibilidad garantizada con nuestro moderno ascensor. Ideal para todos nuestros huéspedes.",
    iframe: `<iframe src="https://www.google.com/maps/embed?pb=!4v1755798783761!6m8!1m7!1sfRgpvovIAgBGitOuqbX4Dg!2m2!1d-12.00436321635708!2d-77.00514798140715!3f150.34937143887115!4f17.370729949657616!5f0.7820865974627469" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    location: "Jr. Las Perlas con Av. Jardines",
    rooms: "120 Habitaciones",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "Hotel Ritz",
    slug: "ritz",
    icon: Crown,
    description: "Disfruta del lujo a un precio inteligente. Ofrecemos tarifas por noche o por horas para máxima flexibilidad.",
    iframe: `<iframe src="https://www.google.com/maps/embed?pb=!4v1755804585553!6m8!1m7!1s23zB49Zauz1MTF0Mdek8qQ!2m2!1d-12.00457993362086!2d-77.00514631176918!3f60.450806881836996!4f18.267282315532853!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    location: "Jr. Las Perlas con Av. Jardines",
    rooms: "85 Suites",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    name: "Hotel Vegas",
    slug: "vegas",
    icon: Sparkles,
    description: "Vive la modernidad en nuestro hotel más nuevo, equipado con Smart TVs de 60 pulgadas para tu entretenimiento.",
    iframe: `<iframe src="https://www.google.com/maps/embed?pb=!4v1755798004185!6m8!1m7!1shcAszFgax2id0lyXsTpB6w!2m2!1d-12.00466285277052!2d-77.00510246179547!3f234.9788544567365!4f13.178634655875555!5f0.7820865974627469" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    location: "Jr. Las Perlas con Av. Jardines",
    rooms: "200 Habitaciones",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    name: "Hotel Venus",
    slug: "venus",
    icon: Star,
    description: "Perfecto para familias y grupos. Ofrecemos amplias habitaciones dobles y triples para su comodidad.",
    iframe: `<iframe src="https://www.google.com/maps/embed?pb=!4v1755798689084!6m8!1m7!1sxlKOQObUzk5LpzrM-PkjzA!2m2!1d-12.00356281369926!2d-77.00255966348512!3f57.93!4f18.349999999999994!5f0.7820865974627469" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
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
              <Card key={hotel.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative h-48 w-full" dangerouslySetInnerHTML={{ __html: hotel.iframe }} />

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
