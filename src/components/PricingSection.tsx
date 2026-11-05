import React from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { PRICING_PLANS, BUSINESS_INFO } from '../data/trainerData';

interface PricingSectionProps {
  onOpenQuiz: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenQuiz }) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#0c0d0e] border-t border-[#1a1e23] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#ccff00]">
            TRANSPARENT & RISK-FREE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Invest in your health, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-white">
              backed by our guarantee
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            No long-term lock-ins. Flexible training packages designed around your goals in Abu Dhabi or wherever you travel.
          </p>

          {/* Promo Code Notification Pill */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161a1d] border border-[#ccff00]/40 text-xs text-white">
              <Sparkles className="w-4 h-4 text-[#ccff00]" />
              <span>Special Offer: Promo Code <strong className="text-[#ccff00] font-mono">{BUSINESS_INFO.promoCode}</strong> applied automatically!</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`future-card p-6 sm:p-8 flex flex-col justify-between relative transition-all ${
                  isPopular
                    ? 'bg-[#15181c] border-[#ccff00] shadow-2xl shadow-[#ccff00]/10 lg:-translate-y-2'
                    : 'bg-[#121417] border-[#24282e] hover:border-[#38404a]'
                }`}
              >
                {/* Popular or Badge Ribbon */}
                {plan.badge && (
                  <div className="absolute -top-3 left-6">
                    <span className={`text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full border ${
                      isPopular
                        ? 'bg-[#ccff00] text-black border-[#ccff00] volt-glow'
                        : 'bg-[#1e2329] text-[#ccff00] border-[#ccff00]/30'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-6 pt-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 min-h-[36px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pb-4 border-b border-[#24282e]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-semibold text-gray-400">AED</span>
                      <span className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          AED {plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-400 block mt-1">
                      /{plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                      Everything included:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isPopular ? 'text-[#ccff00]' : 'text-emerald-400'
                          }`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-8 mt-8 border-t border-[#22272e] space-y-3">
                  <button
                    onClick={onOpenQuiz}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-[#ccff00] hover:bg-[#b8f000] text-black volt-glow'
                        : 'bg-[#1e2329] hover:bg-[#282f37] text-white border border-[#343d48]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-gray-400 text-center">
                    {plan.secondaryInfo}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Future.co 30-Day Money-Back Guarantee Box */}
        <div className="max-w-3xl mx-auto future-card bg-[#14171a] border border-[#2b3139] p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#ccff00]/15 border border-[#ccff00]/30 text-[#ccff00] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              The 30-Day Risk-Free Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              We know that finding the right personal trainer is an important decision. If you do not feel 100% satisfied and excited with your coaching during your first 30 days, we will issue a full refund immediately.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
