import { Search, MapPin, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMAGES } from "@/constants/images";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Decorative Blobs */}
      <div className="absolute top-20 -right-40 w-96 h-96 bg-primary/20 blob animate-blob" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/15 blob animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-accent/15 blob animate-blob" style={{ animationDelay: "4s" }} />
      
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-40" style={{ background: 'var(--gradient-mesh)' }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Asymmetric */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Explore Beyond Boundaries</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="block text-foreground">Journey</span>
              <span className="block text-gradient text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Into</span>
              <span className="block text-foreground">Wonder</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-lg leading-relaxed">
              Transform ordinary moments into extraordinary adventures across the globe's most captivating destinations.
            </p>

            {/* Search Bar - Diagonal Design */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur opacity-30" />
              <div className="relative bg-card border-2 border-border p-4 rounded-3xl shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 flex items-center gap-3 bg-muted/50 rounded-2xl px-3 sm:px-4 py-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <Input 
                      placeholder="Where to?" 
                      className="border-0 focus-visible:ring-0 bg-transparent placeholder:text-muted-foreground text-sm sm:text-base"
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-3 bg-muted/50 rounded-2xl px-3 sm:px-4 py-3">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                    <Input 
                      type="date" 
                      className="border-0 focus-visible:ring-0 bg-transparent text-sm sm:text-base"
                    />
                  </div>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold rounded-2xl px-6 sm:px-8 py-3 shadow-lg text-sm sm:text-base">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Explore
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats - Creative Layout */}
            <div className="flex gap-4 sm:gap-6 md:gap-8 pt-8 overflow-x-auto">
              <div className="relative flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Destinations</div>
                <div className="absolute -right-2 sm:-right-3 md:-right-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent" />
              </div>
              <div className="relative flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">50K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Explorers</div>
                <div className="absolute -right-2 sm:-right-3 md:-right-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent" />
              </div>
              <div className="flex-shrink-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">4.9★</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image - Asymmetric with Decorative Frame */}
          <div className="relative lg:block hidden animate-slide-in-right">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary via-secondary to-accent rounded-[3rem] rotate-3 opacity-20" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-background">
              <img 
                src={IMAGES.heroTravel} 
                alt="Tropical paradise destination with crystal clear waters and palm trees" 
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />
              {/* Floating Card Overlay */}
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl float">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">Tropical Paradise</div>
                    <div className="text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Maldives, Indian Ocean</span>
                    </div>
                  </div>
                  <div className="bg-accent text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg shadow-lg">
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
