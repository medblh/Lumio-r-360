import React from "react";

const tips = [
  {
    icon: "💧",
    title: "Hydration Science",
    description: "Damp skin absorbs products 3x better than dry skin. Apply within 60 seconds of cleansing.",
    category: "Science",
  },
  {
    icon: "☀️",
    title: "UV Defense",
    description: "90% of premature aging is caused by UV exposure. Daily SPF is your best anti-aging.",
    category: "Protection",
  },
  {
    icon: "🔬",
    title: "Active Timing",
    description: "Use vitamin C in AM, retinoids in PM. Never mix certain actives together for best results.",
    category: "Chemistry",
  },
  {
    icon: "🧖‍♀️",
    title: "Double Cleanse",
    description: "Oil-based first cleanse removes sunscreen/makeup. Water-based second cleanse cleans skin.",
    category: "Technique",
  },
];

const TipCard = ({ tip }) => {
  return (
    <div className="group rounded-xl p-6 bg-[#1F253C] border border-[#272727] hover:bg-[#1F253C]/90 hover:border-[#D2C0AA]/50 transition-all duration-300 hover:-translate-y-1">
      <div className="mb-5">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-[#EDE6DE] bg-[#272727] rounded-full mb-3">
          {tip.category}
        </span>
        <div className="text-4xl mb-4 text-[#D2C0AA]">{tip.icon}</div>
        <h3 className="font-display text-xl font-semibold mb-3 text-[#EDE6DE]">
          {tip.title}
        </h3>
      </div>
      <p className="font-body text-[#D2C0AA] leading-relaxed text-sm">
        {tip.description}
      </p>
      {/*<div className="mt-6 pt-6 border-t border-[#272727]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#D2C0AA]/70">Learn more</span>
          <span className="text-[#EDE6DE] text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
        </div>
      </div>*/}
    </div>
  );
};

const SkinTipsSection = () => {
  return (
    <section id="skin-tips" className="py-20 md:py-28 bg-[#EDE6DE]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-body text-sm tracking-[0.3em] uppercase text-[#1F253C] block mb-3">
            Skin Intelligence
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-[#272727]">
            Evidence-Based Rituals
          </h2>
          <p className="font-body text-[#1F253C] max-w-xl mx-auto">
            Transform your skincare routine with scientifically-backed principles and practices.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div
              key={tip.title}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TipCard tip={tip} />
            </div>
          ))}
        </div>

        {/* Key Principles */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-[#D2C0AA]/30 to-[#1F253C]/5 border border-[#D2C0AA]/30">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 text-[#272727]">
              The Skincare Trinity
            </h3>
            <p className="text-[#1F253C] max-w-2xl mx-auto">
              These three principles form the foundation of effective, healthy skincare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1F253C] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[#EDE6DE]">🧴</span>
              </div>
              <h4 className="font-medium text-[#272727] mb-2">Precision</h4>
              <p className="text-sm text-[#1F253C]">Right ingredients in the right order for your skin type</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1F253C] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[#EDE6DE]">⏱️</span>
              </div>
              <h4 className="font-medium text-[#272727] mb-2">Consistency</h4>
              <p className="text-sm text-[#1F253C]">Regular care yields better results than aggressive treatments</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1F253C] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[#EDE6DE]">🎯</span>
              </div>
              <h4 className="font-medium text-[#272727] mb-2">Patience</h4>
              <p className="text-sm text-[#1F253C]">Real transformation takes 4-8 weeks of consistent use</p>
            </div>
          </div>
        </div>

        {/* CTA 
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-[#1F253C] hover:bg-[#272727] text-[#EDE6DE] rounded-full text-sm font-medium tracking-wide transition-colors duration-300">
            Get Personalized Routine
          </button>
          <p className="text-[#1F253C] text-sm mt-4">
            Take our 2-minute skin assessment for custom recommendations
          </p>
        </div>*/}
      </div>
    </section>
  );
};

export default SkinTipsSection;