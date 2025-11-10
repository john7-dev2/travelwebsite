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
      className="group relative overflow-hidden border-2 border-border bg-card cursor-pointer transition-all duration-500 hover:border-primary animate-scale-in" 
      style={{ 
        animationDelay: `${delay}s`,
        borderRadius: '2rem',
        boxShadow: 'var(--shadow-card)'
      }}
    >
      {/* Diagonal Split Design */}
      <div className="relative">
        <div className="relative h-64 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 mix-blend-multiply" />
        </div>
        
        {/* Badge with Animation */}
        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-accent to-amber text-foreground border-0 px-4 py-2 text-sm font-bold shadow-lg group-hover:scale-110 transition-transform">
          <Zap className="w-3 h-3 mr-1" />
          {category}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6 -mt-8 relative z-10">
        <div className="bg-card rounded-2xl p-6 shadow-xl border-2 border-border group-hover:border-primary transition-colors">
          <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground px-4 py-2 bg-muted rounded-full">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground px-4 py-2 bg-muted rounded-full">
              <Users className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">{groupSize}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
    </Card>
  );
};

export default ExperienceCard;
