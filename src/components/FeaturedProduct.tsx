import skinTexture from "@/assets/skin-texture.png";
import productSerum from "@/assets/wab_01.png";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedProduct = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square relative img-zoom">
              <img
                src={skinTexture}
                alt="Radiant skin result"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Product Card */}
            <div className="absolute -bottom-8 -right-4 md:-right-12 w-48 md:w-64 bg-background shadow-medium p-4">
              <img
                src={productSerum}
                alt="Luminous Elixir Serum"
                className="w-full aspect-square object-cover mb-4"
              />
              <span className="font-body text-xs tracking-wider uppercase text-muted-foreground">Moisturizer</span>
              <h4 className="font-display text-lg">Face Moisturizer</h4>
              {/*<span className="font-display text-lg text-primary">$85.00</span>*/}
            </div>
          </div>

          {/* Content Side */}
          <div className="md:pl-12">
            <span className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground block mb-4">
              Our Core Values
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Skin Problems Called.  <br />We Answered.
            </h2>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              {/*<span className="font-body text-sm text-muted-foreground">
                4.9 out of 5 · 3,214 reviews
              </span>*/}
            </div>

            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              When your skin starts calling for help whether it’s through sudden breakouts, persistent dryness, or an unexpected dullness, you need more than just a routine; you need a solution. We’ve listened to the frustrations and the "why now?" moments, developing a formula that cuts through the noise. Our latest innovation is designed to act as the direct answer to your skin’s most urgent concerns, restoring balance and confidence with every application.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
              {[
                "Uncompromising Quality",
                "Science-Led Skincare",
                "Luxurious Experience",
                "Customer-Centricity",
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 font-body text-sm">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/*<Button variant="default" size="lg">
              Add to Bag — $85.00
            </Button>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
