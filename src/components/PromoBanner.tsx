import React, { useState } from 'react';
import { Sparkles, Copy, Check, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/trainerData';

interface PromoBannerProps {
  onOpenQuiz: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenQuiz }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(BUSINESS_INFO.promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-[#111315] border-b border-[#24282c] text-xs sm:text-sm py-2.5 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-gray-300">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ccff00]/15 text-[#ccff00] font-semibold text-xs tracking-wider uppercase border border-[#ccff00]/30">
            <Sparkles className="w-3 h-3 text-[#ccff00]" />
            GARAGEGYM & ABU DHABI SPECIAL
          </span>
          <span className="font-medium text-white">
            <strong className="text-white">AED 199</strong> First Month Assessment (Save AED 400)
          </span>
          <span className="hidden md:inline text-gray-500">•</span>
          <span className="hidden md:inline text-gray-400">
            30-Day Full Money-Back Guarantee
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1a1e22] hover:bg-[#252b31] border border-[#2e353c] text-gray-300 hover:text-white transition-all text-xs font-mono"
            title="Copy promo code"
          >
            <span>CODE: <strong className="text-[#ccff00]">{BUSINESS_INFO.promoCode}</strong></span>
            {copied ? (
              <span className="flex items-center text-[#ccff00] gap-1">
                <Check className="w-3 h-3" />
                <span className="text-[10px]">COPIED</span>
              </span>
            ) : (
              <Copy className="w-3 h-3 text-gray-400" />
            )}
          </button>

          <button
            onClick={onOpenQuiz}
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#ccff00] hover:text-[#b8f000] transition-colors"
          >
            <span>Claim Offer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
