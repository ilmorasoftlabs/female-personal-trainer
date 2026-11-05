import React, { useState } from 'react';
import { Copy, Check, ArrowRight } from 'lucide-react';
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
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0e1012] border-b border-white/[0.06] text-xs py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Clean announcement matching Future.co */}
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
          <span className="text-gray-300">
            <strong className="text-white font-semibold">Special Offer:</strong> AED 199 first month assessment with code{' '}
            <span className="text-[#ccff00] font-mono font-semibold">{BUSINESS_INFO.promoCode}</span>
          </span>
          <span className="hidden md:inline text-gray-500">•</span>
          <span className="hidden md:inline text-gray-400">
            Cancel within 30 days for a full refund
          </span>
        </div>

        {/* Right: Copy & Claim actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopyCode}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-gray-300 hover:text-white transition-colors text-[11px] font-mono cursor-pointer"
            title="Click to copy promo code"
          >
            {copied ? (
              <span className="flex items-center gap-1 text-[#ccff00]">
                <Check className="w-3 h-3" />
                <span>Copied</span>
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <Copy className="w-3 h-3 text-gray-400" />
                <span>Copy Code</span>
              </span>
            )}
          </button>

          <button
            onClick={onOpenQuiz}
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#ccff00] hover:text-white transition-colors cursor-pointer ml-1"
          >
            <span>Claim Offer</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
