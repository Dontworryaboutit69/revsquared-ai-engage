import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Phone, MessageSquare, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  industry: string;
  type: 'inbound' | 'outbound' | 'support';
  audioUrl?: string;
  features: string[];
  resultStats: {
    metric: string;
    value: string;
  }[];
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 'roofing-inbound',
    title: 'Inbound Call Agent',
    description: 'Watch this AI turn a skeptical caller into a $12K roofing job in under 4 minutes. Handles price objections, schedules estimates, and sends follow-up texts automatically.',
    industry: 'Roofing Company',
    type: 'inbound',
    audioUrl: '/audio/roofing-inbound-demo.mp3', // You'll need to add actual audio files
    features: ['Lead Qualification', 'Appointment Booking', '24/7 Availability', 'CRM Integration'],
    resultStats: [
      { metric: 'Call Answer Rate', value: '100%' },
      { metric: 'Lead Conversion', value: '+45%' },
      { metric: 'Appointment Shows', value: '87%' }
    ]
  },
  {
    id: 'lending-outbound',
    title: 'Outbound Call Agent',
    description: 'Listen to this AI warm up cold leads and book consultations without sounding robotic. Even handles "I\'m not interested" objections like a seasoned sales pro.',
    industry: 'Business Lending Firm',
    type: 'outbound',
    audioUrl: '/audio/lending-outbound-demo.mp3',
    features: ['Lead Warming', 'Consultation Booking', 'Follow-up Sequences', 'Objection Handling'],
    resultStats: [
      { metric: 'Contact Rate', value: '3x Higher' },
      { metric: 'Consultation Bookings', value: '+67%' },
      { metric: 'Cost per Lead', value: '-40%' }
    ]
  },
  {
    id: 'security-support',
    title: 'Technical Support Agent',
    description: 'Hear how this AI walks customers through complex installations step-by-step. Customers rate it higher than human support - and it never gets frustrated.',
    industry: 'Home Security Company',
    type: 'support',
    audioUrl: '/audio/security-support-demo.mp3',
    features: ['24/7 Support', 'Installation Guidance', 'Troubleshooting', 'Ticket Escalation'],
    resultStats: [
      { metric: 'Resolution Rate', value: '89%' },
      { metric: 'Customer Satisfaction', value: '4.8/5' },
      { metric: 'Support Costs', value: '-60%' }
    ]
  }
];

const typeIcons = {
  inbound: Phone,
  outbound: MessageSquare,
  support: HeadphonesIcon
};

const typeColors = {
  inbound: 'from-[#00E5D6] to-[#6233EA]',
  outbound: 'from-[#E536C1] to-[#FEDD4D]',
  support: 'from-[#6233EA] to-[#00E5D6]'
};

