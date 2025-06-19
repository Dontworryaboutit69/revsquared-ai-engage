
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Microchip, Lightbulb, Calendar } from 'lucide-react';

interface ProblemSectionProps {
  onBookDemo: () => void;
  onTryAI: () => void;
}

export function ProblemSection({ onBookDemo, onTryAI }: ProblemSectionProps) {
  return (
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
      </div>
    </section>
  );
}
