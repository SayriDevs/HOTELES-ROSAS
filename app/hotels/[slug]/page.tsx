import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { HotelHero } from "@/components/hotel-hero"
import { RoomGallery } from "@/components/room-gallery"
import { HotelAmenities } from "@/components/hotel-amenities"
import { ChatbotWidget } from "@/components/chatbot-widget"

const hotelsData = {
  hilton: {
    name: "Hotel Hilton",
    description: "Elegancia clásica y servicio excepcional en el corazón de la ciudad",
    longDescription:
      "El Hotel Hilton combina la tradición hotelera con las comodidades modernas, ofreciendo una experiencia de lujo incomparable. Ubicado estratégicamente en el centro financiero, nuestro hotel es el refugio perfecto para viajeros de negocios y turistas que buscan sofisticación y confort.",
    location: "Centro Financiero, Av. Principal 123",
    phone: "+1 (555) 123-4567",
    email: "reservas@hilton-luxury.com",
    rating: 4.8,
    totalRooms: 120,
    heroImage: "/hilton-exterior.png",
    color: "blue",
    amenities: [
      "WiFi gratuito de alta velocidad",
      "Centro de negocios 24/7",
      "Gimnasio completamente equipado",
      "Restaurante gourmet",
      "Servicio de habitaciones 24h",
      "Valet parking",
      "Spa y centro de bienestar",
      "Piscina climatizada",
    ],
  },
  ritz: {
    name: "Hotel Ritz",
    description: "Lujo refinado y tradición centenaria con servicios de clase mundial",
    longDescription:
      "El Hotel Ritz es sinónimo de elegancia atemporal y servicio impecable. Con más de un siglo de historia, cada suite cuenta una historia de lujo y distinción. Nuestros huéspedes disfrutan de una experiencia personalizada que define el estándar de la hospitalidad de lujo.",
    location: "Zona Exclusiva, Boulevard Elegante 456",
    phone: "+1 (555) 234-5678",
    email: "concierge@ritz-luxury.com",
    rating: 4.9,
    totalRooms: 85,
    heroImage: "/ritz-exterior.png",
    color: "amber",
    amenities: [
      "Servicio de mayordomo personal",
      "Restaurante con estrella Michelin",
      "Spa de lujo con tratamientos exclusivos",
      "Biblioteca privada",
      "Salón de té tradicional",
      "Jardines privados",
      "Servicio de limusina",
      "Club de caballeros",
    ],
  },
  vegas: {
    name: "Hotel Vegas",
    description: "Entretenimiento y glamour sin límites en un ambiente vibrante",
    longDescription:
      "El Hotel Vegas redefine el entretenimiento de lujo con su ambiente vibrante y servicios excepcionales. Desde espectáculos de clase mundial hasta experiencias gastronómicas únicas, cada momento en nuestro hotel es una celebración de la vida y el glamour.",
    location: "Distrito de Entretenimiento, Strip Dorado 789",
    phone: "+1 (555) 345-6789",
    email: "info@vegas-luxury.com",
    rating: 4.7,
    totalRooms: 200,
    heroImage: "/vegas-exterior.png",
    color: "purple",
    amenities: [
      "Casino de lujo",
      "Teatro para espectáculos",
      "Múltiples restaurantes temáticos",
      "Discoteca exclusiva",
      "Piscina con fiestas",
      "Spa de relajación",
      "Tiendas de diseñador",
      "Salones VIP",
    ],
  },
  venus: {
    name: "Hotel Venus",
    description: "Experiencia celestial y confort supremo con vistas panorámicas",
    longDescription:
      "El Hotel Venus ofrece una experiencia celestial única con vistas panorámicas incomparables. Diseñado para aquellos que buscan tranquilidad y lujo en perfecta armonía, cada habitación es un santuario de paz con las mejores vistas de la ciudad.",
    location: "Vista Panorámica, Colina Celestial 321",
    phone: "+1 (555) 456-7890",
    email: "reservations@venus-luxury.com",
    rating: 4.8,
    totalRooms: 150,
    heroImage: "/venus-exterior.png",
    color: "rose",
    amenities: [
      "Vistas panorámicas 360°",
      "Observatorio astronómico",
      "Jardín zen privado",
      "Spa celestial",
      "Restaurante con vista",
      "Terraza infinity",
      "Yoga al amanecer",
      "Servicio de astronomía",
    ],
  },
}

