import React, { useEffect, useRef, useState } from "react";

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

const TipCard = ({ tip, isVisible, index }) => {
  return (
    <div 
      className={`group rounded-xl p-6 bg-[#1F253C] border border-[#272727] hover:bg-[#1F253C]/90 hover:border-[#D2C0AA]/50 transition-all duration-300 hover:-translate-y-1 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-5">
        <span className={`inline-block px-3 py-1 text-xs font-medium tracking-wider text-[#EDE6DE] bg-[#272727] rounded-full mb-3 transition-all duration-500 ${
          isVisible ? 'delay-300' : 'delay-0'
        }`}>
          {tip.category}
        </span>
        <div className={`text-4xl mb-4 text-[#D2C0AA] transition-all duration-700 ${
          isVisible ? 'delay-200 hover:scale-110 hover:rotate-6' : ''
        }`}>
          {tip.icon}
        </div>
        <h3 className="font-display text-xl font-semibold mb-3 text-[#EDE6DE]">
          {tip.title}
        </h3>
      </div>
      <p className="font-body text-[#D2C0AA] leading-relaxed text-sm">
        {tip.description}
      </p>
    </div>
  );
};

const SkinTipsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          
          // Optionnel: arrêter d'observer après l'animation
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Déclenche quand 20% de la section est visible
        rootMargin: "0px 0px -50px 0px" // Déclenche un peu plus tôt
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      id="skin-tips" 
      className="py-20 md:py-28 bg-[#EDE6DE]"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className={`font-body text-sm tracking-[0.3em] uppercase text-[#1F253C] block mb-3 transition-all duration-700 ${
            isVisible ? 'delay-200' : ''
          }`}>
            Skin Intelligence
          </span>
          <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-[#272727] transition-all duration-800 ${
            isVisible ? 'delay-300' : ''
          }`}>
            Evidence-Based Rituals
          </h2>
          <p className={`font-body text-[#1F253C] max-w-xl mx-auto transition-all duration-900 ${
            isVisible ? 'delay-400' : ''
          }`}>
            Transform your skincare routine with scientifically-backed principles and practices.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <TipCard 
              key={tip.title} 
              tip={tip} 
              isVisible={isVisible}
              index={index} 
            />
          ))}
        </div>

        {/* Key Principles */}
        <div className={`mt-20 p-8 rounded-2xl bg-gradient-to-r from-[#D2C0AA]/30 to-[#1F253C]/5 border border-[#D2C0AA]/30 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center mb-10">
            <h3 className={`font-display text-2xl md:text-3xl font-semibold mb-3 text-[#272727] transition-all duration-700 ${
              isVisible ? 'delay-600' : ''
            }`}>
              The Skincare Trinity
            </h3>
            <p className={`text-[#1F253C] max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'delay-700' : ''
            }`}>
              These three principles form the foundation of effective, healthy skincare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🧴",
                title: "Precision",
                description: "Right ingredients in the right order for your skin type"
              },
              {
                icon: "⏱️",
                title: "Consistency",
                description: "Regular care yields better results than aggressive treatments"
              },
              {
                icon: "🎯",
                title: "Patience",
                description: "Real transformation takes 4-8 weeks of consistent use"
              }
            ].map((principle, index) => (
              <div 
                key={principle.title}
                className={`text-center p-6 transition-all duration-700 ${
                  isVisible 
                    ? `translate-y-0 opacity-100 delay-${800 + index * 100}` 
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <div className={`w-16 h-16 bg-[#1F253C] rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-700 ${
                  isVisible ? 'hover:scale-110 hover:rotate-12' : ''
                }`}>
                  <span className="text-2xl text-[#EDE6DE]">{principle.icon}</span>
                </div>
                <h4 className="font-medium text-[#272727] mb-2">
                  {principle.title}
                </h4>
                <p className="text-sm text-[#1F253C]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinTipsSection;