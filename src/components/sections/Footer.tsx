
import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="py-8 sm:py-10 md:py-12 px-4 bg-[#20215A]/50 border-t border-[#00E5D6]/30">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#00E5D6] rounded-lg flex items-center justify-center">
            <span className="text-[#0D0D0D] text-lg sm:text-xl md:text-2xl font-bold">R²</span>
          </div>
        </div>
        <p className="text-[#D3D4FF] mb-3 sm:mb-4 text-sm sm:text-base" style={{
        fontFamily: 'Manrope, sans-serif'
      }}>
          © 2025 RevSquared AI. Old school cool. New school smart.
        </p>
        <p className="text-[#D3D4FF]/70 text-xs sm:text-sm px-4 mb-4" style={{
        fontFamily: 'Manrope, sans-serif'
      }}>
          Transform your business with custom AI agents that work 24/7
        </p>
        <div className="flex justify-center">
          <Link 
            to="/privacy-policy" 
            className="text-[#00E5D6] hover:text-[#00E5D6]/80 text-xs sm:text-sm underline transition-colors"
            style={{
              fontFamily: 'Manrope, sans-serif'
            }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
