import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-3 sm:mb-4">Travel Sample</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Your gateway to extraordinary travel experiences around the globe.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all duration-300 w-10 h-10 sm:w-11 sm:h-11"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Destinations", "Experiences", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm sm:text-base text-muted-foreground hover:text-primary active:text-primary transition-colors duration-300 inline-block py-1">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">Contact Us</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0 text-primary" />
                <span className="text-sm sm:text-base leading-relaxed">123 Travel Street, Adventure City, AC 12345</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-primary" />
                <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-primary" />
                <span className="text-sm sm:text-base break-all">hello@travelsample.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">Newsletter</h4>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              Subscribe to get special offers and travel tips
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-background text-sm sm:text-base h-10 sm:h-11"
              />
              <Button className="bg-primary hover:bg-primary/90 active:scale-95 text-primary-foreground shrink-0 h-10 sm:h-11 text-sm sm:text-base transition-transform">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-border text-center text-muted-foreground">
          <p className="text-xs sm:text-sm">&copy; 2024 Travel Sample. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
