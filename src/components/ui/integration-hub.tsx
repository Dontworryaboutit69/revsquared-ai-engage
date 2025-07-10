
import React from 'react';

export function IntegrationHub() {
  return (
    <section className="py-20 px-4 relative bg-gradient-to-br from-[#0D0D0D] via-[#20215A]/20 to-[#6233EA]/10">
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

        {/* Compact Integration Flow */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#20215A]/20 to-[#6233EA]/20 border border-[#00E5D6]/20 backdrop-blur-sm p-8">
          {/* Central Hub */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00E5D6] to-[#E536C1] p-0.5">
                <div className="w-full h-full rounded-2xl bg-[#0D0D0D] flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/d64a4e8e-0ca8-4662-b3ba-05c284992535.png" 
                    alt="RevSquared AI" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00E5D6]/30 to-[#E536C1]/30 blur-md -z-10 animate-pulse"></div>
            </div>
          </div>

          {/* Integration Icons Flow */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
            {[
              { name: 'HubSpot', icon: 'H', bg: 'from-[#ff7a59] to-[#ff5722]' },
              { name: 'Salesforce', icon: 'SF', bg: 'from-[#00a1e0] to-[#0288d1]' },
              { name: 'Zapier', icon: 'Z', bg: 'from-[#ff4a00] to-[#FEDD4D]' },
              { name: 'Slack', icon: 'S', bg: 'from-[#4A154B] to-[#E536C1]' },
              { name: 'WhatsApp', icon: 'W', bg: 'from-[#25d366] to-[#00E5D6]' },
              { name: 'Gmail', icon: 'G', bg: 'from-[#ea4335] to-[#E536C1]' }
            ].map((platform, index) => (
              <div 
                key={platform.name}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br bg-[#20215A]/40 border border-[#00E5D6]/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#E536C1]/50">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${platform.bg} flex items-center justify-center text-white font-bold text-sm`}>
                    {platform.icon}
                  </div>
                </div>
                <p className="text-xs text-[#D3D4FF] mt-2 font-medium">{platform.name}</p>
                
                {/* Connection line */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#00E5D6]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-[#20215A]/30 border border-[#00E5D6]/20">
              <div className="text-2xl font-bold text-[#00E5D6] mb-1" style={{ fontFamily: 'Audiowide, sans-serif' }}>
                1000+
              </div>
              <div className="text-sm text-[#D3D4FF]">Integrations</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-[#20215A]/30 border border-[#E536C1]/20">
              <div className="text-2xl font-bold text-[#E536C1] mb-1" style={{ fontFamily: 'Audiowide, sans-serif' }}>
                &lt;5min
              </div>
              <div className="text-sm text-[#D3D4FF]">Setup Time</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-[#20215A]/30 border border-[#6233EA]/20">
              <div className="text-2xl font-bold text-[#6233EA] mb-1" style={{ fontFamily: 'Audiowide, sans-serif' }}>
                99.9%
              </div>
              <div className="text-sm text-[#D3D4FF]">Uptime</div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-[#00E5D6] rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-8 w-1 h-1 bg-[#E536C1] rounded-full animate-ping"></div>
          <div className="absolute bottom-8 left-1/4 w-1.5 h-1.5 bg-[#6233EA] rounded-full animate-pulse"></div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E536C1] to-[#6233EA] px-6 py-3 rounded-full border border-[#00E5D6]/30 text-white font-medium" style={{
            fontFamily: 'Audiowide, sans-serif',
          }}>
            <span>🚀</span>
            <span>Ready to integrate in minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
