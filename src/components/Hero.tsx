import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Activity, 
  Flame, 
  Heart, 
  Volume2, 
  Play, 
  Pause 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/trainerData';

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleSimulatedAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-32 overflow-hidden">
      {/* Glow gradient backdrops matching Future.co */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#ccff00]/10 via-transparent to-[#ff5a36]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Future.co Typography & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust and Social Proof Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <a 
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181a1d] border border-[#2d3238] hover:border-[#ccff00]/50 transition-all text-xs text-gray-300 group"
              >
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">5.0</span>
                <span className="text-gray-400 group-hover:text-gray-200">
                  (44 Google Reviews)
                </span>
              </a>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Women-Owned Fitness
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs">
                <MapPin className="w-3 h-3 text-[#ff5a36]" />
                Abu Dhabi Corniche & Al Hisn
              </span>
            </div>

            {/* Main Headline - Mirroring Future.co style */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05]">
                Personal training, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#e2ff66] to-white">
                  reimagined.
                </span>
              </h1>
              <p className="text-base sm:text-xl text-gray-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Dedicated 1-on-1 female coaching and 360° support in Abu Dhabi to help you train for what’s next. At your villa, residential gym, or on-demand via our digital platform.
              </p>
            </div>

            {/* CTAs and Money Back Guarantee Subtext */}
            <div className="space-y-3.5 pt-2">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={onOpenQuiz}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-base uppercase tracking-wider text-black bg-[#ccff00] hover:bg-[#b8f000] volt-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Find Your Coach</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm text-gray-200 bg-[#16181b] hover:bg-[#1e2226] border border-[#2e343b] hover:border-gray-500 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Coach Kave</span>
                </a>
              </div>

              {/* Future.co pricing subtext badge */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-xs text-gray-400">
                <span className="font-semibold text-white">
                  AED 199 first month assessment with code{' '}
                  <span className="text-[#ccff00] font-mono">{BUSINESS_INFO.promoCode}</span>.
                </span>
                <span className="hidden sm:inline">•</span>
                <span>Cancel within 30 days for a full refund.</span>
              </div>
            </div>

            {/* Core Pillars Pills */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-xl mx-auto lg:mx-0 text-left">
              {[
                'Tailored Biomechanics',
                'In-Home & Private Gym',
                'Daily WhatsApp Checks',
                'Pre & Post-Natal Safe',
                'Nutrition Guidance',
                'Zero Cookie-Cutter Routines'
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Future.co Interactive App Stage & Coach Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[360px] sm:max-w-[420px]">
              
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ccff00]/20 via-[#ff5a36]/10 to-transparent rounded-[2.5rem] blur-2xl -z-10" />

              {/* Main Simulated Phone Frame */}
              <div className="bg-[#121417] border-2 border-[#2b3036] rounded-[2.5rem] p-4 shadow-2xl relative overflow-hidden">
                
                {/* Phone Speaker Notch */}
                <div className="w-24 h-4 bg-[#1b1e22] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-3 h-1 bg-black/60 rounded-full" />
                </div>

                {/* Workout Screen Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#24282c]">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#ccff00]">
                      TODAY'S WORKOUT • ABU DHABI
                    </span>
                    <h3 className="text-sm font-bold text-white">
                      Full Body Hypertrophy & Posture
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1b1f24] border border-[#2b3138] text-[11px] text-gray-300">
                    <Activity className="w-3 h-3 text-[#ccff00]" />
                    <span>Set 2 of 4</span>
                  </div>
                </div>

                {/* Workout Exercise Visual Preview */}
                <div className="my-3 relative rounded-2xl overflow-hidden aspect-[4/3] bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
                    alt="Coach Kave Exercise Demonstration"
                    className="w-full h-full object-cover object-center brightness-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-semibold text-[#ccff00] uppercase tracking-wider">
                          Exercise 01
                        </span>
                        <h4 className="text-white font-bold text-sm">
                          Dumbbell Romanian Deadlift
                        </h4>
                        <p className="text-[11px] text-gray-300">
                          10 reps • 2x 14 kg dumbbells • 3-1-1 tempo
                        </p>
                      </div>

                      {/* Interactive Audio Voice Cue Button */}
                      <button
                        onClick={toggleSimulatedAudio}
                        className="w-9 h-9 rounded-full bg-[#ccff00] text-black flex items-center justify-center volt-glow hover:scale-105 transition-transform"
                        title="Play audio coaching cue"
                      >
                        {isPlayingAudio ? (
                          <Pause className="w-4 h-4 fill-black" />
                        ) : (
                          <Play className="w-4 h-4 fill-black ml-0.5" />
                        )}
                      </button>
                    </div>

                    {isPlayingAudio && (
                      <div className="mt-2 p-2 rounded-lg bg-black/80 border border-[#ccff00]/40 flex items-center gap-2 text-[10px] text-[#ccff00]">
                        <Volume2 className="w-3.5 h-3.5 shrink-0 animate-bounce" />
                        <span className="italic">
                          "Coach Kave: Soft knees, hinge back until you feel that deep hamstring stretch, then drive hips through."
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Biometric Stats Strip (Apple Watch integration) */}
                <div className="grid grid-cols-3 gap-2 py-2">
                  <div className="bg-[#181b1f] border border-[#272c32] rounded-xl p-2.5 text-center">
                    <div className="flex items-center justify-center gap-1 text-[#ff5a36] text-[10px] font-bold uppercase mb-0.5">
                      <Heart className="w-3 h-3 fill-[#ff5a36]" />
                      <span>Heart Rate</span>
                    </div>
                    <span className="text-base font-extrabold text-white">142</span>
                    <span className="text-[9px] text-gray-400 block">BPM (Zone 3)</span>
                  </div>

                  <div className="bg-[#181b1f] border border-[#272c32] rounded-xl p-2.5 text-center">
                    <div className="flex items-center justify-center gap-1 text-[#ccff00] text-[10px] font-bold uppercase mb-0.5">
                      <Flame className="w-3 h-3 fill-[#ccff00]" />
                      <span>Burned</span>
                    </div>
                    <span className="text-base font-extrabold text-white">418</span>
                    <span className="text-[9px] text-gray-400 block">Active Kcal</span>
                  </div>

                  <div className="bg-[#181b1f] border border-[#272c32] rounded-xl p-2.5 text-center">
                    <div className="flex items-center justify-center gap-1 text-sky-400 text-[10px] font-bold uppercase mb-0.5">
                      <Activity className="w-3 h-3" />
                      <span>Duration</span>
                    </div>
                    <span className="text-base font-extrabold text-white">38:42</span>
                    <span className="text-[9px] text-gray-400 block">Elapsed</span>
                  </div>
                </div>

                {/* Floating WhatsApp Real-Time Feedback Overlay */}
                <div className="mt-2 p-3 rounded-xl bg-gradient-to-r from-[#17221d] to-[#161c20] border border-emerald-500/30 flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="text-left text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-[11px]">
                        Coach Kave • WhatsApp
                      </span>
                      <span className="text-[9px] text-gray-400">Just now</span>
                    </div>
                    <p className="text-gray-300 text-[11px] mt-0.5 leading-snug">
                      "Nice lift, Sarah! You recovered quickly between sets. That Zone 2 Corniche jog is paying off 💪🔥"
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Google Review Card Overlay */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#16191d] border border-[#2c333a] rounded-2xl p-3.5 shadow-2xl max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-xs font-bold text-white">
                    5.0 • Zoxxm (Verified)
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 italic line-clamp-2">
                  "One of the best trainers I’ve ever met! Always friendly and makes every workout enjoyable."
                </p>
              </div>

              {/* Floating Trainer Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#16191d] border border-[#ccff00]/40 rounded-2xl p-2.5 shadow-xl hidden sm:flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#ccff00] text-black font-extrabold flex items-center justify-center text-xs">
                  CK
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-white uppercase tracking-wider">
                    Coach Kave
                  </div>
                  <div className="text-[9px] text-[#ccff00]">
                    In-Person & Digital
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
