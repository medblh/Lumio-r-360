import collectionImage from "@/assets/collection-image.png";
import { Button } from "@/components/ui/button";

const BrandStory = () => {
  return (
    <section id="about" className="relative">
      {/* Full-width Image */}
      <div className="relative h-[70vh] md:h-screen">
        <img
          src={collectionImage}
          alt="Lumio'r 360 complete skincare collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16 md:pb-24">
            <div className="max-w-2xl text-background">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                About <br />
                <span className="italic">Lumio'r 360.</span>
              </h2>
              <p className="font-body text-base md:text-lg text-background/90 mb-8 leading-relaxed max-w-lg">
                Lumior 360 (FZE) is a premium skincare brand rooted in science, innovation, and luxurious
                self-care. Founded in the UAE, one of the world’s fastest-growing beauty hubs, the brand is
                built on the belief that skincare should not only deliver visible results but also provide a
                multisensory experience that uplifts confidence and celebrates individuality.

              </p>
              <Button variant="light" size="lg">
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
