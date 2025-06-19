
import React from 'react';

export function Footer() {
  return (
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
  );
}
