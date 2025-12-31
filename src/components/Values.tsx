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
    description: "To become the world’s most trusted and admired skincare brand, offering personalized, cience-backed formulations enriched with luxurious sensory elements. Lumior 360 envisions a world where every individual feels empowered and confident in their skin, recognizing that beauty is unique, personal, and limitless.",
  },
  {
    icon: Leaf,
    title: "Certification",
    description: "Produced in ISO-certified facilities, Manufactured under GMP (Good Manufacturing Practice) guidelines, Compliant with safety and quality benchmarks for international distribution",
  },
];

const Values = () => {
  return (
    <section id="ingredients" className="py-20 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center group fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-border rounded-full group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                <value.icon size={28} className="text-foreground/70 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">{value.title}</h3>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed max-w-sm mx-auto">
                {value.description}
              </p>
              {/*<a
                href="#"
                className="inline-block font-body text-sm tracking-wider uppercase underline-anim"
              >
                {value.link}
              </a>*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
