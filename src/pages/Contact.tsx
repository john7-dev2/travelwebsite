import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Available 24/7 for emergencies"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@travelsample.com", "support@travelsample.com"],
      description: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Travel Street", "Adventure City, AC 12345"],
      description: "Visit us Monday - Friday"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 9AM - 8PM", "Sat - Sun: 10AM - 6PM"],
      description: "Local time zone"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/30 rounded-full mb-6">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Get in Touch</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-foreground">Let's Plan Your</span>
                <span className="block text-gradient">Perfect Journey</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about destinations, bookings, or need personalized travel advice? 
                Our expert team is here to help make your travel dreams come true.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-2">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-xl sm:text-2xl">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            className="h-10 sm:h-12"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="h-10 sm:h-12"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="What can we help you with?"
                          className="h-10 sm:h-12"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your travel plans, questions, or how we can assist you..."
                          className="min-h-32"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-10 sm:h-12 bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm sm:text-base"
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-foreground font-medium">
                              {detail}
                            </p>
                          ))}
                          <p className="text-sm text-muted-foreground mt-2">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked <span className="text-gradient">Questions</span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Quick answers to common questions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="space-y-6">
                  <div className="p-6 bg-card border-2 border-border rounded-2xl">
                    <h3 className="font-bold text-lg mb-3">How far in advance should I book?</h3>
                    <p className="text-muted-foreground">
                      We recommend booking 2-3 months in advance for the best availability and prices, 
                      though we can accommodate last-minute bookings based on availability.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card border-2 border-border rounded-2xl">
                    <h3 className="font-bold text-lg mb-3">What's included in your packages?</h3>
                    <p className="text-muted-foreground">
                      Our packages typically include accommodation, guided tours, some meals, 
                      and 24/7 support. Specific inclusions vary by destination and package type.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-card border-2 border-border rounded-2xl">
                    <h3 className="font-bold text-lg mb-3">Do you offer travel insurance?</h3>
                    <p className="text-muted-foreground">
                      Yes, we provide comprehensive travel insurance options to protect your investment 
                      and give you peace of mind during your travels.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card border-2 border-border rounded-2xl">
                    <h3 className="font-bold text-lg mb-3">Can I customize my itinerary?</h3>
                    <p className="text-muted-foreground">
                      Absolutely! We specialize in creating personalized itineraries tailored to your 
                      interests, budget, and travel style. Contact us to discuss your preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
