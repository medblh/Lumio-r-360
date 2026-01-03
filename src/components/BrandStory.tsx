import collectionImage from "@/assets/collection-image.png";
import { Button } from "@/components/ui/button";

const BrandStory = () => {
  return (
    <section id="about" className="relative">
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
              {/* Titre mobile optimisé */}
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight">
                <span className="block">About</span>
                <span className="italic block">Lumio'r 360.</span>
              </h2>
              
              {/* Texte avec différentes longueurs pour mobile/desktop */}
              <div className="mb-6 md:mb-8">
                {/* Version mobile - texte plus court et concis */}
                <p className="font-body text-sm sm:text-base md:text-lg text-background/90 leading-relaxed md:hidden">
                  Lumio'r 360 is a premium skincare brand from the UAE, blending science with luxury. 
                  We believe skincare should deliver visible results while providing a sensory experience 
                  that uplifts confidence and celebrates individuality.
                </p>
                
                {/* Version desktop - texte complet */}
                <p className="font-body text-base md:text-lg text-background/90 leading-relaxed max-w-lg hidden md:block">
                  Lumior 360 (FZE) is a premium skincare brand rooted in science, innovation, and luxurious
                  self-care. Founded in the UAE, one of the world's fastest-growing beauty hubs, the brand is
                  built on the belief that skincare should not only deliver visible results but also provide a
                  multisensory experience that uplifts confidence and celebrates individuality.
                </p>
              </div>
              
              {/* Bouton responsive */}
              <Button 
                variant="light" 
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:py-4"
              >
                Get ready to discover
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;