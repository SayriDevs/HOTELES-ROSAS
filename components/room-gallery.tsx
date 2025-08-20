"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Users, Maximize, Eye, Calendar } from "lucide-react"

interface Room {
  name: string
  description: string
  size: string
  capacity: string
  price: string
  image: string
  amenities: string[]
}

interface RoomGalleryProps {
  rooms: Room[]
  hotelName: string
}

export function RoomGallery({ rooms, hotelName }: RoomGalleryProps) {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)

  return (
    <section id="rooms-section" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Habitaciones y Suites de {hotelName}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestras elegantes habitaciones diseñadas para brindar el máximo confort y lujo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div
                  className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('${room.image}')` }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-black font-semibold">
                      {room.price}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 hover:bg-white"
                          onClick={() => setSelectedRoom(room)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Detalles
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{room.name}</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">{room.description}</p>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Maximize className="w-4 h-4 mr-2" />
                    {room.size}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    {room.capacity}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium mb-2">Amenidades incluidas:</div>
                  <div className="flex flex-wrap gap-1">
                    {room.amenities.slice(0, 2).map((amenity, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {room.amenities.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{room.amenities.length - 2} más
                      </Badge>
                    )}
                  </div>
                </div>

                <Link href="/reservations">
                  <Button className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Reservar Habitación
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Room Details Dialog */}
        <Dialog>
          <DialogContent className="max-w-2xl">
            {selectedRoom && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedRoom.name}</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div
                      className="h-64 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url('${selectedRoom.image}')` }}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{selectedRoom.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm font-medium">Tamaño</div>
                        <div className="text-sm text-muted-foreground">{selectedRoom.size}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Capacidad</div>
                        <div className="text-sm text-muted-foreground">{selectedRoom.capacity}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium mb-2">Todas las amenidades:</div>
                      <div className="space-y-1">
                        {selectedRoom.amenities.map((amenity, idx) => (
                          <div key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {amenity}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-2xl font-bold text-primary">{selectedRoom.price}</div>
                      <Link href="/reservations">
                        <Button>
                          <Calendar className="w-4 h-4 mr-2" />
                          Reservar Ahora
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
