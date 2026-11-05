import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Flame, 
  MessageCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/trainerData';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<{
    goal: string;
    location: string;
    frequency: string;
    injury: string;
  }>({
    goal: 'Fat Loss & Lean Toning',
    location: 'Residential Tower / Villa Gym',
    frequency: '3 Days / Week (Recommended)',
    injury: 'Lower Back / Desk Posture'
  });

  if (!isOpen) return null;

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === totalSteps) {
      setCurrentStep(5); // Result Screen
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // confetti fallback
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Generate pre-filled WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `Hello Coach Kave! I just completed the 1-Minute Quiz on your website:\n` +
    `• Primary Goal: ${answers.goal}\n` +
    `• Preferred Location: ${answers.location}\n` +
    `• Schedule: ${answers.frequency}\n` +
    `• Health Note: ${answers.injury}\n` +
    `I'd love to claim the AED 199 Starter Trial & Consultation with promo code COACHKAVE!`
  );

  const whatsappUrl = `https://wa.me/971508500169?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-[#131619] border border-[#2b3138] rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1c2025] hover:bg-[#252b32] text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close quiz"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Bar (if steps 1-4) */}
        {currentStep <= totalSteps && (
          <div className="space-y-2 mb-8">
            <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
              <span className="text-[#ccff00] font-bold uppercase tracking-wider">
                1-Minute Coach Matching
              </span>
              <span>Step {currentStep} of {totalSteps}</span>
            </div>
            <div className="h-1.5 w-full bg-[#1e2329] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#ccff00] transition-all duration-300 rounded-full"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP 1: GOAL */}
        {currentStep === 1 && (
          <div className="space-y-5">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400">Step 1</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                What is your primary fitness focus?
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Coach Kave adapts programming specifically for female physiology.
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                { label: 'Fat Loss & Lean Toning', desc: 'Calorie deficit planning, glute sculpting & sustained energy' },
                { label: 'Strength & Muscle Definition', desc: 'Progressive overload, dumbbell & barbell hypertrophy' },
                { label: 'Post-Natal & Pelvic Floor Recovery', desc: 'Gentle core rehab, diastasis recti care & posture' },
                { label: 'Mobility & Back Pain Relief', desc: 'Corrective movement, desk posture & joint health' },
                { label: 'General Cardiovascular Stamina', desc: 'High-energy conditioning & healthy habit routine' }
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setAnswers({ ...answers, goal: opt.label })}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    answers.goal === opt.label
                      ? 'bg-[#1b2025] border-[#ccff00] text-white shadow-md'
                      : 'bg-[#15181c] border-[#252b32] text-gray-300 hover:border-[#38414d]'
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{opt.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{opt.desc}</div>
                  </div>
                  {answers.goal === opt.label && (
                    <div className="w-5 h-5 rounded-full bg-[#ccff00] text-black flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: LOCATION */}
        {currentStep === 2 && (
          <div className="space-y-5">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400">Step 2</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Where would you prefer training in Abu Dhabi?
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Coach Kave travels directly to you or provides digital app programming.
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                { label: 'Residential Tower / Villa Gym', desc: 'We utilize your apartment or community gym facility' },
                { label: 'At-Home Private Living Room / Villa', desc: 'Coach Kave brings all weights, mats & bands to you' },
                { label: 'Corniche Outdoors / Park', desc: 'Fresh air functional workouts along Abu Dhabi Corniche' },
                { label: 'Private Ladies-Only Facility', desc: 'Dedicated female-only gym environment' },
                { label: 'Digital App & WhatsApp Coaching', desc: 'Work with Coach Kave from home or while traveling' }
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setAnswers({ ...answers, location: opt.label })}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    answers.location === opt.label
                      ? 'bg-[#1b2025] border-[#ccff00] text-white shadow-md'
                      : 'bg-[#15181c] border-[#252b32] text-gray-300 hover:border-[#38414d]'
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{opt.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{opt.desc}</div>
                  </div>
                  {answers.location === opt.label && (
                    <div className="w-5 h-5 rounded-full bg-[#ccff00] text-black flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: FREQUENCY */}
        {currentStep === 3 && (
          <div className="space-y-5">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400">Step 3</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                How many days a week can you commit?
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Consistency beats intensity. Choose what fits your actual lifestyle.
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                { label: '2 Days / Week (Steady Starter)', desc: 'Ideal for busy professionals easing into a routine' },
                { label: '3 Days / Week (Recommended)', desc: 'The sweet spot for sustainable fat loss & progressive toning' },
                { label: '4-5 Days / Week (High Transformation)', desc: 'Accelerated results with dedicated athletic programming' },
                { label: 'Flexible Hybrid Schedule', desc: 'Mix of in-person sessions and app-guided workouts' }
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setAnswers({ ...answers, frequency: opt.label })}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    answers.frequency === opt.label
                      ? 'bg-[#1b2025] border-[#ccff00] text-white shadow-md'
                      : 'bg-[#15181c] border-[#252b32] text-gray-300 hover:border-[#38414d]'
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{opt.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{opt.desc}</div>
                  </div>
                  {answers.frequency === opt.label && (
                    <div className="w-5 h-5 rounded-full bg-[#ccff00] text-black flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: HEALTH & INJURIES */}
        {currentStep === 4 && (
          <div className="space-y-5">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400">Step 4</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Any health or injury considerations?
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Safety first. Coach Kave adjusts every movement to protect your joints.
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                { label: 'Lower Back / Desk Posture Tightness', desc: 'Gentle spinal decompression, core bracing & glute activation' },
                { label: 'Knee / Joint Sensitivity', desc: 'Low-impact biomechanics with zero joint grinding' },
                { label: 'Post-Pregnancy Recovery', desc: 'Diastasis recti safe, pelvic floor rehabilitation focus' },
                { label: 'Fully Healthy & Ready to Lift', desc: 'No restrictions; ready for full progressive training' }
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setAnswers({ ...answers, injury: opt.label })}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    answers.injury === opt.label
                      ? 'bg-[#1b2025] border-[#ccff00] text-white shadow-md'
                      : 'bg-[#15181c] border-[#252b32] text-gray-300 hover:border-[#38414d]'
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{opt.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{opt.desc}</div>
                  </div>
                  {answers.injury === opt.label && (
                    <div className="w-5 h-5 rounded-full bg-[#ccff00] text-black flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: MATCH CELEBRATION & RESULT */}
        {currentStep === 5 && (
          <div className="space-y-6 text-center py-2">
            <div className="w-16 h-16 rounded-3xl bg-[#ccff00]/15 border border-[#ccff00]/40 text-[#ccff00] flex items-center justify-center mx-auto volt-glow">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30 inline-block">
                100% COACH MATCH CONFIRMED
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                You’ve been matched with Coach Kave!
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                Based on your preference for <strong>{answers.goal}</strong> ({answers.frequency}) in Abu Dhabi, Coach Kave has a personalized 360° roadmap ready for you.
              </p>
            </div>

            {/* Match Summary Box */}
            <div className="p-4 rounded-2xl bg-[#171b1f] border border-[#2b3138] text-left space-y-2.5 text-xs">
              <div className="flex items-center justify-between border-b border-[#252a30] pb-2">
                <span className="text-gray-400">Assigned Coach:</span>
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span>Coach Kave</span>
                  <span className="text-[10px] text-amber-400">★ 5.0 (44 Reviews)</span>
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-[#252a30] pb-2">
                <span className="text-gray-400">Location Focus:</span>
                <span className="font-semibold text-white">{answers.location}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#252a30] pb-2">
                <span className="text-gray-400">Health Consideration:</span>
                <span className="font-semibold text-[#ccff00]">{answers.injury}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-gray-400">Special Promo:</span>
                <span className="font-bold text-emerald-400">
                  AED 199 First Month Assessment (Code COACHKAVE)
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#ccff00] hover:bg-[#b8f000] text-black font-extrabold text-sm uppercase tracking-wider volt-glow transition-all"
              >
                <MessageCircle className="w-5 h-5 text-black" />
                <span>Send Roadmap to Coach Kave via WhatsApp</span>
              </a>

              <p className="text-[11px] text-gray-400">
                Direct reply typically within 15 minutes • 30-day money-back guarantee
              </p>
            </div>
          </div>
        )}

        {/* Footer Navigation Buttons (Steps 1-4) */}
        {currentStep <= totalSteps && (
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#22272e]">
            {currentStep > 1 ? (
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ccff00] text-black font-bold text-xs uppercase tracking-wider volt-glow hover:bg-[#b8f000] transition-colors cursor-pointer"
            >
              <span>{currentStep === totalSteps ? 'See My Match' : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
