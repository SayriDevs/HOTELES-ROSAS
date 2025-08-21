"use client"

import dynamic from "next/dynamic"

export function MapLoader() {
  const MapSection = dynamic(() => import("@/components/map-section").then((mod) => mod.MapSection), {
    ssr: false,
    loading: () => <div className="w-full h-[500px] bg-muted/30 flex items-center justify-center"><p>Cargando mapa...</p></div>,
  })

  return <MapSection />
}
