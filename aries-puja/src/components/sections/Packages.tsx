import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const packages = [
  {
    id: "saral",
    name: "Saral",
    subtitle: "Essential Aries Puja",
    price: "₹ 5,100",
    pandits: 1,
    japa: "11,000 mantras",
    duration: "3 hours",
    features: [
      "1 Vedic pandit at Ujjain",
      "11,000 Mangal Beej Mantra japa",
      "Sankalpa in your name & gotra",
      "Havan with red sandalwood samidha",
      "Live video recording sent to you",
      "Prasad couriered within 7 days",
    ],
    accent: false,
  },
  {
    id: "vishesh",
    name: "Vishesh",
    subtitle: "Recommended for Manglik Dosha",
    price: "₹ 11,100",
    pandits: 3,
    japa: "51,000 mantras",
    duration: "Full day (8 hours)",
    features: [
      "3 senior Vedic pandits at Trimbakeshwar",
      "51,000 mantra japa with japa-mala",
      "Mangal Kavach paath & Mangal Stotram",
      "Extended havan with 11 samagri offerings",
      "Live HD streaming on private link",
      "Energised Mangal Yantra & red coral mala",
      "Prasad, kumkum & abhishek jal couriered",
    ],
    accent: true,
  },
  {
    id: "maharaja",
    name: "Maharaja",
    subtitle: "Complete Mangal Shanti Anushthan",
    price: "₹ 25,100",
    pandits: 5,
    japa: "1,25,000 mantras",
    duration: "3-day anushthan",
    features: [
      "5 senior pandits across 3 days at Varanasi",
      "1,25,000 mantra japa over 3 days",
      "Daily Rudrabhishek with Mangal mantras",
      "Poorna-ahuti havan with 21 samagris",
      "Navagraha shanti & Kumara puja included",
      "1080p multi-camera live broadcast",
      "Energised gold-plated Mangal Yantra",
      "Red coral ring (jyotish ratna), prasad hamper",
      "30-min personal jyotish consultation",
    ],
    accent: false,
  },
];

interface Props {
  onSelect?: (id: string) => void;
}

export function Packages({ onSelect }: Props) {
  const handleSelect = (id: string) => {
    onSelect?.(id);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="relative py-24 md:py-32 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-medium tracking-[0.25em] text-xs uppercase mb-4">
            Puja Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6">
            Choose Your Anushthan
          </h2>
          <p className="text-foreground/70 text-lg">
            Every package is conducted with full shastric authenticity. Choose the depth of
            sankalpa that aligns with your circumstance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-xl border-2 p-8 transition-all duration-300 hover:-translate-y-2 ${
                p.accent
                  ? "border-primary bg-card shadow-2xl shadow-primary/10 md:scale-105"
                  : "border-card-border bg-card hover:border-primary/50"
              }`}
            >
              {p.accent && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
                  Most Chosen
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-3xl font-serif font-bold text-accent mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground italic">{p.subtitle}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-5xl font-serif font-bold text-primary mb-2">{p.price}</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground tracking-wide uppercase font-medium">
                  <span>{p.pandits} pandit{p.pandits > 1 ? "s" : ""}</span>
                  <span>·</span>
                  <span>{p.japa}</span>
                  <span>·</span>
                  <span>{p.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-foreground/80 leading-snug">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleSelect(p.id)}
                className={`rounded-full py-6 text-base font-semibold ${
                  p.accent
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-accent hover:bg-accent/90 text-accent-foreground"
                }`}
              >
                Book {p.name} Puja
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
