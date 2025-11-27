import { Search, MapPin, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMAGES } from "@/constants/images";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background">
      {/* Decorative Blobs - Adjusted for mobile */}
      <div className="absolute top-20 -right-20 sm:-right-40 w-64 h-64 sm:w-96 sm:h-96 bg-primary/20 blob animate-blob" />
      <div className="absolute -bottom-20 -left-10 sm:-left-20 w-60 h-60 sm:w-80 sm:h-80 bg-secondary/15 blob animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 sm:w-60 sm:h-60 bg-accent/15 blob animate-blob" style={{ animationDelay: "4s" }} />
      
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-40" style={{ background: 'var(--gradient-mesh)' }} />

      <div className="container mx-auto px-4 py-16 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content - Asymmetric */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border-2 border-primary/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">Explore Beyond Boundaries</span>
            </div>
            
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] sm:leading-tight">
              <span className="block text-foreground">Journey</span>
              <span className="block text-gradient text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl">Into</span>
              <span className="block text-foreground">Wonder</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Transform ordinary moments into extraordinary adventures across the globe's most captivating destinations.
            </p>

            {/* Search Bar - Diagonal Design */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl sm:rounded-3xl blur opacity-30" />
              <div className="relative bg-card border-2 border-border p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl">
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  <div className="flex items-center gap-2 sm:gap-3 bg-muted/50 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <Input 
                      placeholder="Where to?" 
                      className="border-0 focus-visible:ring-0 bg-transparent placeholder:text-muted-foreground text-sm sm:text-base p-0 h-auto"
                    />
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 bg-muted/50 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                    <Input 
                      type="date" 
                      className="border-0 focus-visible:ring-0 bg-transparent text-sm sm:text-base p-0 h-auto"
                    />
                  </div>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4 shadow-lg text-sm sm:text-base w-full sm:w-auto">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Explore
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats - Creative Layout */}
            <div className="flex gap-6 sm:gap-8 md:gap-10 pt-6 sm:pt-8 justify-start">
              <div className="relative">
                <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gradient whitespace-nowrap">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Destinations</div>
                <div className="absolute -right-3 sm:-right-4 md:-right-5 top-0 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
              </div>
              <div className="relative">
                <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gradient whitespace-nowrap">50K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Explorers</div>
                <div className="absolute -right-3 sm:-right-4 md:-right-5 top-0 w-0.5 h-full bg-gradient-to-b from-secondary to-transparent" />
              </div>
              <div>
                <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gradient whitespace-nowrap">4.9★</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image - Asymmetric with Decorative Frame */}
          <div className="relative hidden lg:block animate-slide-in-right">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary via-secondary to-accent rounded-[3rem] rotate-3 opacity-20" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-background">
              <img 
                src={IMAGES.heroTravel} 
                alt="Tropical paradise destination with crystal clear waters and palm trees" 
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              {/* Floating Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass p-5 rounded-2xl float">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl font-bold text-foreground mb-1 truncate">Tropical Paradise</div>
                    <div className="text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm truncate">Maldives, Indian Ocean</span>
                    </div>
                  </div>
                  <div className="bg-accent text-accent-foreground px-5 py-2.5 rounded-full font-bold text-lg shadow-lg flex-shrink-0">
                    $2,499
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
