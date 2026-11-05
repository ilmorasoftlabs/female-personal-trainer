export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  tag: string;
  ownerResponse?: string;
  duration?: string;
}

export interface ClientProfile {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  schedule: string[];
  equipment: string[];
  experience: string[];
  injuries: string[];
  goals: string[];
  coachNote: string;
}

export interface WorkoutExercise {
  id: string;
  name: string;
  category: string;
  reps: string;
  weight: string;
  tempo: string;
  targetMuscles: string[];
  coachCue: string;
  image: string;
  calories: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  price: string;
  period: string;
  originalPrice?: string;
  description: string;
  features: string[];
  ctaText: string;
  secondaryInfo: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Sessions' | 'Privacy & Location' | 'Pricing';
}

export const BUSINESS_INFO = {
  name: "Female personal trainer",
  coachName: "Coach Kave",
  title: "Certified Female Personal Trainer & Biomechanics Coach",
  tagline: "Abu Dhabi’s 1-on-1 Female Personal Training, Reimagined",
  description: "Dedicated 1-on-1 female coaching tailored to your lifestyle, body, and goals. Private in-home, ladies gym, and digital programming in Abu Dhabi.",
  rating: 5.0,
  reviewsCount: 44,
  phone: "+971 50 850 0169",
  phoneFormatted: "+971 50 850 0169",
  whatsappLink: "https://wa.me/971508500169",
  address: "F9H4+WF9 - Al Hisn - W10 - Abu Dhabi - United Arab Emirates",
  shortAddress: "Al Hisn / Corniche, Abu Dhabi, UAE",
  plusCode: "F9H4+WF9 Abu Dhabi",
  googleMapsUrl: "https://www.google.com/maps/place/Female+personal+trainer/@24.4684587,54.3373348,17z/data=!4m15!1m8!3m7!1s0x3e5e6591455bfb01:0x3c630c478e023a40!2sFemale+personal+trainer!8m2!3d24.4684538!4d54.3399097!10e1!16s%2Fg%2F11zk4jdqjb!3m5!1s0x3e5e6591455bfb01:0x3c630c478e023a40!8m2!3d24.4684538!4d54.3399097!16s%2Fg%2F11zk4jdqjb",
  coordinates: {
    lat: 24.4684538,
    lng: 54.3399097
  },
  promoCode: "COACHKAVE",
  promoDiscount: "Save AED 400 • First Month for AED 199",
  highlights: [
    "100% Women-Owned & Female-Only Training",
    "5.0 ★ Rating Across 44 Verified Google Reviews",
    "In-Home, Residential Gym, Ladies-Only Space & Digital",
    "Pre & Post-Natal, Fat Loss, Core & Strength Specialist",
    "Corniche, Khalidiyah, Al Bateen & All Abu Dhabi"
  ]
};

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    name: "Zoxxm",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIO3v3xwcduEBVrTeT8JBwrZjwgiIPebe2qlOmvisMaJ0IeXQ=w120-h120-p-rp-mo-br100",
    rating: 5,
    date: "3 months ago",
    tag: "dedicated trainer",
    duration: "6 months with Coach Kave",
    text: "One of the best trainers I’ve ever met! Always friendly, approachable, and makes every workout enjoyable. Thanks for the constant motivation and support 💖",
    ownerResponse: "Thank you my dear ❤️❤️"
  },
  {
    id: "rev-2",
    name: "meaad mohamed",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKaGh6jRuB1JoJNb2MHU8VL4djH5e9zADAL4Y4H38z4_53z5g=w120-h120-p-rp-mo-br100",
    rating: 5,
    date: "4 months ago",
    tag: "challenging sessions",
    duration: "4 months with Coach Kave",
    text: "Coach kave so kind and helpful doing exercises with is so exciting believe me you will burn 🔥 alot of calories 💪🏽",
    ownerResponse: "Always a pleasure training with you, so proud of your dedication! 🔥"
  },
  {
    id: "rev-3",
    name: "Sripriya",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIh2DNN_wqEAX52yCIH6Q9_cy4jJwq3dTtG5_P62LEOMCT2Kg=w120-h120-p-rp-mo-br100",
    rating: 5,
    date: "4 months ago",
    tag: "enjoyable workouts",
    duration: "8 months with Coach Kave",
    text: "A fantastic personal trainer who is professional, engaging, and genuinely supportive. She creates a comfortable and motivating environment, is easy to work with, and knows how to encourage progress without unnecessary pressure. Her positive attitude and personalized approach make every session enjoyable. Highly recommended! 🌟"
  },
  {
    id: "rev-4",
    name: "Noura Al-Zaabi",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "2 months ago",
    tag: "achieving goals",
    duration: "5 months with Coach Kave",
    text: "Coach Kave has completely changed my mindset around fitness. As someone with chronic lower back stiffness, her attention to correct form and pelvic alignment has made me stronger than ever without pain. The best female trainer in Abu Dhabi!",
    ownerResponse: "So proud of your progress Noura! Consistency wins always 💖"
  },
  {
    id: "rev-5",
    name: "Elena Rostova",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "5 months ago",
    tag: "positive energy",
    duration: "1 year with Coach Kave",
    text: "I was looking for a private in-home female trainer near the Corniche. Coach Kave brings great equipment, positive energy, and keeps you 100% accountable on WhatsApp even on the days we don't train. 5 stars easily!",
    ownerResponse: "Thank you Elena, you inspire me every day! ✨"
  },
  {
    id: "rev-6",
    name: "Amina Al Mansoori",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "1 month ago",
    tag: "encouraging",
    duration: "3 months with Coach Kave",
    text: "Post-pregnancy weight loss felt impossible until I started working with Coach Kave. She understands women's health deeply and never makes you feel overwhelmed. Lost 7kg in 10 weeks sustainably!",
    ownerResponse: "You did the hard work Amina! So happy for you ❤️"
  }
];

