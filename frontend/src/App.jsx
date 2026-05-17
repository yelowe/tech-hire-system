import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import FeaturesPage from "./components/FeaturesPage";
import DashboardPage from "./components/DashboardPage";
import CVUploadPage from "./components/CVUploadPage";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";

const PageWrapper = ({ children }) => (
  <div style={{ animation: "fadeInUp 0.4s ease-out" }}>
    {children}
  </div>
);

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <PageWrapper>
            <HeroPage setActivePage={setActivePage} />
            {/* Mini features teaser on home */}
            <div style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 24px 80px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
            }}>
              {[
                { icon: "🤖", title: "Analisis CV Otomatis", desc: "Ekstrak informasi CV dalam hitungan detik", color: "#6366f1" },
                { icon: "🎯", title: "Smart Matching", desc: "Skor kecocokan berbasis 50+ parameter", color: "#8b5cf6" },
                { icon: "📊", title: "Analytics Real-time", desc: "Pantau pipeline rekrutmen secara langsung", color: "#06b6d4" },
                { icon: "💡", title: "Rekomendasi AI", desc: "Top kandidat dipilih otomatis oleh AI", color: "#10b981" },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActivePage(i === 2 ? "dashboard" : i === 0 ? "candidates" : "features")}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-light)",
                    borderRadius: "var(--radius-lg)",
                    padding: "24px 28px",
                    cursor: "pointer",
                    transition: "var(--transition)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = `${item.color}50`;
                    e.currentTarget.style.boxShadow = `0 8px 30px ${item.color}20`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "var(--border-light)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${item.color}20`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div style={{
              maxWidth: 1200,
              margin: "0 auto 80px",
              padding: "0 24px",
            }}>
              <div style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.15) 50%, rgba(6,182,212,0.15) 100%)",
                border: "1px solid rgba(99,102,241,0.25)",
                borderRadius: "var(--radius-xl)",
                padding: "56px 60px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }} />
                <div style={{ position: "relative" }}>
                  <h2 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(26px, 3vw, 40px)",
                    fontWeight: 800,
                    marginBottom: 16,
                  }}>
                    Siap Merevolusi Proses Rekrutmen Anda?
                  </h2>
                  <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>
                    Bergabung dengan ratusan perusahaan yang sudah menggunakan AI untuk menemukan talenta terbaik mereka.
                  </p>
                  <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                    <button className="btn-primary" onClick={() => setActivePage("candidates")}
                      style={{ fontSize: 16, padding: "14px 36px" }}>
                      🧠 Upload CV Pertama
                    </button>
                    <button className="btn-secondary" onClick={() => setActivePage("dashboard")}
                      style={{ fontSize: 16, padding: "14px 36px" }}>
                      📊 Lihat Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </PageWrapper>
        );

      case "features":
        return <PageWrapper><FeaturesPage /></PageWrapper>;

      case "dashboard":
        return <PageWrapper><DashboardPage /></PageWrapper>;

      case "candidates":
        return <PageWrapper><CVUploadPage /></PageWrapper>;

      case "about":
        return <PageWrapper><AboutPage /></PageWrapper>;

      default:
        return <PageWrapper><HeroPage setActivePage={setActivePage} /></PageWrapper>;
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
