import { motion } from "framer-motion";
import heroImg from "@/assets/hero-diya.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToBook = () => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Brass diya with marigolds" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block border border-primary/30 rounded-full px-4 py-1.5 mb-6 bg-primary/5 backdrop-blur-sm">
              <span className="text-primary font-medium tracking-wider text-sm uppercase">Authentic Vedic Rituals</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6">
              Awaken Courage.<br />
              <span className="text-accent italic">Pacify Mars.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl leading-relaxed font-sans">
              A sacred, scripture-aligned Aries Puja performed by traditional Vedic priests for natives of Mesha Rashi. Resolve Mangal Dosha, overcome career blocks, and invite harmony.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToBook}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-semibold"
              >
                Book Your Puja
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-medium border-accent/20 hover:bg-accent/5 hover:text-accent"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Understand the Ritual
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