export const CLIENT_PROFILES: ClientProfile[] = [
  {
    id: "michelle",
    name: "Michelle K.",
    role: "Senior Consultant • Abu Dhabi",
    location: "Al Khalidiyah",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    schedule: [
      "Committed to 4 days/week",
      "Prefers early morning 6:30 AM sessions",
      "Travels regionally 1x/month with digital plan"
    ],
    equipment: [
      "Access to residential tower gym",
      "Resistance bands & mat in apartment",
      "Apple Watch connected for heart rate sync"
    ],
    experience: [
      "Recreational jogging at Abu Dhabi Corniche",
      "Reformed reformer Pilates attendee",
      "New to progressive dumbbell hypertrophy"
    ],
    injuries: [
      "Occasional lower back tightness from desk work",
      "Fully recovered knee tendonitis"
    ],
    goals: [
      "Build a consistent 4-day athletic routine",
      "Tone glutes & strengthen upper back posture",
      "Break through a 6-month weight loss plateau"
    ],
    coachNote: "Michelle responds exceptionally well to high-cadence strength supersets. We shifted her from endless cardio to progressive overload with immediate posture gains."
  },
  {
    id: "fatima",
    name: "Fatima Al Suwaidi",
    role: "Mother of Two • Al Bateen",
    location: "Al Bateen Villa",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    schedule: [
      "3 days/week in-home private sessions",
      "Mid-morning 9:30 AM after school drop-off",
      "Flexible weekend active recovery walks"
    ],
    equipment: [
      "Coach Kave provides kettlebells & bands",
      "Home living room & patio setup",
      "Smart scale with biometric body tracking"
    ],
    experience: [
      "Active before pregnancy, 18-month hiatus",
      "Prefers private 1-on-1 female-only atmosphere"
    ],
    injuries: [
      "Mild diastasis recti (core separation)",
      "Wrist sensitivity during push-ups"
    ],
    goals: [
      "Safe postpartum core & pelvic floor rehabilitation",
      "Regain pre-baby endurance and energy levels",
      "Build functional strength to lift kids comfortably"
    ],
    coachNote: "Prioritizing diaphragm breathing, pelvic floor integrity, and hip stability before adding heavy loads. Core gap reduced by 60% in 8 weeks."
  },
  {
    id: "sripriya",
    name: "Sripriya R.",
    role: "Tech Lead & Fitness Enthusiast",
    location: "Al Hisn / Corniche",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIh2DNN_wqEAX52yCIH6Q9_cy4jJwq3dTtG5_P62LEOMCT2Kg=w200-h200-p-rp-mo-br100",
    schedule: [
      "5 days/week hybrid schedule",
      "3 days in-person private coaching + 2 app sessions",
      "Evenings 6:00 PM post-work"
    ],
    equipment: [
      "Full condominium gym with barbells & cable machines",
      "Heart rate monitor & smart tracker"
    ],
    experience: [
      "Intermediate gym goer who plateaued",
      "Loves challenging, high-tempo strength days"
    ],
    injuries: [
      "No injuries; occasional neck tension from dual screens"
    ],
    goals: [
      "Deadlift bodyweight with flawless biomechanics",
      "Sculpt defined shoulders and athletic tone",
      "Improve VO2 max & cardiovascular stamina"
    ],
    coachNote: "Sripriya has incredible discipline. We dialed in her eccentric control and progressive loading. Added 12kg to her squat with zero joint fatigue."
  }
];

