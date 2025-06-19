
import React, { useEffect, useRef, useState } from 'react';

export function IntegrationHub() {
  const [isExpanded, setIsExpanded] = useState(false);
  const hubRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const integrations = [
    { id: 'hubspot', name: 'HubSpot', logo: 'H', colorClass: 'hubspot' },
    { id: 'salesforce', name: 'Salesforce', logo: 'SF', colorClass: 'salesforce' },
    { id: 'ghl', name: 'GoHighLevel', logo: 'GHL', colorClass: 'ghl' },
    { id: 'podium', name: 'Podium', logo: 'P', colorClass: 'podium' },
    { id: 'zapier', name: 'Zapier', logo: 'Z', colorClass: 'zapier' },
    { id: 'n8n', name: 'n8n', logo: 'n8n', colorClass: 'n8n' },
    { id: 'zoho', name: 'Zoho', logo: 'Z', colorClass: 'zoho' },
    { id: 'roofr', name: 'Roofr', logo: 'R', colorClass: 'roofr' },
    { id: 'aqualinx', name: 'Aqualinx', logo: 'AQ', colorClass: 'aqualinx' },
    { id: 'whatsapp', name: 'WhatsApp', logo: 'W', colorClass: 'whatsapp' },
    { id: 'gmail', name: 'Gmail', logo: 'G', colorClass: 'gmail' },
    { id: 'more', name: '1000+ More', logo: '∞', colorClass: 'more-apps' },
  ];

  const createWebLines = () => {
    if (!hubRef.current || !linesRef.current || !containerRef.current) return;

    linesRef.current.innerHTML = '';
    const centerRect = hubRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const centerX = centerRect.left + centerRect.width / 2 - containerRect.left;
    const centerY = centerRect.top + centerRect.height / 2 - containerRect.top;

    const nodes = containerRef.current.querySelectorAll('.integration-node');
    nodes.forEach((node, index) => {
      const nodeRect = (node as HTMLElement).getBoundingClientRect();
      const nodeX = nodeRect.left + nodeRect.width / 2 - containerRect.left;
      const nodeY = nodeRect.top + nodeRect.height / 2 - containerRect.top;

      const line = document.createElement('div');
      line.className = 'web-line';
      
      const deltaX = nodeX - centerX;
      const deltaY = nodeY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

      line.style.width = distance + 'px';
      line.style.left = centerX + 'px';
      line.style.top = centerY + 'px';
      line.style.transform = `rotate(${angle}deg)`;
      line.style.animationDelay = (index * 0.1) + 's';

      linesRef.current?.appendChild(line);
    });
  };

  const expandWeb = () => {
    if (isExpanded) return;
    setIsExpanded(true);

    const nodes = containerRef.current?.querySelectorAll('.integration-node');
    nodes?.forEach((node, index) => {
      setTimeout(() => {
        (node as HTMLElement).classList.add('visible');
      }, index * 100);
    });

    setTimeout(() => {
      createWebLines();
      setTimeout(() => {
        const lines = linesRef.current?.querySelectorAll('.web-line');
        lines?.forEach((line, index) => {
          setTimeout(() => {
            (line as HTMLElement).classList.add('visible');
          }, index * 60);
        });
      }, 200);
    }, 600);

    setTimeout(createDataParticles, 1800);
  };

  const collapseWeb = () => {
    if (!isExpanded) return;
    setIsExpanded(false);

    const lines = linesRef.current?.querySelectorAll('.web-line');
    lines?.forEach(line => {
      (line as HTMLElement).classList.remove('visible');
    });

    const nodes = containerRef.current?.querySelectorAll('.integration-node');
    nodes?.forEach(node => {
      (node as HTMLElement).classList.remove('visible');
    });
  };

  const createDataParticles = () => {
    if (!isExpanded || !particlesRef.current || !containerRef.current) return;
    
    const webLines = linesRef.current?.querySelectorAll('.web-line.visible');
    
    webLines?.forEach((line, lineIndex) => {
      setInterval(() => {
        if (!isExpanded || !particlesRef.current || !containerRef.current) return;
        
        const particle = document.createElement('div');
        particle.className = 'data-particle';
        
        const lineRect = (line as HTMLElement).getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        
        particle.style.left = (lineRect.left - containerRect.left) + 'px';
        particle.style.top = (lineRect.top - containerRect.top) + 'px';
        
        const transformMatch = (line as HTMLElement).style.transform.match(/-?\d+\.?\d*/);
        const angle = transformMatch ? parseFloat(transformMatch[0]) : 0;
        const distance = parseFloat((line as HTMLElement).style.width);
        
        particlesRef.current.appendChild(particle);

        let progress = 0;
        const animate = () => {
          progress += 0.02;
          if (progress <= 1) {
            const currentDistance = distance * progress;
            const radians = (angle * Math.PI) / 180;
            const x = Math.cos(radians) * currentDistance;
            const y = Math.sin(radians) * currentDistance;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(animate);
          } else {
            particle.remove();
          }
        };
        animate();
      }, 2000 + lineIndex * 200);
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0D0D0D] via-[#20215A]/30 to-[#0D0D0D] relative min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full text-center">
        <div className="mb-20">
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00E5D6] via-[#E536C1] to-[#6233EA] bg-clip-text text-transparent"
            style={{ fontFamily: 'Audiowide, sans-serif' }}
          >
            RevSquared AI Integration Hub
          </h2>
          <p 
            className="text-xl text-[#D3D4FF] max-w-3xl mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            The central intelligence that connects and amplifies your entire tech ecosystem
          </p>
        </div>

        <div 
          ref={containerRef}
          className="web-container relative w-full h-[800px] mx-auto"
        >
          {/* Retro Grid Background */}
          <div className="retro-grid absolute inset-0 opacity-30 bg-grid-pattern bg-[length:40px_40px]" />
          
          {/* Central RevSquared AI Hub */}
          <div 
            ref={hubRef}
            className="center-hub absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#0D0D0D]/80 rounded-3xl flex flex-col items-center justify-center z-20 border-4 border-[#00E5D6] backdrop-blur-xl cursor-pointer transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: '0 0 60px rgba(0, 229, 214, 0.4), 0 0 120px rgba(229, 54, 193, 0.3), inset 0 0 40px rgba(0, 229, 214, 0.1)',
              animation: 'hubPulse 4s ease-in-out infinite'
            }}
            onMouseEnter={expandWeb}
            onMouseLeave={collapseWeb}
          >
            <div className="w-44 h-44 flex items-center justify-center mb-5">
              <img 
                src="/lovable-uploads/d64a4e8e-0ca8-4662-b3ba-05c284992535.png" 
                alt="RevSquared AI Logo" 
                className="w-40 h-40 object-contain"
                style={{ filter: 'drop-shadow(0 0 20px rgba(0, 229, 214, 0.3))' }}
              />
            </div>
            <div 
              className="text-[#D3D4FF] text-sm opacity-80"
              style={{
                fontFamily: 'Manrope, sans-serif',
                animation: 'retroglow 3s ease-in-out infinite'
              }}
            >
              Hover to explore integrations
            </div>
          </div>

          {/* Integration Nodes */}
          {integrations.map((integration, index) => {
            const angle = (index * 360) / integrations.length;
            const radius = 320;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={integration.id}
                className="integration-node absolute w-32 h-32 rounded-2xl flex flex-col items-center justify-center bg-[#0D0D0D]/80 backdrop-blur-sm border-2 border-[#00E5D6] transition-all duration-500 cursor-pointer z-15 opacity-0 scale-50"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0.5)`,
                  boxShadow: '0 0 20px rgba(0, 229, 214, 0.3), inset 0 0 20px rgba(0, 229, 214, 0.05)'
                }}
              >
                <div 
                  className={`node-logo w-15 h-15 rounded-xl mb-3 flex items-center justify-center text-white font-bold text-xl ${integration.colorClass}`}
                  style={{ fontFamily: 'Audiowide, sans-serif' }}
                >
                  {integration.logo}
                </div>
                <div 
                  className="node-name text-[#D3D4FF] text-sm font-semibold text-center leading-tight"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {integration.name}
                </div>
              </div>
            );
          })}

          {/* Connection Lines Container */}
          <div ref={linesRef} className="absolute inset-0 z-5" />
          
          {/* Data Particles Container */}
          <div ref={particlesRef} className="absolute inset-0 z-10" />
        </div>

        {/* Stats Overlay */}
        <div className="absolute top-5 right-5 bg-[#0D0D0D]/90 backdrop-blur-xl p-6 rounded-2xl border-2 border-[#00E5D6] z-25 hidden lg:block">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#D3D4FF]">Total Integrations:</span>
              <span className="text-[#FEDD4D] font-bold" style={{ fontFamily: 'Audiowide, sans-serif' }}>1000+</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#D3D4FF]">Active Connections:</span>
              <span className="text-[#FEDD4D] font-bold" style={{ fontFamily: 'Audiowide, sans-serif' }}>12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#D3D4FF]">Data Sync Rate:</span>
              <span className="text-[#FEDD4D] font-bold" style={{ fontFamily: 'Audiowide, sans-serif' }}>99.9%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#D3D4FF]">Response Time:</span>
              <span className="text-[#FEDD4D] font-bold" style={{ fontFamily: 'Audiowide, sans-serif' }}>&lt;200ms</span>
            </div>
          </div>
        </div>

        {/* Scale Badge */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#E536C1] to-[#6233EA] px-8 py-4 rounded-full border-2 border-[#00E5D6] z-25">
          <span 
            className="text-white text-lg font-bold"
            style={{ fontFamily: 'Audiowide, sans-serif' }}
          >
            🚀 Connects 1000s of Applications
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes hubPulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 60px rgba(0, 229, 214, 0.4), 0 0 120px rgba(229, 54, 193, 0.3), inset 0 0 40px rgba(0, 229, 214, 0.1);
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.02);
            box-shadow: 0 0 80px rgba(0, 229, 214, 0.6), 0 0 160px rgba(229, 54, 193, 0.5), inset 0 0 60px rgba(0, 229, 214, 0.2);
          }
        }

        @keyframes retroglow {
          0%, 100% { 
            opacity: 0.5; 
            text-shadow: 0 0 10px rgba(0, 229, 214, 0.3);
          }
          50% { 
            opacity: 1;
            text-shadow: 0 0 20px rgba(0, 229, 214, 0.6);
          }
        }

        @keyframes neonFlow {
          0%, 100% { 
            opacity: 0.4;
            box-shadow: 0 0 5px rgba(0, 229, 214, 0.3);
          }
          50% { 
            opacity: 1;
            box-shadow: 0 0 20px rgba(0, 229, 214, 0.8);
          }
        }

        .integration-node.visible {
          opacity: 1;
          transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1);
        }

        .integration-node:hover {
          transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1.15);
          background: rgba(13, 13, 13, 0.9);
          border-color: #E536C1;
          box-shadow: 0 10px 40px rgba(229, 54, 193, 0.4), 0 0 60px rgba(229, 54, 193, 0.3), inset 0 0 30px rgba(229, 54, 193, 0.1);
        }

        .web-line {
          position: absolute;
          height: 3px;
          background: linear-gradient(90deg, rgba(0, 229, 214, 0.8) 0%, rgba(229, 54, 193, 0.6) 50%, rgba(98, 51, 234, 0.8) 100%);
          transform-origin: left center;
          z-index: 5;
          animation: neonFlow 3s ease-in-out infinite;
          opacity: 0;
          transition: opacity 0.6s ease;
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(0, 229, 214, 0.5);
        }

        .web-line.visible {
          opacity: 0.8;
        }

        .data-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, #FEDD4D 0%, transparent 70%);
          border-radius: 50%;
          z-index: 10;
          box-shadow: 0 0 10px #FEDD4D;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 229, 214, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 229, 214, 0.1) 1px, transparent 1px);
        }

        .hubspot { background: linear-gradient(135deg, #ff7a59 0%, #ff5722 100%); }
        .salesforce { background: linear-gradient(135deg, #00a1e0 0%, #0288d1 100%); }
        .ghl { background: linear-gradient(135deg, #6233EA 0%, #E536C1 100%); }
        .podium { background: linear-gradient(135deg, #ff6b35 0%, #E536C1 100%); }
        .zapier { background: linear-gradient(135deg, #ff4a00 0%, #FEDD4D 100%); }
        .n8n { background: linear-gradient(135deg, #E536C1 0%, #6233EA 100%); }
        .zoho { background: linear-gradient(135deg, #c83e3e 0%, #E536C1 100%); }
        .roofr { background: linear-gradient(135deg, #2563eb 0%, #00E5D6 100%); }
        .aqualinx { background: linear-gradient(135deg, #00E5D6 0%, #6233EA 100%); }
        .whatsapp { background: linear-gradient(135deg, #25d366 0%, #00E5D6 100%); }
        .gmail { background: linear-gradient(135deg, #ea4335 0%, #E536C1 100%); }
        .more-apps { background: linear-gradient(135deg, #FEDD4D 0%, #E536C1 100%); }
      `}</style>
    </section>
  );
}
