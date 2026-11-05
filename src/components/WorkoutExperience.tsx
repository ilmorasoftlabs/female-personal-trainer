import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  Flame, 
  Activity, 
  Dumbbell, 
  CheckCircle, 
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { WORKOUT_EXERCISES } from '../data/trainerData';

interface WorkoutExperienceProps {
  onOpenQuiz: () => void;
}

export const WorkoutExperience: React.FC<WorkoutExperienceProps> = ({ onOpenQuiz }) => {
  const [activeExerciseIdx, setActiveExerciseIdx] = useState(0);
  const [isPlayingTimer, setIsPlayingTimer] = useState(false);
  const [seconds, setSeconds] = useState(45);
  const [voiceActive, setVoiceActive] = useState(false);

  const activeExercise = WORKOUT_EXERCISES[activeExerciseIdx];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isPlayingTimer && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsPlayingTimer(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlayingTimer, seconds]);

  const handleSelectExercise = (idx: number) => {
    setActiveExerciseIdx(idx);
    setIsPlayingTimer(false);
    setSeconds(45);
    setVoiceActive(false);
  };

  const handleReset = () => {
    setIsPlayingTimer(false);
    setSeconds(45);
  };

  return (
    <section id="workouts" className="py-20 lg:py-28 bg-[#0e1013] border-t border-[#1d2228] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Future.co */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#ccff00]">
            MOVE WITH CONFIDENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Workout experience, tailored
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Experience our interactive movement library. Audio cues, video demos, and tempo cadence ensure every single rep is performed safely with maximum effectiveness.
          </p>
        </div>

        {/* Main Workout Showcase Player */}
        <div className="future-card bg-[#13161a] border-[#292f38] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Exercise List Selection */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                Select Exercise Demo
              </span>
              {WORKOUT_EXERCISES.map((ex, idx) => {
                const isActive = activeExerciseIdx === idx;
                return (
                  <button
                    key={ex.id}
                    onClick={() => handleSelectExercise(idx)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-[#1a1e23] border-[#ccff00] text-white shadow-md'
                        : 'bg-[#15181c] border-[#252b32] text-gray-300 hover:border-[#39424e]'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold ${isActive ? 'text-[#ccff00]' : 'text-gray-400'}`}>
                          0{idx + 1}
                        </span>
                        <h4 className="font-bold text-sm text-white">
                          {ex.name}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>{ex.reps}</span>
                        <span>•</span>
                        <span>{ex.weight}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1e2329] text-gray-300 font-mono">
                        {ex.calories}
                      </span>
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
                      )}
                    </div>
                  </button>
                );
              })}

              <div className="pt-3">
                <button
                  onClick={onOpenQuiz}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ccff00] text-black font-extrabold text-xs uppercase tracking-wider volt-glow hover:bg-[#b8f000] cursor-pointer"
                >
                  <span>Build My Custom Workout Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Live Interactive Workout Card Stage */}
            <div className="lg:col-span-7">
              <div className="bg-[#171a1f] border border-[#2c333c] rounded-3xl p-5 sm:p-7 shadow-xl space-y-5">
                
                {/* Exercise Stage Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#252b33]">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#ccff00] tracking-wider">
                      {activeExercise.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {activeExercise.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#20252b] border border-[#2d343d] text-xs font-mono text-[#ccff00]">
                      {activeExercise.tempo}
                    </span>
                  </div>
                </div>

                {/* Video Demo Frame with Interactive Controls */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-black border border-[#262c34] group">
                  <img
                    src={activeExercise.image}
                    alt={activeExercise.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-4">
                    
                    {/* Top status tag */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-white">
                        <Activity className="w-3.5 h-3.5 text-[#ccff00]" />
                        <span>Form Guidance Active</span>
                      </span>

                      {/* Coach Voice Cue Toggle Button */}
                      <button
                        onClick={() => setVoiceActive(!voiceActive)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all cursor-pointer ${
                          voiceActive
                            ? 'bg-[#ccff00] text-black volt-glow'
                            : 'bg-black/70 border border-white/20 text-white hover:bg-black/90'
                        }`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{voiceActive ? 'Voice Cue Playing' : 'Play Voice Cue'}</span>
                      </button>
                    </div>

                    {/* Bottom overlay: Audio cue box */}
                    {voiceActive && (
                      <div className="p-3 rounded-xl bg-black/85 border border-[#ccff00]/40 backdrop-blur-md text-xs text-[#ccff00] flex items-start gap-2.5">
                        <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-white font-bold text-[11px]">
                            Coach Kave’s Live Form Check:
                          </strong>
                          <p className="italic text-gray-200 mt-0.5 text-xs">
                            "{activeExercise.coachCue}"
                          </p>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Target Anatomy & Biometrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-[#1e2228] border border-[#2b323c]">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">
                      Primary Target Muscles
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeExercise.targetMuscles.map((muscle, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-[#282f37] text-white text-xs font-medium"
                        >
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Timer & Rep Counter */}
                  <div className="p-3.5 rounded-xl bg-[#1e2228] border border-[#2b323c] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 block">
                        Set Duration Timer
                      </span>
                      <div className="text-xl font-mono font-extrabold text-white mt-0.5">
                        00:{seconds < 10 ? `0${seconds}` : seconds}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsPlayingTimer(!isPlayingTimer)}
                        className="w-9 h-9 rounded-xl bg-[#ccff00] text-black flex items-center justify-center volt-glow cursor-pointer"
                        title={isPlayingTimer ? 'Pause' : 'Start Timer'}
                      >
                        {isPlayingTimer ? (
                          <Pause className="w-4 h-4 fill-black" />
                        ) : (
                          <Play className="w-4 h-4 fill-black ml-0.5" />
                        )}
                      </button>
                      <button
                        onClick={handleReset}
                        className="w-9 h-9 rounded-xl bg-[#282f37] text-gray-300 hover:text-white flex items-center justify-center cursor-pointer"
                        title="Reset Timer"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
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
