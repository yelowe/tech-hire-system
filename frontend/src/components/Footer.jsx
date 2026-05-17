const footerLinks = {
  "Produk": ["Fitur AI", "Harga", "Changelog", "Roadmap"],
  "Perusahaan": ["Tentang Kami", "Tim", "Blog", "Karir"],
  "Dukungan": ["Dokumentasi", "FAQ", "Status", "Kontak"],
  "Legal": ["Kebijakan Privasi", "Syarat & Ketentuan", "Lisensi"],
};

const Footer = ({ setActivePage }) => (
  <footer style={{
    borderTop: "1px solid var(--border-light)",
    background: "var(--bg-secondary)",
    padding: "60px 24px 32px",
  }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      {/* Top */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
        gap: 48,
        marginBottom: 56,
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
            }}>🧠</div>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800 }}>
              Tech<span style={{ color: "#6366f1" }}>Hire</span>
            </span>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
            Platform rekrutmen berbasis AI untuk menemukan talenta tech terbaik dengan lebih cepat, akurat, dan objektif.
          </p>
          {/* Social */}
          <div style={{ display: "flex", gap: 10 }}>
            {["🐦", "💼", "📘", "🐙"].map((icon, i) => (
              <div key={i} style={{
                width: 36, height: 36, borderRadius: 8,
                background: "var(--bg-glass-light)",
                border: "1px solid var(--border-light)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, cursor: "pointer",
                transition: "var(--transition)",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.15)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--bg-glass-light)"; e.currentTarget.style.borderColor = "var(--border-light)"; }}
              >{icon}</div>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: "var(--text-muted)", marginBottom: 16 }}>
              {title}
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {links.map(link => (
                <li key={link}>
                  <a href="#" style={{
                    fontSize: 14, color: "var(--text-secondary)", textDecoration: "none",
                    transition: "var(--transition)",
                  }}
                    onMouseEnter={e => { e.target.style.color = "var(--text-primary)"; e.target.style.paddingLeft = "4px"; }}
                    onMouseLeave={e => { e.target.style.color = "var(--text-secondary)"; e.target.style.paddingLeft = "0"; }}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div style={{
        paddingTop: 28,
        borderTop: "1px solid var(--border-light)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}>
        <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
          © 2025 TechHire Intelligence System. Dibuat dengan ❤️ untuk masa depan rekrutmen.
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <span className="badge badge-primary" style={{ fontSize: 11 }}>⚡ Powered by AI</span>
          <span className="badge badge-success" style={{ fontSize: 11 }}>✓ v1.0.0</span>
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        .footer-grid { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 600px) {
        .footer-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </footer>
);

export default Footer;
