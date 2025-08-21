"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

const locations = [
  {
    name: "Hoteles Hilton, Ritz & Vegas",
    address: "Jr. Las Perlas con Av. Jardines",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jr.+Las+Perlas+con+Av.+Jardines",
  },
  {
    name: "Hotel Venus",
    address: "Av. 13 de Enero 1714-1736, Lima 15431",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+13+de+Enero+1714-1736,+Lima+15431",
  },
]

export function StaticMapSection() {
  return (
    <section id="ubicacion" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Nuestras Ubicaciones</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuéntranos en los mejores puntos de la ciudad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Map Image */}
          <div className="lg:col-span-3 w-full h-[400px] rounded-lg overflow-hidden relative">
            <Image
              src="https://placehold.co/1200x800/e2e8f0/64748b?text=Mapa+de+Ubicaciones"
              alt="Mapa de ubicaciones de los hoteles"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Addresses */}
          <div className="lg:col-span-2 space-y-6">
            {locations.map((location, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{location.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{location.address}</p>
                  <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">Ver en Google Maps</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
