import { FormProvider } from "@/context/FormContext"
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import BrandStory from "@/components/BrandStory";
import FeaturedProduct from "@/components/FeaturedProduct";
import Values from "@/components/Values";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <FormProvider>
      <Navigation />
      <Hero />
      <ProductCarousel />
      <BrandStory />
      <FeaturedProduct />
      <Values />
      <Newsletter />
      <Footer />
      </FormProvider>
    </main>
  );
};

export default Index;
