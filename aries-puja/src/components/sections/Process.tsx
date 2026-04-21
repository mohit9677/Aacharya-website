import { motion } from "framer-motion";
import havanImg from "@/assets/havan-kund.png";

const steps = [
  {
    n: "01",
    title: "Sankalpa",
    desc: "The pandit-ji takes your gotra, name, and intention before the deity, formally consecrating the puja in your name.",
  },
  {
    n: "02",
    title: "Kalash Sthapana",
    desc: "A sacred copper kalash filled with holy water, mango leaves, coconut, and red flowers is established as the seat of divinity.",
  },
  {
    n: "03",
    title: "Ganesh & Navagraha Pujan",
    desc: "Lord Ganesha is invoked first to remove obstacles, followed by veneration of all nine planets to balance their cosmic energies.",
  },
  {
    n: "04",
    title: "Mangal Mantra Japa",
    desc: "10,000 to 1,00,000 repetitions of the Mangal Beej Mantra and Mangal Stotram, chanted with japa-mala by trained Vedic priests.",
  },
  {
    n: "05",
    title: "Havan",
    desc: "Sacred fire is consecrated; offerings of khadira samidha, red sandalwood, ghee, and masoor dal are made with each mantra.",
  },
  {
    n: "06",
    title: "Aarti & Pushpanjali",
    desc: "Camphor aarti and floral offerings are presented to Lord Mangal as the rite reaches its devotional crescendo.",
  },
  {
    n: "07",
    title: "Prasad & Daan",
    desc: "Blessed prasad, red coral mala, and yantra are couriered to your doorstep along with the sankalpa video recording.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-block text-primary font-medium tracking-[0.25em] text-xs uppercase mb-4">
              The Ritual
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent leading-tight mb-6">
              Seven Steps of<br />
              <span className="italic">Devotion</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Every Aries Puja we conduct strictly follows the Brihat Parashara Hora and
              Mangal Kavach paddhatis — without abridgement, without shortcuts.
            </p>
            <div className="relative rounded-md overflow-hidden border-2 border-primary/20 shadow-lg">
              <img src={havanImg} alt="Havan kund with rising smoke" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent"></div>
            </div>
          </motion.div>

          <div className="lg:col-span-8 space-y-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group flex gap-6 p-6 rounded-lg border border-border hover:border-primary/40 hover:bg-muted/30 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full border-2 border-primary/30 flex items-center justify-center font-serif text-primary text-xl group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    {s.n}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-accent mb-2">{s.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
