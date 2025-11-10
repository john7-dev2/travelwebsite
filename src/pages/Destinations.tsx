import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { IMAGES } from "@/constants/images";
import { Destination } from "@/types";

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const allDestinations: Destination[] = [
    {
      image: IMAGES.maldives,
      title: "Maldives",
      location: "Indian Ocean",
      rating: 4.9,
      reviews: 2341,
      price: "From $2,499"
    },
    {
      image: IMAGES.santorini,
      title: "Santorini",
      location: "Greece",
      rating: 4.8,
      reviews: 1876,
      price: "From $1,899"
    },
    {
      image: IMAGES.bali,
      title: "Bali",
      location: "Indonesia",
      rating: 4.9,
      reviews: 3204,
      price: "From $1,299"
    },
    {
      image: IMAGES.swissAlps,
      title: "Swiss Alps",
      location: "Switzerland",
      rating: 4.7,
      reviews: 1543,
      price: "From $2,799"
    },
    {
      image: IMAGES.paris,
      title: "Paris",
      location: "France",
      rating: 4.9,
      reviews: 4521,
      price: "From $1,599"
    },
    {
      image: IMAGES.tokyo,
      title: "Tokyo",
      location: "Japan",
      rating: 4.8,
      reviews: 3102,
      price: "From $1,799"
    },
    {
      image: IMAGES.iceland,
      title: "Iceland",
      location: "Nordic Europe",
      rating: 4.9,
      reviews: 2156,
      price: "From $2,299"
    },
    {
      image: IMAGES.dubai,
      title: "Dubai",
      location: "UAE",
      rating: 4.7,
      reviews: 2845,
      price: "From $1,999"
    },
    {
      image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Machu Picchu",
      location: "Peru",
      rating: 4.9,
      reviews: 1876,
      price: "From $2,199"
    },
    {
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "New York City",
      location: "USA",
      rating: 4.6,
      reviews: 5432,
      price: "From $1,399"
    },
    {
      image: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Serengeti",
      location: "Tanzania",
      rating: 4.8,
      reviews: 1234,
      price: "From $3,499"
    },
    {
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Great Wall",
      location: "China",
      rating: 4.7,
      reviews: 3456,
      price: "From $1,899"
    },
    {
      image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Banff National Park",
      location: "Canada",
      rating: 4.9,
      reviews: 2187,
      price: "From $1,699"
    },
    {
      image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Petra",
      location: "Jordan",
      rating: 4.8,
      reviews: 1543,
      price: "From $2,299"
    },
    {
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Norwegian Fjords",
      location: "Norway",
      rating: 4.9,
      reviews: 987,
      price: "From $2,799"
    },
    {
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Angkor Wat",
      location: "Cambodia",
      rating: 4.8,
      reviews: 2345,
      price: "From $1,599"
    }
  ];

  const filteredDestinations = allDestinations.filter(dest => {
    const matchesSearch = dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-foreground">Explore</span>
                <span className="block text-gradient">Destinations</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                Discover your next adventure from our curated collection of breathtaking locations
              </p>
            </div>

            <div className="max-w-5xl mx-auto bg-card border-2 border-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl">
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="sm:col-span-2 relative">
                  <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 sm:pl-12 h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>
                <Button className="h-10 sm:h-12 bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm sm:text-base">
                  <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {filteredDestinations.map((dest, index) => (
                <DestinationCard key={index} {...dest} delay={index * 0.1} />
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="text-center py-16">
                <p className="text-2xl text-muted-foreground">No destinations found matching your search</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Destinations;
