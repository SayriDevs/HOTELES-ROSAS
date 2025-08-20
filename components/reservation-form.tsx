"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { CalendarIcon, Users, MapPin, CreditCard, Check, Building2, Star, Sparkles, Crown } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

const hotels = [
  {
    id: "hilton",
    name: "Hotel Hilton",
    icon: Building2,
    location: "Centro Financiero",
    color: "text-blue-600",
    rooms: [
      { id: "executive", name: "Suite Ejecutiva", price: 450 },
      { id: "deluxe", name: "Habitación Deluxe", price: 320 },
      { id: "presidential", name: "Suite Presidencial", price: 850 },
    ],
  },
  {
    id: "ritz",
    name: "Hotel Ritz",
    icon: Crown,
    location: "Zona Exclusiva",
    color: "text-amber-600",
    rooms: [
      { id: "imperial", name: "Suite Imperial", price: 650 },
      { id: "royal", name: "Habitación Royal", price: 480 },
      { id: "penthouse", name: "Suite Penthouse", price: 1200 },
    ],
  },
  {
    id: "vegas",
    name: "Hotel Vegas",
    icon: Sparkles,
    location: "Distrito de Entretenimiento",
    color: "text-purple-600",
    rooms: [
      { id: "glamour", name: "Suite Glamour", price: 380 },
      { id: "show", name: "Habitación Show", price: 280 },
      { id: "celebrity", name: "Suite Celebrity", price: 750 },
    ],
  },
  {
    id: "venus",
    name: "Hotel Venus",
    icon: Star,
    location: "Vista Panorámica",
    color: "text-rose-600",
    rooms: [
      { id: "celestial", name: "Suite Celestial", price: 520 },
      { id: "star", name: "Habitación Estrella", price: 420 },
      { id: "infinity", name: "Suite Infinity", price: 950 },
    ],
  },
]

const validDiscountCodes = {
  LUJO2024: { discount: 15, description: "Descuento diario del 15%" },
  ELEGANCIA: { discount: 20, description: "Descuento diario del 20%" },
  PREMIUM: { discount: 25, description: "Descuento diario del 25%" },
  EXCLUSIVO: { discount: 30, description: "Descuento diario del 30%" },
  DIAMANTE: { discount: 18, description: "Descuento diario del 18%" },
  PLATINO: { discount: 22, description: "Descuento diario del 22%" },
  CELESTIAL: { discount: 28, description: "Descuento diario del 28%" },
  ROMANCE2024: { discount: 35, description: "Paquete romántico - 35% OFF" },
  BUSINESS2024: { discount: 25, description: "Tarifa corporativa - 25% OFF" },
  VIP2024: { discount: 40, description: "Experiencia VIP - 40% OFF" },
  FAMILY2024: { discount: 30, description: "Estancia familiar - 30% OFF" },
}

interface ReservationData {
  hotel: string
  room: string
  checkIn: Date | undefined
  checkOut: Date | undefined
  guests: string
  firstName: string
  lastName: string
  email: string
  phone: string
  specialRequests: string
  discountCode: string
}

