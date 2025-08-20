"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, Package, Calendar, MapPin, Phone } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

const foundItems = [
  {
    id: 1,
    category: "Electrónicos",
    description: "iPhone 14 Pro con funda azul",
    location: "Hotel Hilton - Habitación 1205",
    foundDate: new Date("2024-01-18"),
    status: "Disponible",
    image: "/found-phone.png",
    details: "Teléfono iPhone 14 Pro de color negro con funda protectora azul. Encontrado en la mesita de noche.",
  },
  {
    id: 2,
    category: "Joyería",
    description: "Reloj dorado con correa de cuero",
    location: "Hotel Ritz - Spa",
    foundDate: new Date("2024-01-17"),
    status: "Disponible",
    image: "/found-watch.png",
    details: "Reloj de pulsera dorado con correa de cuero marrón. Encontrado en el vestuario del spa.",
  },
  {
    id: 3,
    category: "Documentos",
    description: "Pasaporte estadounidense",
    location: "Hotel Vegas - Recepción",
    foundDate: new Date("2024-01-16"),
    status: "Reclamado",
    image: "/found-passport.png",
    details: "Pasaporte de Estados Unidos. Entregado al propietario tras verificación de identidad.",
  },
  {
    id: 4,
    category: "Ropa",
    description: "Chaqueta de cuero negra",
    location: "Hotel Venus - Restaurante",
    foundDate: new Date("2024-01-15"),
    status: "Disponible",
    image: "/found-jacket.png",
    details: "Chaqueta de cuero negro talla M. Encontrada en el respaldo de una silla del restaurante.",
  },
  {
    id: 5,
    category: "Accesorios",
    description: "Gafas de sol Ray-Ban",
    location: "Hotel Hilton - Piscina",
    foundDate: new Date("2024-01-14"),
    status: "Disponible",
    image: "/found-sunglasses.png",
    details: "Gafas de sol Ray-Ban modelo Aviator con montura dorada. Encontradas junto a la piscina.",
  },
]

export function FoundItemsSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedItem, setSelectedItem] = useState<(typeof foundItems)[0] | null>(null)

  const filteredItems = foundItems.filter(
    (item) =>
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const availableItems = filteredItems.filter((item) => item.status === "Disponible")

  return (
    <div className="space-y-6">
      <Card className="sticky top-4">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5 text-primary" />
            <span>Objetos Encontrados</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Revisa si tu objeto está entre los que hemos encontrado recientemente
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="search">Buscar objeto</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Buscar por descripción, categoría o ubicación..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-3">
            {availableItems.length > 0 ? (
              availableItems.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <Badge variant={item.status === "Disponible" ? "default" : "secondary"} className="text-xs">
                          {item.status}
                        </Badge>
                      </div>
                      <div className="font-medium text-sm mb-1">{item.description}</div>
                      <div className="flex items-center text-xs text-muted-foreground mb-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {item.location}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {format(item.foundDate, "dd MMM yyyy", { locale: es })}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Package className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No se encontraron objetos que coincidan con tu búsqueda</p>
              </div>
            )}
          </div>

          {availableItems.length > 5 && (
            <Button variant="outline" className="w-full bg-transparent" size="sm">
              Ver todos los objetos ({availableItems.length})
            </Button>
          )}

          <div className="pt-4 border-t">
            <div className="text-center">
              <div className="text-sm font-medium mb-2">¿Encontraste tu objeto?</div>
              <Button size="sm" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Contactar para Reclamar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Item Details Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-md">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle>Detalles del Objeto Encontrado</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div
                  className="h-48 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url('${selectedItem.image}')` }}
                />

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{selectedItem.category}</Badge>
                    <Badge variant={selectedItem.status === "Disponible" ? "default" : "secondary"}>
                      {selectedItem.status}
                    </Badge>
                  </div>

                  <div>
                    <div className="font-medium mb-1">{selectedItem.description}</div>
                    <p className="text-sm text-muted-foreground">{selectedItem.details}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{selectedItem.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Encontrado el {format(selectedItem.foundDate, "dd 'de' MMMM, yyyy", { locale: es })}</span>
                    </div>
                  </div>

                  {selectedItem.status === "Disponible" && (
                    <Button className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Contactar para Reclamar
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
