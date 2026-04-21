import { motion } from "framer-motion";
import yantra from "@/assets/mangal-yantra.png";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl"></div>
            <img
              src={yantra}
              alt="Mangal Yantra"
              className="relative w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="inline-block text-primary font-medium tracking-[0.25em] text-xs uppercase mb-4">
              The Sacred Sankalpa
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent leading-tight mb-6">
              What is the<br />
              <span className="italic">Aries Puja?</span>
            </h2>
            <p className="font-sanskrit text-2xl text-primary mb-2 leading-snug">
              ॐ अं अंगारकाय नमः
            </p>
            <p className="text-sm italic text-muted-foreground mb-8">
              Om Aṁ Aṅgārakāya Namaḥ — Salutations to Lord Mangal
            </p>
            <div className="space-y-5 text-foreground/80 text-lg leading-relaxed font-sans">
              <p>
                The Aries Puja is a sacred Vedic ritual performed for natives born under
                <span className="text-accent font-medium"> Mesha Rashi (Aries moon sign)</span> and
                for those whose birth chart shows affliction of <span className="text-accent font-medium">Mangal (Mars)</span>,
                the ruling planet of Aries.
              </p>
              <p>
                Conducted by traditional pandits at the holiest sites — Ujjain, Trimbakeshwar,
                and Varanasi — this puja invokes <span className="text-accent font-medium">Lord Mangal</span>,
                <span className="text-accent font-medium"> Lord Kartikeya</span>, and
                <span className="text-accent font-medium"> Lord Ram</span> (Mesha Lagna's ishta) through prescribed
                mantras, havan, and offerings of red sandalwood, masoor dal, and red flowers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