export function ReservationForm() {
  const [step, setStep] = useState(1)
  const [reservation, setReservation] = useState<ReservationData>({
    hotel: "",
    room: "",
    checkIn: undefined,
    checkOut: undefined,
    guests: "2",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
    discountCode: "",
  })

  const selectedHotel = hotels.find((h) => h.id === reservation.hotel)
  const selectedRoom = selectedHotel?.rooms.find((r) => r.id === reservation.room)

  const getDiscountInfo = () => {
    const upperCode = reservation.discountCode.toUpperCase().trim()
    return validDiscountCodes[upperCode as keyof typeof validDiscountCodes] || null
  }

  const calculateNights = () => {
    if (reservation.checkIn && reservation.checkOut) {
      const diffTime = Math.abs(reservation.checkOut.getTime() - reservation.checkIn.getTime())
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
    return 0
  }

  const calculateTotal = () => {
    const nights = calculateNights()
    const roomPrice = selectedRoom?.price || 0
    const subtotal = nights * roomPrice

    const discountInfo = getDiscountInfo()
    const discountAmount = discountInfo ? (subtotal * discountInfo.discount) / 100 : 0
    const discountedSubtotal = subtotal - discountAmount

    const taxes = discountedSubtotal * 0.15
    return {
      subtotal,
      discountAmount,
      discountedSubtotal,
      taxes,
      total: discountedSubtotal + taxes,
      discountInfo,
    }
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // Aquí se implementaría la lógica de envío de la reserva
    console.log("Reserva enviada:", reservation)
    setStep(4) // Página de confirmación
  }

  if (step === 4) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-600">¡Reserva Confirmada!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Tu reserva ha sido procesada exitosamente. Recibirás un email de confirmación en breve.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="text-sm font-medium">Número de Reserva</div>
            <div className="text-2xl font-bold text-primary">
              LH-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </div>
          </div>
          {getDiscountInfo() && (
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-green-800">Descuento Aplicado</div>
              <div className="text-green-700">{getDiscountInfo()?.description}</div>
              <div className="text-lg font-bold text-green-600">
                Ahorraste ${calculateTotal().discountAmount.toFixed(2)}
              </div>
            </div>
          )}
          <Button onClick={() => (window.location.href = "/")} className="w-full">
            Volver al Inicio
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= stepNumber ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {stepNumber}
            </div>
            {stepNumber < 3 && <div className={`w-16 h-0.5 mx-2 ${step > stepNumber ? "bg-primary" : "bg-muted"}`} />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 && "Selecciona tu Hotel y Habitación"}
                {step === 2 && "Fechas y Huéspedes"}
                {step === 3 && "Información Personal"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Hotel and Room Selection */}
              {step === 1 && (
                <>
                  <div>
                    <Label htmlFor="hotel">Hotel</Label>
                    <Select
                      value={reservation.hotel}
                      onValueChange={(value) => setReservation({ ...reservation, hotel: value, room: "" })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un hotel" />
                      </SelectTrigger>
                      <SelectContent>
                        {hotels.map((hotel) => {
                          const Icon = hotel.icon
                          return (
                            <SelectItem key={hotel.id} value={hotel.id}>
                              <div className="flex items-center space-x-2">
                                <Icon className={`h-4 w-4 ${hotel.color}`} />
                                <span>{hotel.name}</span>
                                <span className="text-muted-foreground">- {hotel.location}</span>
                              </div>
                            </SelectItem>
                          )
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedHotel && (
                    <div>
                      <Label htmlFor="room">Tipo de Habitación</Label>
                      <div className="grid gap-3 mt-2">
                        {selectedHotel.rooms.map((room) => (
                          <div
                            key={room.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                              reservation.room === room.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => setReservation({ ...reservation, room: room.id })}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium">{room.name}</div>
                                <div className="text-sm text-muted-foreground">Desde ${room.price}/noche</div>
                              </div>
                              <Badge variant={reservation.room === room.id ? "default" : "outline"}>
                                ${room.price}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Step 2: Dates and Guests */}
              {step === 2 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Fecha de Entrada</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-transparent"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {reservation.checkIn
                              ? format(reservation.checkIn, "PPP", { locale: es })
                              : "Seleccionar fecha"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={reservation.checkIn}
                            onSelect={(date) => setReservation({ ...reservation, checkIn: date })}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label>Fecha de Salida</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-transparent"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {reservation.checkOut
                              ? format(reservation.checkOut, "PPP", { locale: es })
                              : "Seleccionar fecha"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={reservation.checkOut}
                            onSelect={(date) => setReservation({ ...reservation, checkOut: date })}
                            disabled={(date) => date <= (reservation.checkIn || new Date())}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guests">Número de Huéspedes</Label>
                    <Select
                      value={reservation.guests}
                      onValueChange={(value) => setReservation({ ...reservation, guests: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <span>
                                {num} {num === 1 ? "Huésped" : "Huéspedes"}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="discountCode">Código de Descuento (Opcional)</Label>
                    <Input
                      id="discountCode"
                      placeholder="Ingresa la palabra mágica del día"
                      value={reservation.discountCode}
                      onChange={(e) => setReservation({ ...reservation, discountCode: e.target.value })}
                    />
                    {reservation.discountCode && (
                      <div className="mt-2">
                        {getDiscountInfo() ? (
                          <div className="flex items-center space-x-2 text-green-600">
                            <Check className="h-4 w-4" />
                            <span className="text-sm">{getDiscountInfo()?.description}</span>
                          </div>
                        ) : (
                          <div className="text-sm text-red-600">Código inválido o expirado</div>
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Step 3: Personal Information */}
              {step === 3 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input
                        id="firstName"
                        value={reservation.firstName}
                        onChange={(e) => setReservation({ ...reservation, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input
                        id="lastName"
                        value={reservation.lastName}
                        onChange={(e) => setReservation({ ...reservation, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={reservation.email}
                      onChange={(e) => setReservation({ ...reservation, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={reservation.phone}
                      onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Solicitudes Especiales (Opcional)</Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Cama extra, vista específica, celebración especial, etc."
                      value={reservation.specialRequests}
                      onChange={(e) => setReservation({ ...reservation, specialRequests: e.target.value })}
                    />
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={handlePrevious} disabled={step === 1}>
                  Anterior
                </Button>
                <Button
                  onClick={step === 3 ? handleSubmit : handleNext}
                  disabled={
                    (step === 1 && (!reservation.hotel || !reservation.room)) ||
                    (step === 2 && (!reservation.checkIn || !reservation.checkOut)) ||
                    (step === 3 &&
                      (!reservation.firstName || !reservation.lastName || !reservation.email || !reservation.phone))
                  }
                >
                  {step === 3 ? "Confirmar Reserva" : "Siguiente"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reservation Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Resumen de Reserva</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedHotel && (
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <selectedHotel.icon className={`h-5 w-5 ${selectedHotel.color}`} />
                  </div>
                  <div>
                    <div className="font-medium">{selectedHotel.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {selectedHotel.location}
                    </div>
                  </div>
                </div>
              )}

              {selectedRoom && (
                <div>
                  <div className="font-medium">{selectedRoom.name}</div>
                  <div className="text-sm text-muted-foreground">${selectedRoom.price}/noche</div>
                </div>
              )}

              {reservation.checkIn && reservation.checkOut && (
                <div>
                  <div className="text-sm text-muted-foreground">Fechas</div>
                  <div className="font-medium">
                    {format(reservation.checkIn, "dd MMM", { locale: es })} -{" "}
                    {format(reservation.checkOut, "dd MMM yyyy", { locale: es })}
                  </div>
                  <div className="text-sm text-muted-foreground">{calculateNights()} noches</div>
                </div>
              )}

              {reservation.guests && (
                <div>
                  <div className="text-sm text-muted-foreground">Huéspedes</div>
                  <div className="font-medium">
                    {reservation.guests} {reservation.guests === "1" ? "Huésped" : "Huéspedes"}
                  </div>
                </div>
              )}

              {selectedRoom && reservation.checkIn && reservation.checkOut && (
                <>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal ({calculateNights()} noches)</span>
                      <span>${calculateTotal().subtotal}</span>
                    </div>
                    {calculateTotal().discountAmount > 0 && (
                      <>
                        <div className="flex justify-between text-green-600">
                          <span>Descuento ({calculateTotal().discountInfo?.discount}%)</span>
                          <span>-${calculateTotal().discountAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span>Subtotal con descuento</span>
                          <span>${calculateTotal().discountedSubtotal.toFixed(2)}</span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Impuestos y tasas</span>
                      <span>${calculateTotal().taxes.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${calculateTotal().total.toFixed(2)}</span>
                    </div>
                    {calculateTotal().discountAmount > 0 && (
                      <div className="text-center text-green-600 font-medium">
                        ¡Ahorras ${calculateTotal().discountAmount.toFixed(2)}!
                      </div>
                    )}
                  </div>
                </>
              )}

              <div className="pt-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1 mb-2">
                  <CreditCard className="h-3 w-3" />
                  <span>Pago seguro garantizado</span>
                </div>
                <p>Cancelación gratuita hasta 24 horas antes del check-in</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
