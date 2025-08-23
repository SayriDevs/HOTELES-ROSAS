import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Utensils, Landmark, ShoppingCart } from "lucide-react"

const locations = [
  {
    name: "Jr. Las Perlas con Av. Jardines (Hilton, Ritz, Vegas)",
    activities: [
      {
        category: "Restaurantes",
        icon: Utensils,
        items: [
          { name: "Restaurante Central", description: "Cocina peruana moderna, a 10 min en taxi." },
          { name: "La Picantería", description: "Sabores tradicionales del norte, a 5 min." },
        ],
      },
      {
        category: "Atracciones Turísticas",
        icon: Landmark,
        items: [
          { name: "Plaza de Armas", description: "El corazón histórico de la ciudad, a 15 min." },
          { name: "Museo de la Nación", description: "Un recorrido por la historia del Perú." },
        ],
      },
      {
        category: "Compras",
        icon: ShoppingCart,
        items: [
          { name: "Centro Comercial Jardín", description: "Tiendas de lujo y boutiques exclusivas." },
        ],
      },
    ],
  },
  {
    name: "Av. 13 de Enero con Orquideas (Venus)",
    activities: [
      {
        category: "Restaurantes",
        icon: Utensils,
        items: [
          { name: "El Rincón del Sabor", description: "Comida criolla auténtica, a 2 min a pie." },
          { name: "Pizzería Bella Vista", description: "Pizzas artesanales con vista a la ciudad." },
        ],
      },
      {
        category: "Atracciones Turísticas",
        icon: Landmark,
        items: [
          { name: "Parque de las Leyendas", description: "Zoológico y jardín botánico, a 20 min en taxi." },
          { name: "Circuito Mágico del Agua", description: "Espectáculo de fuentes y luces." },
        ],
      },
    ],
  },
]

export default function NearbyActivitiesPage() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4">Actividades Cercanas</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre lo mejor que la ciudad tiene para ofrecer, a solo unos pasos de nuestros hoteles.
          </p>
        </div>

        <div className="space-y-12">
          {locations.map((location, locIndex) => (
            <div key={locIndex}>
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <h2 className="font-serif font-semibold text-2xl">{location.name}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.activities.map((activity, actIndex) => {
                  const Icon = activity.icon
                  return (
                    <Card key={actIndex}>
                      <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                        <Icon className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">{activity.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {activity.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-muted-foreground">{item.description}</p>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
