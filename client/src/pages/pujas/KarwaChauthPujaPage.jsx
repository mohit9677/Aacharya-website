import { useEffect, useState } from "react";
import { Award, Check, Heart, Moon, ShieldCheck, Sparkles, Users, Flower2, Home, HandHeart } from "lucide-react";
import { FiUser, FiPhone, FiMapPin, FiCalendar, FiClock, FiMessageSquare, FiCheck } from "react-icons/fi";
import { toast } from "react-hot-toast";
import "./KarwaChauthFestivalStyle.css";
import heroImg from "../../assets/puja/hero-diya.png";
import ritualImg from "../../assets/puja/pandit-aarti.png";

const PACKAGES = [
  {
    id: "basic",
    name: "Basic",
    tag: "Traditional Start",
    price: 2100,
    features: [
      "1 verified pandit",
      "Karwa Chauth puja vidhi",
      "Vrat katha paath",
      "Sankalp in your name",
      "Digital prasad photo",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    tag: "Most Chosen",
    price: 5100,
    featured: true,
    features: [
      "2 verified pandits",
      "Complete puja + katha",
      "Chandra arghya guidance",
      "Family blessing sankalp",
      "Live video of complete puja",
      "Prasad courier",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tag: "Shubh Vivaah Seva",
    price: 11100,
    features: [
      "4 senior pandits",
      "Extended Karwa Chauth puja",
      "Special suhag protection sankalp",
      "Aarti and couple blessing ritual",
      "HD recording + consultation",
      "Blessed suhag items + prasad courier",
    ],
  },
];

const REASONS = [
  { icon: Heart, title: "Marital Bonding", text: "Celebrates love, trust, and lifelong togetherness between partners." },
  { icon: ShieldCheck, title: "Well-being Prayer", text: "Performed for husband’s health, safety, and longevity." },
  { icon: Home, title: "Family Harmony", text: "Invokes peace, prosperity, and emotional stability at home." },
  { icon: HandHeart, title: "Sacred Vrat Sankalp", text: "Strengthens devotion through fasting, discipline, and prayer." },
];

const BENEFITS = [
  { title: "Relationship Stability", text: "Supports stronger mutual trust and emotional closeness." },
  { title: "Positive Energy", text: "Removes conflict and invites calm energy in married life." },
  { title: "Health Blessings", text: "Prayers are offered for long life and physical well-being." },
  { title: "Emotional Security", text: "Creates faith and reassurance in the marital journey." },
  { title: "Prosperous Family Life", text: "Auspicious for domestic peace and abundance." },
  { title: "Spiritual Merit", text: "Vrat and puja are believed to bring punya and grace." },
];

const PROCESS = [
  { n: "01", title: "Sankalp", text: "Pandit takes your name, gotra, and puja intention." },
  { n: "02", title: "Ganesh & Gauri Puja", text: "Auspicious invocation for blessings and obstacle removal." },
  { n: "03", title: "Karwa Sthapana", text: "Sacred karwa setup and traditional offerings are made." },
  { n: "04", title: "Vrat Katha Paath", text: "Karwa Chauth katha is recited as per custom." },
  { n: "05", title: "Aarti & Chandra Arghya", text: "Moon offering guidance and final aarti." },
  { n: "06", title: "Ashirwad", text: "Blessings for marital happiness, health, and long life." },
];

const KarwaChauthPujaPage = () => {
  const [selectedPkg, setSelectedPkg] = useState("standard");
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    gotra: "",
    date: "",
    time: "",
    message: "",
  });

  useEffect(() => {
    document.body.classList.add("kc-page-active");
    return () => document.body.classList.remove("kc-page-active");
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      toast.error("Please fill all required fields.");
      return;
    }
    setDone(true);
    toast.success("Booking received. Our team will contact you shortly.");
  };

  const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="kc-page">
      <section className="kc-hero">
        <div className="kc-hero-bg">
          <img src={heroImg} alt="Karwa Chauth moon ritual with diya and sacred setup" />
          <div className="kc-hero-overlay" />
          <div className="kc-halo" aria-hidden="true" />
        </div>

        <div className="kc-container kc-hero-inner">
          <div className="kc-pill">
            <Sparkles size={16} /> <span>Karwa Chauth • Suhag Vrat</span>
          </div>
          <p className="kc-mantra">om gauryai namah</p>
          <h1 className="kc-h1">
            Karwa Chauth <span>Puja</span>
          </h1>
          <p className="kc-hero-p">
            Perform authentic Karwa Chauth puja for marital harmony, health, and long life blessings with complete traditional vidhi.
          </p>
          <div className="kc-hero-actions">
            <button type="button" className="kc-btn kc-btn-gold" onClick={scrollToBooking}>
              Book This Puja Now
            </button>
            <a className="kc-link" href="#about">
              Learn the ritual
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="kc-section kc-about">
        <div className="kc-container kc-grid-2">
          <div className="kc-img-wrap">
            <img src={ritualImg} alt="Pandit performing Karwa Chauth puja and aarti" className="kc-img" loading="lazy" />
          </div>
          <div>
            <div className="kc-section-heading kc-left">
              <div className="kc-eyebrow">About Karwa Chauth</div>
              <h2 className="kc-h2">
                Correct significance of <span className="kc-gold-text">Karwa Chauth Puja</span>
              </h2>
            </div>
            <div className="kc-copy">
              <p>
                Karwa Chauth is a sacred vrat observed by married women for the well-being and longevity of their husbands.
              </p>
              <p>
                The puja includes Gauri-Ganesh worship, karwa sthapana, vrat katha recitation, and moon offering at night.
              </p>
              <p>
                This ritual is performed for love, protection, and stability in married life while preserving traditional values.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="kc-section kc-reasons">
        <div className="kc-container">
          <div className="kc-section-heading">
            <div className="kc-eyebrow">Why This Puja</div>
            <h2 className="kc-h2">Why devotees perform Karwa Chauth Puja</h2>
          </div>
          <div className="kc-reasons-grid">
            {REASONS.map((item) => (
              <div key={item.title} className="kc-reason-card">
                <div className="kc-reason-icon">
                  <item.icon size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kc-section kc-benefits">
        <div className="kc-container">
          <div className="kc-section-heading">
            <div className="kc-eyebrow">Blessings</div>
            <h2 className="kc-h2">
              Benefits of <span className="kc-gold-text">Karwa Chauth Vrat</span>
            </h2>
          </div>
          <div className="kc-benefit-grid">
            {BENEFITS.map((b) => (
              <div key={b.title} className="kc-benefit">
                <div className="kc-check">
                  <Check size={18} strokeWidth={3} />
                </div>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kc-section kc-process">
        <div className="kc-container">
          <div className="kc-section-heading">
            <div className="kc-eyebrow kc-eyebrow-light">Ritual Process</div>
            <h2 className="kc-h2 kc-light">
              Step-by-step <span className="kc-gold-text">Karwa Chauth Vidhi</span>
            </h2>
          </div>
          <div className="kc-process-grid">
            <div>
              {PROCESS.map((step) => (
                <div key={step.n} className="kc-step">
                  <div className="kc-step-n">{step.n}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="kc-highlight-card">
              <div className="kc-highlight-badge">
                <Flower2 size={18} /> <span>Sacred Suhag Ritual</span>
              </div>
              <p>
                The puja includes traditional karwa offering, vrat katha, and moon arghya guidance to complete the vrat correctly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="kc-section kc-packages">
        <div className="kc-container">
          <div className="kc-section-heading">
            <div className="kc-eyebrow">Packages</div>
            <h2 className="kc-h2">
              Choose your <span className="kc-gold-text">Karwa Chauth Seva</span>
            </h2>
          </div>
          <div className="kc-pack-grid">
            {PACKAGES.map((p) => (
              <div key={p.id} className={`kc-pack ${p.featured ? "featured" : ""}`} onClick={() => setSelectedPkg(p.id)} role="button" tabIndex={0}>
                {p.featured && <div className="kc-chip">Most Chosen</div>}
                <div className="kc-center">
                  <p className="kc-pack-tag">{p.tag}</p>
                  <h3 className="kc-pack-name">{p.name}</h3>
                  <div className="kc-pack-price">
                    <span>Rs</span>
                    <span>{p.price.toLocaleString("en-IN")}</span>
                  </div>
                </div>
                <div className="kc-divider" />
                <ul className="kc-features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check size={16} strokeWidth={2.5} /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button type="button" className={`kc-btn ${p.featured ? "kc-btn-gold" : "kc-btn-maroon"}`} onClick={scrollToBooking}>
                  Choose {p.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="kc-section kc-booking">
        <div className="kc-container">
          <div className="kc-section-heading">
            <div className="kc-eyebrow">Book Now</div>
            <h2 className="kc-h2">
              Reserve your <span className="kc-gold-text">Karwa Chauth Puja</span>
            </h2>
          </div>
          <div className="kc-book-card">
            {done ? (
              <div className="kc-success">
                <div className="kc-check" style={{ margin: "0 auto 10px" }}>
                  <FiCheck size={18} />
                </div>
                <h3>Booking Submitted Successfully</h3>
                <p>Our team will contact you shortly to confirm your package and preferred slot.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="kc-form-grid">
                  <div className="kc-form-group">
                    <label>
                      <FiUser /> Full Name *
                    </label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="kc-form-group">
                    <label>
                      <FiPhone /> Phone *
                    </label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98XXXXXXXX" required />
                  </div>
                  <div className="kc-form-group">
                    <label>
                      <FiMapPin /> Address / City
                    </label>
                    <input name="address" value={form.address} onChange={handleChange} placeholder="City / Town" />
                  </div>
                  <div className="kc-form-group">
                    <label>Gotra (optional)</label>
                    <input name="gotra" value={form.gotra} onChange={handleChange} placeholder="e.g. Kashyap" />
                  </div>
                  <div className="kc-form-group">
                    <label>
                      <FiCalendar /> Puja Date *
                    </label>
                    <input name="date" type="date" min={today} value={form.date} onChange={handleChange} required />
                  </div>
                  <div className="kc-form-group">
                    <label>
                      <FiClock /> Preferred Time *
                    </label>
                    <input name="time" type="time" value={form.time} onChange={handleChange} required />
                  </div>
                  <div className="kc-form-group kc-full">
                    <label>
                      <FiMessageSquare /> Sankalp / Special Message
                    </label>
                    <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Share your prayer intention..." />
                  </div>
                  <div className="kc-form-group kc-full">
                    <label>Selected Package</label>
                    <input value={PACKAGES.find((p) => p.id === selectedPkg)?.name || ""} readOnly />
                  </div>
                </div>
                <button type="submit" className="kc-btn kc-btn-gold" style={{ width: "100%", marginTop: 14 }}>
                  Confirm Booking
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="kc-footer">
        <div className="kc-container">
          <div className="kc-footer-grid">
            <div className="kc-footer-card">
              <div className="kc-footer-badge">
                <ShieldCheck size={30} />
              </div>
              <h3>Verified Pandits</h3>
              <p>Experienced in authentic Karwa Chauth and vrat rituals.</p>
            </div>
            <div className="kc-footer-card">
              <div className="kc-footer-badge">
                <Users size={30} />
              </div>
              <h3>10,000+ Families</h3>
              <p>Trusted across India for sacred and traditional puja services.</p>
            </div>
            <div className="kc-footer-card">
              <div className="kc-footer-badge">
                <Award size={30} />
              </div>
              <h3>100% Vedic</h3>
              <p>Rituals performed as per tradition with complete authenticity.</p>
            </div>
          </div>
          <div className="kc-footer-bottom">
            <p>karwa chauth vrat shubham</p>
            <small>may every couple be blessed with harmony</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KarwaChauthPujaPage;

