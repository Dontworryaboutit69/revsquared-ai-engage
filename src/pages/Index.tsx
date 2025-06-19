import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Phone, Microchip, Lightbulb, Grid2x2, ArrowDown, ArrowUp, Star, Calendar, ExternalLink } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { PremiumTestimonials } from "@/components/ui/premium-testimonials";
import { AIShowcase } from "@/components/ui/ai-showcase";
import { TryAIForm } from "@/components/ui/try-ai-form";
import { IntegrationHub } from "@/components/ui/integration-hub";
import { motion } from 'framer-motion';

const Index = () => {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    businessType: '',
    monthlyLeads: '',
    currentChallenges: '',
    name: '',
    email: '',
    phone: '',
    companyName: ''
  });
  const [showTryAIForm, setShowTryAIForm] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep < 3) {
      setFormStep(formStep + 1);
    } else {
      toast({
        title: "Thanks for your interest!",
        description: "We'll be in touch within 24 hours to discuss your custom AI solution."
      });
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6233EA]/20 via-[#20215A]/30 to-[#0D0D0D]" />
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img src="/lovable-uploads/d64a4e8e-0ca8-4662-b3ba-05c284992535.png" alt="RevSquared AI Logo" className="w-48 h-48 object-contain" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#00E5D6] to-[#E536C1] bg-clip-text text-transparent" style={{
          fontFamily: 'Audiowide, sans-serif'
        }}>
            RevSquared AI
          </h1>
          
          <h2 className="text-2xl md:text-4xl mb-8 text-[#D3D4FF]" style={{
          fontFamily: 'Audiowide, sans-serif'
        }}>Voice &amp; SMS AI Agents That Handle Your Leads &amp; Grow Your Business While You Sleep</h2>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style={{
          fontFamily: 'Manrope, sans-serif'
        }}>Picture this: It's Saturday morning. You check your phone and see 3 new appointments booked, 2 quotes requested, and 5 leads qualified - all while you were offline. Our custom AI agents qualify prospects, book appointments, and integrate seamlessly with your CRM — 24/7/365.</p>
          
          {/* Social Proof Section */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-[#FEDD4D] text-[#FEDD4D]" />)}
              </div>
              <span className="text-[#00E5D6] text-lg font-bold" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>5-Star Average Google Review</span>
            </div>
            
            <div className="flex justify-center items-center space-x-6 mb-4">
              {/* Customer Avatars */}
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6233EA] to-[#E536C1] border-2 border-[#00E5D6] flex items-center justify-center text-[#F5F5F5] font-bold">
                  JM
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00E5D6] to-[#6233EA] border-2 border-[#E536C1] flex items-center justify-center text-[#0D0D0D] font-bold">
                  SA
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E536C1] to-[#FEDD4D] border-2 border-[#00E5D6] flex items-center justify-center text-[#0D0D0D] font-bold">
                  DL
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FEDD4D] to-[#6233EA] border-2 border-[#E536C1] flex items-center justify-center text-[#0D0D0D] font-bold">
                  MR
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#20215A] to-[#00E5D6] border-2 border-[#FEDD4D] flex items-center justify-center text-[#F5F5F5] font-bold">
                  KT
                </div>
              </div>
            </div>
            
            <p className="text-[#D3D4FF] text-lg font-semibold" style={{
            fontFamily: 'Audiowide, sans-serif'
          }}>Trusted By Over 45 Businesses Just Like Yours</p>
          </div>
          
          {/* See How It Works Text */}
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#FEDD4D]" style={{
            fontFamily: 'Audiowide, sans-serif'
          }}>
            See How It Actually Works.
          </h3>
          
          {/* Video Component Placeholder */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-[#6233EA] to-[#20215A] rounded-2xl border-2 border-[#00E5D6] shadow-2xl shadow-[#00E5D6]/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#E536C1] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-[#F5F5F5] ml-1" />
                </div>
                <p className="text-[#D3D4FF] text-lg" style={{
                fontFamily: 'Manrope, sans-serif'
              }}>
                  Watch How AI Transforms Your Business
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons Under Video */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <Button
              size="lg"
              className="bg-[#00E5D6] text-[#0D0D0D] hover:bg-[#00E5D6]/90 text-lg px-8 py-4 rounded-full shadow-lg shadow-[#00E5D6]/30 transition-all duration-300 hover:shadow-[#00E5D6]/50 hover:scale-105"
              style={{ fontFamily: 'Audiowide, sans-serif' }}
              onClick={() => window.open('https://calendly.com/your-calendar-link', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Demo
            </Button>
            <Button
              size="lg"
              className="bg-[#E536C1] text-[#0D0D0D] hover:bg-[#E536C1]/90 text-lg px-8 py-4 rounded-full shadow-lg shadow-[#E536C1]/30 transition-all duration-300 hover:shadow-[#E536C1]/50 hover:scale-105"
              style={{ fontFamily: 'Audiowide, sans-serif' }}
              onClick={() => setShowTryAIForm(true)}
            >
              <Phone className="w-5 h-5 mr-2" />
              Get AI Demo Call
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-[#00E5D6]" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#20215A]/30 to-[#6233EA]/20" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#E536C1]" style={{
          fontFamily: 'Audiowide, sans-serif'
        }}>
            The Lead Generation Problem
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-[#20215A]/50 border-[#E536C1]/30 backdrop-blur-sm">
              <CardHeader>
                <Phone className="w-16 h-16 text-[#FEDD4D] mx-auto mb-4" />
                <CardTitle className="text-[#00E5D6] text-2xl" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                  Missed Calls = Lost Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#D3D4FF] text-lg" style={{
                fontFamily: 'Manrope, sans-serif'
              }}>
                  Your phone rings at 11 PM. It's a $10K lead. You miss it. Your competitor answers theirs. You lose $120K this year from missed calls alone.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#20215A]/50 border-[#E536C1]/30 backdrop-blur-sm">
              <CardHeader>
                <Microchip className="w-16 h-16 text-[#FEDD4D] mx-auto mb-4" />
                <CardTitle className="text-[#00E5D6] text-2xl" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                  Manual Follow-ups Fail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#D3D4FF] text-lg" style={{
                fontFamily: 'Manrope, sans-serif'
              }}>Your team goes home. Leads keep coming. By Monday, that hot prospect from Friday has already signed with someone else. You can't hire enough people to cover every hour, and you shouldn't have to.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#20215A]/50 border-[#E536C1]/30 backdrop-blur-sm">
              <CardHeader>
                <Lightbulb className="w-16 h-16 text-[#FEDD4D] mx-auto mb-4" />
                <CardTitle className="text-[#00E5D6] text-2xl" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                  Inconsistent Qualification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#D3D4FF] text-lg" style={{
                fontFamily: 'Manrope, sans-serif'
              }}>Sarah asks different questions than Mike. Mike forgets to get the budget. Sarah books unqualified leads. Your pipeline becomes a guessing game instead of a predictable revenue machine.</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA After Problem Section */}
          <div className="text-center">
            <p className="text-xl text-[#D3D4FF] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Sound familiar? Let's fix this together.
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Button
                size="lg"
                className="bg-[#00E5D6] text-[#0D0D0D] hover:bg-[#00E5D6]/90 font-bold py-3 px-6"
                style={{ fontFamily: 'Audiowide, sans-serif' }}
                onClick={() => window.open('https://calendly.com/your-calendar-link', '_blank')}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Free Demo - 15 Minutes, No Pressure
              </Button>
              <Button
                size="lg"
                className="bg-[#E536C1] text-[#0D0D0D] hover:bg-[#E536C1]/90 font-bold py-3 px-6"
                style={{ fontFamily: 'Audiowide, sans-serif' }}
                onClick={() => setShowTryAIForm(true)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Get AI Demo Call - Live Proof in 5 Minutes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-[#6233EA]/20 to-[#20215A]/30" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#00E5D6]" style={{
          fontFamily: 'Audiowide, sans-serif'
        }}>
            The AI Solution
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-6 text-[#E536C1]" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
                24/7 AI Agents That Never Sleep
              </h3>
              <ul className="space-y-4 text-lg" style={{
              fontFamily: 'Manrope, sans-serif'
            }}>
                <li className="flex items-start">
                  <span className="text-[#00E5D6] mr-3">✓</span>
                  Answer every call within 2 rings - even at 3 AM on Christmas
                </li>
                <li className="flex items-start">
                  <span className="text-[#00E5D6] mr-3">✓</span>
                  Qualify leads with perfect consistency using YOUR exact criteria
                </li>
                <li className="flex items-start">
                  <span className="text-[#00E5D6] mr-3">✓</span>
                  Book appointments directly into your calendar (no double-bookings)
                </li>
                <li className="flex items-start">
                  <span className="text-[#00E5D6] mr-3">✓</span>
                  Send SMS follow-ups automatically within 60 seconds
                </li>
                <li className="flex items-start">
                  <span className="text-[#00E5D6] mr-3">✓</span>
                  Integrate seamlessly with your existing CRM (zero headaches)
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#6233EA]/30 to-[#20215A]/50 p-8 rounded-2xl border border-[#00E5D6]/30">
              <Grid2x2 className="w-20 h-20 text-[#FEDD4D] mx-auto mb-6" />
              <h4 className="text-2xl font-bold mb-4 text-[#00E5D6]" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
                Custom Built For Your Business
              </h4>
              <p className="text-[#D3D4FF] text-lg" style={{
              fontFamily: 'Manrope, sans-serif'
            }}>Every AI agent learns your industry lingo, knows your pricing, and follows your exact sales process. While competitors use generic chatbots, you get an AI that sounds like your best salesperson - but never calls in sick.</p>
            </div>
          </div>

          {/* CTA After Solution Section */}
          <div className="text-center">
            <p className="text-xl text-[#D3D4FF] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Ready to see it in action?
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Button
                size="lg"
                className="bg-[#00E5D6] text-[#0D0D0D] hover:bg-[#00E5D6]/90 font-bold py-3 px-6"
                style={{ fontFamily: 'Audiowide, sans-serif' }}
                onClick={() => window.open('https://calendly.com/your-calendar-link', '_blank')}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Free Demo
              </Button>
              <Button
                size="lg"
                className="bg-[#E536C1] text-[#0D0D0D] hover:bg-[#E536C1]/90 font-bold py-3 px-6"
                style={{ fontFamily: 'Audiowide, sans-serif' }}
                onClick={() => setShowTryAIForm(true)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Get AI Demo Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Showcase Section */}
      <AIShowcase />

      {/* CRM Integration Hub Section - Replaced */}
      <IntegrationHub />

      {/* CTA After Integration Hub */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#00E5D6]" style={{ fontFamily: 'Audiowide, sans-serif' }}>
            Ready to integrate?
          </h3>
          <p className="text-lg text-[#D3D4FF] mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Connect your existing systems and see the magic happen.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button
              size="lg"
              className="bg-[#00E5D6] text-[#0D0D0D] hover:bg-[#00E5D6]/90 font-bold py-3 px-6"
              style={{ fontFamily: 'Audiowide, sans-serif' }}
              onClick={() => window.open('https://calendly.com/your-calendar-link', '_blank')}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Free Demo
            </Button>
            <Button
              size="lg"
              className="bg-[#E536C1] text-[#0D0D0D] hover:bg-[#E536C1]/90 font-bold py-3 px-6"
              style={{ fontFamily: 'Audiowide, sans-serif' }}
              onClick={() => setShowTryAIForm(true)}
            >
              <Phone className="w-4 h-4 mr-2" />
              Get AI Demo Call
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <PremiumTestimonials />

      {/* CTA After Testimonials */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#00E5D6]" style={{ fontFamily: 'Audiowide, sans-serif' }}>
            Ready to get started?
          </h3>
          <p className="text-lg text-[#D3D4FF] mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Your business could be the next success story. Let's make it happen.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button
              size="lg"
              className="bg-[#00E5D6] text-[#0D0D0D] hover:bg-[#00E5D6]/90 font-bold py-3 px-6"
              style={{ fontFamily: 'Audiowide, sans-serif' }}
              onClick={() => window.open('https://calendly.com/your-calendar-link', '_blank')}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Free Demo
            </Button>
            <Button
              size="lg"
              className="bg-[#E536C1] text-[#0D0D0D] hover:bg-[#E536C1]/90 font-bold py-3 px-6"
              style={{ fontFamily: 'Audiowide, sans-serif' }}
              onClick={() => setShowTryAIForm(true)}
            >
              <Phone className="w-4 h-4 mr-2" />
              Get AI Demo Call
            </Button>
          </div>
        </div>
      </section>

      {/* New CTA Section */}
      <section id="cta-section" className="py-20 px-4 bg-gradient-to-br from-[#0D0D0D] via-[#20215A]/20 to-[#6233EA]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#E536C1]" style={{
          fontFamily: 'Audiowide, sans-serif'
        }}>
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#D3D4FF] mb-12 max-w-3xl mx-auto" style={{
          fontFamily: 'Manrope, sans-serif'
        }}>
            Choose how you'd like to experience our AI agents - get a personalized demo or try it yourself right now.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Schedule Demo Card */}
            <Card className="bg-[#20215A]/30 border-[#00E5D6]/30 backdrop-blur-sm hover:border-[#00E5D6]/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00E5D6] to-[#6233EA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-[#0D0D0D]" />
                </div>
                <h3 className="text-2xl font-bold text-[#00E5D6] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                  Schedule a Demo
                </h3>
                <p className="text-[#D3D4FF] mb-6 leading-relaxed" style={{
                fontFamily: 'Manrope, sans-serif'
              }}>
                  Book a personalized 30-minute demo where we'll show you exactly how AI agents can transform your business and answer all your questions.
                </p>
                <Button size="lg" className="w-full bg-[#00E5D6] text-[#0D0D0D] hover:bg-[#00E5D6]/90 font-bold py-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }} onClick={() => window.open('https://calendly.com/your-calendar-link', '_blank')}>
                  Book Demo Call
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Try AI Card */}
            <Card className="bg-[#20215A]/30 border-[#E536C1]/30 backdrop-blur-sm hover:border-[#E536C1]/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#E536C1] to-[#FEDD4D] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-[#0D0D0D]" />
                </div>
                <h3 className="text-2xl font-bold text-[#E536C1] mb-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }}>
                  Try AI Agent Now
                </h3>
                <p className="text-[#D3D4FF] mb-6 leading-relaxed" style={{
                fontFamily: 'Manrope, sans-serif'
              }}>
                  Experience our AI firsthand! Our agent will call you within 5 minutes to demonstrate its capabilities and answer your questions.
                </p>
                <Button size="lg" className="w-full bg-[#E536C1] text-[#0D0D0D] hover:bg-[#E536C1]/90 font-bold py-4" style={{
                fontFamily: 'Audiowide, sans-serif'
              }} onClick={() => setShowTryAIForm(true)}>
                  Get Live AI Demo
                  <Phone className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#D3D4FF]/80 text-sm" style={{
            fontFamily: 'Manrope, sans-serif'
          }}>
              🔒 Your information is secure and will never be shared
            </p>
          </div>
        </div>
      </section>

      {/* Try AI Form Dialog */}
      <TryAIForm open={showTryAIForm} onOpenChange={setShowTryAIForm} />

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#20215A]/50 border-t border-[#00E5D6]/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#00E5D6] rounded-lg flex items-center justify-center">
              <span className="text-[#0D0D0D] text-2xl font-bold">R²</span>
            </div>
          </div>
          <p className="text-[#D3D4FF] mb-4" style={{
          fontFamily: 'Manrope, sans-serif'
        }}>
            © 2025 RevSquared AI. Old school cool. New school smart.
          </p>
          <p className="text-[#D3D4FF]/70 text-sm" style={{
          fontFamily: 'Manrope, sans-serif'
        }}>
            Transform your business with custom AI agents that work 24/7
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
