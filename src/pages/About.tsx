import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Heart, Shield, Users, Award, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "We live and breathe travel, bringing authentic experiences to every journey we curate."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Your safety is our priority with 24/7 support and comprehensive travel insurance."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Join a community of 50,000+ explorers sharing stories and creating memories."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning service with 4.9/5 rating from thousands of satisfied travelers."
    }
  ];

  const stats = [
    { number: "500+", label: "Destinations" },
    { number: "50K+", label: "Happy Travelers" },
    { number: "4.9", label: "Average Rating" },
    { number: "100%", label: "Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blob animate-blob" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/30 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Story</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-foreground">Creating</span>
                <span className="block text-gradient">Unforgettable</span>
                <span className="block text-foreground">Journeys</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Since 2015, we've been transforming dreams into reality by crafting personalized travel experiences
                that inspire, excite, and create lasting memories.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border-2 border-secondary/30 rounded-full">
                  <Globe className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-secondary">Our Mission</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  Making Travel <span className="text-gradient">Accessible</span> to Everyone
                </h2>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We believe everyone deserves to explore the world's wonders. That's why we've built a platform
                  that makes discovering and booking incredible travel experiences simple, secure, and affordable.
                </p>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Our team of travel experts personally vets every destination and experience, ensuring you get
                  authentic adventures backed by local knowledge and exceptional service.
                </p>

                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full px-8 mt-4">
                  Join Our Community
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-3" />
                <img
                  src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 border-2 border-border">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Start Your <span className="text-gradient">Adventure</span>?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Join thousands of travelers who have discovered the world with us
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full px-8">
                  Explore Destinations
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-2 font-bold">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
