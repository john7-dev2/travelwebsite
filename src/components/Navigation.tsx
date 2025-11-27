import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isHome = location.pathname === "/";

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground">Travel Sample</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/destinations" className="text-foreground hover:text-primary transition-colors font-medium">
              Destinations
            </Link>
            {isHome && (
              <a href="#experiences" className="text-foreground hover:text-primary transition-colors font-medium">
                Experiences
              </a>
            )}
            {isHome && (
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
                Reviews
              </a>
            )}
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/booking">
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary text-white">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors z-50 relative"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40 animate-fade-in"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed top-14 sm:top-16 left-0 right-0 bottom-0 bg-background border-t border-border z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-1">
              <Link
                to="/destinations"
                className="text-foreground hover:text-primary hover:bg-muted/50 transition-all font-medium py-3 px-4 rounded-lg active:scale-95"
                onClick={toggleMenu}
              >
                Destinations
              </Link>
              {isHome && (
                <a
                  href="#experiences"
                  className="text-foreground hover:text-primary hover:bg-muted/50 transition-all font-medium py-3 px-4 rounded-lg active:scale-95"
                  onClick={toggleMenu}
                >
                  Experiences
                </a>
              )}
              {isHome && (
                <a
                  href="#testimonials"
                  className="text-foreground hover:text-primary hover:bg-muted/50 transition-all font-medium py-3 px-4 rounded-lg active:scale-95"
                  onClick={toggleMenu}
                >
                  Reviews
                </a>
              )}
              <Link
                to="/about"
                className="text-foreground hover:text-primary hover:bg-muted/50 transition-all font-medium py-3 px-4 rounded-lg active:scale-95"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-primary hover:bg-muted/50 transition-all font-medium py-3 px-4 rounded-lg active:scale-95"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-3 pt-6 mt-4 border-t border-border">
                <Link to="/booking" onClick={toggleMenu}>
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-base py-6 rounded-xl shadow-lg active:scale-95 transition-transform">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
