import heroVideo from "@/assets/banner.webm";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Couche noire semi-transparente pour lisibilité */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <span 
            className="fade-in-up font-body text-sm tracking-[0.3em] uppercase text-[#EDE6DE]/70 block mb-4"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
          >
            unveiling soon.
          </span>
          <h2 
            className="fade-in-up delay-100 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 text-[#EDE6DE]"
            style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
          >
            Almost Ready for Your Skin.
          </h2>
          <p 
            className="fade-in-up delay-200 font-body text-base md:text-lg text-[#EDE6DE]/80 mb-8 mx-auto max-w-md leading-relaxed"
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}
          >
            A skincare experience you didn't know you were waiting for.
          </p>
          <div className="fade-in-up delay-300 flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Early Access
            </Button>
            {/*<Button variant="heroOutline" size="lg">
              Learn More
            </Button>*/}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span 
          className="font-body text-xs tracking-widest uppercase text-[#EDE6DE]/60"
          style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)' }}
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-[#EDE6DE]/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-[#EDE6DE] animate-[bounce_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;