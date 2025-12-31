import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  category: string;
  name: string;
  price: string;
  description: string;
  rating: number;
  reviews: number;
  badge?: string;
}

const ProductCard = ({
  image,
  category,
  name,
  price,
  description,
  rating,
  reviews,
  badge,
}: ProductCardProps) => {
  return (
    <div className="group">
      {/* Image Container */}
      <div className="relative img-zoom aspect-[3/4] bg-cream-dark mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {badge && (
          <span className="absolute top-4 left-4 bg-foreground text-background font-body text-xs tracking-wider uppercase px-3 py-1.5">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
          {category}
        </span>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(rating) ? "fill-primary text-primary" : "text-muted"}
              />
            ))}
          </div>
          <span className="font-body text-xs text-muted-foreground">
            {rating} ({reviews.toLocaleString()})
          </span>
        </div>

        <h3 className="font-display text-xl md:text-2xl">{name}</h3>
        <p className="font-body text-sm text-muted-foreground">{description}</p>
        
        {/*<div className="flex items-center justify-between pt-2">
          <span className="font-display text-xl">{price}</span>
          <Button variant="minimal" size="sm" className="group-hover:translate-x-1 transition-transform">
            Add to Bag
          </Button>
        </div>*/}
      </div>
    </div>
  );
};

export default ProductCard;
