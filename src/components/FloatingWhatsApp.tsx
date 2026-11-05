import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/trainerData';

interface FloatingWhatsAppProps {
  onOpenQuiz: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenQuiz }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <>
      {/* Floating WhatsApp Bubble (Desktop + Tablet) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        {showTooltip && !dismissed && (
          <div className="bg-[#14171a] border border-[#2d343c] rounded-2xl p-3.5 shadow-2xl max-w-[280px] text-xs text-left relative animate-in fade-in slide-in-from-bottom-2 duration-300">
            <button
              onClick={() => {
                setShowTooltip(false);
                setDismissed(true);
              }}
              className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white text-[11px]">
                Coach Kave is online
              </span>
            </div>
            <p className="text-gray-300 text-xs">
              Have questions about in-home sessions or the AED 199 starter trial in Abu Dhabi?
            </p>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-[#ccff00] hover:underline font-bold text-[11px] inline-flex items-center gap-1"
            >
              <span>Chat with Coach Kave</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        )}

        <a
          href={BUSINESS_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-2xl transition-all transform hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-black text-emerald-500" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping-slow" />
          </div>
          <span className="text-black font-extrabold">WhatsApp Coach</span>
        </a>
      </div>

      {/* Sticky Bottom Bar on Mobile Devices */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0f1114]/95 backdrop-blur-lg border-t border-[#23282f] p-3 flex items-center gap-2.5">
        <button
          onClick={onOpenQuiz}
          className="flex-1 py-3 px-3 rounded-xl bg-[#ccff00] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 volt-glow"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Find Coach (Quiz)</span>
        </button>

        <a
          href={BUSINESS_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-[#1b1f24] border border-[#2c333c] text-white flex items-center justify-center"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-emerald-400" />
        </a>
      </div>
    </>
  );
};
