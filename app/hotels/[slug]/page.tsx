import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { HotelHero } from "@/components/hotel-hero"
import { RoomGallery } from "@/components/room-gallery"
import { HotelAmenities } from "@/components/hotel-amenities"
import { ChatbotWidget } from "@/components/chatbot-widget"

const hotelsData = {
  hilton: {
    name: "Hotel Hilton",
    description: "Elegancia clásica con la comodidad de un ascensor privado.",
    longDescription:
      "El Hotel Hilton combina la tradición hotelera con las comodidades modernas, ofreciendo una experiencia de lujo incomparable. Ubicado estratégicamente, nuestro hotel es el refugio perfecto para viajeros que buscan sofisticación y confort, contando además con un moderno ascensor para su total comodidad.",
    location: "Jr. Las Perlas con Av. Jardines",
    phone: "+1 (555) 123-4567",
    email: "reservas@hilton-luxury.com",
    totalRooms: 120,
    heroImage: "/hilton-exterior.png",
    color: "blue",
    amenities: [
      "Baño propio",
      "Cama de 2 plazas",
      "Agua caliente",
      "Internet",
      "Ascensor",
      "Cochera",
      "Servicio de habitaciones 24h",
      "Smart TV de 60 pulgadas",
    ],
  },
  ritz: {
    name: "Hotel Ritz",
    description: "Lujo asequible con tarifas flexibles por noche o por horas.",
    longDescription:
      "El Hotel Ritz es sinónimo de elegancia asequible. Disfrute de nuestro lujo y distinción con tarifas flexibles que se adaptan a sus necesidades: S/ 40 por la noche completa o S/ 30 por una estancia de 6 horas. Una opción inteligente para viajeros que buscan confort y buen precio.",
    location: "Jr. Las Perlas con Av. Jardines",
    phone: "+1 (555) 234-5678",
    email: "concierge@ritz-luxury.com",
    totalRooms: 85,
    heroImage: "/ritz-exterior.png",
    color: "amber",
    amenities: [
      "Baño propio",
      "Cama de 2 plazas",
      "Agua caliente",
      "Internet",
      "Cochera",
      "Tarifas flexibles",
      "Servicio de habitaciones 24h",
      "Smart TV de 60 pulgadas",
    ],
  },
  vegas: {
    name: "Hotel Vegas",
    description: "El más nuevo y moderno, con Smart TVs de 60 pulgadas.",
    longDescription:
      "Como el hotel más nuevo de la cadena, el Hotel Vegas redefine el entretenimiento de lujo. Disfrute de un ambiente vibrante y la última tecnología, con impresionantes Smart TVs de 60 pulgadas en todas nuestras habitaciones para una experiencia visual inigualable.",
    location: "Jr. Las Perlas con Av. Jardines",
    phone: "+1 (555) 345-6789",
    email: "info@vegas-luxury.com",
    totalRooms: 200,
    heroImage: "/vegas-exterior.png",
    color: "purple",
    amenities: [
      "Baño propio",
      "Cama de 2 plazas",
      "Agua caliente",
      "Internet",
      "Cochera",
      "Servicio de habitaciones 24h",
      "Smart TV de 60 pulgadas",
    ],
  },
  venus: {
    name: "Hotel Venus",
    description: "Ideal para grupos y familias, con habitaciones dobles y triples.",
    longDescription:
      "El Hotel Venus es ideal para viajeros en grupo o familias, ofreciendo cómodas y espaciosas habitaciones dobles y triples. Disfrute de una experiencia celestial en una ubicación privilegiada. (Este hotel no cuenta con cochera).",
    location: "Av. 13 de Enero con Orquideas",
    phone: "+1 (555) 456-7890",
    email: "reservations@venus-luxury.com",
    totalRooms: 150,
    heroImage: "/venus-exterior.png",
    color: "rose",
    amenities: [
      "Baño propio",
      "Cama de 2 plazas",
      "Agua caliente",
      "Internet",
      "Habitaciones dobles",
      "Habitaciones triples",
      "Servicio de habitaciones 24h",
      "Smart TV de 60 pulgadas",
    ],
  },
}

const roomTypes = {
  hilton: [
    {
      name: "Habitación Estándar",
      description: "Confort y elegancia con todas las facilidades modernas para una estancia placentera.",
      size: "45 m²",
      capacity: "2 adultos",
      price: "$320/noche",
      image: "/hilton-deluxe-room.png",
      amenities: ["Cama de 2 plazas", "Baño propio", "Agua caliente", "Internet y Smart TV"],
    },
  ],
  ritz: [
    {
      name: "Habitación Económica",
      description: "Confortable y funcional. Ideal para estancias cortas. Tarifa especial por 6 horas disponible.",
      size: "40 m²",
      capacity: "2 adultos",
      price: "S/ 40 por noche (o S/ 30 por 6 horas)",
      image: "/ritz-royal-room.png",
      amenities: ["Cama de 2 plazas", "Baño propio", "Agua caliente", "Internet y Smart TV"],
    },
  ],
  vegas: [
    {
      name: "Habitación Ultra HD",
      description: "Sumérgete en el entretenimiento con una Smart TV de 60 pulgadas y un ambiente moderno.",
      size: "50 m²",
      capacity: "2 adultos",
      price: "$280/noche",
      image: "/vegas-show-room.png",
      amenities: ["Smart TV de 60 pulgadas", "Cama de 2 plazas", "Baño propio", "Agua caliente", "Internet"],
    },
  ],
  venus: [
    {
      name: "Habitación Doble",
      description: "Perfecta para familias o amigos, equipada con dos cómodas camas de 2 plazas.",
      size: "60 m²",
      capacity: "4 adultos",
      price: "$420/noche",
      image: "/venus-star-room.png",
      amenities: ["2 camas de 2 plazas", "Baño propio", "Agua caliente", "Internet y Smart TV"],
    },
    {
      name: "Habitación Triple",
      description: "Espacio y confort para grupos, con tres camas de 2 plazas para una estancia ideal.",
      size: "75 m²",
      capacity: "6 adultos",
      price: "$520/noche",
      image: "/venus-celestial-suite.png",
      amenities: ["3 camas de 2 plazas", "Baño propio", "Agua caliente", "Internet y Smart TV"],
    },
  ],
}

export default function HotelPage({ params }: { params: { slug: string } }) {
  const hotel = hotelsData[params.slug as keyof typeof hotelsData]
  const rooms = roomTypes[params.slug as keyof typeof roomTypes]

  if (!hotel) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <HotelHero hotel={hotel} />
      <HotelAmenities amenities={hotel.amenities} hotelName={hotel.name} />
      <RoomGallery rooms={rooms} hotelName={hotel.name} />
      <ChatbotWidget />
    </main>
  )
}
