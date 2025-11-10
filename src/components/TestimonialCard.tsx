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
      className="relative border-2 border-border hover:border-primary transition-all duration-500 animate-fade-in group overflow-hidden" 
      style={{ 
        animationDelay: `${delay}s`,
        borderRadius: '2rem',
        boxShadow: 'var(--shadow-card)'
      }}
    >
      {/* Decorative Corner Gradient */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/20 via-primary/10 to-transparent rounded-bl-[5rem] opacity-50 group-hover:opacity-100 transition-opacity" />
      
      <CardContent className="p-8 relative z-10">
        {/* Quote Icon with Gradient */}
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-30" />
          <div className="relative bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl">
            <Quote className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <p className="text-foreground/90 mb-8 leading-relaxed text-lg font-medium italic relative">
          "{text}"
        </p>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur opacity-40" />
            <Avatar className="w-16 h-16 border-4 border-background shadow-lg relative">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex-1">
            <h4 className="font-bold text-lg text-foreground mb-1">{name}</h4>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          
          <div className="flex gap-1 bg-gradient-to-r from-accent/20 to-amber/20 px-3 py-2 rounded-full">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
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
