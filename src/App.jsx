
import React, { useState, useEffect } from "react";
import "./App.css";

const photos = [
  {
    id: 1,
    src: "/images/saree1.jpg",
    category: "Saree",
    title: "Timeless Elegance",
    type: "Saree",
  },
  {
    id: 2,
    src: "/images/saree2.jpg",
    category: "Saree",
    title: "The Grace of Tradition",
    type: "Saree",
  },
  {
    id: 3,
    src: "/images/dhavani1.jpg",
    category: "Dhavani",
    title: "Classic Heritage",
    type: "Dhavani",
  },
  {
    id: 4,
    src: "/images/dhavani2.jpg",
    category: "Dhavani",
    title: "A Traditional Story",
    type: "Dhavani",
  },
  {
    id: 5,
    src: "/images/saree3.jpg",
    category: "Saree",
    title: "Timeless Elegance",
    type: "Saree",
  },
  {
    id: 6,
    src: "/images/saree4.jpg",
    category: "Saree",
    title: "Timeless Elegance",
    type: "Saree",
  },
  {
    id: 7,
    src: "/images/saree5.jpg",
    category: "Saree",
    title: "Timeless Elegance",
    type: "Saree",
  },
  {
    id: 8,
    src: "/images/saree6.jpg",
    category: "Saree",
    title: "Timeless Elegance",
    type: "Saree",
  },
  {
    id: 9,
    src: "/images/saree7.jpg",
    category: "Saree",
    title: "Timeless Elegance",
    type: "Saree",
  },
  {
    id: 10,
    src: "/images/saree8.jpg",
    category: "Saree",
    title: "Timeless Elegance",
    type: "Saree",
  },
  {
    id: 11,
    src: "/images/saree9.jpg",
    category: "Saree",
    title: "Timeless Elegance",
    type: "Saree",
  },
  {
    id: 12,
    src: "/images/saree10.jpg",
    category: "Saree",
    title: "Timeless Elegance",
    type: "Saree",
  },
  {
    id: 13,
    src: "/images/saree11.jpg",
    category: "Saree",
    title: "Timeless Elegance",
    type: "Saree",
  },
  {
    id: 14,
    src: "/images/saree12.jpg",
    category: "Saree",
    title: "Timeless Elegance",
    type: "Saree",
  },
  {
    id: 15,
    src: "/images/saree13.jpg",
    category: "Saree",
    title: "Timeless Elegance",
    type: "Saree",
  },
  {
  id: 16,
  src: "/images/churidar (1).jpeg",
  category: "churidar",
  title: "Timeless Elegance",
  type: "churidar",
},
{
  id: 17,
  src: "/images/churidar (2).jpeg",
  category: "churidar",
  title: "Timeless Elegance",
  type: "churidar",
},
{
  id: 18,
  src: "/images/churidar (3).jpeg",
  category: "churidar",
  title: "Timeless Elegance",
  type: "churidar",
},
{
  id: 19,
  src: "/images/churidar (4).jpeg",
  category: "churidar",
  title: "Timeless Elegance",
  type: "churidar",
},
{
  id: 20,
  src: "/images/churidar (5).jpeg",
  category: "churidar",
  title: "Timeless Elegance",
  type: "churidar",
},
{
  id: 21,
  src: "/images/churidar (6).jpeg",
  category: "churidar",
  title: "Timeless Elegance",
  type: "churidar",
},
{
  id: 22,
  src: "/images/churidar (7).jpeg",
  category: "churidar",
  title: "Timeless Elegance",
  type: "churidar",
},
{
  id: 23,
  src: "/images/skirt (1).jpeg",
  category: "churidar",
  title: "Timeless Elegance",
  type: "skirt",
},
{
  id: 24,
  src: "/images/skirt (2).jpeg",
  category: "skirt",
  title: "Timeless Elegance",
  type: "skirt",
},
{
  id: 25,
  src: "/images/skirt (3).jpeg",
  category: "skirt",
  title: "Timeless Elegance",
  type: "skirt",
},
];

