import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { HotelHero } from "@/components/hotel-hero";
import { HotelAmenities } from "@/components/hotel-amenities";
import { ChatbotWidget } from "@/components/chatbot-widget";
import { hotelsData } from "@/lib/hotels";

export async function generateStaticParams() {
  const hotelSlugs = Object.keys(hotelsData);
  return hotelSlugs.map((slug) => ({
    slug: slug,
  }));
}

// Corregido: Las props ahora son promesas
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Corregido: El componente de la página es async y usa await para las props
export default async function HotelPage({ params }: Props) {
  const resolvedParams = await params;
  const hotelData = hotelsData[resolvedParams.slug as keyof typeof hotelsData];

  if (!hotelData) {
    notFound();
  }

  const hotel = hotelData;

  return (
    <main className="min-h-screen">
      <Navigation />
      <HotelHero hotel={hotel} />
      <HotelAmenities amenities={hotel.amenities} hotelName={hotel.name} />
      <ChatbotWidget />
    </main>
  );
}
