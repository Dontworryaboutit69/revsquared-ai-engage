import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, Activity, Calendar } from 'lucide-react';
interface ProblemSectionProps {
  onBookDemo: () => void;
  onTryAI: () => void;
}
export function ProblemSection({
  onBookDemo,
  onTryAI
}: ProblemSectionProps) {
  return <section className="py-12 sm:py-16 md:py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#20215A]/30 to-[#6233EA]/20" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#E536C1]" style={{
        fontFamily: 'Audiowide, sans-serif'
      }}>The Growth Bottleneck</h2>
        
        <p className="text-lg sm:text-xl md:text-2xl text-[#D3D4FF] mb-8 sm:mb-10 md:mb-12" style={{
        fontFamily: 'Manrope, sans-serif'
      }}>Why successful companies hit revenue walls at $1-$5M</p>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <Card className="bg-[#20215A]/50 border-[#E536C1]/30 backdrop-blur-sm">
            <CardHeader>
              <User className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#FEDD4D] mx-auto mb-3 sm:mb-4" />
              <CardTitle className="text-[#00E5D6] text-lg sm:text-xl md:text-2xl" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
                You Can't Scale People Fast Enough
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#D3D4FF] text-sm sm:text-base md:text-lg" style={{
              fontFamily: 'Manrope, sans-serif'
            }}>
                You need 3 more salespeople to handle demand, but good reps cost $80K+ and take 6 months to ramp up. Meanwhile, competitors with better systems are stealing deals while you're stuck in hiring hell.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#20215A]/50 border-[#E536C1]/30 backdrop-blur-sm">
            <CardHeader>
              <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#FEDD4D] mx-auto mb-3 sm:mb-4" />
              <CardTitle className="text-[#00E5D6] text-lg sm:text-xl md:text-2xl" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
                Success Depends on Individual People
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#D3D4FF] text-sm sm:text-base md:text-lg" style={{
              fontFamily: 'Manrope, sans-serif'
            }}>Mike closes 40% of his leads. Sarah closes 15%. When Mike goes on vacation, revenue drops 30%. You're one sick day away from missing your monthly target because everything depends on the right person answering the phone.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#20215A]/50 border-[#E536C1]/30 backdrop-blur-sm sm:col-span-2 md:col-span-1">
            <CardHeader>
              <Activity className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#FEDD4D] mx-auto mb-3 sm:mb-4" />
              <CardTitle className="text-[#00E5D6] text-lg sm:text-xl md:text-2xl" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
                Volume Overwhelms Your Best People
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#D3D4FF] text-sm sm:text-base md:text-lg" style={{
              fontFamily: 'Manrope, sans-serif'
            }}>Marketing just delivered 73 new leads. Your top performer is buried in callbacks from last week. That $45K prospect from Friday? They're probably signing with someone who actually answered their call.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
}