import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  Flame, 
  Heart, 
  Play, 
  Pause, 
  CheckCheck, 
  Sparkles, 
  Award,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/trainerData';

interface AccountabilityChatProps {
  onOpenQuiz: () => void;
}

export const AccountabilityChat: React.FC<AccountabilityChatProps> = ({ onOpenQuiz }) => {
  const [playingVoice, setPlayingVoice] = useState(false);

  const messages = [
    {
      sender: 'client',
      time: '7:42 AM',
      text: 'Good morning Coach! Just finished today’s lower body session at the residential gym. Felt the hip thrusts so much more after your form tip on chin tucking! 🔥',
      stats: 'Burned 462 kcal • Avg HR 138 bpm'
    },
    {
      sender: 'coach',
      time: '7:45 AM',
      isVoice: true,
      voiceDuration: '0:24',
      text: 'Voice note: "Good morning Sarah! You crushed that tempo. Keep that chin tucked and pelvis engaged—that is what builds true glute hypertrophy and protects the lumbar spine. Drink lots of water today!"'
    },
    {
      sender: 'coach',
      time: '7:46 AM',
      text: 'Nice lift, Sarah! You recovered quickly between sets. That Zone 2 Corniche jog is paying off 💪🔥',
      reaction: '❤️ 1'
    },
    {
      sender: 'client',
      time: '8:15 AM',
      text: 'Question about lunch: having grilled sea bass and avocado salad at Khalidiya. Should I add sweet potato?',
      attachment: 'Fish & Greens Bowl'
    },
    {
      sender: 'coach',
      time: '8:18 AM',
      text: 'Yes! Add half a fist of roasted sweet potato. Your glycogen stores need it to rebuild muscle tissue and keep your energy high for tomorrow’s core session. 🥑🍠',
      reaction: '🙌 1'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0e1012] border-t border-[#1d2126] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#ccff00]">
              DAILY SUPPORT THAT WORKS
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
              Say hello to your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-emerald-400">
                accountability partner
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Fitness works best when you never have to guess. Coach Kave is by your side daily—monitoring your biometric performance, celebrating your personal bests, and keeping you on track between sessions.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#14171a] border border-[#252a30]">
                <div className="w-8 h-8 rounded-lg bg-[#ccff00]/15 text-[#ccff00] flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Daily Workout & Calorie Reviews</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Every workout you complete is analyzed for volume, heart rate, and fatigue management.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#14171a] border border-[#252a30]">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">WhatsApp Nutrition & Meal Checks</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Dining out in Abu Dhabi or cooking at home? Snap a quick photo for immediate guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#14171a] border border-[#252a30]">
                <div className="w-8 h-8 rounded-lg bg-amber-400/15 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Form Video Feedback</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Send a quick 5-second video of your squat or deadlift for frame-by-frame posture feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#ccff00] text-black font-extrabold text-xs uppercase tracking-wider volt-glow hover:bg-[#b8f000] transition-colors cursor-pointer"
              >
                <span>Match With Coach Kave</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Simulated WhatsApp / Future App Messenger Stage */}
          <div className="lg:col-span-7">
            <div className="max-w-md mx-auto future-card bg-[#121518] border-[#292f37] p-5 shadow-2xl relative">
              
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#23282e] mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-full bg-[#1e2329] border border-[#ccff00]/40 flex items-center justify-center font-bold text-white text-sm">
                      CK
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#121518]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-sm">Coach Kave</h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30">
                        Female Personal Trainer
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Online • Abu Dhabi</span>
                    </div>
                  </div>
                </div>

                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#1c2126] hover:bg-[#252b32] border border-[#2e343d] text-xs font-semibold text-gray-200 transition-colors"
                >
                  Open Chat
                </a>
              </div>

              {/* Message Thread */}
              <div className="space-y-3.5 max-h-[460px] overflow-y-auto pr-1">
                
                {/* System notification */}
                <div className="text-center my-2">
                  <span className="text-[10px] text-gray-500 bg-[#171b1f] px-3 py-1 rounded-full border border-white/5">
                    Today • Workout #18 Completed
                  </span>
                </div>

                {messages.map((msg, index) => {
                  const isCoach = msg.sender === 'coach';
                  return (
                    <div
                      key={index}
                      className={`flex flex-col ${isCoach ? 'items-start' : 'items-end'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed relative ${
                          isCoach
                            ? 'bg-[#1a1e23] border border-[#2c333c] text-gray-200 rounded-tl-sm'
                            : 'bg-[#1e2a22] border border-emerald-500/30 text-white rounded-tr-sm'
                        }`}
                      >
                        {/* Stats pill if client finished a session */}
                        {msg.stats && (
                          <div className="mb-2 p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-[11px] text-[#ccff00]">
                            <span className="flex items-center gap-1">
                              <Heart className="w-3 h-3 text-[#ff5a36] fill-[#ff5a36]" />
                              {msg.stats}
                            </span>
                            <Sparkles className="w-3 h-3 text-[#ccff00]" />
                          </div>
                        )}

                        {/* Interactive Voice Note Simulator */}
                        {msg.isVoice ? (
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 p-2 rounded-xl bg-black/50 border border-[#ccff00]/30">
                              <button
                                onClick={() => setPlayingVoice(!playingVoice)}
                                className="w-8 h-8 rounded-full bg-[#ccff00] text-black flex items-center justify-center shrink-0 volt-glow cursor-pointer"
                              >
                                {playingVoice ? (
                                  <Pause className="w-3.5 h-3.5 fill-black" />
                                ) : (
                                  <Play className="w-3.5 h-3.5 fill-black ml-0.5" />
                                )}
                              </button>
                              <div className="flex-1">
                                <div className="h-1.5 bg-[#252b32] rounded-full overflow-hidden">
                                  <div
                                    className={`h-full bg-[#ccff00] transition-all duration-300 ${
                                      playingVoice ? 'w-2/3 animate-pulse' : 'w-1/4'
                                    }`}
                                  />
                                </div>
                                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                                  <span>Voice Note from Coach Kave</span>
                                  <span>{msg.voiceDuration}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-xs text-gray-300 italic">{msg.text}</p>
                          </div>
                        ) : (
                          <p>{msg.text}</p>
                        )}

                        {/* Reaction emoji */}
                        {msg.reaction && (
                          <span className="absolute -bottom-2 right-2 px-1.5 py-0.5 rounded-full bg-[#242b32] border border-white/10 text-[10px]">
                            {msg.reaction}
                          </span>
                        )}

                        <div
                          className={`flex items-center gap-1 text-[10px] text-gray-500 mt-1.5 ${
                            isCoach ? 'justify-start' : 'justify-end'
                          }`}
                        >
                          <span>{msg.time}</span>
                          {!isCoach && <CheckCheck className="w-3 h-3 text-[#ccff00]" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Chat Input Placeholder */}
              <div className="mt-4 pt-3 border-t border-[#23282e] flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ask Coach Kave anything..."
                  disabled
                  className="flex-1 bg-[#181c20] border border-[#293038] rounded-xl px-3.5 py-2.5 text-xs text-gray-400 focus:outline-none"
                />
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#ccff00] text-black flex items-center justify-center shrink-0 volt-glow"
                  title="Send via WhatsApp"
                >
                  <Send className="w-4 h-4 fill-black" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
