import { useState, useEffect } from "react";

// ─── CONTACT DETAILS ────────────────────────────────────────────────────────
const CONTACT = {
  whatsapp: "+919153663735",
  whatsappDisplay: "+91 91536 63735",
  calendly: "https://calendly.com/reesavraj7761/30min",
  email: "reesavraj7761@gmail.com",
};

// ─── FONT LOADER ────────────────────────────────────────────────────────────
const FontLoader: React.FC = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

// ─── THEME TOKENS ────────────────────────────────────────────────────────────
interface Theme {
  bg: string; mid: string; card: string;
  border: string; text: string; muted: string; sub: string;
  accent: string; accentLight: string;
  accentPale: string; accentBorder: string;
  gridLine: string; navBg: string; heroStroke: string;
}

const DARK: Theme = {
  bg: "#060608", mid: "#0D0D10", card: "#111114",
  border: "rgba(255,255,255,0.07)", text: "#F2F2F2",
  muted: "#444", sub: "#888",
  accent: "#3B82F6", accentLight: "#60A5FA",
  accentPale: "rgba(59,130,246,0.09)", accentBorder: "rgba(59,130,246,0.3)",
  gridLine: "rgba(59,130,246,0.03)", navBg: "rgba(6,6,8,0.85)",
  heroStroke: "rgba(242,242,242,0.13)",
};

