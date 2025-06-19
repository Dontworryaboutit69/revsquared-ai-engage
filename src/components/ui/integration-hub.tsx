
import React, { useState, useEffect, useRef } from 'react';

export function IntegrationHub() {
  const [isExpanded, setIsExpanded] = useState(false);
  const centerHubRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleHubHover = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleHubLeave = () => {
    setIsExpanded(false);
  };

  return (
    <section className="py-20 px-4 relative bg-gradient-to-br from-[#0D0D0D] via-[#20215A]/20 to-[#6233EA]/10">
      <style>
        {`
          .integration-section {
            padding: 100px 20px;
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #0D0D0D 0%, #20215A 50%, #0D0D0D 100%);
          }

          .web-container {
            position: relative;
            width: 100%;
            height: 800px;
            margin: 0 auto;
          }

          .center-hub {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 280px;
            height: 280px;
            background: rgba(13, 13, 13, 0.8);
            border-radius: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 20;
            box-shadow: 
                0 0 60px rgba(0, 229, 214, 0.4),
                0 0 120px rgba(229, 54, 193, 0.3),
                inset 0 0 40px rgba(0, 229, 214, 0.1);
            animation: hubPulse 4s ease-in-out infinite;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 3px solid #00E5D6;
            backdrop-filter: blur(15px);
          }

          .center-hub:hover {
            transform: translate(-50%, -50%) scale(1.05);
            box-shadow: 
                0 0 80px rgba(0, 229, 214, 0.6),
                0 0 160px rgba(229, 54, 193, 0.5),
                inset 0 0 60px rgba(0, 229, 214, 0.2);
            border-color: #E536C1;
          }

          @keyframes hubPulse {
            0%, 100% { 
                transform: translate(-50%, -50%) scale(1);
                box-shadow: 
                    0 0 60px rgba(0, 229, 214, 0.4),
                    0 0 120px rgba(229, 54, 193, 0.3),
                    inset 0 0 40px rgba(0, 229, 214, 0.1);
            }
            50% { 
                transform: translate(-50%, -50%) scale(1.02);
                box-shadow: 
                    0 0 80px rgba(0, 229, 214, 0.6),
                    0 0 160px rgba(229, 54, 193, 0.5),
                    inset 0 0 60px rgba(0, 229, 214, 0.2);
            }
          }

          .integration-node {
            position: absolute;
            width: 130px;
            height: 130px;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(13, 13, 13, 0.8);
            backdrop-filter: blur(10px);
            border: 2px solid #00E5D6;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            z-index: 15;
            opacity: 0;
            transform: scale(0.5);
            box-shadow: 
                0 0 20px rgba(0, 229, 214, 0.3),
                inset 0 0 20px rgba(0, 229, 214, 0.05);
          }

          .integration-node.visible {
            opacity: 1;
            transform: scale(1);
          }

          .integration-node:hover {
            transform: scale(1.15);
            background: rgba(13, 13, 13, 0.9);
            border-color: #E536C1;
            box-shadow: 
                0 10px 40px rgba(229, 54, 193, 0.4),
                0 0 60px rgba(229, 54, 193, 0.3),
                inset 0 0 30px rgba(229, 54, 193, 0.1);
          }

          .node-logo {
            width: 60px;
            height: 60px;
            border-radius: 12px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Audiowide', sans-serif;
            font-size: 1.4rem;
            font-weight: 400;
            color: #F5F5F5;
            box-shadow: 0 0 15px rgba(0, 229, 214, 0.3);
          }

          .node-name {
            font-family: 'Manrope', sans-serif;
            font-size: 0.9rem;
            font-weight: 600;
            text-align: center;
            line-height: 1.2;
            color: #D3D4FF;
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

          .node-1 { top: 5%; left: 50%; transform: translateX(-50%) scale(0.5); }
          .node-2 { top: 12%; right: 18%; transform: scale(0.5); }
          .node-3 { top: 25%; right: 8%; transform: scale(0.5); }
          .node-4 { top: 45%; right: 3%; transform: scale(0.5); }
          .node-5 { bottom: 25%; right: 8%; transform: scale(0.5); }
          .node-6 { bottom: 12%; right: 18%; transform: scale(0.5); }
          .node-7 { bottom: 5%; left: 50%; transform: translateX(-50%) scale(0.5); }
          .node-8 { bottom: 12%; left: 18%; transform: scale(0.5); }
          .node-9 { bottom: 25%; left: 8%; transform: scale(0.5); }
          .node-10 { top: 45%; left: 3%; transform: scale(0.5); }
          .node-11 { top: 25%; left: 8%; transform: scale(0.5); }
          .node-12 { top: 12%; left: 18%; transform: scale(0.5); }
        `}
      </style>
      
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#00E5D6]" style={{
          fontFamily: 'Audiowide, sans-serif'
        }}>
          RevSquared AI Integration Hub
        </h2>
        <p className="text-xl text-[#D3D4FF] mb-12 max-w-3xl mx-auto" style={{
          fontFamily: 'Manrope, sans-serif'
        }}>
          The central intelligence that connects and amplifies your entire tech ecosystem
        </p>

        <div className="web-container" ref={containerRef}>
          {/* Central RevSquared AI Hub */}
          <div 
            className="center-hub" 
            ref={centerHubRef}
            onMouseEnter={handleHubHover}
            onMouseLeave={handleHubLeave}
          >
            <div className="w-48 h-48 flex items-center justify-center mb-4">
              <img 
                src="/lovable-uploads/d64a4e8e-0ca8-4662-b3ba-05c284992535.png" 
                alt="RevSquared AI Logo" 
                className="w-40 h-40 object-contain"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(0, 229, 214, 0.3))'
                }}
              />
            </div>
            <div className="text-[#D3D4FF]/80 text-sm" style={{
              fontFamily: 'Manrope, sans-serif',
              opacity: isExpanded ? 0 : 0.8,
              transition: 'opacity 0.3s ease'
            }}>
              Hover to explore integrations
            </div>
          </div>

          {/* Integration Nodes */}
          <div className={`integration-node node-1 ${isExpanded ? 'visible' : ''}`}>
            <div className="node-logo hubspot">H</div>
            <div className="node-name">HubSpot</div>
          </div>

          <div className={`integration-node node-2 ${isExpanded ? 'visible' : ''}`}>
            <div className="node-logo salesforce">SF</div>
            <div className="node-name">Salesforce</div>
          </div>

          <div className={`integration-node node-3 ${isExpanded ? 'visible' : ''}`}>
            <div className="node-logo ghl">GHL</div>
            <div className="node-name">GoHighLevel</div>
          </div>

          <div className={`integration-node node-4 ${isExpanded ? 'visible' : ''}`}>
            <div className="node-logo podium">P</div>
            <div className="node-name">Podium</div>
          </div>

          <div className={`integration-node node-5 ${isExpanded ? 'visible' : ''}`}>
            <div className="node-logo zapier">Z</div>
            <div className="node-name">Zapier</div>
          </div>

          <div className={`integration-node node-6 ${isExpanded ? 'visible' : ''}`}>
            <div className="node-logo n8n">n8n</div>
            <div className="node-name">n8n</div>
          </div>

          <div className={`integration-node node-7 ${isExpanded ? 'visible' : ''}`}>
            <div className="node-logo zoho">Z</div>
            <div className="node-name">Zoho</div>
          </div>

          <div className={`integration-node node-8 ${isExpanded ? 'visible' : ''}`}>
            <div className="node-logo roofr">R</div>
            <div className="node-name">Roofr</div>
          </div>

          <div className={`integration-node node-9 ${isExpanded ? 'visible' : ''}`}>
            <div className="node-logo aqualinx">AQ</div>
            <div className="node-name">Aqualinx</div>
          </div>

          <div className={`integration-node node-10 ${isExpanded ? 'visible' : ''}`}>
            <div className="node-logo whatsapp">W</div>
            <div className="node-name">WhatsApp</div>
          </div>

          <div className={`integration-node node-11 ${isExpanded ? 'visible' : ''}`}>
            <div className="node-logo gmail">G</div>
            <div className="node-name">Gmail</div>
          </div>

          <div className={`integration-node node-12 ${isExpanded ? 'visible' : ''}`}>
            <div className="node-logo more-apps">∞</div>
            <div className="node-name">1000+ More</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-[#E536C1] to-[#6233EA] px-8 py-4 rounded-full border-2 border-[#00E5D6]" style={{
            fontFamily: 'Audiowide, sans-serif',
            boxShadow: '0 0 30px rgba(229, 54, 193, 0.4)'
          }}>
            🚀 Connects 1000s of Applications
          </div>
        </div>
      </div>
    </section>
  );
}
