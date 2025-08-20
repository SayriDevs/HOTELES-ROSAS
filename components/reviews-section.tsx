"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ThumbsUp, MessageCircle, Building2, Crown, Sparkles, StarIcon } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

const mockReviews = [
  {
    id: 1,
    userName: "María González",
    userAvatar: "/woman-avatar.png",
    hotel: "hilton",
    hotelName: "Hotel Hilton",
    rating: 5,
    title: "Experiencia excepcional en el centro de la ciudad",
    comment:
      "Mi estancia en el Hotel Hilton superó todas mis expectativas. El servicio fue impecable desde el momento del check-in hasta la salida. La habitación ejecutiva era espaciosa y elegante, con una vista increíble del centro financiero. El personal fue extremadamente atento y profesional.",
    date: new Date("2024-01-15"),
    likes: 12,
    replies: 2,
    verified: true,
  },
  {
    id: 2,
    userName: "Carlos Rodríguez",
    userAvatar: "/man-avatar.png",
    hotel: "ritz",
    hotelName: "Hotel Ritz",
    rating: 5,
    title: "Lujo y elegancia sin igual",
    comment:
      "El Hotel Ritz es simplemente magnífico. Cada detalle está cuidadosamente pensado para brindar una experiencia de lujo auténtica. La suite imperial era como un palacio, y el servicio de mayordomo personal hizo que me sintiera como la realeza. Definitivamente regresaré.",
    date: new Date("2024-01-10"),
    likes: 18,
    replies: 1,
    verified: true,
  },
  {
    id: 3,
    userName: "Ana Martínez",
    userAvatar: "/woman-avatar-2.png",
    hotel: "vegas",
    hotelName: "Hotel Vegas",
    rating: 4,
    title: "Diversión y entretenimiento garantizado",
    comment:
      "El Hotel Vegas es perfecto para quienes buscan entretenimiento y glamour. Las instalaciones son impresionantes, especialmente el casino y el teatro. La habitación show tenía una decoración muy original. El único punto a mejorar sería el tiempo de espera en el restaurante durante las horas pico.",
    date: new Date("2024-01-08"),
    likes: 8,
    replies: 0,
    verified: false,
  },
  {
    id: 4,
    userName: "Roberto Silva",
    userAvatar: "/man-avatar-2.png",
    hotel: "venus",
    hotelName: "Hotel Venus",
    rating: 5,
    title: "Tranquilidad y vistas espectaculares",
    comment:
      "La suite celestial del Hotel Venus ofrece las mejores vistas panorámicas que he visto. El acceso al observatorio astronómico fue una experiencia única. El spa es relajante y el servicio de yoga al amanecer fue inolvidable. Perfecto para una escapada romántica.",
    date: new Date("2024-01-05"),
    likes: 15,
    replies: 3,
    verified: true,
  },
  {
    id: 5,
    userName: "Laura Fernández",
    userAvatar: "/woman-avatar-3.png",
    hotel: "hilton",
    hotelName: "Hotel Hilton",
    rating: 4,
    title: "Excelente para viajes de negocios",
    comment:
      "El Hotel Hilton es ideal para viajes de trabajo. Las instalaciones de negocios son de primera clase y la ubicación es perfecta. La habitación deluxe era cómoda y funcional. El único detalle menor fue que el WiFi era un poco lento en las horas pico.",
    date: new Date("2024-01-03"),
    likes: 6,
    replies: 1,
    verified: true,
  },
  {
    id: 6,
    userName: "Diego Morales",
    userAvatar: "/man-avatar-3.png",
    hotel: "ritz",
    hotelName: "Hotel Ritz",
    rating: 5,
    title: "Tradición y excelencia",
    comment:
      "La habitación royal del Hotel Ritz es una obra de arte. Los muebles de época y la atención al detalle son extraordinarios. El servicio de té tradicional en el salón fue una experiencia cultural maravillosa. Sin duda, uno de los mejores hoteles en los que me he hospedado.",
    date: new Date("2024-01-01"),
    likes: 22,
    replies: 4,
    verified: true,
  },
]

const hotelIcons = {
  hilton: Building2,
  ritz: Crown,
  vegas: Sparkles,
  venus: StarIcon,
}

const hotelColors = {
  hilton: "text-blue-600 bg-blue-50",
  ritz: "text-amber-600 bg-amber-50",
  vegas: "text-purple-600 bg-purple-50",
  venus: "text-rose-600 bg-rose-50",
}

export function ReviewsSection() {
  const [selectedHotel, setSelectedHotel] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("recent")

  const filteredReviews = mockReviews.filter((review) => selectedHotel === "all" || review.hotel === selectedHotel)

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === "recent") return b.date.getTime() - a.date.getTime()
    if (sortBy === "rating") return b.rating - a.rating
    if (sortBy === "likes") return b.likes - a.likes
    return 0
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  const averageRating =
    filteredReviews.length > 0
      ? (filteredReviews.reduce((sum, review) => sum + review.rating, 0) / filteredReviews.length).toFixed(1)
      : "0.0"

  return (
    <div className="space-y-6">
      {/* Filters and Stats */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-xl">Reseñas de Huéspedes</CardTitle>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center">{renderStars(Math.round(Number.parseFloat(averageRating)))}</div>
                <span className="font-semibold">{averageRating}</span>
                <span className="text-muted-foreground">({filteredReviews.length} reseñas)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={selectedHotel} onValueChange={setSelectedHotel}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrar por hotel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los hoteles</SelectItem>
                  <SelectItem value="hilton">Hotel Hilton</SelectItem>
                  <SelectItem value="ritz">Hotel Ritz</SelectItem>
                  <SelectItem value="vegas">Hotel Vegas</SelectItem>
                  <SelectItem value="venus">Hotel Venus</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Más recientes</SelectItem>
                  <SelectItem value="rating">Mejor calificación</SelectItem>
                  <SelectItem value="likes">Más útiles</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Reviews List */}
      <div className="space-y-4">
        {sortedReviews.map((review) => {
          const HotelIcon = hotelIcons[review.hotel as keyof typeof hotelIcons]
          const hotelColorClass = hotelColors[review.hotel as keyof typeof hotelColors]

          return (
            <Card key={review.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={review.userAvatar || "/placeholder.svg"} alt={review.userName} />
                    <AvatarFallback>
                      {review.userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold">{review.userName}</h4>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">
                            Verificado
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`p-1 rounded ${hotelColorClass.split(" ")[1]}`}>
                          <HotelIcon className={`h-4 w-4 ${hotelColorClass.split(" ")[0]}`} />
                        </div>
                        <span className="text-sm text-muted-foreground">{review.hotelName}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">{renderStars(review.rating)}</div>
                      <span className="text-sm text-muted-foreground">
                        {format(review.date, "dd 'de' MMMM, yyyy", { locale: es })}
                      </span>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">{review.title}</h5>
                      <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                    </div>

                    <div className="flex items-center space-x-4 pt-2">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Útil ({review.likes})
                      </Button>
                      {review.replies > 0 && (
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Respuestas ({review.replies})
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {sortedReviews.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-muted-foreground">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No hay reseñas disponibles para los filtros seleccionados.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
