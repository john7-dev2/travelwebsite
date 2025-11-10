import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Search, MapPin, Compass } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative Elements */}
            <div className="relative mb-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blob animate-blob" />
              <div className="absolute top-20 right-1/4 w-60 h-60 bg-secondary/10 blob animate-blob" style={{ animationDelay: "2s" }} />
              
              <div className="relative z-10 py-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border-2 border-accent/30 rounded-full mb-8">
                  <Compass className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">Lost Explorer</span>
                </div>

                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
                  <span className="block text-gradient">404</span>
                </h1>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="block text-foreground">Oops! This Path</span>
                  <span className="block text-foreground">Doesn't Exist</span>
                </h2>

                <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                  Looks like you've wandered off the beaten path. Don't worry, even the best explorers get lost sometimes. 
                  Let's get you back to discovering amazing destinations!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full px-8 shadow-lg group">
                      <Home className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                      Back to Home
                    </Button>
                  </Link>
                  
                  <Link to="/destinations">
                    <Button size="lg" variant="outline" className="rounded-full px-8 border-2 font-bold group">
                      <MapPin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Explore Destinations
                    </Button>
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="mt-16 pt-8 border-t border-border">
                  <p className="text-muted-foreground mb-6">Popular destinations you might be looking for:</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {["Maldives", "Santorini", "Bali", "Swiss Alps", "Paris", "Tokyo"].map((destination) => (
                      <Link 
                        key={destination}
                        to="/destinations" 
                        className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm font-medium transition-colors hover:text-primary"
                      >
                        {destination}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
