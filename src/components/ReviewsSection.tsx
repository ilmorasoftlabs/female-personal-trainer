import React, { useState } from 'react';
import { 
  Star, 
  ExternalLink, 
  CheckCircle2, 
  Quote, 
  ShieldCheck, 
  Flame, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { REVIEWS_DATA, BUSINESS_INFO } from '../data/trainerData';

interface ReviewsSectionProps {
  onOpenQuiz: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenQuiz }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTags = [
    { id: 'all', label: 'All Reviews (44)' },
    { id: 'dedicated trainer', label: 'Dedicated Trainer' },
    { id: 'enjoyable workouts', label: 'Enjoyable Workouts' },
    { id: 'challenging sessions', label: 'Challenging Sessions' },
    { id: 'positive energy', label: 'Positive Energy' },
    { id: 'achieving goals', label: 'Achieving Goals' }
  ];

  const filteredReviews = activeFilter === 'all'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter(r => r.tag === activeFilter);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0c0d0e] border-t border-[#1a1e24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Future.co */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#ccff00]">
            REAL ABU DHABI CLIENTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Our members get real results
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Women across Abu Dhabi trust Coach Kave to guide, motivate, and transform their strength and health. Every review is 100% verified on Google Maps.
          </p>

          {/* Social Proof Stats Bar matching Future.co */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base font-semibold text-white">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-extrabold">5.0/5</span>
              <span className="text-gray-400 font-normal">on Google Maps</span>
            </div>

            <div className="hidden sm:block text-gray-600">|</div>

            <div className="flex items-center gap-2">
              <span className="text-[#ccff00] font-extrabold">44 of 44</span>
              <span className="text-gray-300 font-normal">Five-Star Reviews</span>
            </div>

            <div className="hidden sm:block text-gray-600">|</div>

            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-extrabold">98%</span>
              <span className="text-gray-300 font-normal">Stay consistent past 4 weeks</span>
            </div>
          </div>
        </div>

        {/* Filter tags matching Google Maps review refined pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTags.map((tag) => {
            const isSelected = activeFilter === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => setActiveFilter(tag.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#ccff00] text-black border-[#ccff00] volt-glow font-bold'
                    : 'bg-[#15181c] border-[#252b32] text-gray-300 hover:text-white hover:border-[#3a434e]'
                }`}
              >
                {tag.label}
              </button>
            );
          })}
        </div>

        {/* Reviews Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="future-card bg-[#13161a] border-[#252a32] p-6 flex flex-col justify-between hover:border-[#38404d] transition-all relative group"
            >
              <div className="space-y-4">
                
                {/* Reviewer Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <h4 className="font-bold text-white text-sm">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                        <span>{review.duration || 'Verified Member'}</span>
                        <span>•</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Tag */}
                <div className="inline-block">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-[#1e2329] text-[#ccff00] border border-[#ccff00]/20">
                    {review.tag}
                  </span>
                </div>

                {/* Review Content */}
                <p className="text-gray-200 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>

                {/* Owner Response from Coach Kave (if present) */}
                {review.ownerResponse && (
                  <div className="p-3 rounded-xl bg-[#191d22] border-l-2 border-[#ccff00] text-xs text-gray-300 space-y-1">
                    <span className="text-[10px] font-bold text-[#ccff00] uppercase tracking-wider block">
                      Response from Coach Kave (Owner)
                    </span>
                    <p className="italic">{review.ownerResponse}</p>
                  </div>
                )}
              </div>

              {/* Verified Badge */}
              <div className="pt-4 mt-4 border-t border-[#20252b] flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Google Maps Verified Review
                </span>
                <span className="text-gray-500">Abu Dhabi</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar & Direct Google Maps Link */}
        <div className="future-card p-6 sm:p-8 bg-gradient-to-r from-[#14181c] via-[#161a1f] to-[#14181c] border-[#292f38] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Ready to start your transformation?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Join 40+ women in Abu Dhabi achieving their dream strength and body composition.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#1c2025] hover:bg-[#252b32] border border-[#2e353f] text-xs font-semibold text-gray-200 transition-colors"
            >
              <span>Read All 44 Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#ccff00] text-black font-extrabold text-xs uppercase tracking-wider volt-glow hover:bg-[#b8f000] cursor-pointer"
            >
              <span>Start 1-Min Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
