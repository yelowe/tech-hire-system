import { useState } from "react";

const mockCandidates = [
  {
    id: 1, name: "Andi Pratama", position: "Senior Frontend Developer", score: 94,
    skills: ["React", "TypeScript", "Next.js", "CSS", "GraphQL"],
    exp: "5 tahun", education: "S1 Informatika - UI",
    status: "recommended", avatar: "AP", color: "#6366f1",
  },
  {
    id: 2, name: "Sari Dewi Kusuma", position: "Full Stack Engineer", score: 89,
    skills: ["Node.js", "React", "PostgreSQL", "Docker", "AWS"],
    exp: "4 tahun", education: "S1 Teknik Komputer - ITB",
    status: "interview", avatar: "SD", color: "#8b5cf6",
  },
  {
    id: 3, name: "Budi Santoso", position: "Backend Developer", score: 82,
    skills: ["Python", "Django", "FastAPI", "Redis", "Kubernetes"],
    exp: "3 tahun", education: "S1 Sistem Informasi - ITS",
    status: "review", avatar: "BS", color: "#06b6d4",
  },
  {
    id: 4, name: "Rina Maharani", position: "ML Engineer", score: 91,
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "MLflow"],
    exp: "4 tahun", education: "S2 Data Science - UGM",
    status: "recommended", avatar: "RM", color: "#10b981",
  },
  {
    id: 5, name: "Deni Kurniawan", position: "DevOps Engineer", score: 77,
    skills: ["Docker", "Kubernetes", "CI/CD", "Terraform", "GCP"],
    exp: "2 tahun", education: "S1 Informatika - BINUS",
    status: "review", avatar: "DK", color: "#f59e0b",
  },
  {
    id: 6, name: "Maya Septiani", position: "Data Engineer", score: 86,
    skills: ["Spark", "Kafka", "Airflow", "dbt", "BigQuery"],
    exp: "3 tahun", education: "S1 Matematika - Unpad",
    status: "interview", avatar: "MS", color: "#ec4899",
  },
];

const pipelineStats = [
  { label: "Total Pelamar", value: 247, icon: "👥", color: "#6366f1" },
  { label: "Diproses AI", value: 247, icon: "🤖", color: "#8b5cf6" },
  { label: "Lolos Screening", value: 89, icon: "✅", color: "#10b981" },
  { label: "Tahap Interview", value: 23, icon: "💬", color: "#f59e0b" },
];

const statusColors = {
  recommended: { bg: "rgba(16,185,129,0.15)", color: "#6ee7b7", border: "rgba(16,185,129,0.3)", label: "⭐ Rekomendasi" },
  interview: { bg: "rgba(245,158,11,0.15)", color: "#fcd34d", border: "rgba(245,158,11,0.3)", label: "💬 Interview" },
  review: { bg: "rgba(99,102,241,0.15)", color: "#a5b4fc", border: "rgba(99,102,241,0.3)", label: "🔍 Review" },
};

const ScoreRing = ({ score }) => {
  const color = score >= 90 ? "#10b981" : score >= 80 ? "#6366f1" : "#f59e0b";
  return (
    <div style={{ position: "relative", width: 64, height: 64 }}>
      <svg width="64" height="64" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
        <circle
          cx="32" cy="32" r="26"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeDasharray={`${2 * Math.PI * 26}`}
          strokeDashoffset={`${2 * Math.PI * 26 * (1 - score / 100)}`}
          strokeLinecap="round"
        />
      </svg>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 800, color,
      }}>
        {score}
      </div>
    </div>
  );
};

