import React, { useState } from 'react';
import { PromoBanner } from './components/PromoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { AccountabilityChat } from './components/AccountabilityChat';
import { RoadmapSection } from './components/RoadmapSection';
import { WorkoutExperience } from './components/WorkoutExperience';
import { ReviewsSection } from './components/ReviewsSection';
import { PricingSection } from './components/PricingSection';
import { LocationMapSection } from './components/LocationMapSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuizModal } from './components/QuizModal';

export const App: React.FC = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  const handleOpenQuiz = () => {
    setQuizOpen(true);
  };

  const handleCloseQuiz = () => {
    setQuizOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f3f4f6] selection:bg-[#ccff00] selection:text-black">
      {/* Top Garagegym / Abu Dhabi Special Promo Bar */}
      <PromoBanner onOpenQuiz={handleOpenQuiz} />

      {/* Modern Future.co Navigation Bar */}
      <Navbar onOpenQuiz={handleOpenQuiz} />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenQuiz={handleOpenQuiz} />

        {/* 5 Future.co Pillars: "Together, we go further" */}
        <PillarsSection onOpenQuiz={handleOpenQuiz} />

        {/* Accountability Partner & Real-Time WhatsApp Interaction */}
        <AccountabilityChat onOpenQuiz={handleOpenQuiz} />

        {/* A 360° Roadmap that’s uniquely yours */}
        <RoadmapSection onOpenQuiz={handleOpenQuiz} />

        {/* Interactive Workout Experience & Exercise Movement Library */}
        <WorkoutExperience onOpenQuiz={handleOpenQuiz} />

        {/* Real Results: Verified 5.0 Google Maps Reviews (44 Reviews) */}
        <ReviewsSection onOpenQuiz={handleOpenQuiz} />

        {/* Transparent Pricing & 30-Day Guarantee */}
        <PricingSection onOpenQuiz={handleOpenQuiz} />

        {/* Abu Dhabi Base Location & Interactive Map */}
        <LocationMapSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuiz={handleOpenQuiz} />

      {/* Floating WhatsApp Action & Sticky Mobile Conversion Bar */}
      <FloatingWhatsApp onOpenQuiz={handleOpenQuiz} />

      {/* Interactive 1-Minute Coach Matching Quiz Modal */}
      <QuizModal isOpen={quizOpen} onClose={handleCloseQuiz} />
    </div>
  );
};

export default App;
