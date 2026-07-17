"use client";

// Infrastructure & civil — page 5 of 5, the final Applications page. DELIBERATELY LIGHTER,
// capability-framed: NO proof band, NO metric signature visual, because DTG has no civil projects
// yet. Bespoke structure (not the shared detail template); reuses the shared .envd-* hero / services
// cross-link / other-environments / CTA, with .civx-* for the capability-specific sections.
// Everything is capability-framed ("what DTG monitors", "the output") — never a delivered claim.
// Spec-card images use CSS background-image with a themed fallback colour, so the 6th card (port,
// civil-port.png, not yet supplied) shows a clean panel and auto-appears when the file is dropped in.

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useEffect } from "react";

const principles = [
  {
    name: "Independent",
    body: "We're not tied to a sensor, a contractor or a product. On your asset, what we recommend is driven by your data — which makes our read one an owner, regulator or insurer can trust.",
  },
  {
    name: "Wide-area first",
    body: "Satellite InSAR lets us see movement across a whole asset and its surrounds — including areas with no instruments — then target ground instrumentation where it matters.",
  },
  {
    name: "Interpreted, not just measured",
    body: "The value isn't the data — it's knowing which movement is real, which is noise, and which is the early signature of a failure mode. That judgement is the whole point.",
  },
] as const;

type Spec = {
  num: string;
  title: string;
  img: string;
  lead: string;
  fields: [string, string][];
};

const specs: Spec[] = [
  {
    num: "01",
    title: "Embankment dams & reservoirs",
    img: "/images/applications/civil-dam.png",
    lead: "Water-retention dams face the same problem as a tailings facility: slow movement and seepage that must be tracked for decades and read against loading and construction history.",
    fields: [
      ["How it fails", "Embankment settlement · slope instability · seepage & internal erosion · crest deformation"],
      ["What DTG monitors", "Wide-area embankment & foundation deformation, crest and slope movement, seepage-related surface change"],
      ["Data sources", "Satellite InSAR · GNSS & prisms · piezometers · survey"],
      ["The output", "A defensible long-term deformation record for owners and dam-safety regulators"],
    ],
  },
  {
    num: "02",
    title: "Road & rail earthworks",
    img: "/images/applications/civil-rail.png",
    lead: "Transport networks carry thousands of ageing cutting and embankment slopes — built for 60-year lives, deteriorating slowly, and increasingly failing fast under climate-driven rainfall, closing routes.",
    fields: [
      ["How it fails", "Slope creep · rainfall-triggered instability · embankment settlement · progressive deterioration"],
      ["What DTG monitors", "Network-wide slope movement, rate of change, and which assets are trending toward failure"],
      ["Data sources", "Satellite InSAR (network-scale) · targeted ground instrumentation · rainfall context"],
      ["The output", "A ranked, watchable list of assets so intervention happens before failure, not after"],
    ],
  },
  {
    num: "03",
    title: "Landslides & natural slopes",
    img: "/images/applications/civil-slope.png",
    lead: "Natural and engineered slopes near roads, rail and communities can move imperceptibly for years, then accelerate. The challenge is knowing which ones — early.",
    fields: [
      ["How it fails", "Slow creep accelerating to failure · reactivation of old slides · rainfall-driven movement"],
      ["What DTG monitors", "Wide-area ground movement including uninstrumented slopes; acceleration trends over time"],
      ["Data sources", "Satellite InSAR (multi-directional) · corner reflectors on vegetated/complex ground · GNSS"],
      ["The output", "Which slopes are moving, how fast, and whether the trend is worsening — a prioritised hazard picture"],
    ],
  },
  {
    num: "04",
    title: "Tunnels & excavations",
    img: "/images/applications/civil-tunnel.png",
    lead: "Excavation moves the ground around it. Monitoring that movement during construction — the observational method — protects nearby structures and lets teams act before damage occurs.",
    fields: [
      ["How it fails", "Convergence & closure · surface settlement · movement of adjacent structures & services"],
      ["What DTG monitors", "Convergence during excavation and surface deformation above and around the works"],
      ["Data sources", "Convergence monitoring · satellite InSAR (surface) · prisms & instruments"],
      ["The output", "Construction-stage movement read in near-real time — the same discipline as our underground mining work"],
    ],
  },
  {
    num: "05",
    title: "Bridges & foundations",
    img: "/images/applications/civil-bridge.png",
    lead: "Most bridge collapses trace to what's happening at or below the foundation — scour and settlement — and the movement often shows up in the data weeks before failure.",
    fields: [
      ["How it fails", "Pier scour during floods · foundation & approach settlement · differential movement & angular distortion"],
      ["What DTG monitors", "Pier, abutment and approach-embankment movement, and differential settlement across the structure"],
      ["Data sources", "Satellite InSAR (SBAS) · GNSS & prisms · integration with structural data"],
      ["The output", "Early-warning movement signatures that conventional periodic inspection can miss between visits"],
    ],
  },
  {
    num: "06",
    title: "Retaining structures & ports",
    // civil-port.png not yet supplied — CSS background falls back to a themed panel until it's dropped in.
    img: "/images/applications/civil-port.png",
    lead: "Retaining walls, quay walls and reclaimed ground fail geotechnically — through movement, settlement and loss of support — often slowly enough to catch if someone is watching.",
    fields: [
      ["How it fails", "Wall rotation & sliding · differential settlement · backfill movement · reclaimed-ground consolidation"],
      ["What DTG monitors", "Wall and quay movement, settlement of reclaimed or filled ground, and rate of change over time"],
      ["Data sources", "Satellite InSAR · GNSS & prisms · survey"],
      ["The output", "A consistent movement record for structures where slow deformation is the early warning"],
    ],
  },
];

