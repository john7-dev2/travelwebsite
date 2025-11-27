import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import ExperienceCard from "@/components/ExperienceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Globe, Heart } from "lucide-react";
import { Destination, Experience, Testimonial } from "@/types";

import { IMAGES } from "@/constants/images";

const Index = () => {
  const destinations: Destination[] = [
    {
      image: IMAGES.maldives,
      title: "Maldives",
      location: "Indian Ocean",
      rating: 4.9,
      reviews: 2341,
      price: "From $2,499"
    },
    {
      image: IMAGES.santorini,
      title: "Santorini",
      location: "Greece",
      rating: 4.8,
      reviews: 1876,
      price: "From $1,899"
    },
    {
      image: IMAGES.bali,
      title: "Bali",
      location: "Indonesia",
      rating: 4.9,
      reviews: 3204,
      price: "From $1,299"
    },
    {
      image: IMAGES.swissAlps,
      title: "Swiss Alps",
      location: "Switzerland",
      rating: 4.7,
      reviews: 1543,
      price: "From $2,799"
    }
  ];

  const experiences: Experience[] = [
    {
      image: IMAGES.diving,
      title: "Scuba Diving Adventure",
      category: "Water Sports",
      duration: "4 hours",
      groupSize: "Max 8"
    },
    {
      image: IMAGES.balloons,
      title: "Hot Air Balloon Ride",
      category: "Adventure",
      duration: "3 hours",
      groupSize: "Max 12"
    },
    {
      image: IMAGES.safari,
      title: "African Safari",
      category: "Wildlife",
      duration: "Full day",
      groupSize: "Max 6"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "The trip to Bali was absolutely magical! Every detail was perfectly planned and the experiences were unforgettable. This is how travel should be!"
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      text: "From booking to the actual trip, everything exceeded expectations. The local guides were fantastic and knew all the hidden gems that made it special."
    },
    {
      name: "Emma Williams",
      location: "London, UK",
      rating: 5,
      text: "I've used many travel services, but this stands out. Professional, attentive, and they truly care about creating memorable experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />

      {/* Popular Destinations - Asymmetric Layout */}
      <section id="destinations" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 blob" />
        <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-secondary/10 blob" style={{ animationDelay: "3s" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16 lg:mb-20">
            <div className="lg:w-1/3 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border-2 border-primary/30 rounded-full mb-4 sm:mb-6">
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-semibold text-primary">Top Picks</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="block text-foreground">Discover</span>
                <span className="block text-gradient">Paradise</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Handpicked destinations that blend natural beauty with authentic cultural experiences.
              </p>
              <Link to="/destinations">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 active:scale-95 text-white font-bold rounded-full px-6 sm:px-8 py-5 sm:py-6 shadow-lg text-sm sm:text-base transition-transform"
                >
                  View All Destinations
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {destinations.map((dest, index) => (
                <DestinationCard key={index} {...dest} delay={index * 0.15} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experiences - Creative Layout */}
      <section id="experiences" className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 border-2 border-secondary/30 rounded-full mb-4 sm:mb-6">
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
              <span className="text-xs sm:text-sm font-semibold text-secondary">Curated Adventures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block text-foreground">Epic</span>
              <span className="block text-gradient">Experiences</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Dive into extraordinary adventures designed to create lasting memories and stories worth sharing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Diagonal Section */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden bg-foreground/5">
        <div className="absolute top-0 right-0 w-80 h-80 sm:w-[600px] sm:h-[600px] bg-accent/10 blob rotate-slow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border-2 border-accent/30 rounded-full mb-4 sm:mb-6">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent fill-accent" />
              <span className="text-xs sm:text-sm font-semibold text-accent">Traveler Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block text-gradient">Real Stories,</span>
              <span className="block text-foreground">Real Adventures</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Join thousands who've transformed their travel dreams into reality
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Asymmetric */}
      <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div className="animate-slide-in-left space-y-6 sm:space-y-8">
                <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block text-foreground">Your Next</span>
                  <span className="block text-gradient text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">Adventure</span>
                  <span className="block text-foreground">Awaits</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Let's craft your perfect journey together. Personalized itineraries, exclusive deals, unforgettable moments.
                </p>
              </div>
              
              <div className="animate-slide-in-right space-y-4 sm:space-y-6">
                <Link to="/booking" className="block">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 active:scale-[0.98] text-white text-base sm:text-lg md:text-xl py-5 sm:py-6 md:py-8 rounded-xl sm:rounded-2xl font-bold shadow-2xl group transition-transform"
                  >
                    Start Planning Now
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact" className="block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-base sm:text-lg md:text-xl py-5 sm:py-6 md:py-8 rounded-xl sm:rounded-2xl border-2 hover:bg-muted active:scale-[0.98] font-bold transition-transform"
                  >
                    Talk to an Expert
                  </Button>
                </Link>
                
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-6 sm:pt-8">
                  <div className="text-center p-3 sm:p-4 bg-card rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-border">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gradient">24/7</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1">Support</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-card rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-border">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gradient">100%</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1">Secure</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-card rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-border">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gradient">Free</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1 leading-tight">Cancellation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