export function AIShowcase() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<Record<string, HTMLAudioElement>>({});

  const handlePlayPause = (id: string, audioUrl?: string) => {
    if (!audioUrl) return;

    const audio = audioRefs.current[id];
    
    if (playingId === id) {
      // Pause current audio
      if (audio) {
        audio.pause();
      }
      setPlayingId(null);
    } else {
      // Stop any currently playing audio
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
        audioRefs.current[playingId].currentTime = 0;
      }

      // Create or get audio element
      if (!audio) {
        const newAudio = new Audio(audioUrl);
        newAudio.addEventListener('ended', () => setPlayingId(null));
        audioRefs.current[id] = newAudio;
      }

      // Play new audio
      audioRefs.current[id].play().catch(() => {
        console.log('Audio playback failed - this is normal in preview mode');
      });
      setPlayingId(id);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0D0D0D] via-[#20215A]/30 to-[#6233EA]/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-[#00E5D6]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-[#E536C1]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#20215A]/50 border border-[#00E5D6]/30 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Volume2 className="h-4 w-4 text-[#00E5D6]" />
            <span className="text-sm font-medium text-white/80" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
              🎯 AI Agent Showcase
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#00E5D6]" style={{
            fontFamily: 'Audiowide, sans-serif'
          }}>
            See Our AI Agents In Action
          </h2>
          
          <p className="text-xl text-[#D3D4FF] max-w-3xl mx-auto" style={{
            fontFamily: 'Manrope, sans-serif'
          }}>
            Listen to real examples of our AI agents handling calls across different industries. 
            Each agent is custom-built for specific business needs.
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => {
            const IconComponent = typeIcons[item.type];
            const isPlaying = playingId === item.id;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#20215A]/30 border-[#00E5D6]/30 backdrop-blur-sm hover:border-[#00E5D6]/50 transition-all duration-300 overflow-hidden group h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${typeColors[item.type]} bg-opacity-20`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Play Button with Click to Play Indicator */}
                      <div className="flex flex-col items-center gap-2">
                        <Button
                          onClick={() => handlePlayPause(item.id, item.audioUrl)}
                          size="sm"
                          className={`rounded-full w-12 h-12 p-0 transition-all duration-300 ${
                            isPlaying 
                              ? 'bg-[#E536C1] hover:bg-[#E536C1]/90 scale-110' 
                              : 'bg-[#00E5D6] hover:bg-[#00E5D6]/90 hover:scale-110'
                          }`}
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5 text-[#0D0D0D]" />
                          ) : (
                            <Play className="w-5 h-5 text-[#0D0D0D] ml-0.5" />
                          )}
                        </Button>
                        
                        {!isPlaying && (
                          <motion.div
                            className="flex items-center gap-1 text-[#FEDD4D] text-xs font-semibold"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{
                              fontFamily: 'Audiowide, sans-serif'
                            }}
                          >
                            <span>Click to Play</span>
                            <ArrowRight className="w-3 h-3" />
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-2" style={{
                      fontFamily: 'Audiowide, sans-serif'
                    }}>
                      {item.title}
                    </h3>
                    
                    <p className="text-[#00E5D6] text-sm font-medium mb-3" style={{
                      fontFamily: 'Manrope, sans-serif'
                    }}>
                      {item.industry}
                    </p>
                    
                    <p className="text-[#D3D4FF] text-sm mb-4 leading-relaxed flex-grow" style={{
                      fontFamily: 'Manrope, sans-serif'
                    }}>
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-white text-sm font-semibold mb-2" style={{
                        fontFamily: 'Audiowide, sans-serif'
                      }}>
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {item.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#6233EA]/20 text-[#D3D4FF] text-xs rounded-md border border-[#6233EA]/30 text-center"
                            style={{
                              fontFamily: 'Manrope, sans-serif'
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-2 mt-auto">
                      {item.resultStats.map((stat, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-[#D3D4FF] text-xs" style={{
                            fontFamily: 'Manrope, sans-serif'
                          }}>
                            {stat.metric}
                          </span>
                          <span className="text-[#FEDD4D] text-xs font-bold" style={{
                            fontFamily: 'Audiowide, sans-serif'
                          }}>
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Audio Indicator */}
                    {isPlaying && (
                      <motion.div
                        className="mt-4 flex items-center gap-2 text-[#E536C1] text-xs"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Volume2 className="w-3 h-3" />
                        <span style={{ fontFamily: 'Manrope, sans-serif' }}>
                          Playing demo...
                        </span>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-[#00E5D6] text-[#0D0D0D] hover:bg-[#00E5D6]/90 text-lg px-8 py-6 rounded-full shadow-lg shadow-[#00E5D6]/30 transition-all duration-300 hover:shadow-[#00E5D6]/50 hover:scale-105"
            style={{
              fontFamily: 'Audiowide, sans-serif'
            }}
            onClick={() => document.getElementById('qualification-form')?.scrollIntoView({
              behavior: 'smooth'
            })}
          >
            Get Your Custom AI Agent
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
