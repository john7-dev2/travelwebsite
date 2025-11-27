import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar?: string;
  delay?: number;
}

const TestimonialCard = ({ 
  name, 
  location, 
  rating, 
  text, 
  avatar,
  delay = 0 
}: TestimonialCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <Card 
      className="relative border-2 border-border hover:border-primary active:border-primary transition-all duration-500 animate-fade-in group overflow-hidden active:scale-[0.98]" 
      style={{ 
        animationDelay: `${delay}s`,
        borderRadius: '1.5rem',
        boxShadow: 'var(--shadow-card)'
      }}
    >
      {/* Decorative Corner Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-bl from-accent/20 via-primary/10 to-transparent rounded-bl-[4rem] sm:rounded-bl-[5rem] opacity-50 group-hover:opacity-100 transition-opacity" />
      
      <CardContent className="p-5 sm:p-6 md:p-8 relative z-10">
        {/* Quote Icon with Gradient */}
        <div className="relative inline-block mb-4 sm:mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl sm:rounded-2xl blur-xl opacity-30" />
          <div className="relative bg-gradient-to-br from-primary to-secondary p-3 sm:p-4 rounded-xl sm:rounded-2xl">
            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>
        
        <p className="text-foreground/90 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg font-medium italic relative">
          "{text}"
        </p>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur opacity-40" />
            <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 sm:border-4 border-background shadow-lg relative">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold text-sm sm:text-base md:text-lg">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-base sm:text-lg text-foreground mb-0.5 sm:mb-1 truncate">{name}</h4>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">{location}</p>
          </div>
          
          <div className="flex gap-0.5 sm:gap-1 bg-gradient-to-r from-accent/20 to-amber/20 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full flex-shrink-0">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent" />
            ))}
          </div>
        </div>
      </CardContent>

      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Card>
  );
};

export default TestimonialCard;