const CandidateCard = ({ c, onSelect }) => {
  const st = statusColors[c.status];
  return (
    <div
      onClick={() => onSelect(c)}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-light)",
        borderRadius: "var(--radius-lg)",
        padding: 24,
        cursor: "pointer",
        transition: "var(--transition)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-hover)";
        e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "var(--border-light)";
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
        {/* Avatar */}
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: `linear-gradient(135deg, ${c.color}, ${c.color}88)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, fontWeight: 800, color: "white", flexShrink: 0,
        }}>
          {c.avatar}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 16, color: "var(--text-primary)", marginBottom: 2 }}>{c.name}</div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>{c.position}</div>
        </div>

        <ScoreRing score={c.score} />
      </div>

      {/* Meta */}
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
          <span style={{ color: "var(--text-secondary)" }}>🎓</span> {c.education}
        </div>
        <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
          <span style={{ color: "var(--text-secondary)" }}>⏱</span> {c.exp}
        </div>
      </div>

      {/* Skills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        {c.skills.slice(0, 4).map(s => (
          <span key={s} className="badge badge-primary" style={{ fontSize: 11 }}>{s}</span>
        ))}
        {c.skills.length > 4 && (
          <span className="badge" style={{ fontSize: 11, background: "rgba(255,255,255,0.05)", color: "var(--text-muted)" }}>
            +{c.skills.length - 4}
          </span>
        )}
      </div>

      {/* Status */}
      <span style={{
        display: "inline-flex", alignItems: "center",
        padding: "4px 12px",
        borderRadius: 999,
        fontSize: 12, fontWeight: 600,
        background: st.bg, color: st.color, border: `1px solid ${st.border}`,
      }}>
        {st.label}
      </span>
    </div>
  );
};

const CandidateModal = ({ c, onClose }) => {
  if (!c) return null;
  const st = statusColors[c.status];

  const skillLevels = [
    { name: c.skills[0], level: 95 },
    { name: c.skills[1], level: 88 },
    { name: c.skills[2], level: 82 },
    { name: c.skills[3] || "", level: 75 },
    { name: c.skills[4] || "", level: 68 },
  ].filter(s => s.name);

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(5,8,20,0.85)",
        backdropFilter: "blur(10px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24,
      }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="animate-fade-in"
        style={{
          width: "100%", maxWidth: 620,
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-light)",
          borderRadius: "var(--radius-xl)",
          padding: 40,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 16,
              background: `linear-gradient(135deg, ${c.color}, ${c.color}88)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, fontWeight: 800, color: "white",
            }}>{c.avatar}</div>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{c.name}</h2>
              <div style={{ fontSize: 14, color: "var(--text-secondary)" }}>{c.position}</div>
              <span style={{
                display: "inline-flex", alignItems: "center", marginTop: 8,
                padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600,
                background: st.bg, color: st.color, border: `1px solid ${st.border}`,
              }}>{st.label}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: "rgba(255,255,255,0.05)", border: "none", color: "var(--text-secondary)", cursor: "pointer", padding: "6px 12px", borderRadius: 8, fontSize: 16 }}
          >✕</button>
        </div>

        {/* Score */}
        <div style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(16,185,129,0.1))",
          border: "1px solid rgba(99,102,241,0.2)",
          borderRadius: "var(--radius-md)",
          padding: "20px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginBottom: 28,
        }}>
          <div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 4 }}>AI Match Score</div>
            <div style={{ fontSize: 44, fontWeight: 900, background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {c.score}%
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 4 }}>Hasil Analisis</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#10b981" }}>✓ Sangat Cocok</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>Diproses dalam 2.3 detik</div>
          </div>
        </div>

        {/* Skill Analysis */}
        <div style={{ marginBottom: 28 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Analisis Skill</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {skillLevels.map(sk => (
              <div key={sk.name}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{sk.name}</span>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{sk.level}%</span>
                </div>
                <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 999 }}>
                  <div style={{
                    height: "100%", width: `${sk.level}%`,
                    background: sk.level >= 90 ? "linear-gradient(90deg, #10b981, #06b6d4)"
                      : sk.level >= 80 ? "linear-gradient(90deg, #6366f1, #8b5cf6)"
                      : "linear-gradient(90deg, #f59e0b, #f43f5e)",
                    borderRadius: 999,
                    transition: "width 1s ease",
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
          {[
            { label: "Pendidikan", value: c.education, icon: "🎓" },
            { label: "Pengalaman", value: c.exp, icon: "⏱" },
          ].map(info => (
            <div key={info.label} style={{
              background: "var(--bg-glass-light)", border: "1px solid var(--border-light)",
              borderRadius: "var(--radius-md)", padding: "16px 20px",
            }}>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>{info.icon} {info.label}</div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{info.value}</div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 12 }}>
          <button className="btn-primary" style={{ flex: 1, justifyContent: "center" }}>
            📅 Jadwalkan Interview
          </button>
          <button className="btn-secondary" style={{ flex: 1, justifyContent: "center" }}>
            📥 Unduh Laporan
          </button>
        </div>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? mockCandidates
    : mockCandidates.filter(c => c.status === filter);

  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div className="section-tag">📊 Recruiter Dashboard</div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 40px)",
            fontWeight: 800,
            marginBottom: 8,
          }}>
            Pipeline Rekrutmen
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
            Pantau dan kelola semua kandidat yang telah dianalisis oleh AI
          </p>
        </div>

        {/* Pipeline Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
          marginBottom: 40,
        }}>
          {pipelineStats.map((s, i) => (
            <div key={i} style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-light)",
              borderRadius: "var(--radius-md)",
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: `${s.color}20`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20,
              }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 800, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          {[
            { key: "all", label: "Semua Kandidat" },
            { key: "recommended", label: "⭐ Rekomendasi" },
            { key: "interview", label: "💬 Interview" },
            { key: "review", label: "🔍 Review" },
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: filter === f.key ? "1px solid rgba(99,102,241,0.5)" : "1px solid var(--border-light)",
                background: filter === f.key ? "rgba(99,102,241,0.15)" : "var(--bg-card)",
                color: filter === f.key ? "#a5b4fc" : "var(--text-secondary)",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 500,
                transition: "var(--transition)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Candidates Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 20,
        }}>
          {filtered.map(c => (
            <CandidateCard key={c.id} c={c} onSelect={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <CandidateModal c={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default DashboardPage;
