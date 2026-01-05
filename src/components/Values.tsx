import React, { useEffect, useRef, useState } from "react";
import { Leaf, Heart, Sparkles } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Our Mission",
    description: "To create premium skincare that combines scientific integrity with exceptional quality while contributing meaningfully to society. Lumior 360 is committed to allocating a portion of everysale toward the welfare and education of girl children, reinforcing our belief that true beauty extends beyond appearance into impact and empowerment.",
  },
  {
    icon: Heart,
    title: "Our Vision",
    description: "To become the world's most trusted and admired skincare brand, offering personalized, science-backed formulations enriched with luxurious sensory elements. Lumior 360 envisions a world where every individual feels empowered and confident in their skin, recognizing that beauty is unique, personal, and limitless.",
  },
  {
    icon: Leaf,
    title: "Certification",
    description: "Produced in ISO-certified facilities, Manufactured under GMP (Good Manufacturing Practice) guidelines, Compliant with safety and quality benchmarks for international distribution",
  },
];

const Values = () => {
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
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px"
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
    <section ref={sectionRef} id="ingredients" className="py-20 md:py-32 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`text-center group transition-all duration-800 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              {/* Icon avec animation de "pop" et rotation */}
              <div 
                className={`inline-flex items-center justify-center w-16 h-16 mb-6 border border-border rounded-full group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500 ${
                  isVisible 
                    ? 'scale-100 opacity-100 rotate-0 shadow-lg' 
                    : 'scale-0 opacity-0 rotate-180'
                }`} 
                style={{ 
                  transitionDelay: isVisible ? `${200 + index * 150}ms` : '0ms',
                  transformOrigin: 'center center'
                }}
              >
                <value.icon 
                  size={28} 
                  className={`text-foreground/70 group-hover:text-primary transition-all duration-500 ${
                    isVisible ? 'scale-100' : 'scale-0'
                  }`}
                  style={{ transitionDelay: isVisible ? `${300 + index * 150}ms` : '0ms' }}
                />
              </div>
              
              {/* Titre avec animation de fondu et montée */}
              <div className="overflow-hidden mb-4">
                <h3 
                  className={`font-display text-2xl md:text-3xl transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms' }}
                >
                  {value.title}
                </h3>
              </div>
              
              {/* Description avec animation de fondu et élargissement */}
              <div className="overflow-hidden">
                <p 
                  className={`font-body text-muted-foreground mb-6 leading-relaxed max-w-sm mx-auto transition-all duration-900 ease-out ${
                    isVisible 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-6 opacity-0 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${500 + index * 100}ms` : '0ms',
                    transformOrigin: 'top center'
                  }}
                >
                  {value.description}
                </p>
              </div>
              
              {/* Lien optionnel avec animation
              <div className={`transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: isVisible ? `${700 + index * 100}ms` : '0ms' }}>
                <a
                  href="#"
                  className="inline-block font-body text-sm tracking-wider uppercase underline-anim hover:text-primary transition-colors duration-300"
                >
                  {value.link}
                </a>
              </div>
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;