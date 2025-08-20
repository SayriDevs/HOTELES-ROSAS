"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Send, Check, Package, AlertCircle } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

interface LostItemFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  hotel: string
  roomNumber: string
  checkInDate: Date | undefined
  checkOutDate: Date | undefined
  itemCategory: string
  itemDescription: string
  lastSeenLocation: string
  additionalDetails: string
  urgency: string
}

const itemCategories = [
  "Electrónicos",
  "Joyería",
  "Ropa",
  "Documentos",
  "Medicamentos",
  "Artículos de aseo",
  "Libros/Revistas",
  "Juguetes",
  "Accesorios",
  "Otros",
]

const urgencyLevels = [
  { value: "low", label: "Baja - No es urgente", color: "bg-green-100 text-green-800" },
  { value: "medium", label: "Media - Importante", color: "bg-yellow-100 text-yellow-800" },
  { value: "high", label: "Alta - Muy importante", color: "bg-orange-100 text-orange-800" },
  { value: "critical", label: "Crítica - Documentos/Medicamentos", color: "bg-red-100 text-red-800" },
]

export function LostItemForm() {
  const [formData, setFormData] = useState<LostItemFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hotel: "",
    roomNumber: "",
    checkInDate: undefined,
    checkOutDate: undefined,
    itemCategory: "",
    itemDescription: "",
    lastSeenLocation: "",
    additionalDetails: "",
    urgency: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [caseNumber, setCaseNumber] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Generar número de caso
    const newCaseNumber = `LI-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    setCaseNumber(newCaseNumber)

    // Aquí se implementaría la lógica de envío del reporte
    console.log("Reporte de objeto perdido enviado:", formData)
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setCaseNumber("")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      hotel: "",
      roomNumber: "",
      checkInDate: undefined,
      checkOutDate: undefined,
      itemCategory: "",
      itemDescription: "",
      lastSeenLocation: "",
      additionalDetails: "",
      urgency: "",
    })
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-6 p-4 bg-green-100 rounded-full w-fit">
            <Check className="h-12 w-12 text-green-600" />
          </div>
          <h3 className="font-serif font-bold text-2xl mb-4">¡Reporte Enviado Exitosamente!</h3>
          <p className="text-muted-foreground mb-6">
            Hemos recibido tu reporte de objeto perdido. Nuestro equipo comenzará la búsqueda inmediatamente.
          </p>

          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <div className="text-sm font-medium text-muted-foreground mb-2">Número de Caso</div>
            <div className="text-3xl font-bold text-primary mb-4">{caseNumber}</div>
            <p className="text-sm text-muted-foreground">
              Guarda este número para hacer seguimiento de tu caso. Te contactaremos por email si encontramos tu objeto.
            </p>
          </div>

          <div className="space-y-3">
            <Button onClick={handleReset} className="w-full">
              Reportar Otro Objeto
            </Button>
            <Button variant="outline" onClick={() => (window.location.href = "/")} className="w-full">
              Volver al Inicio
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Package className="h-6 w-6 text-primary" />
          <span>Reportar Objeto Perdido</span>
        </CardTitle>
        <p className="text-muted-foreground">
          Completa este formulario con la mayor cantidad de detalles posible para ayudarnos a localizar tu objeto
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Información Personal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Información de Contacto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Nombre</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Apellido</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>

          {/* Información de Estadía */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Información de tu Estadía</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="hotel">Hotel</Label>
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
                <Label htmlFor="roomNumber">Número de Habitación</Label>
                <Input
                  id="roomNumber"
                  placeholder="Ej: 1205, Suite 301"
                  value={formData.roomNumber}
                  onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Fecha de Entrada</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.checkInDate ? format(formData.checkInDate, "PPP", { locale: es }) : "Seleccionar fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.checkInDate}
                      onSelect={(date) => setFormData({ ...formData, checkInDate: date })}
                      disabled={(date) => date > new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label>Fecha de Salida</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.checkOutDate
                        ? format(formData.checkOutDate, "PPP", { locale: es })
                        : "Seleccionar fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.checkOutDate}
                      onSelect={(date) => setFormData({ ...formData, checkOutDate: date })}
                      disabled={(date) => date > new Date() || (formData.checkInDate && date < formData.checkInDate)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Información del Objeto */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Detalles del Objeto Perdido</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="itemCategory">Categoría del Objeto</Label>
                <Select
                  value={formData.itemCategory}
                  onValueChange={(value) => setFormData({ ...formData, itemCategory: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {itemCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="urgency">Nivel de Urgencia</Label>
                <Select
                  value={formData.urgency}
                  onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona la urgencia" />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        <div className="flex items-center space-x-2">
                          <Badge className={level.color}>{level.label}</Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="itemDescription">Descripción Detallada del Objeto</Label>
              <Textarea
                id="itemDescription"
                placeholder="Describe el objeto con el mayor detalle posible: marca, modelo, color, tamaño, características distintivas..."
                rows={3}
                value={formData.itemDescription}
                onChange={(e) => setFormData({ ...formData, itemDescription: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="lastSeenLocation">Último Lugar Donde lo Viste</Label>
              <Input
                id="lastSeenLocation"
                placeholder="Ej: Habitación, baño, restaurante, lobby, spa..."
                value={formData.lastSeenLocation}
                onChange={(e) => setFormData({ ...formData, lastSeenLocation: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="additionalDetails">Detalles Adicionales (Opcional)</Label>
              <Textarea
                id="additionalDetails"
                placeholder="Cualquier información adicional que pueda ayudar en la búsqueda..."
                rows={2}
                value={formData.additionalDetails}
                onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
              />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="text-sm">
                <div className="font-medium text-blue-900 mb-1">Información Importante</div>
                <ul className="text-blue-800 space-y-1">
                  <li>• Conservamos objetos perdidos por un máximo de 90 días</li>
                  <li>• Te contactaremos por email si encontramos tu objeto</li>
                  <li>• Los gastos de envío corren por cuenta del propietario</li>
                  <li>• Para objetos de valor, se requiere identificación para la entrega</li>
                </ul>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={
              !formData.firstName ||
              !formData.lastName ||
              !formData.email ||
              !formData.phone ||
              !formData.hotel ||
              !formData.roomNumber ||
              !formData.checkInDate ||
              !formData.checkOutDate ||
              !formData.itemCategory ||
              !formData.itemDescription ||
              !formData.lastSeenLocation ||
              !formData.urgency
            }
          >
            <Send className="h-4 w-4 mr-2" />
            Enviar Reporte
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
