"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Sparkles, Clock, Gift, Star } from "lucide-react"
import Link from "next/link"

// Función para generar la palabra mágica del día
const generateDailyMagicWord = () => {
  const words = [
    "LUJO2024",
    "ELEGANCIA",
    "PREMIUM",
    "EXCLUSIVO",
    "DIAMANTE",
    "PLATINO",
    "CELESTIAL",
    "IMPERIAL",
    "ROYAL",
    "GOLDEN",
    "CRYSTAL",
    "PARADISE",
    "LUXURY",
    "ELITE",
    "PRESTIGE",
  ]

  // Usar la fecha actual para generar un índice consistente
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
  return words[dayOfYear % words.length]
}

// Función para obtener el descuento del día
const getDailyDiscount = () => {
  const discounts = [15, 20, 25, 30, 18, 22, 28]
  const today = new Date()
  const dayOfWeek = today.getDay()
  return discounts[dayOfWeek]
}

// Función para obtener la oferta especial del día
const getDailySpecialOffer = () => {
  const offers = [
    {
      title: "Lunes de Lujo",
      description: "Desayuno continental gratuito + Late check-out",
      icon: Gift,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Martes Mágico",
      description: "Acceso gratuito al spa + Masaje de 30 min",
      icon: Sparkles,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Miércoles VIP",
      description: "Upgrade gratuito de habitación + Cena romántica",
      icon: Star,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Jueves Premium",
      description: "Servicio de limusina + Champagne de bienvenida",
      icon: Gift,
      color: "text-rose-600 bg-rose-50",
    },
    {
      title: "Viernes Fantástico",
      description: "Cena gourmet gratuita + Show en vivo",
      icon: Sparkles,
      color: "text-green-600 bg-green-50",
    },
    {
      title: "Sábado Especial",
      description: "Brunch ilimitado + Acceso a piscina VIP",
      icon: Star,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      title: "Domingo Dorado",
      description: "Check-in temprano + Servicio de mayordomo",
      icon: Gift,
      color: "text-orange-600 bg-orange-50",
    },
  ]

  const today = new Date()
  const dayOfWeek = today.getDay()
  return offers[dayOfWeek]
}

export function DailyOffers() {
  const [magicWord, setMagicWord] = useState("")
  const [discount, setDiscount] = useState(0)
  const [specialOffer, setSpecialOffer] = useState<any>(null)
  const [copied, setCopied] = useState(false)
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    setMagicWord(generateDailyMagicWord())
    setDiscount(getDailyDiscount())
    setSpecialOffer(getDailySpecialOffer())

    // Calcular tiempo restante hasta medianoche
    const updateTimeLeft = () => {
      const now = new Date()
      const tomorrow = new Date(now)
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(0, 0, 0, 0)

      const diff = tomorrow.getTime() - now.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft(
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
      )
    }

    updateTimeLeft()
    const interval = setInterval(updateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(magicWord)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!specialOffer) return null

  const SpecialIcon = specialOffer.icon

  return (
    <div className="space-y-6">
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span>Palabra Mágica del Día</span>
            </CardTitle>
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {discount}% OFF
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">Palabra mágica de hoy:</div>
            <div className="text-4xl font-bold font-mono text-primary mb-4 tracking-wider">{magicWord}</div>
            <Button onClick={copyToClipboard} variant="outline" size="sm" className="bg-white/50 hover:bg-white/80">
              {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
              {copied ? "¡Copiado!" : "Copiar Código"}
            </Button>
          </div>

          <div className="bg-white/50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Tiempo restante:</span>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="font-mono">{timeLeft}</span>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              La palabra mágica cambia cada día a las 00:00. ¡No te pierdas la oportunidad!
            </div>
          </div>

          <div className="text-center">
            <Link href="/reservations">
              <Button className="w-full">Usar Código en Reserva</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card
        className={`border-2 ${specialOffer.color.includes("blue") ? "border-blue-200" : specialOffer.color.includes("purple") ? "border-purple-200" : specialOffer.color.includes("amber") ? "border-amber-200" : specialOffer.color.includes("rose") ? "border-rose-200" : specialOffer.color.includes("green") ? "border-green-200" : specialOffer.color.includes("indigo") ? "border-indigo-200" : "border-orange-200"}`}
      >
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <div className={`p-2 rounded-lg ${specialOffer.color.split(" ")[1]}`}>
              <SpecialIcon className={`h-5 w-5 ${specialOffer.color.split(" ")[0]}`} />
            </div>
            <span>{specialOffer.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{specialOffer.description}</p>
          <div className="bg-muted/50 p-3 rounded-lg">
            <div className="text-sm font-medium mb-1">Cómo obtener esta oferta:</div>
            <div className="text-sm text-muted-foreground">
              Usa la palabra mágica &quot;{magicWord}&quot; al hacer tu reserva para obtener {discount}% de descuento + esta
              oferta especial gratuita.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