const serviceChips: [string, string][] = [
  ["Remote monitoring", "/services/remote-monitoring"],
  ["Data analytics", "/services/data-analytics-automation"],
  ["Reporting & back-analysis", "/services/reporting-back-analysis"],
  ["Technical advisory", "/services/technical-advisory"],
];

const others = [
  {
    en: "Open-pit",
    title: "Open-pit mining",
    desc: "Radar-led slope monitoring, real-time escalation across three operations.",
    href: "/applications/open-pit-mining",
    img: "/images/applications/openpit.png",
    imgAlt: "Terraced open-pit mine with slope-monitoring instruments.",
  },
  {
    en: "Tailings",
    title: "Tailings storage facilities",
    desc: "Slow movement and long-term governance, with InSAR via Catalyst Earth.",
    href: "/applications/tailings-storage-facilities",
    img: "/images/applications/tsf.png",
    imgAlt: "Aerial view of a tailings storage facility embankment and pond.",
  },
  {
    en: "Underground",
    title: "Underground mining",
    desc: "1,000km+ of convergence monitoring delivered.",
    href: "/applications/underground-mining",
    img: "/images/applications/underground.png",
    imgAlt: "Underground mine drive with rock bolting and ventilation ducting.",
  },
];

export function InfrastructureDetail() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-envd-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="envd-page civx-page">
      {/* CINEMATIC HERO — reuse the shared detail hero (image full-bleed, text on the ruler) */}
      <header className="envd-hero">
        <div className="envd-hero__bg">
          <Image
            src="/images/applications/civil.png"
            alt="Mountain highway viaduct beside a bolted and meshed rock cut slope."
            fill
            priority
            sizes="100vw"
            className="envd-hero__img"
          />
        </div>
        <div className="envd-hero__scrim" aria-hidden="true" />
        <div className="envd-hero__content site-container" data-envd-reveal>
          <span className="envd-eyebrow envd-hero__eyebrow">Applications · Infrastructure & civil</span>
          <h1 className="envd-hero__title">
            Infrastructure
            <br />
            & civil
          </h1>
          <p className="envd-hero__lead">
            Dams, slopes, tunnels and civil assets face the same core question as a mine: is the
            ground moving, and does it matter? DTG brings the same independent monitoring and
            analytics to the built environment.
          </p>
          <div className="envd-hero__cta">
            <Link href="/contact" className="envd-btn">
              Talk to DTG
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a href="#approach" className="envd-tlink">
              How our approach applies ↓
            </a>
          </div>
        </div>
        <span className="envd-scrollcue" aria-hidden="true">
          <span>Scroll</span>
          <ArrowDown size={18} />
        </span>
      </header>

      {/* HONEST OPENER — capability, not a proof band */}
      <section className="envd-section civx-opener">
        <div className="site-container civx-opener__grid" data-envd-reveal>
          <div className="civx-opener__big">
            Ground movement doesn&rsquo;t stop at the mine gate. An embankment dam, a road cutting, a
            rail formation or a tunnel all pose the same question — <em>is it moving, how fast, and
            does it matter?</em>
          </div>
          <div className="civx-opener__side">
            <div className="civx-k">Where this fits</div>
            <p>
              DTG&rsquo;s discipline — independent monitoring, rigorous analytics, clear
              interpretation — is asset-agnostic. What changes on a civil asset is the owner, the
              regulator and the setting, not the underlying question.
            </p>
            <p>
              Below are the civil and infrastructure assets where that question is a ground-movement
              problem — and where DTG can help.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH PRINCIPLES */}
      <section className="envd-section civx-applies" id="approach">
        <div className="site-container">
          <div className="envd-sechead" data-envd-reveal>
            <span className="envd-eyebrow">Our approach to civil assets</span>
            <h2>One method, whatever the asset.</h2>
            <p>
              DTG treats every civil asset the same way it treats a mine: identify how it could move,
              watch for that movement with the right mix of sources, and interpret what the data means
              before it becomes a problem. Three principles carry across every asset below.
            </p>
          </div>
          <div className="civx-princ" data-envd-reveal>
            {principles.map((p) => (
              <div className="civx-pr" key={p.name}>
                <div className="civx-pr__n">{p.name}</div>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFIC CIVIL ASSETS — spec cards */}
      <section className="envd-section envd-section--alt civx-assets">
        <div className="site-container">
          <div className="envd-sechead" data-envd-reveal>
            <span className="envd-eyebrow">Where we can help</span>
            <h2>Civil assets where ground movement is the risk.</h2>
            <p>
              Not every structure is a geotechnical problem — but these are. Each is a ground-movement
              problem DTG is built to monitor and interpret.
            </p>
          </div>
          {specs.map((s) => (
            <div className="civx-spec" key={s.num} data-envd-reveal>
              <div
                className="civx-spec__img"
                role="img"
                aria-label={s.title}
                style={{ backgroundImage: `url(${s.img})` }}
              />
              <div className="civx-spec__content">
                <div className="civx-spec__head">
                  <span className="civx-spec__num">{s.num}</span>
                  <h3>{s.title}</h3>
                </div>
                <p className="civx-spec__lead">{s.lead}</p>
                <div className="civx-spec__grid">
                  {s.fields.map(([label, value]) => (
                    <div className="civx-sf" key={label}>
                      <span>{label}</span>
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HONESTY NOTE — the whole point of the no-proof framing */}
      <section className="envd-section">
        <div className="site-container" data-envd-reveal>
          <div className="civx-honest">
            <div className="civx-honest__k">Straight with you</div>
            <p>
              <b>This is a capability, not yet a case study.</b> DTG is actively extending its
              monitoring and analytics into civil and infrastructure work. If you have an asset where
              ground movement matters, we&rsquo;d welcome the conversation — and we&rsquo;ll be clear
              about exactly what we can bring to it.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES CROSS-LINK — reuse shared xlink */}
      <section className="envd-section envd-section--alt">
        <div className="site-container envd-xlink" data-envd-reveal>
          <div className="envd-k">How DTG helps</div>
          <h2 className="envd-xlink__h">The work is our services — wherever the asset is.</h2>
          <p className="envd-xlink__p">
            The monitoring, analytics, reporting and advice we&rsquo;d bring to a civil asset are
            DTG&rsquo;s core services.
          </p>
          <div className="envd-xchips">
            {serviceChips.map(([label, href]) => (
              <Link href={href} key={href} className="envd-xchip">
                {label}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER ENVIRONMENTS — reuse shared tiles */}
      <section className="envd-section">
        <div className="site-container">
          <div className="envd-sechead envd-sechead--tight" data-envd-reveal>
            <span className="envd-eyebrow">Other environments</span>
            <h2>Where else DTG works.</h2>
          </div>
          <div className="envd-others" data-envd-reveal>
            {others.map((o) => (
              <Link
                href={o.href}
                key={o.href}
                className={`envd-othc${o.img && !o.img.includes("civil") ? " envd-othc--dataviz" : ""}`}
              >
                <Image src={o.img} alt={o.imgAlt} fill sizes="(max-width:900px) 100vw, 33vw" className="envd-othc__img" />
                <span className="envd-othc__scrim" aria-hidden="true" />
                <span className="envd-othc__oc">
                  <span className="envd-othc__en">{o.en}</span>
                  <span className="envd-othc__title">{o.title}</span>
                  <span className="envd-othc__desc">{o.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — reuse shared cta (raised) */}
      <section className="envd-section envd-section--alt envd-cta">
        <div className="site-container" data-envd-reveal>
          <h2>Have a civil asset to monitor?</h2>
          <p>Tell us about it — we&rsquo;ll be straight about what DTG can bring, and how we&rsquo;d approach it.</p>
          <Link href="/contact" className="envd-btn">
            Talk to DTG
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