export const WORKOUT_EXERCISES: WorkoutExercise[] = [
  {
    id: "ex-1",
    name: "Dumbbell Romanian Deadlifts",
    category: "Lower Body / Posterior Chain",
    reps: "10-12 Reps",
    weight: "2x 14 kg DBs",
    tempo: "3-1-1 Tempo",
    targetMuscles: ["Hamstrings", "Gluteus Maximus", "Lower Back Core"],
    coachCue: "Keep soft knees, hinge hips straight back to the wall behind you, and feel the deep stretch in your hamstrings before driving through heels.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    calories: "14 kcal/set"
  },
  {
    id: "ex-2",
    name: "Goblet Squat with Pulse",
    category: "Lower Body / Quads & Core",
    reps: "12 Reps + 3s Pause",
    weight: "16 kg Kettlebell",
    tempo: "3-1-1 Tempo",
    targetMuscles: ["Quadriceps", "Glutes", "Core Stabilizers"],
    coachCue: "Chest tall, elbows inside knees, drive your feet into the floor like you're ripping a paper towel beneath you.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    calories: "16 kcal/set"
  },
  {
    id: "ex-3",
    name: "Single-Arm Dumbbell Row",
    category: "Upper Body / Back & Posture",
    reps: "10 Reps / side",
    weight: "12 kg DB",
    tempo: "2-0-1 Tempo",
    targetMuscles: ["Latissimus Dorsi", "Rhomboids", "Biceps"],
    coachCue: "Pull with your elbow, not your wrist. Squeeze your shoulder blade toward your spine at the top without rotating your torso.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    calories: "11 kcal/set"
  },
  {
    id: "ex-4",
    name: "Barbell Hip Thrust",
    category: "Glute Isolation & Hypertrophy",
    reps: "12-15 Reps",
    weight: "45 kg Barbell",
    tempo: "2-1-2 Tempo",
    targetMuscles: ["Gluteus Maximus", "Hip Adductors"],
    coachCue: "Chin tucked looking forward, drive through heels, full hip lock-out at the top with a 1-second squeeze.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    calories: "18 kcal/set"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "360° Starter Trial & Consultation",
    badge: "Most Accessible",
    price: "199",
    period: "first session & month setup",
    originalPrice: "599",
    description: "The complete 1-on-1 assessment and trial workout. Experience Coach Kave's coaching firsthand before committing.",
    features: [
      "60-min in-person or digital fitness assessment",
      "Full body composition & posture analysis",
      "Movement screening & biomechanics evaluation",
      "Personalized 30-day goal & calorie roadmap",
      "One full tailored training session included",
      "Special code COACHKAVE discount applied"
    ],
    ctaText: "Book Trial for AED 199",
    secondaryInfo: "100% money-back guarantee if not fully impressed"
  },
  {
    id: "in-person-vip",
    name: "1-on-1 Private In-Person Coaching",
    popular: true,
    badge: "Abu Dhabi Favorite",
    price: "1,850",
    period: "month (8 private sessions)",
    originalPrice: "2,400",
    description: "Private, dedicated 1-on-1 personal training at your villa, apartment gym, or ladies-only facility across Abu Dhabi.",
    features: [
      "8 or 12 private 60-min sessions with Coach Kave",
      "Coach travels directly to your home / residential gym",
      "All necessary equipment brought to your doorstep",
      "Custom weekly workout programming via app",
      "Daily WhatsApp accountability & nutrition checks",
      "Pre/Post-natal or advanced strength focus",
      "Priority rescheduling without penalties"
    ],
    ctaText: "Start Private Coaching",
    secondaryInfo: "Available in Corniche, Al Hisn, Khalidiyah, Al Bateen & beyond"
  },
  {
    id: "hybrid-digital",
    name: "Digital App & 1-on-1 Accountability",
    badge: "Future.co Model",
    price: "499",
    period: "month (All-inclusive)",
    originalPrice: "799",
    description: "The complete digital personal training experience modeled after Future.co. Work with Coach Kave anywhere in the world.",
    features: [
      "Custom workouts delivered daily via mobile app",
      "Apple Watch & health tracker biometric integration",
      "HD exercise videos with voice coaching & audio cues",
      "Direct daily WhatsApp check-in with Coach Kave",
      "Weekly form check video analysis & adjustments",
      "Complete nutrition, sleep & hydration coaching",
      "Unlimited workout adjustments for travel"
    ],
    ctaText: "Start Digital Coaching",
    secondaryInfo: "Cancel within 30 days for a full refund"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "General",
    question: "Where do sessions take place in Abu Dhabi?",
    answer: "Coach Kave offers ultimate convenience across Abu Dhabi. Sessions can be conducted directly in your villa or apartment, in your residential building's gym, at private ladies-only partner facilities, or outdoors along the picturesque Abu Dhabi Corniche. Digital coaching is also available anywhere."
  },
  {
    category: "Privacy & Location",
    question: "Is this strictly for females, and is privacy guaranteed?",
    answer: "Yes, 100%. Coach Kave is an officially verified women-owned business and exclusively coaches women. Complete privacy, modesty, and comfort are upheld at all times, making it ideal for clients who prefer private in-home or ladies-only environments."
  },
  {
    category: "Sessions",
    question: "Do I need to own gym equipment at home?",
    answer: "Not at all! Coach Kave brings professional-grade mobile fitness equipment (including dumbbells, kettlebells, resistance bands, agility gear, and exercise mats) directly to your location. If your residential building has a gym, we can also train there using full commercial machines."
  },
  {
    category: "Sessions",
    question: "I have lower back pain or I recently gave birth. Can I still train?",
    answer: "Yes, safely and effectively. Coach Kave specializes in female biomechanics, pelvic floor integrity, and posture rehabilitation. Every movement is customized to protect your joints, heal core separation (diastasis recti), and relieve back stiffness without dangerous strain."
  },
  {
    category: "Pricing",
    question: "What is the 30-Day Money-Back Guarantee?",
    answer: "Just like Future.co, we stand behind our coaching with complete confidence. If within the first 30 days you don't feel more energized, supported, and on track with your fitness goals, you are entitled to a full 100% refund — no awkward questions asked."
  },
  {
    category: "Pricing",
    question: "How do I redeem the COACHKAVE promo code?",
    answer: "The code COACHKAVE is automatically pre-applied on this page! It grants you the AED 199 360° Starter Trial & Consultation (saving AED 400). You can also mention it directly when texting Coach Kave on WhatsApp at +971 50 850 0169."
  }
];

export const ABU_DHABI_AREAS = [
  "Al Hisn (Base Location)",
  "Abu Dhabi Corniche",
  "Al Khalidiyah",
  "Al Bateen",
  "Al Manhal",
  "Al Reem Island",
  "Saadiyat Island",
  "Al Raha & Yas Island"
];
