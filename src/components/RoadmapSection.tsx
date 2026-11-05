import React, { useState } from 'react';
import { 
  Calendar, 
  Dumbbell, 
  Activity, 
  AlertCircle, 
  Target, 
  User, 
  MapPin, 
  ArrowRight,
  Check
} from 'lucide-react';
import { CLIENT_PROFILES } from '../data/trainerData';

interface RoadmapSectionProps {
  onOpenQuiz: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onOpenQuiz }) => {
  const [selectedProfileId, setSelectedProfileId] = useState(CLIENT_PROFILES[0].id);

  const activeProfile = CLIENT_PROFILES.find(p => p.id === selectedProfileId) || CLIENT_PROFILES[0];

  return (
    <section id="roadmap" className="py-20 lg:py-28 bg-[#0c0d0e] border-t border-[#1a1e23] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Future.co */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#ccff00]">
            INDIVIDUALIZED COACHING
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            A 360° roadmap that’s <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              uniquely yours
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Fitness works best when it’s made for you. Coach Kave crafts a personalized plan around your goals, schedule, and biomechanics, and optimizes it over time.
          </p>
        </div>

        {/* Client Profile Persona Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CLIENT_PROFILES.map((profile) => {
            const isSelected = profile.id === selectedProfileId;
            return (
              <button
                key={profile.id}
                onClick={() => setSelectedProfileId(profile.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1a1e23] border-[#ccff00] text-white shadow-lg shadow-[#ccff00]/10 scale-102'
                    : 'bg-[#121518] border-[#252a31] text-gray-400 hover:text-white hover:border-[#38404a]'
                }`}
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-8 h-8 rounded-full object-cover border border-white/20"
                />
                <div className="text-left">
                  <div className="text-xs font-bold leading-tight flex items-center gap-1.5">
                    <span>{profile.name}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />}
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {profile.location}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 360° Roadmap Card Grid (Future.co Signature Component) */}
        <div className="future-card bg-[#13161a] border-[#292f37] p-6 sm:p-10 shadow-2xl relative">
          
          {/* Card Top Member Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#242930] gap-4 mb-8">
            <div className="flex items-center gap-4">
              <img
                src={activeProfile.avatar}
                alt={activeProfile.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-[#ccff00]/40 shadow-md"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activeProfile.name}
                  </h3>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30">
                    Abu Dhabi Client
                  </span>
                </div>
                <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#ff5a36]" />
                  <span>{activeProfile.role} • {activeProfile.location}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 hidden sm:inline">
                Coach: <strong className="text-white">Coach Kave</strong>
              </span>
              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#ccff00] text-black font-bold text-xs uppercase tracking-wider volt-glow hover:bg-[#b8f000] cursor-pointer"
              >
                <span>Get Your Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Future.co 5 Pillared Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Schedule */}
            <div className="bg-[#181b20] border border-[#272d35] rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-[#ccff00] text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Schedule</span>
              </div>
              <ul className="space-y-2">
                {activeProfile.schedule.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <span className="text-[#ccff00] font-bold text-sm leading-none mt-0.5">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Equipment */}
            <div className="bg-[#181b20] border border-[#272d35] rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <Dumbbell className="w-4 h-4" />
                <span>Equipment</span>
              </div>
              <ul className="space-y-2">
                {activeProfile.equipment.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <span className="text-sky-400 font-bold text-sm leading-none mt-0.5">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Experience */}
            <div className="bg-[#181b20] border border-[#272d35] rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-wider">
                <Activity className="w-4 h-4" />
                <span>Experience</span>
              </div>
              <ul className="space-y-2">
                {activeProfile.experience.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <span className="text-violet-400 font-bold text-sm leading-none mt-0.5">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Injury Record & Safety */}
            <div className="bg-[#181b20] border border-[#272d35] rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-[#ff5a36] text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>Injury Record & Health</span>
              </div>
              <ul className="space-y-2">
                {activeProfile.injuries.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <span className="text-[#ff5a36] font-bold text-sm leading-none mt-0.5">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Goals */}
            <div className="bg-[#181b20] border border-[#272d35] rounded-2xl p-5 space-y-3 md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Goals & Desired Transformation</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeProfile.goals.map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#1f242b] border border-[#2c333d] flex items-start gap-2 text-xs text-white">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Coach's Prescription Note */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#171b1f] to-[#1a2127] border border-[#ccff00]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#ccff00]">
                COACH KAVE'S PROGRAMMING STRATEGY
              </span>
              <p className="text-xs sm:text-sm text-gray-200 italic">
                "{activeProfile.coachNote}"
              </p>
            </div>

            <button
              onClick={onOpenQuiz}
              className="shrink-0 px-4 py-2.5 rounded-xl bg-[#1f242b] hover:bg-[#282f38] border border-[#37404c] text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Build My Plan
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