const LIGHT: Theme = {
  bg: "#FFFFFF", mid: "#F4F6FB", card: "#FFFFFF",
  border: "rgba(0,0,0,0.08)", text: "#080810",
  muted: "#BBB", sub: "#666",
  accent: "#2563EB", accentLight: "#3B82F6",
  accentPale: "rgba(37,99,235,0.07)", accentBorder: "rgba(37,99,235,0.2)",
  gridLine: "rgba(37,99,235,0.035)", navBg: "rgba(255,255,255,0.92)",
  heroStroke: "rgba(8,8,16,0.12)",
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function ReachMVPLanding() {
  const [dark, setDark] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const t: Theme = dark ? DARK : LIGHT;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        const el = e.target as HTMLElement;
        if (e.isIntersecting && el.dataset.reveal)
          setVisible((v) => ({ ...v, [el.dataset.reveal!]: true }));
      }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const rv = (id: string, delay: number = 0): React.HTMLAttributes<HTMLDivElement> & { "data-reveal": string } => ({
    "data-reveal": id,
    style: {
      opacity: visible[id] ? 1 : 0,
      transform: visible[id] ? "translateY(0)" : "translateY(48px)",
      transition: `opacity 0.85s ${delay}s ease, transform 0.85s ${delay}s ease`,
    } as React.CSSProperties,
  });

  return (
    <>
      <FontLoader />
      <div style={{ background: t.bg, color: t.text, fontFamily: "'DM Sans', sans-serif", overflowX: "hidden", transition: "background 0.5s, color 0.5s" }}>

        {/* ── NAV ── */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: scrolled ? "16px 72px" : "24px 72px",
          borderBottom: `1px solid ${scrolled ? t.border : "transparent"}`,
          backdropFilter: "blur(24px)",
          background: scrolled ? t.navBg : "transparent",
          transition: "all 0.4s ease",
        }}>
          <Logo t={t} size={32} />
          <ul style={{ display: "flex", gap: 48, listStyle: "none", margin: 0, padding: 0 }}>
            {["Process", "Services", "Pricing"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: t.muted, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = t.accent)}
                  onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = t.muted)}>{l}</a>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button onClick={() => setDark(!dark)} style={{
              background: t.accentPale, border: `1px solid ${t.accentBorder}`,
              borderRadius: 40, padding: "9px 16px", cursor: "pointer",
              fontSize: 18, transition: "all 0.3s", color: t.text, lineHeight: 1,
            }}>{dark ? "☀️" : "🌙"}</button>
            <PrimaryBtn t={t} href={CONTACT.calendly} target="_blank">Book Strategy Call →</PrimaryBtn>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={{
          minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr",
          alignItems: "center", padding: "120px 72px 80px",
          position: "relative", overflow: "hidden", gap: 60,
        }}>
          {/* Grid bg */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `linear-gradient(${t.gridLine} 1px,transparent 1px),linear-gradient(90deg,${t.gridLine} 1px,transparent 1px)`, backgroundSize: "90px 90px" }} />
          {/* Glow */}
          <div style={{ position: "absolute", right: "20%", top: "30%", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle,${t.accentPale} 0%,transparent 70%)`, pointerEvents: "none", filter: "blur(60px)", animation: "glow 6s ease-in-out infinite" }} />

          {/* LEFT */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{
              fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: "0.16em", color: t.accent,
              textTransform: "uppercase", border: `1px solid ${t.accentBorder}`,
              padding: "8px 18px", marginBottom: 44,
              display: "inline-flex", alignItems: "center", gap: 10,
              animation: "fadeUp 0.7s ease both",
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: t.accent, animation: "pulse 1.5s ease-in-out infinite" }} />
              Revenue-Ready Mobile Apps
            </div>

            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(80px, 8.5vw, 140px)",
              lineHeight: 0.9, letterSpacing: -2,
              animation: "fadeUp 0.8s 0.1s ease both", color: t.text,
            }}>
              YOUR APP,<br />
              <span style={{ color: t.accent }}>LIVE</span> IN<br />
              <span style={{ color: "transparent", WebkitTextStroke: `2.5px ${t.heroStroke}` }}>7 DAYS.</span>
            </h1>

            <p style={{
              fontSize: 19, fontWeight: 300, color: t.sub,
              lineHeight: 1.75, marginTop: 40, maxWidth: 500,
              animation: "fadeUp 0.8s 0.2s ease both",
            }}>
              ReachMVP partners with{" "}
              <strong style={{ color: t.text, fontWeight: 500 }}>SaaS, e-commerce & marketplace</strong>{" "}
              companies to ship production-grade mobile apps built for retention from day one.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 52, animation: "fadeUp 0.8s 0.3s ease both" }}>
              <PrimaryBtn t={t} href={CONTACT.calendly} target="_blank" large>Book Free Strategy Call →</PrimaryBtn>
              <a href="#process"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: t.muted, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = t.accent)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = t.muted)}>
                See process ↓
              </a>
            </div>
          </div>

          {/* RIGHT — Phone */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", zIndex: 2, animation: "fadeUp 0.9s 0.2s ease both" }}>
            <PhoneMockup t={t} dark={dark} />
          </div>
        </section>

        {/* ── WHY US ── */}
        <section id="services" style={{ padding: "140px 72px", background: t.mid, borderTop: `1px solid ${t.border}`, transition: "background 0.5s" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
            <div {...rv("why-left")}>
              <SLabel t={t}>Why ReachMVP</SLabel>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(60px,6.5vw,96px)", lineHeight: 0.92, letterSpacing: -2, color: t.text, marginBottom: 36 }}>
                MOST AGENCIES<br /><span style={{ color: "#EF4444" }}>WASTE</span><br />YOUR TIME.
              </h2>
              <p style={{ fontSize: 19, lineHeight: 1.8, color: t.sub, maxWidth: 460 }}>
                3-month timelines. Bloated teams. Missed deadlines. We operate differently — lean, fast, obsessed with outcomes, not hours billed.
              </p>
              <div style={{ marginTop: 52, padding: "32px 36px", border: `1px solid ${t.accentBorder}`, background: t.accentPale }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 72, color: t.accent, lineHeight: 1 }}>7-DAY</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: t.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 8 }}>
                  LAUNCH GUARANTEE — OR WE BUILD FOR FREE
                </div>
              </div>
            </div>
            <div {...rv("why-right")} style={{ ...(rv("why-right") as any).style, display: "flex", flexDirection: "column" as const, gap: 18 }}>
              {[
                ["01", "Dedicated Senior Team", "No juniors, no outsourcing. You work directly with the engineers building your product every single day."],
                ["02", "Revenue-First Architecture", "Every technical decision is made with your growth metrics in mind — not just clean code for the sake of it."],
                ["03", "You Own Everything", "Full IP transfer on day one. Source code, assets, infrastructure — completely and irrevocably yours."],
                ["04", "7-Day Delivery", "Working, store-ready MVP in 7 days. No exceptions. No excuses. Pure execution."],
              ].map(([num, title, desc]) => <WhyCard key={num} num={num} title={title} desc={desc} t={t} />)}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section id="process" style={{ padding: "140px 72px", background: t.bg, transition: "background 0.5s" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 100 }}>
            <div {...rv("proc-h")}>
              <SLabel t={t}>The Process</SLabel>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(60px,6.5vw,96px)", lineHeight: 0.92, letterSpacing: -2, color: t.text }}>
                7 DAYS.<br />7 STAGES.<br /><span style={{ color: t.accent }}>1 LAUNCH.</span>
              </h2>
            </div>
            <p {...rv("proc-p")} style={{ ...(rv("proc-p") as any).style, fontSize: 18, color: t.sub, maxWidth: 360, lineHeight: 1.8, textAlign: "right" as const }}>
              Every day has a clear deliverable. You see progress daily — no black boxes, no surprises, ever.
            </p>
          </div>
          <div {...rv("proc-steps")} style={{ ...(rv("proc-steps") as any).style, display: "flex", flexDirection: "column" as const }}>
            {[
              ["01", "DAY 01", "STRATEGY & PLANNING", "We deep-dive into your business goals, define the user flows, choose the right tech stack, and lock in the full sprint plan. You leave this session knowing exactly what's being built and why."],
              ["02", "DAY 02", "UI/UX DESIGN", "Wireframes in the morning, high-fidelity screens by evening. Your brand applied pixel-perfectly. You review and approve before a single line of code is written."],
              ["03", "DAY 03", "ARCHITECTURE & SCAFFOLD", "Core app structure built. Authentication, database schema, API layer, navigation architecture — the entire foundation is production-grade from the start."],
              ["04", "DAY 04 – 05", "FEATURE BUILD SPRINT", "The core user journeys come alive. Payments integrated. Push notifications wired. Third-party APIs connected. Two full days of pure, focused engineering."],
              ["05", "DAY 06", "QA & PERFORMANCE", "Full device testing across iOS and Android. Performance audit, memory profiling, crash-free verification. We don't ship anything we wouldn't use ourselves."],
              ["06", "DAY 07", "LAUNCH", "App Store and Google Play submission handled completely by us — metadata, screenshots, compliance review. Your app goes live. You take the credit."],
              ["07", "BEYOND", "SCALE & GROW", "Ongoing retainer available. Feature velocity, growth analytics, A/B testing, and continuous improvement — we become your long-term product engineering partner."],
            ].map(([num, day, title, desc], i) => (
              <ProcessRow key={i} num={num} day={day} title={title} desc={desc} t={t} last={i === 6} />
            ))}
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services2" style={{ padding: "140px 72px", background: t.mid, borderTop: `1px solid ${t.border}`, transition: "background 0.5s" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 80 }}>
            <div {...rv("svc-h")}>
              <SLabel t={t}>What You Get</SLabel>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(60px,6.5vw,96px)", lineHeight: 0.92, letterSpacing: -2, color: t.text }}>
                EVERYTHING<br />YOU NEED.<br /><span style={{ color: t.accent }}>NOTHING EXTRA.</span>
              </h2>
            </div>
            <OutlineBtn t={t} href="#contact">View Full Scope →</OutlineBtn>
          </div>
          <div {...rv("svc-grid")} style={{ ...(rv("svc-grid") as any).style, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 3, background: t.border }}>
            {[
              ["📱", "NATIVE-QUALITY APPS", "React Native + Expo. iOS and Android simultaneously. Zero compromise on performance or user experience quality."],
              ["⚡", "FULL BACKEND", "Supabase or Firebase. Auth, real-time DB, storage, edge functions — everything production-ready from day one."],
              ["💳", "PAYMENTS & MONETIZATION", "Stripe, RevenueCat, or custom billing. Subscriptions, one-time purchases, in-app payments — fully configured and tested."],
              ["📊", "ANALYTICS & TRACKING", "Mixpanel, Amplitude, or Posthog integrated. Every user action tracked from launch for immediate data-driven decisions."],
              ["🔔", "PUSH NOTIFICATIONS", "OneSignal integrated. Retention sequences, re-engagement campaigns, and intelligent behavioural triggers ready to fire."],
              ["🚀", "STORE SUBMISSION", "App Store and Google Play metadata, screenshots, review compliance — the full submission process handled completely by us."],
            ].map(([icon, title, desc]) => <ServiceCard key={title} icon={icon} title={title} desc={desc} t={t} />)}
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" style={{ padding: "140px 72px", background: t.bg, transition: "background 0.5s" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 80 }}>
            <div {...rv("price-h")}>
              <SLabel t={t}>Investment</SLabel>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(60px,6.5vw,96px)", lineHeight: 0.92, letterSpacing: -2, color: t.text }}>
                TRANSPARENT<br /><span style={{ color: t.accent }}>PRICING.</span>
              </h2>
            </div>
            <p {...rv("price-p")} style={{ ...(rv("price-p") as any).style, fontSize: 18, color: t.sub, maxWidth: 360, lineHeight: 1.7, textAlign: "right" as const }}>
              Fixed pricing. No hidden fees. No hourly surprises. You know exactly what you get and what it costs.
            </p>
          </div>
          <div {...rv("price-grid")} style={{ ...(rv("price-grid") as any).style, display: "grid", gridTemplateColumns: "1fr 1.2fr 1fr", gap: 3, background: t.border }}>
            <PricingCard t={t} label="Starter" price="€7K" period="One-time"
              features={["MVP core features", "iOS + Android", "Auth & onboarding", "Basic analytics", "App store submission", "30-day support"]} cta="Get Started →" />
            <PricingCard t={t} label="Growth" price="€15K" period="One-time" featured
              features={["Full feature build", "iOS + Android", "Payments integrated", "Advanced analytics", "Push notifications", "Admin dashboard", "60-day support", "Priority response"]} cta="Book Strategy Call →" />
            <PricingCard t={t} label="Enterprise" price="€30K+" period="Custom"
              features={["Custom architecture", "Dedicated team", "Complex integrations", "White-label ready", "SLA guarantee", "Ongoing retainer"]} cta="Let's Talk →" />
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section id="contact" style={{ padding: "180px 72px", background: t.mid, borderTop: `1px solid ${t.border}`, position: "relative", overflow: "hidden", transition: "background 0.5s" }}>
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "60vw", height: "60vw", borderRadius: "50%", background: `radial-gradient(circle,${t.accentPale} 0%,transparent 65%)`, pointerEvents: "none", filter: "blur(40px)" }} />
          <div style={{ position: "relative", textAlign: "center" }}>
            <div {...rv("cta-tag")} style={{ ...(rv("cta-tag") as any).style, display: "flex", justifyContent: "center", marginBottom: 44 }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: "0.18em", color: t.accent, textTransform: "uppercase", border: `1px solid ${t.accentBorder}`, padding: "8px 20px", display: "inline-flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: t.accent, animation: "pulse 1.5s infinite" }} />
                Limited Spots Available
              </div>
            </div>
            <h2 {...rv("cta-h")} style={{ ...(rv("cta-h") as any).style, fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(72px,10vw,160px)", lineHeight: 0.88, letterSpacing: -3, marginBottom: 48 }}>
              <span style={{ color: t.text }}>READY TO</span><br />
              <span style={{ color: "transparent", WebkitTextStroke: `3px ${t.heroStroke}` }}>LAUNCH?</span>
            </h2>
            <p style={{ fontSize: 21, color: t.sub, maxWidth: 500, margin: "0 auto 60px" }}>
              30-minute strategy call. Zero obligation. We map out your entire app — completely free.
            </p>

            {/* ── 3 CONTACT BUTTONS ── */}
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" as const }}>

              {/* Calendly — Primary */}
              <ContactBtn
                href={CONTACT.calendly}
                target="_blank"
                bg={t.accent}
                color="#fff"
                icon="📅"
                label="Book Strategy Call"
                sub="Free 30-min on Calendly"
                t={t}
                primary
              />

              {/* WhatsApp */}
              <ContactBtn
                href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%20ReachMVP!%20I%27m%20interested%20in%20building%20a%20mobile%20app.%20Can%20we%20talk?`}
                target="_blank"
                bg="#25D366"
                color="#fff"
                icon="💬"
                label="Chat on WhatsApp"
                sub={CONTACT.whatsappDisplay}
                t={t}
              />

              {/* Email */}
              <ContactBtn
                href={`mailto:${CONTACT.email}?subject=Let%27s%20build%20my%20MVP&body=Hi%20ReachMVP%20team%2C%0A%0AI%27m%20interested%20in%20building%20a%20mobile%20app.%20Here%27s%20what%20I%27m%20thinking%3A%0A%0A`}
                bg={dark ? t.card : "#fff"}
                color={t.text}
                icon="✉️"
                label="Send an Email"
                sub={CONTACT.email}
                t={t}
              />
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: `1px solid ${t.border}`, padding: "36px 72px", display: "flex", justifyContent: "space-between", alignItems: "center", background: t.bg, transition: "background 0.5s", flexWrap: "wrap" as const, gap: 16 }}>
          <Logo t={t} size={26} />
          <p style={{ fontSize: 13, color: t.muted }}>© 2026 ReachMVP. Production-grade apps, shipped fast.</p>
          <div style={{ display: "flex", gap: 20 }}>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: t.muted, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#25D366")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = t.muted)}>WhatsApp</a>
            <a href={CONTACT.calendly} target="_blank" rel="noreferrer"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: t.muted, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = t.accent)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = t.muted)}>Calendly</a>
            <a href={`mailto:${CONTACT.email}`}
              style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: t.muted, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = t.accent)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = t.muted)}>Email</a>
          </div>
        </footer>

        {/* ── FLOATING CONTACT BAR (always visible) ── */}
        <div style={{
          position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)",
          zIndex: 800, display: "flex", gap: 10,
          background: dark ? "rgba(10,10,14,0.92)" : "rgba(255,255,255,0.95)",
          border: `1px solid ${t.border}`,
          backdropFilter: "blur(20px)",
          padding: "10px 14px",
          borderRadius: 60,
          boxShadow: dark ? "0 8px 40px rgba(0,0,0,0.6)" : "0 8px 40px rgba(0,0,0,0.12)",
          animation: "slideUp 1s 1s ease both",
        }}>
          <FloatingBtn
            href={CONTACT.calendly}
            target="_blank"
            bg={t.accent} color="#fff"
            label="Book Call"
            emoji="📅"
          />
          <FloatingBtn
            href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%20ReachMVP!%20I%27m%20interested%20in%20building%20a%20mobile%20app.`}
            target="_blank"
            bg="#25D366" color="#fff"
            label="WhatsApp"
            emoji="💬"
          />
          <FloatingBtn
            href={`mailto:${CONTACT.email}?subject=Let%27s%20build%20my%20MVP`}
            bg={dark ? "#1e1e28" : "#f0f2fa"} color={t.text}
            label="Email"
            emoji="✉️"
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp   { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.6)} }
        @keyframes glow     { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
        @keyframes floatPhone { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-18px) rotate(-2deg)} }
        @keyframes notif1   { 0%,100%{transform:translateX(140px);opacity:0} 15%,82%{transform:translateX(0);opacity:1} }
        @keyframes notif2   { 0%,30%,100%{transform:translateX(140px);opacity:0} 45%,82%{transform:translateX(0);opacity:1} }
        @keyframes notif3   { 0%,55%,100%{transform:translateX(140px);opacity:0} 68%,88%{transform:translateX(0);opacity:1} }
        @keyframes slideUp  { from{opacity:0;transform:translateX(-50%) translateY(20px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
        * { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-thumb{background:#3B82F6;border-radius:3px}
      `}</style>
    </>
  );
}

