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
      className="group relative overflow-hidden border-0 bg-card card-hover animate-slide-up cursor-pointer active:scale-[0.98] transition-transform" 
      style={{ 
        animationDelay: `${delay}s`,
        boxShadow: 'var(--shadow-card)'
      }}
    >
      {/* Image with Overlay */}
      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 group-active:opacity-75 transition-opacity duration-500" />
        
        {/* Floating Price Tag */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-accent text-accent-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg backdrop-blur-sm border-2 border-background/20">
          {price}
        </div>
        
        {/* Arrow Icon */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>
      </div>

      {/* Content - Asymmetric */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 sm:mb-2 group-hover:text-accent transition-colors truncate">{title}</h3>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/80">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">{location}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20">
          <div className="flex items-center gap-0.5 sm:gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(rating) ? 'fill-accent text-accent' : 'text-white/40'}`} 
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-white/80">({reviews})</span>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tl from-primary/30 to-transparent rounded-tl-[2rem] sm:rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
};

export default DestinationCard;
