
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Phone, ArrowDown, Star } from 'lucide-react';

interface HeroSectionProps {
  onBookDemo: () => void;
  onTryAI: () => void;
}

export function HeroSection({ onBookDemo, onTryAI }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6233EA]/20 via-[#20215A]/30 to-[#0D0D0D]" />
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <img src="/lovable-uploads/d64a4e8e-0ca8-4662-b3ba-05c284992535.png" alt="RevSquared AI Logo" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#00E5D6] to-[#E536C1] bg-clip-text text-transparent" style={{
        fontFamily: 'Audiowide, sans-serif'
      }}>
          RevSquared AI
        </h1>
        
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-6 sm:mb-8 text-[#D3D4FF] px-2" style={{
        fontFamily: 'Audiowide, sans-serif'
      }}>Voice &amp; SMS AI Agents That Handle Your Leads &amp; Grow Your Business While You Sleep</h2>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4" style={{
        fontFamily: 'Manrope, sans-serif'
      }}>Picture this: It's Saturday morning. You check your phone and see 3 new appointments booked, 2 quotes requested, and 5 leads qualified - all while you were offline. Our custom AI agents qualify prospects, book appointments, and integrate seamlessly with your CRM — 24/7/365.</p>
        
        {/* Social Proof Section */}
        <div className="mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-[#FEDD4D] text-[#FEDD4D]" />)}
            </div>
            <span className="text-[#00E5D6] text-sm sm:text-base md:text-lg font-bold text-center" style={{
            fontFamily: 'Audiowide, sans-serif'
          }}>5-Star Average Google Review</span>
          </div>
          
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-3 sm:mb-4">
            {/* Customer Avatars */}
            <div className="flex -space-x-2 sm:-space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#6233EA] to-[#E536C1] border-2 border-[#00E5D6] flex items-center justify-center text-[#F5F5F5] font-bold text-xs sm:text-sm">
                JM
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#00E5D6] to-[#6233EA] border-2 border-[#E536C1] flex items-center justify-center text-[#0D0D0D] font-bold text-xs sm:text-sm">
                SA
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#E536C1] to-[#FEDD4D] border-2 border-[#00E5D6] flex items-center justify-center text-[#0D0D0D] font-bold text-xs sm:text-sm">
                DL
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#FEDD4D] to-[#6233EA] border-2 border-[#E536C1] flex items-center justify-center text-[#0D0D0D] font-bold text-xs sm:text-sm">
                MR
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#20215A] to-[#00E5D6] border-2 border-[#FEDD4D] flex items-center justify-center text-[#F5F5F5] font-bold text-xs sm:text-sm">
                KT
              </div>
            </div>
          </div>
          
          <p className="text-[#D3D4FF] text-sm sm:text-base md:text-lg font-semibold" style={{
          fontFamily: 'Audiowide, sans-serif'
        }}>Trusted By Over 45 Businesses Just Like Yours</p>
        </div>
        
        {/* See How It Works Text */}
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-[#FEDD4D] px-4" style={{
          fontFamily: 'Audiowide, sans-serif'
        }}>
          See How It Actually Works.
        </h3>
        
        {/* Video Component Placeholder */}
        <div className="mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
          <div className="aspect-video bg-gradient-to-br from-[#6233EA] to-[#20215A] rounded-xl sm:rounded-2xl border-2 border-[#00E5D6] shadow-2xl shadow-[#00E5D6]/20 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#E536C1] rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <div className="w-0 h-0 border-l-[8px] sm:border-l-[10px] md:border-l-[12px] border-l-transparent border-r-[8px] sm:border-r-[10px] md:border-r-[12px] border-r-transparent border-b-[14px] sm:border-b-[17px] md:border-b-[20px] border-b-[#F5F5F5] ml-1" />
              </div>
              <p className="text-[#D3D4FF] text-sm sm:text-base md:text-lg" style={{
              fontFamily: 'Manrope, sans-serif'
            }}>
                Watch How AI Transforms Your Business
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons Under Video */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
          <Button
            size="lg"
            className="bg-[#00E5D6] text-[#0D0D0D] hover:bg-[#00E5D6]/90 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-[#00E5D6]/30 transition-all duration-300 hover:shadow-[#00E5D6]/50 hover:scale-105 w-full"
            style={{ fontFamily: 'Audiowide, sans-serif' }}
            onClick={onBookDemo}
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Book Free Demo
          </Button>
          <Button
            size="lg"
            className="bg-[#E536C1] text-[#0D0D0D] hover:bg-[#E536C1]/90 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-[#E536C1]/30 transition-all duration-300 hover:shadow-[#E536C1]/50 hover:scale-105 w-full"
            style={{ fontFamily: 'Audiowide, sans-serif' }}
            onClick={onTryAI}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Get AI Demo Call
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#00E5D6]" />
      </div>
    </section>
  );
}