// ─── CONTACT BUTTON (big, in CTA section) ────────────────────────────────────
interface ContactBtnProps {
  href: string; target?: string; bg: string; color: string;
  icon: string; label: string; sub: string; t: Theme; primary?: boolean;
}
function ContactBtn({ href, target, bg, color, icon, label, sub, t, primary }: ContactBtnProps) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target={target} rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 8,
        background: hov ? bg : (primary ? bg : t.card),
        color: primary ? color : (hov ? color : t.text),
        border: `1px solid ${primary ? "transparent" : t.border}`,
        padding: "28px 40px",
        textDecoration: "none",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? `0 16px 40px ${bg}44` : "none",
        transition: "all 0.3s ease",
        minWidth: 200,
        clipPath: primary ? "polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))" : "none",
        borderRadius: primary ? 0 : 4,
      }}>
      <span style={{ fontSize: 32 }}>{icon}</span>
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: 1, lineHeight: 1 }}>{label}</span>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, opacity: 0.65, letterSpacing: "0.05em" }}>{sub}</span>
    </a>
  );
}

// ─── FLOATING PILL BUTTON ─────────────────────────────────────────────────────
interface FloatingBtnProps {
  href: string; target?: string; bg: string; color: string; label: string; emoji: string;
}
function FloatingBtn({ href, target, bg, color, label, emoji }: FloatingBtnProps) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target={target} rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 8,
        background: hov ? bg : `${bg}22`,
        color: hov ? color : bg,
        border: `1px solid ${bg}44`,
        padding: "10px 20px", borderRadius: 40,
        textDecoration: "none",
        fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700,
        letterSpacing: "0.05em",
        transition: "all 0.25s ease",
        whiteSpace: "nowrap" as const,
      }}>
      <span style={{ fontSize: 16 }}>{emoji}</span>
      {label}
    </a>
  );
}

