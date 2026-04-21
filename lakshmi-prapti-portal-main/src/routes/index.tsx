import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  Sparkles,
  Coins,
  Home,
  HeartHandshake,
  ShieldCheck,
  Flame,
  Flower2,
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from "@/assets/lakshmi-hero.jpg";
import pujaImg from "@/assets/puja-setup.jpg";
import mandalaImg from "@/assets/mandala.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lakshmi Prapti Puja — Book Online | Vedic Wealth Ritual" },
      {
        name: "description",
        content:
          "Lakshmi Prapti Puja is performed to invoke Goddess Lakshmi for wealth, prosperity and removal of financial hurdles. Book an authentic Vedic puja online.",
      },
      { property: "og:title", content: "Lakshmi Prapti Puja — Invoke Wealth & Prosperity" },
      {
        property: "og:description",
        content:
          "Authentic Vedic Lakshmi Prapti Puja performed by experienced pandits — for wealth, abundance and divine blessings.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: LakshmiPujaPage,
});

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(120),
  packageId: z.string().min(1, "Please select a package"),
  date: z.string().min(1, "Please choose a date"),
  gotra: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

const packages = [
  {
    id: "basic",
    name: "Saral Lakshmi Puja",
    price: "₹2,100",
    duration: "1.5 hours",
    pandits: "1 Pandit",
    highlights: [
      "Sankalp & Ganesh Pujan",
      "Lakshmi Ashtottara (108 names)",
      "Aarti & Prasad Distribution",
      "Online live streaming",
    ],
    accent: false,
  },
  {
    id: "premium",
    name: "Shree Lakshmi Anushthan",
    price: "₹5,100",
    duration: "3 hours",
    pandits: "2 Pandits",
    highlights: [
      "Everything in Saral Puja",
      "Shree Suktam — 11 paath",
      "Kanakdhara Stotra recitation",
      "Havan with 108 ahutis",
      "Yantra & blessed prasad couriered",
    ],
    accent: true,
  },
  {
    id: "royal",
    name: "Mahalakshmi Maha Yagna",
    price: "₹11,100",
    duration: "5–6 hours",
    pandits: "5 Pandits",
    highlights: [
      "Full Vedic Mahalakshmi Yagna",
      "Shree Suktam — 1008 paath",
      "Kuber Pujan + Kanakdhara Havan",
      "Silver Lakshmi coin & energised yantra",
      "Personal sankalp on your name & gotra",
    ],
    accent: false,
  },
];

const benefits = [
  { icon: Coins, title: "Wealth & Prosperity", desc: "Invites steady inflow of money and financial abundance." },
  { icon: ShieldCheck, title: "Removes Debts", desc: "Helps clear financial obstacles, loans and stagnation." },
  { icon: Home, title: "Harmony at Home", desc: "Brings peace, positivity and Lakshmi's grace into the household." },
  { icon: HeartHandshake, title: "Business Growth", desc: "Boosts career, business expansion and new opportunities." },
  { icon: Sparkles, title: "Spiritual Upliftment", desc: "Purifies aura and aligns you with the energy of abundance." },
  { icon: Star, title: "Good Fortune", desc: "Strengthens luck, success and overall well-being." },
];

const process = [
  { step: "01", title: "Sankalp", desc: "The devotee takes a sacred vow with name, gotra & wish." },
  { step: "02", title: "Ganesh & Kalash Pujan", desc: "Lord Ganesha is invoked first to remove all obstacles." },
  { step: "03", title: "Lakshmi Avahan", desc: "Goddess Lakshmi is invoked on the lotus & idol with mantras." },
  { step: "04", title: "Shree Suktam Paath", desc: "Powerful Vedic hymns from Rigveda are chanted for abundance." },
  { step: "05", title: "Havan", desc: "Sacred fire ritual with ahutis of ghee, herbs & lotus seeds." },
  { step: "06", title: "Aarti & Prasad", desc: "Final aarti, blessings, and distribution of charanamrit & prasad." },
];

