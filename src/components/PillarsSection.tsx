import React, { useState } from 'react';
import { Award, UserCheck, Calendar, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

interface PillarsSectionProps {
  onOpenQuiz: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenQuiz }) => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 'experts',
      title: 'Made by experts',
      icon: Award,
      summary: 'Our coaches create your program with proven methods informed by years of specialized training.',
      detail: 'Coach Kave designs every session using female-specific biomechanics, posterior chain strengthening, and hormonal phase adaptability. No generic templates — every set, rep, and recovery tempo is calibrated specifically for your physical anatomy.',
      stats: '100% Tailored to Female Biomechanics',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80',
      tag: 'Specialized Coaching'
    },
    {
      id: 'accountability',
      title: 'Never train alone',
      icon: UserCheck,
      summary: 'Your coach checks in, monitors your progress, and holds you accountable, helping you stay consistent.',
      detail: 'Motivation comes and goes, but daily accountability creates lasting change. Coach Kave reviews your completed sets, monitors heart rate zones, answers nutrition questions, and sends WhatsApp voice memos right when you need an extra push.',
      stats: '98% Consistency Rate in 4 Weeks',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
      tag: 'Daily WhatsApp Support'
    },
    {
      id: 'real-life',
      title: 'Designed for real life',
      icon: Calendar,
      summary: 'Move workouts, adjust days, and adapt your plan at any time without penalty.',
      detail: 'Life in Abu Dhabi moves fast. Whether you are traveling for business, caring for children, or need your trainer to come directly to your residential tower gym instead of home, your schedule stays completely adaptable.',
      stats: 'Villa, Gym, Corniche or Digital',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80',
      tag: 'Ultimate Flexibility'
    },
    {
      id: 'momentum',
      title: 'Momentum that lasts',
      icon: TrendingUp,
      summary: 'Your coach actively refines your plan over time so your training evolves with you.',
      detail: 'Say goodbye to fitness plateaus. We implement intelligent progressive overload, adjusting resistance, density, and recovery periods as you get stronger, leaner, and more energized.',
      stats: 'Measurable Weekly Strength Gains',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
      tag: 'Adaptive Progression'
    },
    {
      id: 'confidence',
      title: 'Move with confidence',
      icon: ShieldCheck,
      summary: 'Access a robust exercise library with video demos, voice cues, and form guidance for every movement.',
      detail: 'Never wonder if you are doing an exercise right. Coach Kave provides hands-on posture adjustments in person, and HD video breakdowns with exact coaching cues on digital days to protect your joints.',
      stats: 'Zero Risk Injury Prevention',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
      tag: 'Safe Joint Alignment'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#0c0d0e] border-t border-[#1c1f24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Future.co */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#ccff00]">
              THE COACH KAVE DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Together, we go further
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl">
              Fitness works best when you have an expert in your corner. Work 1-on-1 with Coach Kave to build unstoppable consistency.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ccff00] text-black font-bold text-xs uppercase tracking-wider volt-glow hover:bg-[#b8f000] transition-colors cursor-pointer"
            >
              <span>Find Your Coach</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Pillar Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-10">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-[#181b1f] border-[#ccff00] shadow-lg shadow-[#ccff00]/5'
                    : 'bg-[#121417] border-[#22262b] hover:border-[#343a42] text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#ccff00]" />
                )}
                <Icon className={`w-5 h-5 mb-2.5 ${isActive ? 'text-[#ccff00]' : 'text-gray-500'}`} />
                <h3 className={`font-bold text-sm leading-tight ${isActive ? 'text-white' : 'text-gray-300'}`}>
                  {item.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Spotlight Showcase Card */}
        <div className="future-card p-6 sm:p-10 border-[#282d33] bg-[#131518] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] text-xs font-semibold">
                <span>{pillars[activeTab].tag}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                {pillars[activeTab].title}
              </h3>

              <p className="text-lg text-gray-200 font-medium leading-relaxed">
                {pillars[activeTab].summary}
              </p>

              <p className="text-sm text-gray-400 leading-relaxed">
                {pillars[activeTab].detail}
              </p>

              <div className="pt-2 flex items-center gap-4 border-t border-[#22272e]">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">
                    Proven Standard
                  </span>
                  <span className="text-sm font-bold text-[#ccff00]">
                    {pillars[activeTab].stats}
                  </span>
                </div>

                <div className="h-8 w-px bg-[#262b33]" />

                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">
                    Client Guarantee
                  </span>
                  <span className="text-sm font-bold text-white">
                    30-Day Money-Back
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/11] border border-[#2b3138] group">
                <img
                  src={pillars[activeTab].image}
                  alt={pillars[activeTab].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                    Abu Dhabi Female 1-on-1 Sessions
                  </span>
                  <span className="text-[#ccff00] font-mono">
                    Verified Program
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
