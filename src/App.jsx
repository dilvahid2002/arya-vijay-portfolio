import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

/* ------------------------------------------------------------------
   CONTENT — edit everything here. Nothing below needs touching to
   update photos, stats, services or contact details.
------------------------------------------------------------------- */
const PROFILE = {
  name: "Arya Vijay",
  first: "Arya",
  last: "Vijay.",
  role: "Model",
  location: "Kerala, India",
  email: "aryamvnair@gmail.com",
  Phone: "+91 96052 98909",
  instagram: "https://www.instagram.com/aryamvnair?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw==/",
  year: 2026,
};

const navItems = [
  ["About", "about"],
  ["Portfolio", "portfolio"],
  ["Services", "services"],
  ["Comp Card", "profile"],
  ["Process", "process"],
];

/* ADD NEW IMAGES HERE
   Copy one block, give it the next id (highest id shows first), then set
   src, category, title and type. File names with spaces or brackets are fine.
   A filter button appears automatically for every new `type`. */
const photos = [
  { id: 1, src: "/images/saree1.jpg", category: "Traditional", title: "Timeless Elegance", type: "Saree" },
  { id: 2, src: "/images/churidar (1).jpeg", category: "Traditional", title: "Everyday Elegance", type: "Churidar" },
  { id: 3, src: "/images/dhavani1.jpg", category: "Traditional", title: "Classic Heritage", type: "Dhavani" },
  { id: 4, src: "/images/skirt (1).jpeg", category: "Traditional", title: "Cultural Charm", type: "Crop Top & Skirt" },
  { id: 5, src: "/images/saree2.jpg", category: "Traditional", title: "The Grace of Tradition", type: "Saree" },
  { id: 6, src: "/images/churidar (2).jpeg", category: "Traditional", title: "Graceful Lines", type: "Churidar" },
  { id: 7, src: "/images/dhavani2.jpg", category: "Traditional", title: "A Traditional Story", type: "Dhavani" },
  { id: 8, src: "/images/skirt (2).jpeg", category: "Traditional", title: "Tradition Reimagined", type: "Crop Top & Skirt" },
  { id: 9, src: "/images/saree3.jpg", category: "Traditional", title: "Drape & Poise", type: "Saree" },
  { id: 10, src: "/images/churidar (3).jpeg", category: "Traditional", title: "Festive Ease", type: "Churidar" },
  { id: 11, src: "/images/skirt (3).jpeg", category: "Traditional", title: "Playful Heritage", type: "Crop Top & Skirt" },
  { id: 12, src: "/images/saree4.jpg", category: "Traditional", title: "Heritage in Silk", type: "Saree" },
  { id: 13, src: "/images/churidar (4).jpeg", category: "Traditional", title: "Gentle Colour", type: "Churidar" },
  { id: 14, src: "/images/saree5.jpg", category: "Traditional", title: "Quiet Radiance", type: "Saree" },
  { id: 15, src: "/images/churidar (5).jpeg", category: "Traditional", title: "Simple Charm", type: "Churidar" },
  { id: 16, src: "/images/saree6.jpg", category: "Traditional", title: "Festive Glow", type: "Saree" },
  { id: 17, src: "/images/churidar (6).jpeg", category: "Traditional", title: "Poised & Playful", type: "Churidar" },
  { id: 18, src: "/images/saree7.jpg", category: "Traditional", title: "Classic Charm", type: "Saree" },
  { id: 19, src: "/images/churidar (7).jpeg", category: "Traditional", title: "Ethnic Edit", type: "Churidar" },
  { id: 20, src: "/images/saree8.jpg", category: "Traditional", title: "Woven Stories", type: "Saree" },
  { id: 21, src: "/images/saree9.jpg", category: "Traditional", title: "Golden Hour", type: "Saree" },
  { id: 22, src: "/images/saree10.jpg", category: "Traditional", title: "Rooted Beauty", type: "Saree" },
  { id: 23, src: "/images/saree11.jpg", category: "Traditional", title: "Soft Grace", type: "Saree" },
  { id: 24, src: "/images/saree12.jpg", category: "Traditional", title: "Timeless Drape", type: "Saree" },
  { id: 25, src: "/images/saree13.jpg", category: "Traditional", title: "Regal Moments", type: "Saree" },
  { id: 26, src: "/images/saree14.jpg", category: "Traditional", title: "Pure Tradition", type: "Saree" },
  { id: 27, src: "/images/Lahanka (1).jpeg", category: "Lahanka", title: "Yes Bharath", type: "Lahanka" },
  { id: 28, src: "/images/Lahanka (2).jpeg", category: "Lahanka", title: "Yes Bharath", type: "Lahanka" },
  { id: 29, src: "/images/Lahanka (3).jpeg", category: "Lahanka", title: "Yes Bharath", type: "Lahanka" },
  { id: 30, src: "/images/Wed-Saree (1).jpeg", category: "Wedding Saree", title: "Yes Bharath", type: "Wedding Saree" },
  { id: 31, src: "/images/Wed-Saree (2).jpeg", category: "Wedding Saree", title: "Yes Bharath", type: "Wedding Saree" },
  { id: 32, src: "/images/Wed-Saree (3).jpeg", category: "Wedding Saree", title: "Yes Bharath", type: "Wedding Saree" },
];

