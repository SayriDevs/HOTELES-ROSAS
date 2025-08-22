import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { HotelHero } from "@/components/hotel-hero"
import { HotelAmenities } from "@/components/hotel-amenities"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { hotelsData } from "@/lib/hotels"

export async function generateStaticParams() {
  const hotelSlugs = Object.keys(hotelsData)

  return hotelSlugs.map((slug) => ({
    slug: slug,
  }))
}

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function HotelPage({ params }: Props) {
  const hotelData = hotelsData[params.slug as keyof typeof hotelsData]

  if (!hotelData) {
    notFound()
  }

  const hotel = hotelData

  return (
    <main className="min-h-screen">
      <Navigation />
      <HotelHero hotel={hotel} />
      <HotelAmenities amenities={hotel.amenities} hotelName={hotel.name} />
      <ChatbotWidget />
    </main>
  )
}
