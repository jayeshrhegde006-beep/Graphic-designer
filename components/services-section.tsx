"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  Printer, 
  FileImage, 
  Lightbulb, 
  Signpost, 
  Sticker, 
  Flag, 
  Heart, 
  CreditCard, 
  FileText, 
  Shirt, 
  AlertTriangle,
  MonitorSpeaker,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Printer,
    title: "Flex Printing",
    description: "High-quality flex banners for outdoor advertising and promotions",
    color: "from-orange-500/20 to-amber-500/20",
    image: "/images/services/flex-printing.jpg",
  },
  {
    icon: FileImage,
    title: "Vinyl Printing",
    description: "Durable vinyl prints for vehicles, windows, and surfaces",
    color: "from-blue-500/20 to-cyan-500/20",
    image: "/images/services/vinyl-printing.jpg",
  },
  {
    icon: Printer,
    title: "Offset Printing",
    description: "Professional offset printing for bulk orders and publications",
    color: "from-green-500/20 to-emerald-500/20",
    image: "/images/services/flex-printing.jpg",
  },
  {
    icon: Lightbulb,
    title: "Glow Sign Boards",
    description: "Eye-catching illuminated signage for shops and businesses",
    color: "from-yellow-500/20 to-orange-500/20",
    image: "/images/services/glow-sign.jpg",
  },
  {
    icon: Signpost,
    title: "Hoardings",
    description: "Large format outdoor advertising solutions",
    color: "from-purple-500/20 to-pink-500/20",
    image: "/images/services/hoarding.jpg",
  },
  {
    icon: Sticker,
    title: "Stickers & Labels",
    description: "Custom stickers and product labels in all shapes and sizes",
    color: "from-red-500/20 to-rose-500/20",
    image: "/images/services/vinyl-printing.jpg",
  },
  {
    icon: Flag,
    title: "Banners & Posters",
    description: "Vibrant banners and posters for events and marketing",
    color: "from-teal-500/20 to-cyan-500/20",
    image: "/images/services/banners.jpg",
  },
  {
    icon: Heart,
    title: "Wedding Cards",
    description: "Elegant invitation cards for weddings and special occasions",
    color: "from-pink-500/20 to-rose-500/20",
    image: "/images/services/business-cards.jpg",
  },
  {
    icon: CreditCard,
    title: "Business Cards",
    description: "Premium business cards that make lasting impressions",
    color: "from-indigo-500/20 to-blue-500/20",
    image: "/images/services/business-cards.jpg",
  },
  {
    icon: FileText,
    title: "Brochures & Flyers",
    description: "Informative brochures and flyers for marketing campaigns",
    color: "from-amber-500/20 to-yellow-500/20",
    image: "/images/services/flex-printing.jpg",
  },
  {
    icon: Shirt,
    title: "T-Shirt Printing",
    description: "Custom t-shirt printing for teams, events, and merchandise",
    color: "from-violet-500/20 to-purple-500/20",
    image: "/images/services/vinyl-printing.jpg",
  },
  {
    icon: AlertTriangle,
    title: "Safety Signs",
    description: "Industrial and workplace safety signage solutions",
    color: "from-orange-500/20 to-red-500/20",
    image: "/images/services/glow-sign.jpg",
  },
  {
    icon: MonitorSpeaker,
    title: "Standee & Canopy",
    description: "Promotional standees and canopy printing for exhibitions",
    color: "from-sky-500/20 to-blue-500/20",
    image: "/images/services/banners.jpg",
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Complete Printing & Branding{" "}
            <span className="text-primary glow-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From small business cards to large hoardings, we offer comprehensive printing 
            services to meet all your branding and advertising needs.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Service Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              
              <div className="relative z-10 p-6 pt-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors -mt-10 relative z-20 border border-border">
                  <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Arrow on hover */}
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box px-8">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
