
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { PremiumTestimonials } from "@/components/ui/premium-testimonials";
import { AIShowcase } from "@/components/ui/ai-showcase";
import { TryAIForm } from "@/components/ui/try-ai-form";
import { IntegrationHub } from "@/components/ui/integration-hub";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  const { toast } = useToast();
  const [showTryAIForm, setShowTryAIForm] = useState(false);

  const handleBookDemo = () => {
    window.open('https://calendly.com/your-calendar-link', '_blank');
  };

  const handleTryAI = () => {
    setShowTryAIForm(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5] overflow-x-hidden">
      <HeroSection onBookDemo={handleBookDemo} onTryAI={handleTryAI} />
      <ProblemSection onBookDemo={handleBookDemo} onTryAI={handleTryAI} />
      <SolutionSection onBookDemo={handleBookDemo} onTryAI={handleTryAI} />
      <AIShowcase />
      <IntegrationHub />
      <PremiumTestimonials />
      <CTASection onBookDemo={handleBookDemo} onTryAI={handleTryAI} />
      <TryAIForm open={showTryAIForm} onOpenChange={setShowTryAIForm} />
      <Footer />
    </div>
  );
};

export default Index;
