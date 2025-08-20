"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Send, Check } from "lucide-react"

interface ReviewFormData {
  name: string
  email: string
  hotel: string
  rating: number
  title: string
  comment: string
}

export function ReviewForm() {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: "",
    email: "",
    hotel: "",
    rating: 0,
    title: "",
    comment: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hoveredStar, setHoveredStar] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se implementaría la lógica de envío del comentario
    console.log("Comentario enviado:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        hotel: "",
        rating: 0,
        title: "",
        comment: "",
      })
    }, 3000)
  }

  const handleStarClick = (rating: number) => {
    setFormData({ ...formData, rating })
  }

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => {
      const starNumber = i + 1
      const isActive = starNumber <= (hoveredStar || formData.rating)

      return (
        <Star
          key={i}
          className={`h-6 w-6 cursor-pointer transition-colors ${
            isActive ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-400"
          }`}
          onClick={() => handleStarClick(starNumber)}
          onMouseEnter={() => setHoveredStar(starNumber)}
          onMouseLeave={() => setHoveredStar(0)}
        />
      )
    })
  }

  if (isSubmitted) {
    return (
      <Card className="sticky top-4">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">¡Gracias por tu reseña!</h3>
          <p className="text-muted-foreground text-sm">
            Tu comentario ha sido enviado y será revisado antes de publicarse.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Comparte tu Experiencia</CardTitle>
        <p className="text-sm text-muted-foreground">
          Ayuda a otros viajeros compartiendo tu opinión sobre tu estancia
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nombre completo</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="hotel">Hotel visitado</Label>
            <Select value={formData.hotel} onValueChange={(value) => setFormData({ ...formData, hotel: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona el hotel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hilton">Hotel Hilton</SelectItem>
                <SelectItem value="ritz">Hotel Ritz</SelectItem>
                <SelectItem value="vegas">Hotel Vegas</SelectItem>
                <SelectItem value="venus">Hotel Venus</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Calificación general</Label>
            <div className="flex items-center space-x-1 mt-2">
              {renderStars()}
              {formData.rating > 0 && (
                <span className="ml-2 text-sm text-muted-foreground">{formData.rating} de 5 estrellas</span>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="title">Título de tu reseña</Label>
            <Input
              id="title"
              placeholder="Resumen de tu experiencia"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="comment">Tu comentario</Label>
            <Textarea
              id="comment"
              placeholder="Comparte los detalles de tu experiencia, qué te gustó más, qué se podría mejorar..."
              rows={4}
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={
              !formData.name ||
              !formData.email ||
              !formData.hotel ||
              !formData.rating ||
              !formData.title ||
              !formData.comment
            }
          >
            <Send className="h-4 w-4 mr-2" />
            Enviar Reseña
          </Button>

          <p className="text-xs text-muted-foreground">
            Al enviar tu reseña, aceptas que sea publicada en nuestro sitio web después de ser revisada.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
