import ProductCard from "./ProductCard";
import productCream from "@/assets/wab_01.png";
import productSerum from "@/assets/wab_02.png";
import productCleanser from "@/assets/wab_03.png";
import productLip from "@/assets/wab_04.png";

const products = [
  {
    image: productCream,
    category: "moisturize",
    name: "Face Moisturizer",
    price: "$68.00",
    description: "Rich daily moisturizer with 24K gold peptides",
    rating: 4.8,
    reviews: 2847,
    badge: "Bestseller",
  },
  {
    image: productSerum,
    category: "serum",
    name: " Anti-aging Serum",
    price: "$85.00",
    description: "Vitamin C brightening serum",
    rating: 4.9,
    reviews: 3214,
    badge: "New",
  },
  {
    image: productCleanser,
    category: "serum",
    name: "Lip Serum/gel",
    price: "$42.00",
    description: "Gentle gel-to-milk daily cleanser",
    rating: 4.7,
    reviews: 1956,
  },
  {
    image: productLip,
    category: "gel",
    name: "Eye Gel",
    price: "$28.00",
    description: "Hydrating peptide lip therapy",
    rating: 4.8,
    reviews: 4521,
  },
];

const ProductCarousel = () => {
  return (
    <section id="shop" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground block mb-4">
            The Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Essential rituals
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Each product crafted to work in harmony, delivering transformative results from day one.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Link 
        <div className="text-center mt-16">
          <a
            href="#shop"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase underline-anim"
          >
            View All Products
            <span className="text-lg">→</span>
          </a>
        </div>*/}
      </div>
    </section>
  );
};

export default ProductCarousel;
