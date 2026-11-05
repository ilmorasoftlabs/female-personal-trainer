import React, { useState, useEffect } from 'react';
import { Menu, X, Star, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/trainerData';

interface NavbarProps {
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Workouts', href: '#workouts' },
    { 
      name: '44 Reviews', 
      href: '#reviews', 
      badge: '5.0 ★' 
    },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Abu Dhabi Location', href: '#location' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0d0e]/90 backdrop-blur-xl border-b border-[#24282c] py-3.5 shadow-2xl'
          : 'bg-[#0c0d0e]/60 backdrop-blur-md border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Sub-identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#181a1d] border border-[#2e3338] flex items-center justify-center font-display font-extrabold text-white text-lg tracking-tight group-hover:border-[#ccff00] transition-colors relative">
              <span className="text-[#ccff00]">K</span>
              <span>V</span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-white text-lg tracking-tight tracking-wider uppercase">
                  COACH KAVE
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-white/10 text-gray-300">
                  <ShieldCheck className="w-3 h-3 text-[#ccff00]" />
                  Women-Owned
                </span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium tracking-wide">
                Female Personal Trainer • Abu Dhabi
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 group"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-[#ccff00]/20 text-[#ccff00] border border-[#ccff00]/30 group-hover:bg-[#ccff00] group-hover:text-black transition-colors">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-200 bg-[#16181b] hover:bg-[#202428] border border-[#2b3036] transition-all"
              title="Chat directly on WhatsApp"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 relative">
                <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping-slow" />
              </div>
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#ccff00] hover:bg-[#b8f000] volt-glow transition-all active:scale-95 cursor-pointer"
            >
              <span>Find Your Coach</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuiz}
              className="px-3 py-1.5 rounded-lg font-bold text-xs uppercase tracking-wider text-black bg-[#ccff00] hover:bg-[#b8f000]"
            >
              Find Coach
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#181a1d] text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111315] border-b border-[#24282c] px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#22262a]">
            <div className="flex items-center gap-1.5 text-xs text-amber-400">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold">5.0 Rating</span>
              <span className="text-gray-400">(44 Google Reviews)</span>
            </div>
            <span className="text-[11px] text-gray-400">Abu Dhabi, UAE</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg bg-[#181a1d] text-sm font-medium text-gray-300 hover:text-white flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold text-[#ccff00]">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1c2024] border border-[#2f353d] text-white text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Coach Kave ({BUSINESS_INFO.phoneFormatted})</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#ccff00] text-black font-extrabold text-sm uppercase tracking-wider volt-glow"
            >
              <span>Take 1-Minute Matching Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
