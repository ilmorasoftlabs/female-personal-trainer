import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  MessageCircle,
  Car,
  Home
} from 'lucide-react';
import { BUSINESS_INFO, ABU_DHABI_AREAS } from '../data/trainerData';

export const LocationMapSection: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#0c0d0e] border-t border-[#1b1f25] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#ccff00]">
            SERVICE AREAS & LOCATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Abu Dhabi Base & On-Site Mobile Training
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Based in Al Hisn by the Corniche, Coach Kave brings professional equipment directly to your villa, building gym, or outdoor setting across Abu Dhabi.
          </p>
        </div>

        {/* Location Details & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between future-card bg-[#131518] border-[#262c33] p-6 sm:p-8">
            <div className="space-y-6">
              
              {/* Location Badge */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#ccff00]/15 text-[#ccff00] flex items-center justify-center border border-[#ccff00]/30 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {BUSINESS_INFO.name}
                  </h3>
                  <span className="text-xs text-[#ccff00] font-semibold">
                    Abu Dhabi, United Arab Emirates
                  </span>
                </div>
              </div>

              {/* Exact Address from Google Maps */}
              <div className="space-y-2 p-4 rounded-xl bg-[#191c21] border border-[#2b313a]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                  Official Google Maps Address
                </span>
                <p className="text-sm font-semibold text-white">
                  {BUSINESS_INFO.address}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400 font-mono pt-1">
                  <span className="px-2 py-0.5 rounded bg-[#242930] text-[#ccff00]">
                    Plus Code: {BUSINESS_INFO.plusCode}
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <Home className="w-4 h-4 text-[#ccff00] shrink-0" />
                  <span><strong>At-Home Training:</strong> Coach travels directly to your residential address.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <Car className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Equipment Provided:</strong> Dumbbells, bands & kettlebells brought to you.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>100% Female Privacy:</strong> Modest, ladies-only coaching standard.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <Phone className="w-4 h-4 text-[#ff5a36] shrink-0" />
                  <span><strong>Direct Line / WhatsApp:</strong> {BUSINESS_INFO.phoneFormatted}</span>
                </div>
              </div>

              {/* Coverage Neighborhood Pills */}
              <div className="space-y-2 pt-2 border-t border-[#23282f]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                  Key Abu Dhabi Neighborhoods Covered:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ABU_DHABI_AREAS.map((area, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-[#1c2026] text-gray-300 text-xs border border-[#2c333e]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#23282f] flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ccff00] hover:bg-[#b8f000] text-black font-extrabold text-xs uppercase tracking-wider volt-glow transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1c2026] hover:bg-[#252b33] border border-[#2f3540] text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Map Embed & Visual Showcase */}
          <div className="lg:col-span-7 future-card bg-[#131518] border-[#262c33] p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative">
            
            {/* Embedded Google Map Iframe for 24.4684538, 54.3399097 */}
            <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-[#293039]">
              <iframe
                title="Female Personal Trainer Location Abu Dhabi"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${BUSINESS_INFO.coordinates.lat},${BUSINESS_INFO.coordinates.lng}&hl=en&z=15&output=embed`}
              />

              {/* Pin Card Floating on Map */}
              <div className="absolute top-4 left-4 bg-[#14171a]/95 backdrop-blur-md border border-[#2e343d] rounded-2xl p-3.5 shadow-2xl max-w-[260px] pointer-events-none">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-ping" />
                  <span className="text-xs font-bold text-white">
                    Coach Kave Base
                  </span>
                </div>
                <p className="text-[11px] text-gray-300">
                  Al Hisn, W10, Abu Dhabi (Near Corniche)
                </p>
                <span className="text-[10px] text-[#ccff00] font-semibold mt-1 block">
                  ★ 5.0 (44 Reviews)
                </span>
              </div>
            </div>

            {/* Bottom Info Ribbon */}
            <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>Flexible Training Hours: 6:00 AM – 9:00 PM (Sat – Thu)</span>
              </span>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ccff00] flex items-center gap-1 font-semibold transition-colors"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
