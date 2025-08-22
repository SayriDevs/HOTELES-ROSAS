"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Building2, Star, Sparkles, Crown, ArrowRight } from "lucide-react"

const hotels = [
  {
    name: "Hotel Hilton",
    slug: "hilton",
    icon: Building2,
    description: "Elegancia clásica y servicio excepcional",
    color: "text-blue-600",
  },
  {
    name: "Hotel Ritz",
    slug: "ritz",
    icon: Crown,
    description: "Lujo refinado y tradición centenaria",
    color: "text-amber-600",
  },
  {
    name: "Hotel Vegas",
    slug: "vegas",
    icon: Sparkles,
    description: "Entretenimiento y glamour sin límites",
    color: "text-purple-600",
  },
  {
    name: "Hotel Venus",
    slug: "venus",
    icon: Star,
    description: "Experiencia celestial y confort supremo",
    color: "text-rose-600",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="font-serif font-bold text-xl">HOTELES ROSAS</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/#hotels-section" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Hoteles
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#servicios" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Servicios
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#testimonios" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Testimonios
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#ubicacion" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Ubicación
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/offers" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    <span className="flex items-center space-x-1">
                      <span>Ofertas</span>
                      <Badge variant="secondary" className="ml-1 text-xs">
                        Hoy
                      </Badge>
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2">
            <Link href="/login">
              <Button variant="outline" size="sm" className="hidden md:inline-flex bg-transparent">
                Iniciar Sesión
              </Button>
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">Reservar Ahora</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Reserva Inteligente</DialogTitle>
                  <p className="text-sm text-muted-foreground pt-2">
                    ¿En cuál de nuestros hoteles de lujo te gustaría hospedarte?
                  </p>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {hotels.map((hotel) => {
                    const Icon = hotel.icon
                    return (
                      <Link
                        key={hotel.slug}
                        href={`/reservations?hotel=${hotel.slug}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className={`h-5 w-5 ${hotel.color}`} />
                          <span className="font-medium">{hotel.name}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    )
                  })}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  )
}
