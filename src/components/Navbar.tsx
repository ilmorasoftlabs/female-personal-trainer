import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/trainerData';

interface NavbarProps {
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Workouts', href: '#workouts' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Location', href: '#location' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0c0d0e]/95 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-xl'
          : 'bg-[#0c0d0e]/80 backdrop-blur-md border-b border-white/[0.05] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Sleek Modern Wordmark matching Future.co */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-[#ccff00] transition-colors">
              COACH KAVE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
            <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase hidden sm:inline">
              Abu Dhabi
            </span>
          </a>

          {/* Desktop Navigation Links - Clean & Well Spaced */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Direct Link */}
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/[0.05] transition-colors"
              title="Chat directly on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Action Button matching Future.co */}
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-black bg-[#ccff00] hover:bg-[#b8f000] volt-glow transition-all active:scale-95 cursor-pointer"
            >
              <span>Find Your Coach</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/[0.05] text-gray-300 hover:text-white border border-white/[0.08]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111316] border-b border-white/[0.08] px-4 pt-3 pb-6 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl bg-white/[0.03] text-sm font-medium text-gray-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/[0.06] space-y-2">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Coach Kave ({BUSINESS_INFO.phoneFormatted})</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
