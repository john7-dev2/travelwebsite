import { Clock, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  image: string;
  title: string;
  category: string;
  duration: string;
  groupSize: string;
  delay?: number;
}

const ExperienceCard = ({ 
  image, 
  title, 
  category, 
  duration, 
  groupSize,
  delay = 0 
}: ExperienceCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden border-2 border-border bg-card cursor-pointer transition-all duration-500 hover:border-primary active:border-primary animate-scale-in active:scale-[0.98]" 
      style={{ 
        animationDelay: `${delay}s`,
        borderRadius: '1.5rem',
        boxShadow: 'var(--shadow-card)'
      }}
    >
      {/* Diagonal Split Design */}
      <div className="relative">
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 mix-blend-multiply" />
        </div>
        
        {/* Badge with Animation */}
        <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-accent to-amber text-foreground border-0 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold shadow-lg group-hover:scale-110 group-active:scale-105 transition-transform">
          <Zap className="w-3 h-3 mr-1" />
          {category}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 -mt-6 sm:-mt-8 relative z-10">
        <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl border-2 border-border group-hover:border-primary group-active:border-primary transition-colors">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors leading-tight">
            {title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground px-3 py-1.5 sm:px-4 sm:py-2 bg-muted rounded-full">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{duration}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground px-3 py-1.5 sm:px-4 sm:py-2 bg-muted rounded-full">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{groupSize}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
    </Card>
  );
};

export default ExperienceCard;