// ─── PRIMARY BUTTON ───────────────────────────────────────────────────────────
interface PrimaryBtnProps {
  href: string; target?: string; t: Theme; children: React.ReactNode; large?: boolean;
}
function PrimaryBtn({ href, target, t, children, large }: PrimaryBtnProps) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target={target} rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: t.accent, color: "#fff",
        fontFamily: "'Space Mono', monospace",
        fontSize: large ? 14 : 12, fontWeight: 700, letterSpacing: "0.05em",
        padding: large ? "20px 44px" : "13px 26px",
        textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10,
        clipPath: "polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))",
        transform: hov ? "translate(-3px,-3px)" : "none",
        boxShadow: hov ? `4px 4px 0 ${t.accentBorder}` : "none",
        transition: "all 0.25s", whiteSpace: "nowrap" as const,
      }}>{children}</a>
  );
}

// ─── OUTLINE BUTTON ───────────────────────────────────────────────────────────
interface OutlineBtnProps { href: string; t: Theme; children: React.ReactNode; }
function OutlineBtn({ href, t, children }: OutlineBtnProps) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? t.accent : "transparent", color: hov ? "#fff" : t.accent,
        fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 700,
        padding: "18px 36px", textDecoration: "none",
        border: `2px solid ${t.accent}`, transition: "all 0.3s",
        alignSelf: "flex-end", whiteSpace: "nowrap" as const,
      }}>{children}</a>
  );
}

