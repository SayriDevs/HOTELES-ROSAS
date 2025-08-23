"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/HOTELES-ROSAS/luxury-hotel-lobby.png"
        alt="Lobby de un hotel de lujo"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <Badge variant="secondary" className="mb-4 bg-primary/20 text-white border-white/20">
          <Sparkles className="w-3 h-3 mr-1" />
          Experiencia de Lujo Premium
        </Badge>

        <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Bienvenido a la
          <span className="block text-primary">Excelencia Hotelera</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Descubre el lujo redefinido en nuestros hoteles premium. Desde la elegancia clásica hasta el glamour moderno,
          cada estancia es una experiencia inolvidable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/reservations">
            <Button size="lg" className="text-lg px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              Reservar Ahora
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={() => document.getElementById("hotels-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            <MapPin className="w-5 h-5 mr-2" />
            Explorar Hoteles
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-sm text-white/80">Hoteles de Lujo</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm text-white/80">Habitaciones Premium</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm text-white/80">Servicio Personalizado</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
