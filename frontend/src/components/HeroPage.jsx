import { useState, useEffect } from "react";

const stats = [
  { value: "94%", label: "Akurasi Matching", icon: "🎯" },
  { value: "10x", label: "Lebih Cepat", icon: "⚡" },
  { value: "2.500+", label: "CV Dianalisis", icon: "📄" },
  { value: "98%", label: "Kepuasan Recruiter", icon: "⭐" },
];

const FloatingCard = ({ style, children }) => (
  <div style={{
    position: "absolute",
    background: "rgba(13, 21, 38, 0.9)",
    border: "1px solid rgba(99,102,241,0.25)",
    borderRadius: 16,
    padding: "14px 18px",
    backdropFilter: "blur(20px)",
    ...style,
  }}>
    {children}
  </div>
);

const HeroPage = ({ setActivePage }) => {
  const [count, setCount] = useState(0);
  const [matchScore, setMatchScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMatchScore(prev => {
        if (prev >= 94) { clearInterval(interval); return 94; }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Gradient Background */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(139,92,246,0.12) 0%, transparent 60%), var(--bg-primary)",
      }} />

      {/* Animated orbs */}
      <div style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        top: "10%",
        left: "-10%",
        animation: "float 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
        top: "20%",
        right: "-5%",
        animation: "float 10s ease-in-out infinite reverse",
      }} />

      {/* Grid pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "160px 24px 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 60,
        alignItems: "center",
      }}>
        {/* Left */}
        <div className="animate-fade-in-up">
          <div className="section-tag" style={{ marginBottom: 24 }}>
            <span>🤖</span> AI-Powered Recruitment
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(42px, 5vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-1px",
            marginBottom: 24,
            color: "var(--text-primary)",
          }}>
            Rekrut Talenta{" "}
            <span className="gradient-text">Tech Terbaik</span>
            <br />
            dengan Kecerdasan AI
          </h1>

          <p style={{
            fontSize: 18,
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 520,
          }}>
            Platform rekrutmen berbasis AI yang menganalisis CV secara otomatis, mengidentifikasi skill kandidat, dan memprediksi tingkat kecocokan — sehingga proses hiring menjadi <strong style={{ color: "var(--text-primary)" }}>10x lebih cepat</strong> dan lebih objektif.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 }}>
            <button className="btn-primary" onClick={() => setActivePage("dashboard")}
              style={{ fontSize: 16, padding: "14px 32px" }}>
              🚀 Coba Sekarang
            </button>
            <button className="btn-secondary" onClick={() => setActivePage("features")}
              style={{ fontSize: 16, padding: "14px 32px" }}>
              ▶ Lihat Demo
            </button>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: "left" }}>
                <div style={{
                  fontSize: 28,
                  fontWeight: 800,
                  fontFamily: "var(--font-display)",
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Hero Visual */}
        <div style={{ position: "relative", height: 480 }}>
          {/* Main card */}
          <div className="glass-card animate-float" style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 320,
            padding: 28,
            boxShadow: "var(--shadow-glow)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
              }}>🧠</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>AI Analysis</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>CV Screening Active</div>
              </div>
              <div style={{
                marginLeft: "auto",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 10px #10b981",
              }} />
            </div>

            {/* Match score */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>Tingkat Kecocokan</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#10b981" }}>{matchScore}%</span>
              </div>
              <div style={{ height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 999 }}>
                <div style={{
                  height: "100%",
                  width: `${matchScore}%`,
                  background: "linear-gradient(90deg, #6366f1, #10b981)",
                  borderRadius: 999,
                  transition: "width 0.1s linear",
                }} />
              </div>
            </div>

            {/* Skills */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 10 }}>Skill Terdeteksi</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["React", "Node.js", "Python", "ML", "SQL", "Docker"].map(skill => (
                  <span key={skill} className="badge badge-primary" style={{ fontSize: 11 }}>{skill}</span>
                ))}
              </div>
            </div>

            <button className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "10px 20px", fontSize: 13 }}>
              Lihat Laporan Lengkap →
            </button>
          </div>

          {/* Floating badges */}
          <FloatingCard style={{ top: "5%", left: "5%", animation: "float 7s ease-in-out infinite" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 22 }}>📄</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>CV Diproses</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#6366f1" }}>2,547</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard style={{ bottom: "10%", right: "0%", animation: "float 9s ease-in-out infinite reverse" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 22 }}>⚡</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>Waktu Analisis</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#10b981" }}>&lt; 3 detik</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard style={{ top: "65%", left: "-5%", animation: "float 11s ease-in-out infinite" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
              <span style={{ fontSize: 12, fontWeight: 500 }}>AI sedang bekerja...</span>
            </div>
          </FloatingCard>
        </div>
      </div>

      {/* Responsive fix */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default HeroPage;