// ─── SECTION LABEL ────────────────────────────────────────────────────────────
function SLabel({ t, children }: { t: Theme; children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: "0.2em", color: t.accent, textTransform: "uppercase" as const, marginBottom: 28, display: "flex", alignItems: "center", gap: 14 }}>
      {children}
      <span style={{ height: 1, width: 60, background: t.accent, display: "inline-block" }} />
    </div>
  );
}

// ─── LOGO ─────────────────────────────────────────────────────────────────────
function Logo({ t, size }: { t: Theme; size: number }) {
  return (
    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: size, letterSpacing: 3 }}>
      <span style={{ color: t.text }}>Reach</span><span style={{ color: t.accent }}>MVP</span>
    </div>
  );
}

// ─── WHY CARD ─────────────────────────────────────────────────────────────────
function WhyCard({ num, title, desc, t }: { num: string; title: string; desc: string; t: Theme }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: hov ? t.accentPale : t.card,
      border: `1px solid ${hov ? t.accentBorder : t.border}`,
      borderLeft: `4px solid ${hov ? t.accent : "transparent"}`,
      padding: "30px 34px", display: "flex", gap: 22, alignItems: "flex-start",
      transform: hov ? "translateX(6px)" : "none", transition: "all 0.3s ease",
    }}>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 58, lineHeight: 1, flexShrink: 0, color: hov ? t.accent : t.accentBorder, transition: "color 0.3s" }}>{num}</div>
      <div>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: t.text }}>{title}</h3>
        <p style={{ fontSize: 15, color: t.sub, lineHeight: 1.65 }}>{desc}</p>
      </div>
    </div>
  );
}

