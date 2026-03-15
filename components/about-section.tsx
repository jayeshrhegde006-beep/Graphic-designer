"use client"

import { Award, Users, Target, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Excellence Since 2009",
    description: "Over 15 years of delivering premium printing solutions",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Dedicated support team ensuring your satisfaction",
  },
  {
    icon: Target,
    title: "Precision Quality",
    description: "State-of-the-art equipment for perfect results",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Creative approaches to meet your branding needs",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Crafting Print Excellence for{" "}
              <span className="text-primary glow-text">Over a Decade</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2009 by <strong className="text-foreground">Ramesh Gaud</strong>, Sai Graphics has grown from 
              a small printing shop to one of the most trusted names in printing and branding solutions 
              in the Thane district.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our mission is simple: provide affordable, high-quality printing services that help 
              businesses stand out. From flex banners to premium business cards, we bring your 
              vision to life with precision and creativity.
            </p>
            
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-4 hover:border-primary/50 transition-all duration-300 group"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-1 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
              <div className="absolute inset-4 glass rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl font-bold text-primary glow-text mb-4">15+</div>
                  <div className="text-2xl font-semibold text-foreground mb-2">Years of Excellence</div>
                  <div className="text-muted-foreground">
                    Serving businesses across Mumbai & Thane
                  </div>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary rounded-br-2xl" />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 glow-box">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="absolute -top-6 -right-6 glass rounded-xl p-4 glow-box">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Projects Done</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