const categories = ["All", "Saree", "Dhavani","churidar","skirt","Modern",];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedPhoto ? "hidden" : "auto";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedPhoto(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">

      {/* NAVIGATION */}

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a href="#home" className="logo" onClick={closeMenu}>
          ARYA <span>VIJAY</span>
          <small>MODEL & CREATIVE</small>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links nav-active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Let's Connect ↗
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}

      <section className="hero" id="home">
        <div className="hero-image">
          <img
            src="/images/hero.jpg"
            alt="Arya Vijay - Professional Model"
          />
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          

          

          

          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-light">
              Explore Portfolio <span>↗</span>
            </a>

            <a href="#about" className="hero-text-link">
              Discover My Story ↓
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>KERALA, INDIA</span>
          <span>SCROLL TO EXPLORE ↓</span>
          <span>01 — 04</span>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="intro section-padding" id="about">
        <div className="intro-label">
          <span className="section-number">01 / ABOUT</span>
          <span className="gold-line"></span>
        </div>

        <div className="intro-content">
          <div className="intro-heading">
            <p className="eyebrow">BEHIND THE LENS</p>

            <h2>
              Not just a look.
              <br />
              <em>A presence.</em>
            </h2>
          </div>

          <div className="intro-description">
            <p className="intro-lead">
              Hello, I'm Arya Vijay.
            </p>

            <p>
              A professional model with a passion for fashion,
              creativity, and storytelling through the art of
              expression.
            </p>

            <p>
              Rooted in the elegance of Indian traditions and
              inspired by the evolving world of contemporary
              fashion, I love bringing every outfit to life
              with confidence, character, and individuality.
            </p>

            <p>
              From the timeless beauty of sarees and traditional
              attire to exploring modern fashion, every
              photoshoot is an opportunity to create something
              meaningful.
            </p>

            <a href="#contact" className="underlined-link">
              Work With Me <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED BANNER */}

      <section className="statement">
        <div className="statement-image">
          <img
            src="/images/feature.jpg"
            alt="Arya Vijay fashion editorial"
          />
        </div>

        <div className="statement-overlay"></div>

        <div className="statement-content">
          <p className="eyebrow light-eyebrow">MY PHILOSOPHY</p>
          <h2>
            Tradition is my
            <br />
            <em>foundation.</em>
            <br />
            Fashion is my
            <br />
            expression.
          </h2>
          <span className="statement-line"></span>
          <p>BEAUTY IN EVERY FORM. CONFIDENCE IN EVERY FRAME.</p>
        </div>
      </section>

      {/* PORTFOLIO GALLERY */}

      <section className="portfolio-section section-padding" id="portfolio">
        <div className="section-heading">
          <div>
            <span className="section-number">02 / SELECTED WORK</span>
            <p className="eyebrow">THE ART OF EXPRESSION</p>
            <h2>
              My <em>Portfolio</em>
            </h2>
          </div>

          <p className="heading-description">
            A collection of moments, moods, and styles.
            Each frame tells a different story.
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-btn active-filter"
                  : "filter-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredPhotos.map((photo, index) => (
            <div
              className={`gallery-item gallery-item-${index % 3}`}
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="gallery-image">
                <img src={photo.src} alt={photo.title} loading="lazy" />

                <div className="gallery-hover">
                  <span className="gallery-view">VIEW IMAGE ↗</span>
                </div>
              </div>

              <div className="gallery-caption">
                <div>
                  <h3>{photo.title}</h3>
                  <span>{photo.type}</span>
                </div>
                <span className="gallery-number">
                  0{photo.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="gallery-note">
          A visual journey through tradition and contemporary style.
        </p>
      </section>

      {/* EXPERIENCE */}

      <section className="experience section-padding" id="experience">
        <div className="experience-header">
          <span className="section-number">03 / EXPERIENCE</span>
          <p className="eyebrow">COLLABORATIONS & CREATIVITY</p>

          <h2>
            Creating stories
            <br />
            with <em>brands.</em>
          </h2>

          <p className="experience-description">
            Every collaboration is a chance to bring a brand's
            vision to life through style, personality, and
            creative expression.
          </p>
        </div>

        <div className="experience-content">
          <div className="experience-image">
            <img
              src="/images/experience.jpg"
              alt="Fashion modelling collaboration"
              loading="lazy"
            />
          </div>

          <div className="experience-details">
            <div className="experience-item">
              <span>01</span>
              <div>
                <h3>Fashion Campaigns</h3>
                <p>
                  Fashion shoots and promotional campaigns
                  for clothing and lifestyle brands.
                </p>
              </div>
            </div>

            <div className="experience-item">
              <span>02</span>
              <div>
                <h3>Traditional Wear</h3>
                <p>
                  Showcasing the beauty of sarees, dhavanis,
                  ethnic collections, and occasion wear.
                </p>
              </div>
            </div>

            <div className="experience-item">
              <span>03</span>
              <div>
                <h3>Editorial & Creative Shoots</h3>
                <p>
                  Expressive photoshoots exploring different
                  concepts, styles, and creative directions.
                </p>
              </div>
            </div>

            <div className="experience-item">
              <span>04</span>
              <div>
                <h3>Modern Fashion</h3>
                <p>
                  Exploring contemporary outfits, fresh
                  aesthetics, and new fashion identities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="collaboration-strip">
          <span>OPEN TO COLLABORATIONS</span>
          <span>FASHION BRANDS</span>
          <span>DESIGNERS</span>
          <span>PHOTOGRAPHERS</span>
          <span>CREATIVE TEAMS</span>
        </div>
      </section>

      {/* CONTACT */}

      <section className="contact-section" id="contact">
        <div className="contact-image">
          <img
            src="/images/contact.jpg"
            alt="Arya Vijay"
            loading="lazy"
          />
        </div>

        <div className="contact-overlay"></div>

        <div className="contact-content">
          <span className="section-number light-number">
            04 / GET IN TOUCH
          </span>

          <p className="eyebrow light-eyebrow">
            LET'S CREATE SOMETHING BEAUTIFUL
          </p>

          <h2>
            Have a vision?
            <br />
            <em>Let's bring it to life.</em>
          </h2>

          <p>
            For fashion campaigns, brand collaborations,
            photoshoots, and creative projects.
          </p>

          <a
            href="mailto:aryavijay@example.com?subject=Collaboration%20Enquiry"
            className="btn btn-light contact-btn"
          >
            Start a Conversation <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-top">
          <a href="#home" className="footer-logo">
            ARYA <span>VIJAY</span>
          </a>

          <p>
            An expression of elegance, individuality,
            and timeless fashion.
          </p>

          <div className="social-links">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a href="mailto:aryavijay@example.com">
              Email ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ARYA VIJAY. ALL RIGHTS RESERVED.</span>
          <a href="#home">BACK TO TOP ↑</a>
          <span>DESIGNED WITH ELEGANCE.</span>
        </div>
      </footer>

      {/* IMAGE LIGHTBOX */}

      {selectedPhoto && (
        <div
          className="lightbox"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close image"
          >
            ✕
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedPhoto.src} alt={selectedPhoto.title} />

            <div className="lightbox-caption">
              <span>{selectedPhoto.type}</span>
              <h3>{selectedPhoto.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