// ─── PROCESS ROW ─────────────────────────────────────────────────────────────
function ProcessRow({ num, day, title, desc, t, last }: { num: string; day: string; title: string; desc: string; t: Theme; last: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      display: "grid", gridTemplateColumns: "120px 1fr",
      borderBottom: last ? "none" : `1px solid ${t.border}`,
      background: hov ? t.accentPale : "transparent", transition: "background 0.3s",
    }}>
      <div style={{ padding: "52px 40px 52px 0", borderRight: `1px solid ${t.border}`, display: "flex", flexDirection: "column" as const, justifyContent: "flex-start" }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: t.accent, letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: 8 }}>{day}</div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56, lineHeight: 1, color: hov ? t.accent : t.accentBorder, transition: "color 0.3s", letterSpacing: -1 }}>{num}</div>
      </div>
      <div style={{ padding: "52px 0 52px 60px", display: "grid", gridTemplateColumns: "280px 1fr", gap: 60, alignItems: "center" }}>
        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, letterSpacing: 1, lineHeight: 1, color: t.text }}>{title}</h3>
        <p style={{ fontSize: 17, color: t.sub, lineHeight: 1.8 }}>{desc}</p>
      </div>
    </div>
  );
}

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────
function ServiceCard({ icon, title, desc, t }: { icon: string; title: string; desc: string; t: Theme }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: hov ? t.accentPale : t.card, padding: "56px 48px",
      position: "relative", overflow: "hidden", transition: "background 0.35s",
      borderBottom: `3px solid ${hov ? t.accent : "transparent"}`,
    }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 70, height: 70, background: hov ? t.accentBorder : t.accentPale, clipPath: "polygon(100% 0,0 0,100% 100%)", transition: "background 0.35s" }} />
      <span style={{ fontSize: 46, marginBottom: 28, display: "block" }}>{icon}</span>
      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, letterSpacing: 1, marginBottom: 14, color: t.text, lineHeight: 1 }}>{title}</h3>
      <p style={{ fontSize: 16, color: t.sub, lineHeight: 1.75 }}>{desc}</p>
    </div>
  );
}

