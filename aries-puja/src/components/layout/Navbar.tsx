import { Link } from "wouter";

export function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex flex-col cursor-pointer">
            <span className="font-serif font-bold text-2xl text-accent leading-none">Aries Puja</span>
            <span className="text-xs font-medium text-primary tracking-widest uppercase mt-1">Vedic Rituals</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollTo("benefits")} className="hover:text-primary transition-colors">Benefits</button>
          <button onClick={() => scrollTo("process")} className="hover:text-primary transition-colors">Process</button>
          <button onClick={() => scrollTo("packages")} className="hover:text-primary transition-colors">Packages</button>
          <button 
            onClick={() => scrollTo("book")} 
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all font-semibold tracking-wide"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