// Newest (highest id) first. Filter buttons are built from each photo's `type`.
const sortedPhotos = [...photos].sort((a, b) => b.id - a.id);
const categories = ["All", ...Array.from(new Set(sortedPhotos.map((p) => p.type)))];
const PAGE_SIZE = 9;

/* Fill in your real measurements, or delete a row entirely. */
const compCard = [
  ["Height", "—"],
  ["Bust", "—"],
  ["Waist", "—"],
  ["Hips", "—"],
  ["Shoe", "—"],
  ["Hair", "—"],
  ["Eyes", "—"],
  ["Languages", "Malayalam · English"],
];

const stats = [
  ["2026", "Portfolio edition"],
  ["04", "Core specialisations"],
  ["Pan-India", "Open to travel"],
  ["48 hrs", "Typical reply time"],
];

const services = [
  ["01", "Fashion campaigns", "Shoots and promotional campaigns for clothing, jewellery and lifestyle brands."],
  ["02", "Traditional wear", "Sarees, dhavanis, ethnic collections and occasion wear, styled with respect for craft."],
  ["03", "Editorial & creative", "Concept-led shoots exploring mood, narrative and creative direction."],
  ["04", "Modern fashion", "Contemporary looks, lookbooks and e-commerce with a fresh point of view."],
];

const steps = [
  ["Enquiry", "Share your brief, dates, usage and budget by email or the form below."],
  ["Confirmation", "I reply within 48 hours with availability, rates and any questions."],
  ["Preparation", "We align on moodboards, wardrobe, hair and makeup, and call times."],
  ["Shoot day", "On time, prepared and easy to direct — then final selects delivered promptly."],
];

const marquee = ["Fashion", "Editorial", "Traditional", "Lookbooks", "Campaigns", "Lifestyle"];

