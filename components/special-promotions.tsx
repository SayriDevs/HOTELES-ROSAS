import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Heart, Briefcase, Crown, Sparkles } from "lucide-react"
import Link from "next/link"

const promotions = [
  {
    id: 1,
    title: "Escapada Romántica",
    description: "Paquete especial para parejas con cena romántica, spa y champagne",
    discount: "35% OFF",
    validUntil: "31 de Enero",
    code: "ROMANCE2024",
    icon: Heart,
    color: "text-rose-600 bg-rose-50",
    features: ["Cena romántica para 2", "Masaje de parejas", "Champagne de bienvenida", "Decoración especial"],
  },
  {
    id: 2,
    title: "Viaje de Negocios",
    description: "Tarifas corporativas con servicios ejecutivos incluidos",
    discount: "25% OFF",
    validUntil: "28 de Febrero",
    code: "BUSINESS2024",
    icon: Briefcase,
    color: "text-blue-600 bg-blue-50",
    features: ["Centro de negocios 24/7", "WiFi premium", "Desayuno ejecutivo", "Late check-out"],
  },
  {
    id: 3,
    title: "Experiencia VIP",
    description: "El máximo lujo con servicios exclusivos y atención personalizada",
    discount: "40% OFF",
    validUntil: "15 de Febrero",
    code: "VIP2024",
    icon: Crown,
    color: "text-amber-600 bg-amber-50",
    features: ["Mayordomo personal", "Limusina privada", "Acceso a salones VIP", "Concierge exclusivo"],
  },
  {
    id: 4,
    title: "Estancia Familiar",
    description: "Diversión para toda la familia con actividades y entretenimiento",
    discount: "30% OFF",
    validUntil: "31 de Marzo",
    code: "FAMILY2024",
    icon: Users,
    color: "text-green-600 bg-green-50",
    features: ["Actividades para niños", "Habitaciones familiares", "Desayuno buffet", "Entretenimiento nocturno"],
  },
]

export function SpecialPromotions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span>Promociones Especiales</span>
        </CardTitle>
        <p className="text-muted-foreground">Ofertas exclusivas por tiempo limitado para experiencias únicas</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promotions.map((promo) => {
            const Icon = promo.icon
            return (
              <Card key={promo.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${promo.color.split(" ")[1]}`}>
                        <Icon className={`h-5 w-5 ${promo.color.split(" ")[0]}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{promo.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {promo.discount}
                          </Badge>
                          <span className="text-xs text-muted-foreground">Válido hasta {promo.validUntil}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{promo.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="text-sm font-medium">Incluye:</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {promo.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted/50 p-3 rounded-lg mb-4">
                    <div className="text-xs font-medium mb-1">Código promocional:</div>
                    <div className="font-mono text-sm font-bold">{promo.code}</div>
                  </div>

                  <Link href="/reservations">
                    <Button size="sm" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Reservar Ahora
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