const testimonials = [
  {
    name: "Anjali Sharma",
    city: "Delhi",
    text: "After the Mahalakshmi Yagna, my long-stuck home loan was approved within a week. Truly divine experience.",
  },
  {
    name: "Rahul Mehta",
    city: "Mumbai",
    text: "The pandits were extremely knowledgeable and the live streaming felt like we were sitting right there. Highly recommend.",
  },
  {
    name: "Priya Iyer",
    city: "Bengaluru",
    text: "We saw a real shift in our business within a month. The energy in our home has changed completely.",
  },
];

const faqs = [
  {
    q: "Who should perform the Lakshmi Prapti Puja?",
    a: "Anyone seeking financial growth, recovery from losses, business expansion or peace at home. It is especially auspicious on Fridays, Diwali, Akshaya Tritiya and Pushya Nakshatra.",
  },
  {
    q: "Can the puja be performed on my behalf if I cannot attend?",
    a: "Yes. Our pandits perform Sankalp in your name and gotra. You receive a live stream link and the blessed prasad is couriered to your address.",
  },
  {
    q: "What materials are required from my side?",
    a: "Nothing. All puja samagri — flowers, havan ingredients, idol, yantra and prasad — are arranged by us as part of the package.",
  },
  {
    q: "Is the puja performed by qualified Vedic pandits?",
    a: "Absolutely. All our pandits are trained in Vedic karmkand with 15+ years of experience and chant authentic mantras as per shastra.",
  },
];