const roomTypes = {
  hilton: [
    {
      name: "Suite Ejecutiva",
      description: "Elegante suite con área de trabajo, sala de estar separada y vistas al centro financiero.",
      size: "65 m²",
      capacity: "2 adultos",
      price: "$450/noche",
      image: "/hilton-executive-suite.png",
      amenities: ["Escritorio ejecutivo", "Sala de estar", "Minibar premium", "Baño de mármol"],
    },
    {
      name: "Habitación Deluxe",
      description: "Habitación espaciosa con decoración clásica y todas las comodidades modernas.",
      size: "45 m²",
      capacity: "2 adultos",
      price: "$320/noche",
      image: "/hilton-deluxe-room.png",
      amenities: ["Cama king size", "Área de trabajo", "Baño completo", "Vista a la ciudad"],
    },
    {
      name: "Suite Presidencial",
      description: "La máxima expresión del lujo con sala de juntas privada y servicio de mayordomo.",
      size: "120 m²",
      capacity: "4 adultos",
      price: "$850/noche",
      image: "/hilton-presidential-suite.png",
      amenities: ["Sala de juntas", "Mayordomo personal", "Cocina completa", "Terraza privada"],
    },
  ],
  ritz: [
    {
      name: "Suite Imperial",
      description: "Suite de lujo con decoración clásica europea y servicio de mayordomo personalizado.",
      size: "80 m²",
      capacity: "2 adultos",
      price: "$650/noche",
      image: "/ritz-imperial-suite.png",
      amenities: ["Mayordomo personal", "Chimenea", "Baño de mármol", "Balcón francés"],
    },
    {
      name: "Habitación Royal",
      description: "Elegante habitación con mobiliario de época y vistas a los jardines privados.",
      size: "55 m²",
      capacity: "2 adultos",
      price: "$480/noche",
      image: "/ritz-royal-room.png",
      amenities: ["Mobiliario de época", "Vista a jardines", "Baño de lujo", "Servicio de té"],
    },
    {
      name: "Suite Penthouse",
      description: "La suite más exclusiva con terraza privada y acceso directo al spa.",
      size: "150 m²",
      capacity: "4 adultos",
      price: "$1200/noche",
      image: "/ritz-penthouse.png",
      amenities: ["Terraza privada", "Acceso directo al spa", "Cocina gourmet", "Sala de estar"],
    },
  ],
  vegas: [
    {
      name: "Suite Glamour",
      description: "Suite vibrante con decoración moderna y acceso VIP al casino.",
      size: "70 m²",
      capacity: "2 adultos",
      price: "$380/noche",
      image: "/vegas-glamour-suite.png",
      amenities: ["Acceso VIP casino", "Bar privado", "Jacuzzi", "Vista al strip"],
    },
    {
      name: "Habitación Show",
      description: "Habitación temática con vistas al teatro y decoración de espectáculo.",
      size: "50 m²",
      capacity: "2 adultos",
      price: "$280/noche",
      image: "/vegas-show-room.png",
      amenities: ["Vista al teatro", "Decoración temática", "Sistema de sonido", "Iluminación LED"],
    },
    {
      name: "Suite Celebrity",
      description: "Suite de lujo para celebridades con entrada privada y servicio exclusivo.",
      size: "100 m²",
      capacity: "4 adultos",
      price: "$750/noche",
      image: "/vegas-celebrity-suite.png",
      amenities: ["Entrada privada", "Servicio exclusivo", "Sala de fiestas", "Terraza VIP"],
    },
  ],
  venus: [
    {
      name: "Suite Celestial",
      description: "Suite con vistas panorámicas y acceso privado al observatorio astronómico.",
      size: "75 m²",
      capacity: "2 adultos",
      price: "$520/noche",
      image: "/venus-celestial-suite.png",
      amenities: ["Vista panorámica", "Acceso al observatorio", "Telescopio privado", "Terraza zen"],
    },
    {
      name: "Habitación Estrella",
      description: "Habitación serena con vistas al jardín zen y decoración minimalista.",
      size: "60 m²",
      capacity: "2 adultos",
      price: "$420/noche",
      image: "/venus-star-room.png",
      amenities: ["Vista al jardín zen", "Decoración minimalista", "Área de meditación", "Baño spa"],
    },
    {
      name: "Suite Infinity",
      description: "La suite más exclusiva con terraza infinity y vistas de 360 grados.",
      size: "130 m²",
      capacity: "4 adultos",
      price: "$950/noche",
      image: "/venus-infinity-suite.png",
      amenities: ["Terraza infinity", "Vista 360°", "Jacuzzi exterior", "Sala de yoga privada"],
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
      <RoomGallery rooms={rooms} hotelName={hotel.name} />
      <HotelAmenities amenities={hotel.amenities} hotelName={hotel.name} />
      <ChatbotWidget />
    </main>
  )
}
