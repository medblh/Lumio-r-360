import React, { useEffect, useRef, useState } from "react";
import skinTexture from "@/assets/skin-texture.png";
import productSerum from "@/assets/wab_01.png";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedProduct = () => {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Image principale avec animation de zoom */}
            <div 
              className={`aspect-square relative overflow-hidden rounded-lg transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-90 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isVisible ? '200ms' : '0ms',
                transformOrigin: 'center center'
              }}
            >
              <img
                src={skinTexture}
                alt="Radiant skin result"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
            </div>
            
            {/* Floating Product Card avec animation depuis la droite */}
            <div 
              className={`absolute -bottom-8 -right-4 md:-right-12 w-48 md:w-64 bg-background shadow-medium p-4 border border-gray-100 transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-x-0 opacity-100 rotate-0' 
                  : 'translate-x-12 opacity-0 rotate-3'
              }`}
              style={{ 
                transitionDelay: isVisible ? '500ms' : '0ms',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            >
              <img
                src={productSerum}
                alt="Luminous Elixir Serum"
                className="w-full aspect-square object-cover mb-4 transition-transform duration-300 hover:scale-105"
              />
              <span className="font-body text-xs tracking-wider uppercase text-muted-foreground block mb-1">
                Moisturizer
              </span>
              <h4 className="font-display text-lg font-medium">Face Moisturizer</h4>
            </div>
          </div>

          {/* Content Side */}
          <div className="md:pl-12">
            {/* Sous-titre */}
            <div className="overflow-hidden mb-4">
              <span 
                className={`font-body text-sm tracking-[0.3em] uppercase text-muted-foreground block transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-full opacity-0'
                }`}
                style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
              >
                Our Core Values
              </span>
            </div>
            
            {/* Titre principal avec animation ligne par ligne */}
            <div className="mb-6">
              <div className="overflow-hidden">
                <h2 
                  className={`font-display text-4xl md:text-5xl lg:text-6xl mb-3 leading-tight transition-all duration-800 ease-out ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
                >
                  Skin Problems Called.
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 
                  className={`font-display text-4xl md:text-5xl lg:text-6xl leading-tight transition-all duration-800 ease-out ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
                >
                  We Answered.
                </h2>
              </div>
            </div>
            
            {/* Rating avec étoiles qui apparaissent une par une */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`fill-primary text-primary transition-all duration-500 ${
                      isVisible 
                        ? 'scale-100 opacity-100 rotate-0' 
                        : 'scale-0 opacity-0 rotate-45'
                    }`}
                    style={{ 
                      transitionDelay: isVisible ? `${400 + i * 100}ms` : '0ms'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Description avec effet de fondu et montée */}
            <div className="overflow-hidden mb-8">
              <p 
                className={`font-body text-muted-foreground leading-relaxed transition-all duration-900 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
              >
                When your skin starts calling for help whether it's through sudden breakouts, persistent dryness, or an unexpected dullness, you need more than just a routine; you need a solution. We've listened to the frustrations and the "why now?" moments, developing a formula that cuts through the noise. Our latest innovation is designed to act as the direct answer to your skin's most urgent concerns, restoring balance and confidence with every application.
              </p>
            </div>

            {/* Benefits List avec animation séquentielle */}
            <ul className="space-y-3 mb-8">
              {[
                "Uncompromising Quality",
                "Science-Led Skincare",
                "Luxurious Experience",
                "Customer-Centricity",
              ].map((benefit, index) => (
                <li 
                  key={benefit} 
                  className={`flex items-center gap-3 font-body text-sm transition-all duration-600 ease-out ${
                    isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-6 opacity-0'
                  }`}
                  style={{ transitionDelay: isVisible ? `${600 + index * 100}ms` : '0ms' }}
                >
                  <span 
                    className={`w-1.5 h-1.5 bg-primary rounded-full transition-all duration-300 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}
                    style={{ transitionDelay: isVisible ? `${650 + index * 100}ms` : '0ms' }}
                  />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Bouton optionnel avec animation
            <div 
              className={`transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}
            >
              <Button 
                variant="default" 
                size="lg"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Add to Bag — $85.00
              </Button>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;