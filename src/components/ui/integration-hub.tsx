import React from 'react';
import hubspotLogo from '@/assets/logos/hubspot.svg';
import salesforceLogo from '@/assets/logos/salesforce.svg';
import zapierLogo from '@/assets/logos/zapier.svg';
import slackLogo from '@/assets/logos/slack.svg';
import whatsappLogo from '@/assets/logos/whatsapp.svg';
import gmailLogo from '@/assets/logos/gmail.svg';
export function IntegrationHub() {
  return <section className="py-20 px-4 relative bg-gradient-to-br from-[#0D0D0D] via-[#20215A]/20 to-[#6233EA]/10">
      {/* Minimal styles for the new compact design */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#00E5D6]" style={{
        fontFamily: 'Audiowide, sans-serif'
      }}>
          Seamless Integrations
        </h2>
        <p className="text-xl text-[#D3D4FF] mb-12 max-w-3xl mx-auto" style={{
        fontFamily: 'Manrope, sans-serif'
      }}>
          Connect with 1000+ platforms instantly. Our AI adapts to your existing workflow.
        </p>

        {/* Modern Integration Showcase */}
        <div className="relative">
          {/* Main Integration Display */}
          <div className="bg-gradient-to-br from-[#0D0D0D] via-[#1A1A2E] to-[#16213E] rounded-3xl border border-[#00E5D6]/10 overflow-hidden">
            {/* Header Section */}
            <div className="px-8 py-6 border-b border-[#00E5D6]/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5D6] to-[#E536C1] p-0.5">
                    <div className="w-full h-full rounded-xl bg-[#0D0D0D] flex items-center justify-center">
                      <img src="/lovable-uploads/d64a4e8e-0ca8-4662-b3ba-05c284992535.png" alt="RevSquared AI" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-white" style={{
                    fontFamily: 'Audiowide, sans-serif'
                  }}>
                      RevSquared AI
                    </div>
                    <div className="text-sm text-[#D3D4FF]/70">Integration Hub</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#00E5D6]/10 rounded-full border border-[#00E5D6]/20">
                  <div className="w-2 h-2 bg-[#00E5D6] rounded-full animate-pulse"></div>
                  <span className="text-xs text-[#00E5D6] font-medium">LIVE</span>
                </div>
              </div>
            </div>

            {/* Integration Grid */}
            <div className="p-8">
              <div className="grid grid-cols-6 gap-4 mb-8">
                {[{
                name: 'HubSpot',
                logo: hubspotLogo,
                color: '#ff7a59'
              }, {
                name: 'Salesforce',
                logo: salesforceLogo,
                color: '#00a1e0'
              }, {
                name: 'Zapier',
                logo: zapierLogo,
                color: '#ff4a00'
              }, {
                name: 'Slack',
                logo: slackLogo,
                color: '#4A154B'
              }, {
                name: 'WhatsApp',
                logo: whatsappLogo,
                color: '#25d366'
              }, {
                name: 'Gmail',
                logo: gmailLogo,
                color: '#ea4335'
              }].map((platform, index) => <div key={platform.name} className="group relative" style={{
                animationDelay: `${index * 100}ms`
              }}>
                    <div className="aspect-square bg-[#1A1A2E]/50 rounded-2xl border border-[#00E5D6]/10 hover:border-[#E536C1]/30 transition-all duration-300 group-hover:scale-105 flex flex-col items-center justify-center p-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2 p-2 bg-white/10">
                        <img src={platform.logo} alt={`${platform.name} logo`} className="w-full h-full object-contain filter brightness-0 invert" />
                      </div>
                      <div className="text-xs text-[#D3D4FF]/80 text-center font-medium">
                        {platform.name}
                      </div>
                    </div>
                    
                    {/* Connection indicator */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00E5D6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                  </div>)}
              </div>

              {/* Connection Flow Visualization */}
              <div className="relative mb-8">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-[#D3D4FF]/70">Data flows seamlessly through</div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#00E5D6] to-[#E536C1] animate-pulse"></div>
                    <div className="text-sm font-bold text-[#00E5D6]">1000+ platforms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-[#1A1A2E]/30 backdrop-blur-sm rounded-2xl border border-[#00E5D6]/10 p-4 text-center">
              <div className="text-2xl font-bold text-[#00E5D6] mb-1" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
                &lt;2min
              </div>
              <div className="text-sm text-[#D3D4FF]/70">Setup Time</div>
            </div>
            <div className="bg-[#1A1A2E]/30 backdrop-blur-sm rounded-2xl border border-[#E536C1]/10 p-4 text-center">
              <div className="text-2xl font-bold text-[#E536C1] mb-1" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
                99.9%
              </div>
              <div className="text-sm text-[#D3D4FF]/70">Uptime</div>
            </div>
            <div className="bg-[#1A1A2E]/30 backdrop-blur-sm rounded-2xl border border-[#6233EA]/10 p-4 text-center">
              <div className="text-2xl font-bold text-[#6233EA] mb-1" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
                Real-time
              </div>
              <div className="text-sm text-[#D3D4FF]/70">Sync</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E536C1] to-[#6233EA] px-6 py-3 rounded-full border border-[#00E5D6]/30 text-white font-medium" style={{
          fontFamily: 'Audiowide, sans-serif'
        }}>
            <span>🚀</span>
            <span>Done For You Integration With 1000+ Apps</span>
          </div>
        </div>
      </div>
    </section>;
}