// ─── PRICING CARD ─────────────────────────────────────────────────────────────
interface PricingCardProps { t: Theme; label: string; price: string; period: string; features: string[]; cta: string; featured?: boolean; }
function PricingCard({ t, label, price, period, features, cta, featured }: PricingCardProps) {
  return (
    <div style={{ background: featured ? t.accent : t.card, padding: "60px 48px", position: "relative" }}>
      {featured && (
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%) translateY(-50%)", background: "#EF4444", color: "#fff", fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", padding: "6px 18px", textTransform: "uppercase" as const, whiteSpace: "nowrap" }}>Most Popular</div>
      )}
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: featured ? "rgba(255,255,255,0.55)" : t.muted, marginBottom: 24 }}>{label}</div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 86, lineHeight: 1, letterSpacing: -3, color: featured ? "#fff" : t.text, marginBottom: 6 }}>{price}</div>
      <div style={{ fontSize: 15, color: featured ? "rgba(255,255,255,0.5)" : t.muted, marginBottom: 36 }}>{period}</div>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 14 }}>
        {features.map((f) => (
          <li key={f} style={{ fontSize: 15, color: featured ? "rgba(255,255,255,0.82)" : t.sub, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: featured ? "#fff" : t.accent, fontWeight: 700 }}>✓</span>{f}
          </li>
        ))}
      </ul>
      <a href={CONTACT.calendly} target="_blank" rel="noreferrer"
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = featured ? "rgba(255,255,255,0.22)" : t.accentPale; (e.currentTarget as HTMLAnchorElement).style.borderColor = featured ? "rgba(255,255,255,0.7)" : t.accent; (e.currentTarget as HTMLAnchorElement).style.color = featured ? "#fff" : t.accent; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = featured ? "rgba(255,255,255,0.1)" : "transparent"; (e.currentTarget as HTMLAnchorElement).style.borderColor = featured ? "rgba(255,255,255,0.4)" : t.border; (e.currentTarget as HTMLAnchorElement).style.color = featured ? "#fff" : t.text; }}
        style={{
          display: "block", marginTop: 44, textAlign: "center" as const, padding: "18px",
          fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700,
          letterSpacing: "0.1em", textDecoration: "none", textTransform: "uppercase" as const,
          border: `1px solid ${featured ? "rgba(255,255,255,0.4)" : t.border}`,
          color: featured ? "#fff" : t.text,
          background: featured ? "rgba(255,255,255,0.1)" : "transparent",
          transition: "all 0.25s",
        }}>{cta}</a>
    </div>
  );
}

