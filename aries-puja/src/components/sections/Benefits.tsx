import { motion } from "framer-motion";
import { Heart, Briefcase, Users, Shield, Sparkles, Flame } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Pacifies Mangal Dosha",
    desc: "Neutralises the malefic effects of Mars in the 1st, 4th, 7th, 8th, and 12th houses, easing manglik afflictions.",
  },
  {
    icon: Heart,
    title: "Removes Marital Delays",
    desc: "Clears karmic obstructions that delay marriage and brings harmony into existing relationships.",
  },
  {
    icon: Briefcase,
    title: "Career & Courage",
    desc: "Awakens initiative, leadership, and the warrior-spirit needed to break stagnation in profession and business.",
  },
  {
    icon: Users,
    title: "Restores Family Peace",
    desc: "Calms the fire of unwarranted anger, sibling discord, and disputes within the household.",
  },
  {
    icon: Flame,
    title: "Health & Vitality",
    desc: "Soothes Mars-governed ailments — blood disorders, inflammation, accidents, and chronic fatigue.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Protection",
    desc: "Forms a kavach of divine grace that shields you from negative influences and untimely setbacks.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative py-24 md:py-32 bg-muted/40 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-medium tracking-[0.25em] text-xs uppercase mb-4">
            Why Devotees Perform It
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6">
            Blessings the Puja Bestows
          </h2>
          <p className="text-foreground/70 text-lg">
            Performed with shraddha and shastric precision, the Aries Puja transforms hardship
            into harmony — across body, mind, household, and destiny.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-card border border-card-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-accent mb-3">{b.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
