import React, { useEffect, useRef, useState } from "react";
import collectionImage from "@/assets/collection-image.png";
import { Button } from "@/components/ui/button";

const BrandStory = () => {
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
          
          // Arrêter d'observer après l'animation
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
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
    <section ref={sectionRef} id="about" className="relative">
      {/* Full-width Image */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-screen">
        <img
          src={collectionImage}
          alt="Lumio'r 360 complete skincare collection"
          className="w-full h-full object-cover object-center md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent md:from-foreground/80 md:via-foreground/30 md:to-transparent" />
        
        {/* Content Overlay - Version mobile et desktop */}
        <div className="absolute inset-0 flex items-end md:items-end">
          <div className="container mx-auto px-4 sm:px-6 pb-8 md:pb-16 lg:pb-24">
            <div className="max-w-full md:max-w-2xl text-background">
              {/* Titre avec animation séparée pour chaque ligne */}
              <div className="mb-4 md:mb-6">
                <div className="overflow-hidden">
                  <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight transition-all duration-800 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
                    <span className="block">About</span>
                  </h2>
                </div>
                <div className="overflow-hidden">
                  <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight transition-all duration-800 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
                    <span className="italic block">Lumio'r 360.</span>
                  </h2>
                </div>
              </div>
              
              {/* Texte avec animation de fondu et montée */}
              <div className="mb-6 md:mb-8">
                {/* Version mobile */}
                <div className={`transition-all duration-1000 ease-out md:hidden ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
                  <p className="font-body text-sm sm:text-base md:text-lg text-background/90 leading-relaxed">
                    Lumio'r 360 is a premium skincare brand from the UAE, blending science with luxury. 
                    We believe skincare should deliver visible results while providing a sensory experience 
                    that uplifts confidence and celebrates individuality.
                  </p>
                </div>
                
                {/* Version desktop */}
                <div className={`transition-all duration-1000 ease-out hidden md:block ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
                  <p className="font-body text-base md:text-lg text-background/90 leading-relaxed max-w-lg">
                    Lumior 360 (FZE) is a premium skincare brand rooted in science, innovation, and luxurious
                    self-care. Founded in the UAE, one of the world's fastest-growing beauty hubs, the brand is
                    built on the belief that skincare should not only deliver visible results but also provide a
                    multisensory experience that uplifts confidence and celebrates individuality.
                  </p>
                </div>
              </div>
              
              {/* Bouton avec animation et effet au survol */}
              <div className={`transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}>
                <Button 
                  variant="light" 
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  <span className="relative z-10">Get ready to discover</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;