// ─── PHONE MOCKUP ─────────────────────────────────────────────────────────────
function PhoneMockup({ t, dark }: { t: Theme; dark: boolean }) {
  return (
    <div style={{ position: "relative", width: 280, animation: "floatPhone 5s ease-in-out infinite" }}>
      <div style={{ position: "absolute", inset: -40, borderRadius: "50%", background: `radial-gradient(circle,${t.accentPale} 0%,transparent 70%)`, filter: "blur(20px)", animation: "glow 4s ease-in-out infinite" }} />
      <div style={{
        position: "relative", width: 280, height: 560,
        background: dark ? "#1a1a22" : "#e2e4ec",
        borderRadius: 44,
        border: `2px solid ${dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}`,
        boxShadow: dark ? "0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)" : "0 40px 80px rgba(0,0,0,0.15)",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", left: -4, top: 100, width: 4, height: 40, background: dark ? "#2a2a35" : "#c8cad4", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -4, top: 154, width: 4, height: 40, background: dark ? "#2a2a35" : "#c8cad4", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", right: -4, top: 120, width: 4, height: 60, background: dark ? "#2a2a35" : "#c8cad4", borderRadius: "0 2px 2px 0" }} />
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 120, height: 32, background: dark ? "#1a1a22" : "#e2e4ec", borderRadius: "0 0 24px 24px", zIndex: 10 }} />
        <div style={{ position: "absolute", inset: 0, background: dark ? "#0e0e18" : "#f0f2fa", display: "flex", flexDirection: "column" as const }}>
          <div style={{ height: 44, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 24px 6px", flexShrink: 0 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: dark ? "#fff" : "#000", fontFamily: "'Space Mono', monospace" }}>9:41</span>
            <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
              <div style={{ display: "flex", gap: 2, alignItems: "flex-end", height: 10 }}>
                {[4, 6, 8, 10].map((h, i) => <div key={i} style={{ width: 3, height: h, background: dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)", borderRadius: 1 }} />)}
              </div>
            </div>
          </div>
          <div style={{ padding: "16px 20px 12px", flexShrink: 0 }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, letterSpacing: 2, color: t.accent, marginBottom: 2 }}>ReachMVP</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 22, fontWeight: 600, color: dark ? "#fff" : "#000", lineHeight: 1.2 }}>Dashboard</div>
          </div>
          <div style={{ margin: "0 16px 14px", background: `linear-gradient(135deg,${t.accent} 0%,${t.accentLight} 100%)`, borderRadius: 16, padding: "18px 20px" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 4 }}>Monthly Revenue</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#fff", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: -1, lineHeight: 1 }}>€24,800</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 6 }}><span style={{ color: "#a3e635", fontWeight: 700 }}>↑ 32%</span> vs last month</div>
            <div style={{ display: "flex", gap: 4, marginTop: 14, alignItems: "flex-end", height: 28 }}>
              {[40, 55, 45, 70, 60, 85, 100].map((h, i) => <div key={i} style={{ flex: 1, height: `${h}%`, background: "rgba(255,255,255,0.3)", borderRadius: 3 }} />)}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, margin: "0 16px 14px" }}>
            {[["1,240", "Users"], ["89%", "Retention"]].map(([val, label]) => (
              <div key={label} style={{ flex: 1, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: 12, padding: "12px 14px", border: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}` }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: dark ? "#fff" : "#000", fontFamily: "'Bebas Neue', sans-serif" }}>{val}</div>
                <div style={{ fontSize: 11, color: t.sub, fontFamily: "'Space Mono', monospace" }}>{label}</div>
              </div>
            ))}
          </div>
          <div style={{ margin: "0 16px", display: "flex", flexDirection: "column" as const, gap: 8, overflow: "hidden" }}>
            <div style={{ background: dark ? "rgba(59,130,246,0.15)" : "rgba(37,99,235,0.08)", border: `1px solid ${t.accentBorder}`, borderRadius: 12, padding: "10px 14px", animation: "notif1 4s ease-in-out infinite" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: t.accent, fontFamily: "'Space Mono', monospace" }}>NEW SIGNUP</div>
              <div style={{ fontSize: 12, color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)", marginTop: 2 }}>sarah@acme.com just signed up</div>
            </div>
            <div style={{ background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", borderRadius: 12, padding: "10px 14px", animation: "notif2 4s ease-in-out infinite" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#22c55e", fontFamily: "'Space Mono', monospace" }}>PAYMENT</div>
              <div style={{ fontSize: 12, color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)", marginTop: 2 }}>€49 · Pro Plan subscription</div>
            </div>
            <div style={{ background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", borderRadius: 12, padding: "10px 14px", animation: "notif3 4s ease-in-out infinite" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#f59e0b", fontFamily: "'Space Mono', monospace" }}>MILESTONE</div>
              <div style={{ fontSize: 12, color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)", marginTop: 2 }}>1,000 users reached 🎉</div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", width: 100, height: 4, background: dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)", borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );
}
