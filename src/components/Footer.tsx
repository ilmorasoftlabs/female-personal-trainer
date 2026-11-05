import React from 'react';
import { 
  ShieldCheck, 
  Star, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ExternalLink,
  Heart
} from 'lucide-react';
import { BUSINESS_INFO, ABU_DHABI_AREAS } from '../data/trainerData';

interface FooterProps {
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuiz }) => {
  return (
    <footer className="bg-[#090a0c] border-t border-[#1e2227] pt-16 pb-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1c2025]">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#16181b] border border-[#2e343b] flex items-center justify-center font-display font-black text-white text-lg">
                <span className="text-[#ccff00]">K</span>
                <span>V</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-white text-base tracking-wider uppercase block">
                  COACH KAVE
                </span>
                <span className="text-[11px] text-[#ccff00] font-semibold">
                  Female Personal Trainer • Abu Dhabi
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-xs leading-relaxed max-w-sm">
              Dedicated 1-on-1 female fitness coaching, progressive biomechanics, and daily accountability across Abu Dhabi. In-home, residential gym, and on-demand digital training.
            </p>

            <div className="space-y-1.5 pt-1">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#ccff00] transition-colors"
              >
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold">5.0 Star Rating</span>
                <span className="text-gray-400">(44 Google Reviews)</span>
              </a>

              <div className="flex items-center gap-1.5 text-gray-400 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>Verified Women-Owned Business</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">
                  360° Roadmap
                </a>
              </li>
              <li>
                <a href="#workouts" className="hover:text-white transition-colors">
                  The Workouts
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Client Results (44 ★)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Packages & Pricing
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenQuiz}
                  className="text-[#ccff00] hover:text-[#b8f000] font-semibold transition-colors cursor-pointer"
                >
                  Start 1-Min Matching Quiz
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Service Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Abu Dhabi Areas
            </h4>
            <ul className="space-y-1.5 text-gray-400">
              {ABU_DHABI_AREAS.slice(0, 6).map((area, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#ff5a36] shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Direct Contact
            </h4>
            <div className="space-y-2.5">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#ccff00] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <div className="text-[11px] text-gray-400 leading-snug">
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#ccff00] hover:underline pt-1 text-xs font-semibold"
              >
                <span>View Google Maps Listing</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Coach Kave. All rights reserved. Identifies as women-owned.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Health Disclosure</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
