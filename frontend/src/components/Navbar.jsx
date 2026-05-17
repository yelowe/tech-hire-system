import { useState, useEffect } from "react";

const Navbar = ({ activePage, setActivePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Beranda" },
    { id: "features", label: "Fitur" },
    { id: "dashboard", label: "Dashboard" },
    { id: "candidates", label: "Kandidat" },
    { id: "about", label: "Tentang" },
  ];

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: "0 24px",
      transition: "all 0.3s ease",
      background: scrolled ? "rgba(5, 8, 20, 0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(99,102,241,0.15)" : "none",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 72,
      }}>
        {/* Logo */}
        <button
          onClick={() => setActivePage("home")}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}
        >
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
          }}>🧠</div>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            fontWeight: 800,
            color: "var(--text-primary)",
          }}>
            Tech<span style={{ color: "#6366f1" }}>Hire</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="desktop-nav">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              style={{
                background: activePage === link.id ? "rgba(99,102,241,0.15)" : "none",
                border: activePage === link.id ? "1px solid rgba(99,102,241,0.3)" : "1px solid transparent",
                borderRadius: "var(--radius-full)",
                padding: "8px 18px",
                color: activePage === link.id ? "#a5b4fc" : "var(--text-secondary)",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                transition: "var(--transition)",
                fontFamily: "var(--font-sans)",
              }}
              onMouseEnter={e => {
                if (activePage !== link.id) {
                  e.target.style.color = "var(--text-primary)";
                  e.target.style.background = "rgba(255,255,255,0.05)";
                }
              }}
              onMouseLeave={e => {
                if (activePage !== link.id) {
                  e.target.style.color = "var(--text-secondary)";
                  e.target.style.background = "none";
                }
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={() => setActivePage("dashboard")}
            className="btn-primary"
            style={{ padding: "10px 22px", fontSize: 14 }}
          >
            Mulai Gratis →
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
