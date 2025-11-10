import { MapPin, Star, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DestinationCardProps } from "@/types";

// Component uses proper TypeScript interfaces for type safety

const DestinationCard = ({ 
  image, 
  title, 
  location, 
  rating, 
  reviews, 
  price,
  delay = 0 
}: DestinationCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden border-0 bg-card card-hover animate-slide-up cursor-pointer" 
      style={{ 
        animationDelay: `${delay}s`,
        boxShadow: 'var(--shadow-card)'
      }}
    >
      {/* Image with Overlay */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Floating Price Tag */}
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg backdrop-blur-sm border-2 border-background/20">
          {price}
        </div>
        
        {/* Arrow Icon */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
          <ArrowUpRight className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Content - Asymmetric */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-2 group-hover:text-accent transition-colors">{title}</h3>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/20">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-accent text-accent' : 'text-white/40'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-white/80">({reviews})</span>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/30 to-transparent rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
};

export default DestinationCard;
