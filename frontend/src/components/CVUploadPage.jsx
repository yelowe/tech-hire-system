import { useState, useRef } from "react";

const mockResult = {
  name: "Budi Setiawan",
  position: "Frontend Developer",
  score: 87,
  skills: [
    { name: "React.js", level: 92, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "CSS/Tailwind", level: 88, category: "Frontend" },
    { name: "Node.js", level: 72, category: "Backend" },
    { name: "PostgreSQL", level: 65, category: "Database" },
    { name: "Git/GitHub", level: 90, category: "Tools" },
  ],
  experience: "3 tahun",
  education: "S1 Teknik Informatika",
  recommendation: "Kandidat ini sangat cocok untuk posisi Frontend Developer. Memiliki keahlian kuat di React.js dan TypeScript yang merupakan stack utama tim. Disarankan untuk verifikasi kemampuan Node.js melalui technical test.",
  strengths: ["Expert React.js ecosystem", "Clean code practices", "Strong UI/UX sensibility"],
  gaps: ["Backend proficiency perlu ditingkatkan", "Belum familiar dengan microservices"],
};

const CVUploadPage = () => {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [step, setStep] = useState("upload"); // upload | analyzing | result
  const fileRef = useRef();

  const handleFile = (f) => {
    if (!f) return;
    setFile(f);
    setStep("ready");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  };

  const startAnalysis = () => {
    setStep("analyzing");
    setProgress(0);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => {
          setResult(mockResult);
          setStep("result");
        }, 600);
      }
      setProgress(Math.min(p, 100));
    }, 200);
  };

  const reset = () => {
    setFile(null);
    setAnalyzing(false);
    setProgress(0);
    setResult(null);
    setStep("upload");
  };

  const analysisSteps = [
    { label: "Membaca dokumen CV", done: progress >= 20 },
    { label: "Mengekstrak informasi pribadi", done: progress >= 40 },
    { label: "Mengidentifikasi skill & keahlian", done: progress >= 60 },
    { label: "Menghitung skor kecocokan", done: progress >= 80 },
    { label: "Menyiapkan laporan rekomendasi", done: progress >= 100 },
  ];

  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="section-tag">🤖 AI CV Analyzer</div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 44px)",
            fontWeight: 800,
            marginBottom: 12,
          }}>
            Analisis CV{" "}
            <span className="gradient-text">Secara Instan</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 540, lineHeight: 1.7 }}>
            Upload CV kandidat dan biarkan AI kami menganalisis skill, pengalaman, dan tingkat kecocokan dalam hitungan detik.
          </p>
        </div>

        {/* Upload Zone */}
        {(step === "upload" || step === "ready") && (
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => !file && fileRef.current?.click()}
            style={{
              border: `2px dashed ${dragOver ? "#6366f1" : file ? "rgba(16,185,129,0.5)" : "rgba(99,102,241,0.25)"}`,
              borderRadius: "var(--radius-xl)",
              padding: "60px 40px",
              textAlign: "center",
              cursor: file ? "default" : "pointer",
              background: dragOver ? "rgba(99,102,241,0.07)" : file ? "rgba(16,185,129,0.05)" : "var(--bg-card)",
              transition: "var(--transition)",
              marginBottom: 24,
            }}
          >
            <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" style={{ display: "none" }}
              onChange={e => handleFile(e.target.files[0])} />

            {!file ? (
              <>
                <div style={{ fontSize: 56, marginBottom: 20 }}>📄</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
                  Drag & Drop CV di sini
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
                  atau klik untuk memilih file
                </p>
                <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                  {["PDF", "DOC", "DOCX"].map(t => (
                    <span key={t} className="badge badge-primary">{t}</span>
                  ))}
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 16 }}>Ukuran maksimal: 10MB</p>
              </>
            ) : (
              <>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#10b981" }}>
                  File Siap Dianalisis
                </h3>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: 12, padding: "12px 20px", marginBottom: 8,
                }}>
                  <span>📄</span>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{file.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                      {(file.size / 1024).toFixed(0)} KB
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Target Position */}
        {step === "ready" && (
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 14, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 10 }}>
              Target Posisi (Opsional)
            </label>
            <select style={{
              width: "100%",
              padding: "12px 16px",
              background: "var(--bg-card)",
              border: "1px solid var(--border-light)",
              borderRadius: "var(--radius-md)",
              color: "var(--text-primary)",
              fontSize: 14,
              fontFamily: "var(--font-sans)",
              cursor: "pointer",
              outline: "none",
            }}>
              <option value="">Pilih posisi yang diinginkan...</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Engineer</option>
              <option>ML Engineer</option>
              <option>DevOps Engineer</option>
              <option>Data Engineer</option>
            </select>
          </div>
        )}

        {/* Action Buttons */}
        {step === "ready" && (
          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn-primary" onClick={startAnalysis}
              style={{ flex: 1, justifyContent: "center", fontSize: 16, padding: "14px" }}>
              🧠 Analisis dengan AI
            </button>
            <button className="btn-secondary" onClick={reset} style={{ padding: "14px 24px" }}>
              ✕ Reset
            </button>
          </div>
        )}

        {/* Analyzing State */}
        {step === "analyzing" && (
          <div style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-light)",
            borderRadius: "var(--radius-xl)",
            padding: 48,
            textAlign: "center",
          }}>
            {/* Spinner */}
            <div style={{
              width: 80, height: 80, borderRadius: "50%",
              border: "4px solid rgba(99,102,241,0.2)",
              borderTop: "4px solid #6366f1",
              margin: "0 auto 32px",
              animation: "spin-slow 1s linear infinite",
            }} />

            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>AI Sedang Menganalisis...</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 32 }}>
              Proses ini hanya membutuhkan beberapa detik
            </p>

            {/* Progress bar */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>Progress Analisis</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#6366f1" }}>{Math.round(progress)}%</span>
              </div>
              <div style={{ height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 999 }}>
                <div style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6, #10b981)",
                  borderRadius: 999,
                  transition: "width 0.2s ease",
                }} />
              </div>
            </div>

            {/* Steps */}
            <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: 10 }}>
              {analysisSteps.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: "50%",
                    background: s.done ? "#10b981" : "rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, flexShrink: 0,
                    transition: "background 0.3s",
                  }}>
                    {s.done ? "✓" : <div style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: progress >= (i + 1) * 20 - 10 ? "#6366f1" : "rgba(255,255,255,0.2)",
                    }} />}
                  </div>
                  <span style={{ fontSize: 14, color: s.done ? "var(--text-primary)" : "var(--text-muted)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Result */}
        {step === "result" && result && (
          <div className="animate-fade-in">
            {/* Score Card */}
            <div style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(16,185,129,0.12))",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: "var(--radius-xl)",
              padding: 40,
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
            }}>
              <div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 8 }}>AI Match Score</div>
                <div style={{
                  fontSize: 72,
                  fontWeight: 900,
                  fontFamily: "var(--font-display)",
                  background: "linear-gradient(135deg, #6366f1, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                  marginBottom: 8,
                }}>
                  {result.score}%
                </div>
                <div className="badge badge-success" style={{ fontSize: 13 }}>✅ Kandidat Sangat Cocok</div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{result.name}</div>
                <div style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 8 }}>{result.position}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>🎓 {result.education}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>⏱ {result.experience}</div>
              </div>
            </div>

            {/* Skills */}
            <div style={{
              background: "var(--bg-card)", border: "1px solid var(--border-light)",
              borderRadius: "var(--radius-lg)", padding: 32, marginBottom: 24,
            }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>Profil Skill Kandidat</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {result.skills.map(sk => (
                  <div key={sk.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 14, fontWeight: 600 }}>{sk.name}</span>
                        <span className="badge" style={{
                          fontSize: 10,
                          background: "rgba(255,255,255,0.05)",
                          color: "var(--text-muted)",
                          border: "none",
                          padding: "2px 8px",
                        }}>{sk.category}</span>
                      </div>
                      <span style={{
                        fontSize: 13, fontWeight: 700,
                        color: sk.level >= 85 ? "#10b981" : sk.level >= 70 ? "#6366f1" : "#f59e0b",
                      }}>{sk.level}%</span>
                    </div>
                    <div style={{ height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 999 }}>
                      <div style={{
                        height: "100%",
                        width: `${sk.level}%`,
                        background: sk.level >= 85 ? "linear-gradient(90deg, #10b981, #06b6d4)"
                          : sk.level >= 70 ? "linear-gradient(90deg, #6366f1, #8b5cf6)"
                          : "linear-gradient(90deg, #f59e0b, #ef4444)",
                        borderRadius: 999,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Gaps */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
              <div style={{
                background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)",
                borderRadius: "var(--radius-lg)", padding: 24,
              }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#10b981", marginBottom: 14 }}>💪 Kekuatan</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {result.strengths.map((s, i) => (
                    <li key={i} style={{ fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "#10b981" }}>✓</span> {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)",
                borderRadius: "var(--radius-lg)", padding: 24,
              }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#f59e0b", marginBottom: 14 }}>📌 Area Peningkatan</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {result.gaps.map((g, i) => (
                    <li key={i} style={{ fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "#f59e0b" }}>⚠</span> {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI Recommendation */}
            <div style={{
              background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: "var(--radius-lg)", padding: 28, marginBottom: 28,
            }}>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>🤖 Rekomendasi AI</h4>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8 }}>
                {result.recommendation}
              </p>
            </div>

            {/* Action */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn-primary" style={{ flex: 1, justifyContent: "center", padding: "14px" }}>
                📅 Jadwalkan Interview
              </button>
              <button className="btn-secondary" style={{ flex: 1, justifyContent: "center", padding: "14px" }}>
                📥 Unduh Laporan PDF
              </button>
              <button onClick={reset} className="btn-secondary" style={{ padding: "14px 24px" }}>
                ↺ Analisis Baru
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CVUploadPage;