function LakshmiPujaPage() {
  const [submitting, setSubmitting] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<string>("premium");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      packageId: String(form.get("packageId") ?? selectedPkg),
      date: String(form.get("date") ?? ""),
      gotra: String(form.get("gotra") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    const result = bookingSchema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("🪔 Booking received! Our team will call you shortly to confirm.");
    (e.target as HTMLFormElement).reset();
    setSelectedPkg("premium");
  };

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#top" className="flex items-center gap-2">
            <Flower2 className="h-6 w-6 text-accent" />
            <span className="font-display text-lg font-semibold text-primary">
              Divya Anushthan
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#benefits" className="hover:text-accent transition-colors">Benefits</a>
            <a href="#process" className="hover:text-accent transition-colors">Process</a>
            <a href="#packages" className="hover:text-accent transition-colors">Packages</a>
            <a href="#book" className="hover:text-accent transition-colors">Book</a>
          </div>
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
            <a href="#book">Book Puja</a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm" />
        <img
          src={mandalaImg}
          alt=""
          aria-hidden
          className="absolute -right-40 -top-40 w-[600px] opacity-20 animate-spin-slow"
        />
        <img
          src={mandalaImg}
          alt=""
          aria-hidden
          className="absolute -left-52 bottom-0 w-[500px] opacity-15 animate-spin-slow"
        />
        <div className="container relative mx-auto grid gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28 lg:items-center">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Vedic Wealth Ritual
            </span>
            <h1 className="mt-6 font-display text-5xl leading-tight md:text-6xl lg:text-7xl text-primary">
              Lakshmi Prapti{" "}
              <span className="text-gradient-gold">Puja</span>
            </h1>
            <p className="mt-3 font-display text-lg italic text-muted-foreground">
              ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद ॐ श्रीं ह्रीं श्रीं महालक्ष्म्यै नमः
            </p>
            <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed">
              Invite Goddess Mahalakshmi into your home and life. An authentic Vedic
              ritual performed by experienced pandits to invoke wealth, prosperity,
              abundance and divine blessings.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-divine">
                <a href="#book">Book Your Puja</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent/50 hover:bg-accent/10">
                <a href="#packages">View Packages</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> 5000+ Pujas Done</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Verified Pandits</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Live Streaming</div>
            </div>
          </div>

          <div className="relative animate-rise">
            <div className="absolute inset-0 -m-8 bg-[image:var(--gradient-radiance)] animate-glow" />
            <div className="relative ornate-border rounded-3xl overflow-hidden shadow-divine">
              <img
                src={heroImg}
                alt="Goddess Lakshmi seated on lotus showering blessings of wealth"
                width={1600}
                height={1024}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card px-5 py-4 shadow-gold ornate-border animate-float">
              <div className="flex items-center gap-3">
                <Flame className="h-6 w-6 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Next Auspicious Date</p>
                  <p className="font-display font-semibold text-primary">Friday • Pushya Nakshatra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={pujaImg}
              alt="Traditional Lakshmi puja setup with kalash, diyas and marigold"
              loading="lazy"
              width={1280}
              height={896}
              className="rounded-3xl shadow-divine ornate-border w-full h-auto"
            />
            <div className="absolute -top-4 -right-4 rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-gold-foreground shadow-gold">
              Authentic Vedic Vidhi
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-accent">What is this puja?</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">
              The Sacred Ritual of <span className="text-gradient-gold">Abundance</span>
            </h2>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              <strong>Lakshmi Prapti Puja</strong> — literally "the puja for attaining
              Lakshmi" — is one of the most powerful rituals in Sanatan Dharma performed
              to please Goddess Mahalakshmi, the divine consort of Lord Vishnu and the
              giver of wealth, fortune, beauty and prosperity.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Through the chanting of <em>Shree Suktam</em>, <em>Kanakdhara Stotra</em>{" "}
              and the offering of a sacred havan, this puja awakens the energy of
              abundance, removes financial obstacles and invites Lakshmi Ji's permanent
              residence in the devotee's home and heart.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-card ornate-border p-5">
                <p className="font-display text-3xl text-primary">5000+</p>
                <p className="text-sm text-muted-foreground">Devotees Blessed</p>
              </div>
              <div className="rounded-2xl bg-card ornate-border p-5">
                <p className="font-display text-3xl text-primary">15+ yrs</p>
                <p className="text-sm text-muted-foreground">Pandit Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PERFORM */}
      <section className="bg-gradient-warm border-y border-border/60 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent">Why perform it</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">
              The Reason Behind the Ritual
            </h2>
            <p className="mt-5 text-foreground/80 leading-relaxed">
              In Hindu astrology, weak placement of Venus, Jupiter or the 2nd & 11th
              house in one's horoscope often leads to financial struggles. Lakshmi
              Prapti Puja strengthens these planetary energies and aligns the devotee
              with the cosmic flow of prosperity. People perform this puja to:
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              "Overcome long-standing money problems and debts",
              "Begin a new business or expand existing ventures",
              "Attract new opportunities and career growth",
              "Bring peace, harmony and positive energy at home",
              "Fulfil long-pending wishes and material desires",
              "Counter Vastu defects and negative planetary periods",
            ].map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 rounded-2xl bg-card p-5 ornate-border hover:shadow-gold transition-[box-shadow,transform] hover:-translate-y-1 duration-300"
              >
                <Flower2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground/85">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent">Divine Benefits</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">
            Blessings You Receive
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl bg-card p-8 ornate-border transition-all duration-500 hover:-translate-y-2 hover:shadow-divine"
            >
              <div className="absolute inset-0 bg-gradient-divine opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold">
                  <Icon className="h-7 w-7 text-gold-foreground" />
                </div>
                <h3 className="mt-5 font-display text-xl text-primary">{title}</h3>
                <p className="mt-2 text-foreground/75 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-20 bg-gradient-warm border-y border-border/60 overflow-hidden">
        <img src={mandalaImg} alt="" aria-hidden className="absolute -right-40 top-10 w-[500px] opacity-10 animate-spin-slow" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent">Sacred Vidhi</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">The Puja Process</h2>
            <p className="mt-5 text-foreground/80">
              Every step is performed strictly according to Vedic shastra by experienced pandits.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="relative rounded-3xl bg-card p-8 ornate-border hover:shadow-divine transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -top-5 -left-2 font-display text-6xl text-gradient-gold opacity-90">{step}</div>
                <h3 className="mt-6 font-display text-xl text-primary">{title}</h3>
                <p className="mt-2 text-foreground/75 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent">Puja Packages</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">Choose Your Anushthan</h2>
          <p className="mt-5 text-foreground/80">
            Three thoughtfully crafted packages to suit every devotee's intention.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                pkg.accent
                  ? "bg-gradient-divine text-primary-foreground shadow-divine scale-[1.02]"
                  : "bg-card ornate-border hover:shadow-gold"
              }`}
            >
              {pkg.accent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground shadow-gold">
                  Most Popular
                </div>
              )}
              <h3 className={`font-display text-2xl ${pkg.accent ? "text-primary-foreground" : "text-primary"}`}>
                {pkg.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className={`font-display text-5xl ${pkg.accent ? "text-gold" : "text-gradient-gold"}`}>
                  {pkg.price}
                </span>
              </div>
              <div className={`mt-3 flex items-center gap-4 text-sm ${pkg.accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {pkg.duration}</span>
                <span>•</span>
                <span>{pkg.pandits}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2 className={`h-5 w-5 flex-shrink-0 mt-0.5 ${pkg.accent ? "text-gold" : "text-accent"}`} />
                    <span className={pkg.accent ? "text-primary-foreground/95" : "text-foreground/85"}>{h}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`mt-8 w-full ${
                  pkg.accent
                    ? "bg-gold text-gold-foreground hover:bg-gold/90"
                    : "bg-primary hover:bg-primary/90"
                }`}
                onClick={() => setSelectedPkg(pkg.id)}
              >
                <a href="#book">Book This Puja</a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-warm border-y border-border/60 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent">Devotee Experiences</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">Blessings Received</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-3xl bg-card p-8 ornate-border shadow-soft">
                <div className="flex gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-foreground/85 italic leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center font-display text-gold-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent">Book Your Puja</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">
              Begin Your Journey to <span className="text-gradient-gold">Abundance</span>
            </h2>
            <p className="mt-5 text-foreground/80 leading-relaxed">
              Fill the form and our team will reach out within 2 hours to confirm your
              auspicious date, share live-stream details and arrange the entire puja.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-card p-4 ornate-border">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Call us</p>
                  <p className="font-semibold text-primary">+91 98XXX 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-card p-4 ornate-border">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-semibold text-primary">puja@divyaanushthan.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-card p-4 ornate-border">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Based in</p>
                  <p className="font-semibold text-primary">Varanasi, India · Worldwide service</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-3xl bg-card p-8 md:p-10 ornate-border shadow-divine space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" placeholder="Your name" required maxLength={80} className="mt-2" />
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 98XXX XXXXX" required maxLength={20} className="mt-2" />
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required maxLength={120} className="mt-2" />
              </div>
              <div>
                <Label htmlFor="gotra">Gotra (optional)</Label>
                <Input id="gotra" name="gotra" placeholder="e.g. Kashyap" maxLength={60} className="mt-2" />
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label htmlFor="packageId">Select Package *</Label>
                <Select name="packageId" value={selectedPkg} onValueChange={setSelectedPkg}>
                  <SelectTrigger id="packageId" className="mt-2">
                    <SelectValue placeholder="Choose a package" />
                  </SelectTrigger>
                  <SelectContent>
                    {packages.map((p) => (
                      <SelectItem key={p.id} value={p.id}>
                        {p.name} — {p.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <input type="hidden" name="packageId" value={selectedPkg} />
              </div>
              <div>
                <Label htmlFor="date">Preferred Date *</Label>
                <Input id="date" name="date" type="date" required className="mt-2" />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Sankalp / Wish (optional)</Label>
              <Textarea id="message" name="message" rows={4} placeholder="Share your intention or any specific wish for the puja…" maxLength={500} className="mt-2" />
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 shadow-divine">
              {submitting ? "Submitting…" : "🪔 Confirm My Booking"}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              By submitting, you agree to be contacted by our team. Your details are kept private.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-warm border-t border-border/60 py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent">FAQs</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">Common Questions</h2>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-lg text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Flower2 className="h-6 w-6 text-gold" />
            <span className="font-display text-xl">Divya Anushthan</span>
          </div>
          <p className="mt-4 font-display italic text-primary-foreground/80">
            ॐ श्री महालक्ष्म्यै नमः
          </p>
          <p className="mt-6 text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Divya Anushthan · Authentic Vedic Pujas Worldwide
          </p>
        </div>
      </footer>
    </div>
  );
}
