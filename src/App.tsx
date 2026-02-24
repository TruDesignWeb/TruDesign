import { useState, useEffect, useRef } from "react";
import './App.css';

export default function TrudesignHome() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);

    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll);

    // LiveAgent chat button
    if (!document.getElementById('la_x2s6df8d')) {
      const s = document.createElement('script');
      s.id = 'la_x2s6df8d';
      s.defer = true;
      s.src = 'https://trudesign.ladesk.com/scripts/track.js';
      s.onload = () => { (window as any).LiveAgent?.createButton('t7pnlaks', s); };
      document.body.appendChild(s);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    { id: "01", name: "Own Aesthetics", tag: "UI System / Clean Web App", year: "2025", link: "https://ownaesthetics.com" },
    { id: "02", name: "Total Health", tag: "Brand / UI + Backend UX", year: "2025", link: "https://totalhealthrepo.vercel.app" },
    { id: "03", name: "The Move", tag: "React App / Social Connection", year: "2025" },
    { id: "04", name: "CyAI", tag: "Dashboard / UX", year: "2026", link: "https://github.com/Truman-Folkers/ISUAIProject" },
  ];

  const services = [
    { num: "01", title: "IT Consulting", desc: "Streamlining your daily processes for maximum efficiency and productivity." },
    { num: "02", title: "Web Design", desc: "Pixel-perfect interfaces engineered for engagement, conversion, and pure aesthetic delight." },
    { num: "03", title: "App Design", desc: "Micro-interactions and transitions that make apps feel alive and responsive." },
    { num: "04", title: "Digital Strategy", desc: "Research-backed positioning to ensure your brand occupies the right space in the market." },
  ];



  return (
    <div className="app">
      

      {/* Cursor */}
      <div className="cursor" style={{ left: mousePos.x, top: mousePos.y }} />
      <div className="cursor-ring" style={{ left: mousePos.x, top: mousePos.y }} />

      {/* Noise */}
      <div className="noise" />

      {/* Nav */}
      <nav className={`nav ${scrollY > 40 ? "scrolled" : ""}`}>
        <a href="#" className="nav-logo">Trude<span>.</span>sign</a>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <button className="nav-cta">Start a project</button>
      </nav>

      {/* Hero */}
      <div className="container">
      <section className={`hero ${loaded ? "loaded" : ""}`} ref={heroRef}>
        <div className="hero-grid" />
        <div className="hero-orb orb1" style={{ transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)` }} />
        <div className="hero-orb orb2" />
        <div className="scroll-line" />

        <div className="hero-eyebrow">— Digital Design Studio — Est. 2025</div>

        <h1 className="hero-headline">
          We build<br />
          <span className="outline">Hi Charlotte!</span>{" "}
          <span className="accent">spaces</span><br />
          that convert.
        </h1>

        <div className="hero-bottom">
          <p className="hero-desc">
            Trudesign crafts high-performance digital products — from brand identity to interactive web experiences — for ambitious companies worldwide.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">4yr</div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">98%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: "flex" }}>
              {["Brand Identity", "Web Design", "Motion Design", "UX Strategy", "Visual Systems", "Digital Products", "Creative Direction", "Interaction Design"].map((item) => (
                <div className="marquee-item" key={item}>
                  {item} <span className="marquee-dot" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Work */}
      <section className="work-section" id="work">
        <div className="section-label">Selected Work</div>
        <div className="work-header">
          <h2 className="section-title">Recent<br />Projects</h2>
          <a href="#" className="view-all">View all work →</a>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <a href ={`${p.link}`} className="service-link">
            <div className="project-card" key={p.id}>
              <div className={`project-visual pv${i + 1}`}>
                <div className="project-visual-inner">
                  {/* Decorative shapes */}
                  <div className="pv-shape" style={{ width: 120, height: 80, top: 40, left: 60, transform: "rotate(-12deg)" }} />
                  <div className="pv-shape" style={{ width: 60, height: 60, borderRadius: "50%", top: 60, right: 80 }} />
                  <div className="pv-shape" style={{ width: 200, height: 1, top: "50%", left: 0, right: 0 }} />
                </div>
              </div>
              <div className="project-id">{p.id} / {p.year}</div>
              <div className="project-name">{p.name}</div>
              <div className="project-tag">{p.tag}</div>
              <div className="project-arrow">↗</div>
            </div>
            </a>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="services-section" id="services">
        <div className="section-label">What we do</div>
        <h2 className="section-title" style={{ marginBottom: 80 }}>Services</h2>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-item" key={s.num}>
              <div className="service-num">{s.num}</div>
              <div className="service-title">{s.title}</div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-line" />
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <div className="about-strip" id="about">
        <div>
          <div className="section-label" style={{ marginBottom: 40 }}>About Trudesign</div>
          <h2 className="about-title">
            Design that<br />
            <em>moves</em><br />
            people forward.
          </h2>
        </div>
        <div className="about-right">
          <p className="about-body">
            We are a digital design studio focused on crafting high-performance products and apps. With a blend of creativity, strategy, and technical expertise, we help businesses connect with their audiences through compelling digital experiences.
          </p>
          <div className="about-tags">
            {["Figma", "React", "Next.js", "Framer", "Three.js", "GSAP", "Webflow", "Branding"].map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg" />
        <h2 className="cta-title">
          <span className="dim">Ready to</span><br />
          build something<br />
          <span className="dim">extraordinary?</span>
        </h2>
        <a href = "mailto:trudesignweb@gmail.com">
        <button className="cta-btn">
          Let's talk <span className="cta-btn-arrow">→</span>
        </button>
        </a>
      </section>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-logo">Trude<span>.</span>sign</div>
        <div className="footer-copy">© 2025 Trudesign. All rights reserved.</div>
        <div className="footer-links">
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Dribbble</a>
        </div>
      </footer>
    </div>
  );
}