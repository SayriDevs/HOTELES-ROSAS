"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const locations = [
  {
    name: "Hotel Vegas",
    iframe: `<iframe src="https://www.google.com/maps/embed?pb=!4v1755798004185!6m8!1m7!1shcAszFgax2id0lyXsTpB6w!2m2!1d-12.00466285277052!2d-77.00510246179547!3f234.9788544567365!4f13.178634655875555!5f0.7820865974627469" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    name: "Hotel Ritz",
    iframe: `<iframe src="https://www.google.com/maps/embed?pb=!3m2!1ses-419!2spe!4v1755798150632!5m2!1ses-419!2spe!6m8!1m7!1s23zB49Zauz1MTF0Mdek8qQ!2m2!1d-12.00457993362086!2d-77.00514631176918!3f82.17384735766197!4f14.43841138219716!5f0.7820865974627469" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    name: "Hotel Hilton",
    iframe: `<iframe src="https://www.google.com/maps/embed?pb=!4v1755798783761!6m8!1m7!1sfRgpvovIAgBGitOuqbX4Dg!2m2!1d-12.00436321635708!2d-77.00514798140715!3f150.34937143887115!4f17.370729949657616!5f0.7820865974627469" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    name: "Hotel Venus",
    iframe: `<iframe src="https://www.google.com/maps/embed?pb=!4v1755798689084!6m8!1m7!1sxlKOQObUzk5LpzrM-PkjzA!2m2!1d-12.00356281369926!2d-77.00255966348512!3f57.93!4f18.349999999999994!5f0.7820865974627469" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
]

export function StaticMapSection() {
  return (
    <section id="ubicacion" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Nuestras Ubicaciones</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuéntranos en los mejores puntos de la ciudad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{location.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {location.iframe ? (
                  <div
                    className="w-full h-[300px] rounded-md overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: location.iframe }}
                  />
                ) : (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{location.address}</p>
                    <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full">Ver en Google Maps</Button>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
