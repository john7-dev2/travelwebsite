import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, MapPin, CreditCard, Shield, Check } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    travelers: "1",
    name: "",
    email: "",
    phone: "",
    specialRequests: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request submitted successfully! We'll contact you shortly.");
    console.log("Booking data:", formData);
  };

  const features = [
    "24/7 Customer Support",
    "Free Cancellation up to 48hrs",
    "Best Price Guarantee",
    "Travel Insurance Included",
    "Local Expert Guides",
    "Flexible Payment Options"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="text-foreground">Book Your</span>
                <span className="text-gradient"> Dream Trip</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                Just a few steps away from your next adventure
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2">
                <Card className="border-2">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        {step}
                      </div>
                      {step === 1 ? "Trip Details" : "Personal Information"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {step === 1 ? (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="destination" className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              Destination
                            </Label>
                            <Select
                              value={formData.destination}
                              onValueChange={(value) => setFormData({ ...formData, destination: value })}
                            >
                              <SelectTrigger id="destination" className="h-10 sm:h-12">
                                <SelectValue placeholder="Select your destination" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="maldives">Maldives</SelectItem>
                                <SelectItem value="santorini">Santorini, Greece</SelectItem>
                                <SelectItem value="bali">Bali, Indonesia</SelectItem>
                                <SelectItem value="swiss-alps">Swiss Alps</SelectItem>
                                <SelectItem value="paris">Paris, France</SelectItem>
                                <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="date" className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Travel Date
                              </Label>
                              <Input
                                id="date"
                                type="date"
                                className="h-10 sm:h-12"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                required
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="travelers" className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Number of Travelers
                              </Label>
                              <Select
                                value={formData.travelers}
                                onValueChange={(value) => setFormData({ ...formData, travelers: value })}
                              >
                                <SelectTrigger id="travelers" className="h-10 sm:h-12">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                    <SelectItem key={num} value={num.toString()}>
                                      {num} {num === 1 ? "Traveler" : "Travelers"}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <Button
                            type="button"
                            onClick={() => setStep(2)}
                            className="w-full h-10 sm:h-12 bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm sm:text-base"
                            disabled={!formData.destination || !formData.date}
                          >
                            Continue to Personal Info
                          </Button>
                        </>
                      ) : (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              placeholder="John Doe"
                              className="h-10 sm:h-12"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                            />
                          </div>

                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address</Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                className="h-10 sm:h-12"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input
                                id="phone"
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                className="h-10 sm:h-12"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="requests">Special Requests (Optional)</Label>
                            <Textarea
                              id="requests"
                              placeholder="Any special requirements or requests for your trip..."
                              className="min-h-24"
                              value={formData.specialRequests}
                              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                            />
                          </div>

                          <div className="flex gap-4">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setStep(1)}
                              className="flex-1 h-10 sm:h-12 font-bold text-sm sm:text-base"
                            >
                              Back
                            </Button>
                            <Button
                              type="submit"
                              className="flex-1 h-10 sm:h-12 bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm sm:text-base"
                            >
                              Submit Booking Request
                            </Button>
                          </div>
                        </>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Why Book With Us?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Secure Payment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Your payment information is encrypted and secure. We accept all major credit cards and payment methods.
                    </p>
                    <div className="flex gap-2 items-center">
                      <div className="px-3 py-2 bg-muted rounded-lg font-bold text-sm">VISA</div>
                      <div className="px-3 py-2 bg-muted rounded-lg font-bold text-sm">MC</div>
                      <div className="px-3 py-2 bg-muted rounded-lg font-bold text-sm">AMEX</div>
                      <div className="px-3 py-2 bg-muted rounded-lg font-bold text-sm">PayPal</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
