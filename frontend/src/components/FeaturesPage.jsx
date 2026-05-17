const features = [
  {
    icon: "🤖",
    title: "AI CV Analyzer",
    description: "Sistem AI kami secara otomatis mengekstrak dan menganalisis informasi dari CV — mulai dari pengalaman kerja, pendidikan, hingga soft skill yang tersembunyi.",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    tag: "NLP Powered",
    bullets: ["Ekstraksi data otomatis", "Deteksi 200+ skill teknis", "Analisis sentimen profil"],
  },
  {
    icon: "🎯",
    title: "Smart Matching Engine",
    description: "Algoritma machine learning kami menghitung skor kecocokan kandidat terhadap posisi secara akurat, mempertimbangkan 50+ parameter relevan.",
    gradient: "linear-gradient(135deg, #06b6d4, #6366f1)",
    tag: "ML Algorithm",
    bullets: ["Skor kecocokan 0-100%", "50+ parameter evaluasi", "Prediksi kinerja kandidat"],
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description: "Visualisasi data rekrutmen secara real-time. Pantau pipeline kandidat, performa hiring, dan insight berbasis data untuk pengambilan keputusan lebih baik.",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
    tag: "Real-time Data",
    bullets: ["Laporan komprehensif", "Pipeline kandidat visual", "Insight berbasis data"],
  },
  {
    icon: "🔍",
    title: "Skill Identifier",
    description: "Identifikasi dan kategorisasi skill kandidat secara mendalam — baik hard skill teknis maupun soft skill — dengan akurasi tinggi menggunakan NLP.",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    tag: "Deep Analysis",
    bullets: ["Hard & soft skill mapping", "Sertifikasi terverifikasi", "Gap analysis otomatis"],
  },
  {
    icon: "💡",
    title: "Rekomendasi Cerdas",
    description: "Sistem memberikan rekomendasi top kandidat secara otomatis beserta alasan yang transparan, sehingga recruiter bisa membuat keputusan yang lebih percaya diri.",
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    tag: "AI Recommendation",
    bullets: ["Top-N kandidat otomatis", "Alasan rekomendasi transparan", "Perbandingan kandidat"],
  },
  {
    icon: "🛡️",
    title: "Anti-Bias System",
    description: "Proses evaluasi yang sepenuhnya objektif berbasis data, menghilangkan bias subjektif dalam seleksi kandidat untuk hasil rekrutmen yang lebih adil.",
    gradient: "linear-gradient(135deg, #10b981, #8b5cf6)",
    tag: "Fair & Objective",
    bullets: ["Evaluasi berbasis data", "Standar penilaian konsisten", "Audit trail transparan"],
  },
];

const FeatureCard = ({ feature, index }) => (
  <div
    style={{
      background: "var(--bg-card)",
      border: "1px solid var(--border-light)",
      borderRadius: "var(--radius-lg)",
      padding: 32,
      transition: "var(--transition)",
      cursor: "default",
      position: "relative",
      overflow: "hidden",
      animationDelay: `${index * 0.1}s`,
    }}
    className="animate-fade-in-up feature-card"
    onMouseEnter={e => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "var(--shadow-hover)";
      e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.borderColor = "var(--border-light)";
    }}
  >
    {/* Top glow */}
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: feature.gradient,
      opacity: 0.6,
    }} />

    {/* Icon */}
    <div style={{
      width: 52,
      height: 52,
      borderRadius: 14,
      background: feature.gradient,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 26,
      marginBottom: 20,
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    }}>
      {feature.icon}
    </div>

    <div className="badge badge-primary" style={{ marginBottom: 14 }}>
      {feature.tag}
    </div>

    <h3 style={{
      fontSize: 20,
      fontWeight: 700,
      color: "var(--text-primary)",
      marginBottom: 12,
    }}>
      {feature.title}
    </h3>

    <p style={{
      fontSize: 14,
      color: "var(--text-secondary)",
      lineHeight: 1.7,
      marginBottom: 20,
    }}>
      {feature.description}
    </p>

    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
      {feature.bullets.map((b, i) => (
        <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-secondary)" }}>
          <span style={{ color: "#10b981", fontWeight: 700 }}>✓</span> {b}
        </li>
      ))}
    </ul>
  </div>
);

const FeaturesPage = () => (
  <div style={{ position: "relative", paddingTop: 120 }}>
    {/* BG */}
    <div style={{
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 60%)",
    }} />

    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 100px", position: "relative" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 72 }}>
        <div className="section-tag" style={{ margin: "0 auto 20px" }}>
          <span>✨</span> Fitur Unggulan
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: 20,
        }}>
          Teknologi AI yang{" "}
          <span className="gradient-text">Mengubah Cara</span>
          <br />
          Anda Merekrut
        </h2>
        <p style={{
          fontSize: 18,
          color: "var(--text-secondary)",
          maxWidth: 560,
          margin: "0 auto",
          lineHeight: 1.7,
        }}>
          Dari analisis CV hingga rekomendasi kandidat terbaik — semua dikerjakan AI kami secara otomatis, cepat, dan akurat.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: 24,
      }}>
        {features.map((f, i) => (
          <FeatureCard key={i} feature={f} index={i} />
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .feature-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </div>
);

export default FeaturesPage;
