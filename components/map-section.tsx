"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Placeholder coordinates for the two locations
const locations = [
  {
    position: [-12.046374, -77.042793],
    name: "Hoteles Hilton, Ritz & Vegas",
    address: "Jr. Las Perlas con Av. Jardines",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-12.046374,-77.042793",
  },
  {
    position: [-11.9689301, -76.9939836],
    name: "Hotel Venus",
    address: "Av. 13 de Enero con Orquideas",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=XXWV%2B6X4",
  },
]

// Custom icon using a simple div
const customIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});


export function MapSection() {
  const centerPosition = [-12.00765, -77.01839] // A central point between the two locations

  return (
    <section id="ubicacion" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Nuestras Ubicaciones</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuéntranos en los mejores puntos de la ciudad.
          </p>
        </div>
        <div className="h-[500px] w-full rounded-lg overflow-hidden">
          <MapContainer center={centerPosition} zoom={15} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((location, index) => (
              <Marker key={index} position={location.position} icon={customIcon}>
                <Popup>
                  <div className="text-center">
                    <div className="font-bold">{location.name}</div>
                    <div className="text-sm">{location.address}</div>
                    <a
                      href={location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-md mt-2 text-sm hover:bg-primary/90 transition-colors"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  )
}
