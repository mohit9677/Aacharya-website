import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-sanskrit text-2xl md:text-3xl text-primary mb-4 leading-relaxed">
            ॐ शान्तिः शान्तिः शान्तिः
          </p>
          <p className="italic text-accent-foreground/70">
            "May peace pervade the heavens, the earth, and within you."
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-accent-foreground/15">
          <div className="md:col-span-2">
            <div className="font-serif font-bold text-2xl text-primary mb-2">Aries Puja</div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent-foreground/60 mb-4">Vedic Rituals · Since 1987</p>
            <p className="text-accent-foreground/70 leading-relaxed max-w-md">
              An organisation of traditional Vedic priests serving devotees across the world
              with authentic, scripture-aligned pujas conducted at India's holiest sites.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-primary mb-4">Holy Sites Served</h4>
            <ul className="space-y-2 text-accent-foreground/70 text-sm">
              <li>Mahakaleshwar, Ujjain</li>
              <li>Trimbakeshwar, Nashik</li>
              <li>Kashi Vishwanath, Varanasi</li>
              <li>Rameshwaram</li>
              <li>Pehowa, Haryana</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-primary mb-4">Contact</h4>
            <ul className="space-y-3 text-accent-foreground/70 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>pandit@ariespuja.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Mahakal Marg, Ujjain — 456006</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-accent-foreground/50">
          <p>© {new Date().getFullYear()} Aries Puja Trust. All rituals conducted in accordance with Vedic shastras.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
