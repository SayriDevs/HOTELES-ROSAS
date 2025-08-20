"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Check, X, Search, Gift, AlertCircle } from "lucide-react"

// Códigos de descuento válidos
const validCodes = {
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

export function DiscountValidator() {
  const [code, setCode] = useState("")
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean
    discount?: number
    description?: string
  } | null>(null)

  const validateCode = () => {
    const upperCode = code.toUpperCase().trim()
    const codeData = validCodes[upperCode as keyof typeof validCodes]

    if (codeData) {
      setValidationResult({
        isValid: true,
        discount: codeData.discount,
        description: codeData.description,
      })
    } else {
      setValidationResult({
        isValid: false,
      })
    }
  }

  const resetValidation = () => {
    setCode("")
    setValidationResult(null)
  }

  return (
    <div className="space-y-6">
      <Card className="sticky top-4">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5 text-primary" />
            <span>Validar Código</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Verifica si tu código de descuento es válido antes de hacer la reserva
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="discount-code">Código de descuento</Label>
            <Input
              id="discount-code"
              placeholder="Ingresa tu código aquí"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && validateCode()}
            />
          </div>

          <Button onClick={validateCode} disabled={!code.trim()} className="w-full">
            <Search className="h-4 w-4 mr-2" />
            Validar Código
          </Button>

          {validationResult && (
            <div
              className={`p-4 rounded-lg border-2 ${
                validationResult.isValid ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
              }`}
            >
              <div className="flex items-start space-x-3">
                {validationResult.isValid ? (
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                ) : (
                  <X className="h-5 w-5 text-red-600 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className={`font-medium mb-1 ${validationResult.isValid ? "text-green-900" : "text-red-900"}`}>
                    {validationResult.isValid ? "¡Código Válido!" : "Código Inválido"}
                  </div>
                  {validationResult.isValid ? (
                    <div className="space-y-2">
                      <div className="text-sm text-green-800">{validationResult.description}</div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {validationResult.discount}% de descuento
                      </Badge>
                    </div>
                  ) : (
                    <div className="text-sm text-red-800">
                      El código ingresado no es válido o ha expirado. Verifica la ortografía e inténtalo nuevamente.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {validationResult && (
            <Button variant="outline" onClick={resetValidation} className="w-full bg-transparent">
              Probar Otro Código
            </Button>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Gift className="h-5 w-5 text-primary" />
            <span>Consejos</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
              <div className="text-sm">
                <div className="font-medium mb-1">Palabras mágicas diarias</div>
                <div className="text-muted-foreground">
                  Cada día hay una nueva palabra mágica con descuentos del 15% al 30%
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <AlertCircle className="h-4 w-4 text-purple-600 mt-0.5" />
              <div className="text-sm">
                <div className="font-medium mb-1">Promociones especiales</div>
                <div className="text-muted-foreground">
                  Los códigos promocionales incluyen beneficios adicionales además del descuento
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <AlertCircle className="h-4 w-4 text-green-600 mt-0.5" />
              <div className="text-sm">
                <div className="font-medium mb-1">Validez limitada</div>
                <div className="text-muted-foreground">
                  Algunos códigos tienen fecha de expiración. ¡Úsalos antes de que caduquen!
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