/* ------------------------------------------------------------------ */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [activeSection, setActiveSection] = useState("home");
  const [form, setForm] = useState({ name: "", email: "", Phone: "", company: "", type: "Fashion campaign", message: "" });
  const touchX = useRef(null);

  useReveal();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...navItems.map(([, id]) => id), "contact"];
    const targets = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  const filteredPhotos = useMemo(
    () => (activeCategory === "All" ? sortedPhotos : sortedPhotos.filter((p) => p.type === activeCategory)),
    [activeCategory]
  );

  const selectedIndex = selectedPhoto ? filteredPhotos.findIndex((p) => p.id === selectedPhoto.id) : -1;

  const changePhoto = (direction) => {
    if (!filteredPhotos.length) return;
    const index = filteredPhotos.findIndex((p) => p.id === selectedPhoto?.id);
    const next = (index + direction + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[next]);
  };

  useEffect(() => {
    if (!selectedPhoto) return;
    const onKey = (event) => {
      if (event.key === "Escape") setSelectedPhoto(null);
      if (event.key === "ArrowRight") changePhoto(1);
      if (event.key === "ArrowLeft") changePhoto(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPhoto, filteredPhotos]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) changePhoto(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submitForm = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.type} enquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.Phone || "—"}\nBrand / company: ${form.company || "—"}\nProject type: ${form.type}\n\n${form.message}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="site-shell">
      <div className="progress-bar" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
      <a className="skip-link" href="#portfolio">Skip to portfolio</a>

      {/* ---------- HEADER ---------- */}
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-is-open" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label={`${PROFILE.name} home`}>
          <span className="brand-mark">AV</span>
          <span className="brand-name">
            ARYA VIJAY<small>MODEL · KERALA, INDIA</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "CLOSE" : "MENU"}
          <span>{menuOpen ? "−" : "+"}</span>
        </button>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Primary">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu} className={activeSection === id ? "is-active" : ""}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Book me <span>↗</span>
          </a>
        </nav>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="hero" id="home">
        <div className="hero-photo">
          <img src="/images/hero.jpg" alt={`${PROFILE.name} fashion portrait`} />
        </div>
        <div className="hero-shade" />
        <div className="hero-topline">
          <span>PORTFOLIO / {PROFILE.year}</span>
          <span>FASHION · EDITORIAL · TRADITION</span>
        </div>
        <div className="hero-copy">
          <p className="kicker light-kicker"><i /> THE MODEL PORTFOLIO</p>
          <h1>
            {PROFILE.first}
            <br />
            <em>{PROFILE.last}</em>
          </h1>
          <p className="hero-intro">
            Rooted in tradition. Expressed through fashion.
            <br />
            Available for campaigns, editorials and brand collaborations.
          </p>
          <div className="hero-actions">
            <a className="btn btn-light" href="#portfolio">View portfolio <span>↘</span></a>
            <a className="btn btn-ghost" href="#contact">Enquire now <span>↗</span></a>
          </div>
        </div>
        <div className="hero-bottom">
          <span>BASED IN {PROFILE.location.toUpperCase()}</span>
          <span className="scroll-cue"><i /> SCROLL</span>
          <span className="status"><i /> AVAILABLE FOR SELECT BOOKINGS</span>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}<em>✦</em></span>
          ))}
        </div>
      </div>

      {/* ---------- STATS ---------- */}
      <section className="stats-strip section-wrap" data-reveal>
        {stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <b>{value}</b>
            <span>{label}</span>
          </div>
        ))}
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="about-section section-wrap" id="about">
        <div className="section-index" data-reveal><span>01</span><i /> ABOUT</div>
        <div className="about-layout">
          <div className="about-media" data-reveal>
            <img src="/images/about.jpg" alt={`${PROFILE.name} portrait`} loading="lazy" />
            <span className="about-tag">{PROFILE.name.toUpperCase()} — {PROFILE.year}</span>
          </div>
          <div className="about-body" data-reveal>
            <p className="kicker">INTRODUCTION</p>
            <h2>
              Not just a look.
              <br />
              <em>A point of view.</em>
            </h2>
            <p className="about-lead">
              I'm {PROFILE.name} — a model with a love for fashion, expression and visual storytelling.
            </p>
            <p>
              Rooted in the elegance of Indian tradition and inspired by contemporary fashion, I bring
              confidence, character and individuality to every frame.
            </p>
            <p>
              From the timeless beauty of sarees and traditional attire to modern fashion, every shoot
              is an opportunity to create something memorable — and to make the creative team's vision
              feel effortless.
            </p>
            <ul className="about-points">
              <li>Comfortable on set, directed or self-led</li>
              <li>Experienced in traditional styling and draping</li>
              <li>Punctual, prepared and collaborative</li>
            </ul>
            <a className="text-link" href="#contact">LET'S CREATE TOGETHER <span>↗</span></a>
          </div>
        </div>
      </section>

      {/* ---------- MANIFESTO ---------- */}
      <section className="manifesto">
        <img src="/images/feature.jpg" alt="Fashion editorial portrait" loading="lazy" />
        <div className="manifesto-overlay" />
        <div className="manifesto-content" data-reveal>
          <p className="kicker light-kicker">MY CREATIVE POINT OF VIEW</p>
          <h2>
            Tradition is my <em>foundation.</em>
            <br />
            Fashion is my <em>expression.</em>
          </h2>
          <span className="manifesto-rule" />
          <p>BEAUTY IN EVERY FORM. CONFIDENCE IN EVERY FRAME.</p>
        </div>
        <span className="manifesto-side">{PROFILE.name.toUpperCase()} — SELECTED VISUAL STORIES</span>
      </section>

      {/* ---------- PORTFOLIO ---------- */}
      <section className="portfolio-section section-wrap" id="portfolio">
        <div className="section-index" data-reveal><span>02</span><i /> SELECTED WORK</div>
        <div className="portfolio-heading" data-reveal>
          <div>
            <p className="kicker">PORTFOLIO</p>
            <h2>
              Frames of
              <br />
              <em>character.</em>
            </h2>
          </div>
          <p className="portfolio-note">
            A curated selection across traditional, editorial and contemporary fashion work.
          </p>
        </div>

        <div className="gallery-toolbar">
          <div className="filter-list" role="group" aria-label="Filter portfolio">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "filter-chip active" : "filter-chip"}
                onClick={() => { setActiveCategory(category); setVisible(PAGE_SIZE); }}
                aria-pressed={activeCategory === category}
              >
                {category}
                <span>
                  {category === "All" ? photos.length : photos.filter((p) => p.type === category).length}
                </span>
              </button>
            ))}
          </div>
          <span className="gallery-count">{String(filteredPhotos.length).padStart(2, "0")} IMAGES</span>
        </div>

        {/* key={activeCategory} rebuilds the grid on every filter change,
            so no card keeps showing an old image */}
        <div className="masonry" key={activeCategory}>
          {filteredPhotos.slice(0, visible).map((photo, index) => (
            <button
              className={`work-card ratio-${photo.ratio || "auto"}`}
              key={`${activeCategory}-${photo.id}`}
              onClick={() => setSelectedPhoto(photo)}
              aria-label={`View ${photo.title}`}
              style={{ "--i": index }}
            >
              <span className="work-image">
                <img src={encodeURI(photo.src)} alt={photo.title} loading="lazy" />
                <span className="work-hover">
                  <span>{photo.type}</span>
                  <b>{photo.title}</b>
                  <em>VIEW ↗</em>
                </span>
              </span>
              <span className="work-meta">
                <span>
                  <b>{photo.title}</b>
                  <small>{photo.type}</small>
                </span>
                <i>{String(photo.id).padStart(2, "0")}</i>
              </span>
            </button>
          ))}
        </div>
        {visible < filteredPhotos.length && (
          <div className="load-more">
            <button className="btn btn-outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              Load more <span>↓</span>
              <small>{Math.min(visible, filteredPhotos.length)} / {filteredPhotos.length}</small>
            </button>
          </div>
        )}
        <p className="gallery-endnote">A CONTINUING STUDY OF STYLE, IDENTITY & EXPRESSION</p>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="experience-section section-wrap" id="services">
        <div className="section-index" data-reveal><span>03</span><i /> SERVICES</div>
        <div className="experience-top" data-reveal>
          <div>
            <p className="kicker">WHAT I DO</p>
            <h2>
              Bringing ideas
              <br />
              into <em>focus.</em>
            </h2>
          </div>
          <p>
            Every collaboration is a chance to bring a creative vision to life through style,
            personality and presence.
          </p>
        </div>
        <div className="experience-layout">
          <div className="experience-photo" data-reveal>
            <img src="/images/experience.jpg" alt="Fashion modelling collaboration" loading="lazy" />
            <span>THE CREATIVE PROCESS / {PROFILE.year}</span>
          </div>
          <div className="service-list">
            {services.map(([n, t, d]) => (
              <article className="service-row" key={n} data-reveal>
                <span>{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
                <b>↗</b>
              </article>
            ))}
          </div>
        </div>
        <div className="collab-line" data-reveal>
          <span>AVAILABLE FOR</span>
          <b>FASHION BRANDS</b>
          <b>DESIGNERS</b>
          <b>PHOTOGRAPHERS</b>
          <b>CREATIVE TEAMS</b>
        </div>
      </section>

      {/* ---------- COMP CARD ---------- */}
      <section className="profile-section section-wrap" id="profile">
        <div className="section-index" data-reveal><span>04</span><i /> COMP CARD</div>
        <div className="profile-layout">
          <div className="profile-intro" data-reveal>
            <p className="kicker">PROFILE</p>
            <h2>
              The <em>details.</em>
            </h2>
            <p>
              Measurements and essentials for casting teams and stylists. A full digital comp card and
              rate sheet are available on request.
            </p>
            <a className="text-link" href={`mailto:${PROFILE.email}?subject=Comp%20card%20request`}>
              REQUEST COMP CARD <span>↗</span>
            </a>
          </div>
          <dl className="comp-grid" data-reveal>
            {compCard.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="process-section section-wrap" id="process">
        <div className="section-index" data-reveal><span>05</span><i /> WORKING TOGETHER</div>
        <div className="process-heading" data-reveal>
          <p className="kicker">HOW BOOKINGS WORK</p>
          <h2>
            A simple, <em>professional</em> process.
          </h2>
        </div>
        <ol className="process-grid">
          {steps.map(([t, d], i) => (
            <li key={t} data-reveal style={{ "--i": i }}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section className="contact-section" id="contact">
        <img src="/images/contact.jpg" alt={`${PROFILE.name} portrait`} loading="lazy" />
        <div className="contact-shade" />
        <div className="contact-wrap">
          <div className="contact-content" data-reveal>
            <div className="section-index light-index"><span>06</span><i /> GET IN TOUCH</div>
            <p className="kicker light-kicker">HAVE A PROJECT IN MIND?</p>
            <h2>
              Let's make
              <br />
              <em>something</em>
              <br />
              memorable.
            </h2>
            <p className="contact-description">
              For fashion campaigns, brand collaborations, photoshoots and creative projects.
            </p>
            <ul className="contact-details">
              <li><span>EMAIL</span><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
              <li><span>PHONE</span><a href={`tel:${PROFILE.Phone.replace(/\s/g, "")}`}>{PROFILE.Phone}</a></li>
              <li><span>BASE</span>{PROFILE.location}</li>
              <li><span>REPLY</span>Within 48 hours</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={submitForm} data-reveal>
            <h3>Booking enquiry</h3>
            <label>
              <span>Your name</span>
              <input required value={form.name} onChange={setField("name")} autoComplete="name" />
            </label>
            <label>
              <span>Email</span>
              <input required type="email" value={form.email} onChange={setField("email")} autoComplete="email" />
            </label>
            <label>
              <span>Phone (optional)</span>
              <input type="tel" value={form.Phone} onChange={setField("Phone")} autoComplete="tel" />
            </label>
            <label>
              <span>Brand / company (optional)</span>
              <input value={form.company} onChange={setField("company")} autoComplete="organization" />
            </label>
            <label>
              <span>Project type</span>
              <select value={form.type} onChange={setField("type")}>
                <option>Fashion campaign</option>
                <option>Traditional wear</option>
                <option>Editorial</option>
                <option>Lookbook / e-commerce</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              <span>Project details — dates, location, usage</span>
              <textarea required rows={4} value={form.message} onChange={setField("message")} />
            </label>
            <button className="btn btn-solid" type="submit">Send enquiry <span>↗</span></button>
            <small>Opens your email app with the details pre-filled.</small>
          </form>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="site-footer">
        <a className="footer-brand" href="#home">ARYA <em>VIJAY</em></a>
        <p>Presence. Personality. Perspective.</p>
        <div className="footer-links">
          <a href={PROFILE.instagram} target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
          <a href={`mailto:${PROFILE.email}`}>EMAIL ↗</a>
          <a href={`tel:${PROFILE.Phone.replace(/\s/g, "")}`}>CALL ↗</a>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {PROFILE.name.toUpperCase()}. ALL RIGHTS RESERVED.</span>
          <span>{PROFILE.location.toUpperCase()}</span>
          <span>ALL IMAGES © THEIR RESPECTIVE PHOTOGRAPHERS</span>
        </div>
      </footer>

      {/* ---------- LIGHTBOX ---------- */}
      {selectedPhoto && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image viewer"
          onClick={() => setSelectedPhoto(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="lightbox-top">
            <span>{String(selectedIndex + 1).padStart(2, "0")} / {String(filteredPhotos.length).padStart(2, "0")}</span>
            <button className="lightbox-close" onClick={() => setSelectedPhoto(null)} aria-label="Close image">×</button>
          </div>
          <button
            className="lightbox-arrow prev"
            onClick={(e) => { e.stopPropagation(); changePhoto(-1); }}
            aria-label="Previous image"
          >←</button>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={encodeURI(selectedPhoto.src)} alt={selectedPhoto.title} />
            <div className="lightbox-caption">
              <span>{selectedPhoto.type}</span>
              <b>{selectedPhoto.title}</b>
            </div>
          </div>
          <button
            className="lightbox-arrow next"
            onClick={(e) => { e.stopPropagation(); changePhoto(1); }}
            aria-label="Next image"
          >→</button>
        </div>
      )}
    </main>
  );
}

export default App;