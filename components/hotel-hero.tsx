"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, Phone, Mail, Users, Youtube } from "lucide-react"

interface HotelHeroProps {
  hotel: {
    name: string
    description: string
    longDescription: string
    location: string
    phone: string
    email: string
    totalRooms: number
    heroImage: string
    color: string
  }
}

export function HotelHero({ hotel }: HotelHeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${hotel.heroImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4 pt-8">{hotel.name}</h1>
            <p className="text-xl mb-6 leading-relaxed">{hotel.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/reservations">
                <Button size="lg" className="text-lg px-8">
                  Reservar Ahora
                </Button>
              </Link>

              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
                  >
                    <Youtube className="mr-2 h-5 w-5" />
                    Ver Video de Habitaciones
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl p-0 bg-transparent border-0">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/fu_fgH6eAjo?autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-serif font-semibold text-xl mb-4">Información del Hotel</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Ubicación</div>
                    <div className="text-sm text-muted-foreground">{hotel.location}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Teléfono</div>
                    <div className="text-sm text-muted-foreground">{hotel.phone}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">{hotel.email}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Habitaciones</div>
                    <div className="text-sm text-muted-foreground">{hotel.totalRooms} habitaciones de lujo</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground leading-relaxed">{hotel.longDescription}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
