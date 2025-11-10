import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Travel Sample</span>
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
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/destinations"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                Destinations
              </Link>
              {isHome && (
                <a
                  href="#experiences"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={toggleMenu}
                >
                  Experiences
                </a>
              )}
              {isHome && (
                <a
                  href="#testimonials"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={toggleMenu}
                >
                  Reviews
                </a>
              )}
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Link to="/booking" onClick={toggleMenu}>
                  <Button size="sm" className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
