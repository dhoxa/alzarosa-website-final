import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  Megaphone,
  PenTool,
  Globe,
  Layers3,
  ShoppingBag,
  BarChart3,
  Store,
  Building2,
  Plane,
  HeartPulse,
  Package2,
  UtensilsCrossed,
  ScanSearch,
  Target,
  Palette,
  Rocket,
  LineChart as LineChartIcon,
  Disc3,
  Play,
  Radio,
  Clapperboard,
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LineChart as ReLineChart,
  Line,
} from "recharts";

const services = [
  {
    title: "Marketing Strategy",
    icon: Megaphone,
    description:
      "Strategic planning, campaign architecture, audience direction, and growth systems built for measurable business momentum.",
    platforms: ["Meta", "Google", "TikTok"],
  },
  {
    title: "Branding & Identity",
    icon: PenTool,
    description:
      "Naming, positioning, visual systems, and identity frameworks designed to make brands instantly clearer and more distinctive.",
    platforms: ["Identity", "Visual", "Voice"],
  },
  {
    title: "Web Development",
    icon: Globe,
    description:
      "Modern digital experiences, business websites, and landing pages created to combine precision, speed, and conversion focus.",
    platforms: ["UX/UI", "Landing Pages", "Webflow"],
  },
  {
    title: "Product Development",
    icon: Layers3,
    description:
      "Offer structure, launch readiness, product framing, and market-facing logic for stronger commercial clarity.",
    platforms: ["Offer", "Launch", "Structure"],
  },
  {
    title: "E-commerce Strategy",
    icon: ShoppingBag,
    description:
      "Store architecture, customer journey refinement, product presentation, and performance optimization across commerce systems.",
    platforms: ["Shopify", "Funnels", "CRO"],
  },
  {
    title: "Digital Advertising",
    icon: BarChart3,
    description:
      "Paid media execution across major platforms with structured testing, creative direction, and performance control.",
    platforms: ["Meta", "Google", "TikTok"],
  },
  {
    title: "Music Marketing",
    icon: Disc3,
    description:
      "Targeted campaigns for artists, singles, and album cycles across streaming, short-form video, digital ads, and audience growth.",
    platforms: ["Spotify", "YouTube", "TikTok"],
  },
  {
    title: "Song & Album Rollout",
    icon: Clapperboard,
    description:
      "End-to-end rollout systems for songs and albums, including teaser strategy, content sequencing, release timing, platform coordination, and post-release momentum.",
    platforms: ["Singles", "Albums", "Rollout"],
  },
];

const sectors = [
  { title: "Retail & Fashion", icon: Store },
  { title: "Construction & Home Improvement", icon: Building2 },
  { title: "E-commerce", icon: ShoppingBag },
  { title: "Travel & Hospitality", icon: Plane },
  { title: "Health & Beauty", icon: HeartPulse },
  { title: "Consumer Brands", icon: Package2 },
  { title: "Food & Beverage", icon: UtensilsCrossed },
  { title: "Music & Entertainment", icon: Radio },
];

const processSteps = [
  {
    title: "Scan",
    description:
      "Read the business, market, product, and digital context with precision.",
    icon: ScanSearch,
  },
  {
    title: "Position",
    description:
      "Define direction, competitive edge, audience logic, and growth priorities.",
    icon: Target,
  },
  {
    title: "Design",
    description:
      "Build the identity, interface, and communication system around the strategy.",
    icon: Palette,
  },
  {
    title: "Deploy",
    description:
      "Launch assets, campaigns, and digital infrastructure across relevant channels.",
    icon: Rocket,
  },
  {
    title: "Optimize",
    description:
      "Measure, refine, and improve continuously through performance feedback.",
    icon: LineChartIcon,
  },
];

const clients = [
  "Temaj Qeramike",
  "Spirit of Drini",
  "Temaj WinDoor",
  "Ephesus Travel",
  "EQ",
  "EMO",
  "AM",
  "Green Arrow",
  "Zani",
  "Collagen Prime",
  "Patos",
  "ZZ Travel",
  "Sun Snow",
  "Frutti",
  "UPay",
  "ADE Skincare",
  "Monun Garden",
  "ABO-SI",
  "G",
  "EBC Cosmetics",
  "Comfort Clima",
  "A&M Clothes",
  "Jack & Jones",
];

const momentumData = [
  { name: "W1", growth: 26, rollout: 18 },
  { name: "W2", growth: 34, rollout: 28 },
  { name: "W3", growth: 48, rollout: 42 },
  { name: "W4", growth: 62, rollout: 54 },
  { name: "W5", growth: 78, rollout: 72 },
  { name: "W6", growth: 92, rollout: 88 },
];

const releaseWaveData = [
  { name: "Tease", value: 18 },
  { name: "Reveal", value: 42 },
  { name: "Launch", value: 96 },
  { name: "Push", value: 74 },
  { name: "Sustain", value: 58 },
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div style={{ maxWidth: 760 }}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 style={{ marginTop: 16 }}>{title}</h2>
      {text ? <p style={{ marginTop: 20 }}>{text}</p> : null}
    </div>
  );
}

export default function App() {
  const [controls, setControls] = useState({
    brand: 92,
    web: 88,
    ecommerce: 90,
    growth: 94,
    creative: 91,
    strategy: 96,
  });

  const influenced = useMemo(() => {
    const c = controls;
    return {
      brand: Math.round(c.brand * 0.6 + c.strategy * 0.15 + c.creative * 0.15 + c.web * 0.1),
      web: Math.round(c.web * 0.5 + c.brand * 0.2 + c.strategy * 0.15 + c.creative * 0.15),
      ecommerce: Math.round(c.ecommerce * 0.45 + c.web * 0.2 + c.strategy * 0.15 + c.growth * 0.2),
      growth: Math.round(c.growth * 0.45 + c.strategy * 0.2 + c.web * 0.1 + c.brand * 0.1 + c.ecommerce * 0.15),
      creative: Math.round(c.creative * 0.45 + c.brand * 0.25 + c.strategy * 0.2 + c.web * 0.1),
      strategy: Math.round(c.strategy * 0.45 + c.brand * 0.15 + c.growth * 0.2 + c.web * 0.1 + c.ecommerce * 0.1),
    };
  }, [controls]);

  const radarData = [
    { subject: "Brand", value: influenced.brand },
    { subject: "Web", value: influenced.web },
    { subject: "E-com", value: influenced.ecommerce },
    { subject: "Growth", value: influenced.growth },
    { subject: "Creative", value: influenced.creative },
    { subject: "Strategy", value: influenced.strategy },
  ];

  const sliders = [
    { key: "brand", label: "Brand" },
    { key: "web", label: "Web" },
    { key: "ecommerce", label: "E-commerce" },
    { key: "growth", label: "Growth" },
    { key: "creative", label: "Creative" },
    { key: "strategy", label: "Strategy" },
  ];

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-row">
          <div className="alza-logo-wrap">
            <div className="alza-square">
              <div className="alza-square-red" />
              <div className="alza-square-white" />
            </div>
            <div className="alza-wordmark">
              <div className="alza-text">alzarosa</div>
              <div className="alza-sub">LLC</div>
            </div>
          </div>

          <nav className="desktop-nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#sectors">Sectors</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="header-cta">
            Start a Project
          </a>
        </div>
      </header>

      <section className="hero-section container">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              <Sparkles size={14} />
              Intelligent Creative Systems
            </div>

            <h1 className="hero-title" style={{ marginTop: 32 }}>
              High-tech brand systems
              <span> built to create instant impact.</span>
            </h1>

            <p className="hero-copy">
              Alzarosa creates next-generation brand experiences through strategy,
              identity, web development, e-commerce thinking, performance
              marketing, and music rollout execution.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Book a Consultation <ArrowRight size={16} />
              </a>
              <a href="#clients" className="btn-secondary">
                View Clients
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-overlay" />
          </div>
        </div>
      </section>

      <section className="section-shell-wrap" id="about">
        <div className="section-accent accent-cyan" />
        <div className="section-shell">
          <div className="two-col">
            <div>
              <SectionTitle
                eyebrow="About"
                title="A modern agency model built for sharper positioning and stronger execution."
                text="Alzarosa brings strategy, creative direction, digital systems, commercial thinking, and media rollout logic into one connected structure."
              />
              <div className="stack-cards">
                {[
                  "The focus is to build brands that feel more advanced, more relevant, and more convincing from the very first interaction.",
                  "From identity systems to interfaces, performance campaigns, and music release rollouts, every layer is designed to support both perception and momentum.",
                  "The result is a cleaner, stronger, and more intelligent digital presence for ambitious businesses, brands, and artists.",
                ].map((t) => (
                  <div key={t} className="text-card">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="about-card">
              <div className="card-head">
                <div>
                  <div className="micro-label">System Snapshot</div>
                  <div className="card-title">Brand × Interface × Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell-wrap" id="services">
        <div className="section-accent accent-blue" />
        <div className="section-shell">
          <SectionTitle
            eyebrow="Services"
            title="Advanced capabilities designed for brand growth and digital precision."
            text="Integrated services across strategy, identity, interfaces, commerce, performance, music marketing, and song or album rollout systems."
          />

          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="service-card-wrap">
                  <div className="service-card">
                    <div className="service-head">
                      <div className="service-icon">
                        <Icon size={18} />
                      </div>
                      <div className="service-num">0{index + 1}</div>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="badge-row">
                      {service.platforms.map((p) => (
                        <span key={p} className="badge">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell-wrap">
        <div className="section-accent accent-pink" />
        <div className="section-shell">
          <div className="momentum-grid">
            <div>
              <SectionTitle
                eyebrow="Momentum"
                title="Visual systems that turn campaigns and releases into visible movement."
                text="A more media-driven layer added to the homepage to make the brand feel faster, sharper, and more alive."
              />

              <div className="chart-grid">
                <div className="chart-card">
                  <div className="chart-head">
                    <BarChart3 size={18} />
                    <span>Campaign momentum</span>
                  </div>
                  <div className="chart-box">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={momentumData}>
                        <defs>
                          <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.45} />
                            <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                        <XAxis
                          dataKey="name"
                          tick={{ fill: "rgba(255,255,255,0.55)", fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis hide />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="growth"
                          stroke="#22d3ee"
                          fill="url(#growthFill)"
                          strokeWidth={2.5}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="chart-card">
                  <div className="chart-head">
                    <Disc3 size={18} />
                    <span>Release intensity</span>
                  </div>
                  <div className="chart-box">
                    <ResponsiveContainer width="100%" height="100%">
                      <ReLineChart data={releaseWaveData}>
                        <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                        <XAxis
                          dataKey="name"
                          tick={{ fill: "rgba(255,255,255,0.55)", fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis hide />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#d946ef"
                          strokeWidth={3}
                          dot={{ fill: "#22d3ee", strokeWidth: 0, r: 4 }}
                        />
                      </ReLineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            <div className="momentum-side">
              <div className="media-tile">
                <div className="chart-head">
                  <Play size={18} />
                  <span>Hero media tile</span>
                </div>
                <div className="hero-media">
                  <div className="hero-media-play">
                    <Play size={22} />
                  </div>
                </div>
              </div>

              <div className="rollout-card">
                <div className="chart-head">
                  <Radio size={18} />
                  <span>Rollout architecture</span>
                </div>
                <div className="rollout-stack">
                  {[
                    ["Phase 01", "Pre-save / teaser system"],
                    ["Phase 02", "Reveal and content sequencing"],
                    ["Phase 03", "Launch push and paid support"],
                    ["Phase 04", "Sustain and post-release lift"],
                  ].map(([phase, text]) => (
                    <div key={phase} className="rollout-item">
                      <div className="phase">{phase}</div>
                      <div className="phase-text">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell-wrap" id="sectors">
        <div className="section-accent accent-pink" />
        <div className="section-shell">
          <SectionTitle
            eyebrow="Sectors"
            title="Built to adapt across industries, markets, and business models."
            text="A flexible structure designed to support different categories with clarity, relevance, and execution quality."
          />

          <div className="sector-grid">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div key={sector.title} className="sector-card">
                  <div className="sector-visual cyan">
                    <div className="sector-icon">
                      <Icon size={34} />
                    </div>
                  </div>
                  <div className="sector-title">{sector.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell-wrap">
        <div className="section-accent accent-red" />
        <div className="section-shell">
          <SectionTitle
            eyebrow="Capability Map"
            title="An interactive model of how Alzarosa capabilities influence one another."
            text="Move the controls and watch the system respond across connected brand and growth dimensions."
          />

          <div className="capability-grid">
            <div className="chart-card">
              <div className="chart-box tall">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} outerRadius="72%">
                    <PolarGrid stroke="rgba(255,255,255,0.12)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "rgba(255,255,255,0.75)", fontSize: 12 }}
                    />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      dataKey="value"
                      stroke="#22d3ee"
                      fill="#22d3ee"
                      fillOpacity={0.28}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="slider-grid">
              {sliders.map(({ key, label }) => (
                <div key={key} className="slider-card">
                  <div className="slider-head">
                    <span>{label}</span>
                    <span className="cyan-text">{influenced[key]}</span>
                  </div>
                  <input
                    type="range"
                    min={40}
                    max={100}
                    value={controls[key]}
                    onChange={(e) =>
                      setControls((prev) => ({
                        ...prev,
                        [key]: Number(e.target.value),
                      }))
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell-wrap">
        <div className="section-accent accent-amber" />
        <div className="section-shell">
          <SectionTitle
            eyebrow="Process"
            title="A structured pathway from insight to execution."
            text="Each stage is designed to reduce noise, sharpen decisions, and improve the quality of execution over time."
          />

          <div className="process-grid">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="process-card">
                  <div className="process-icon">
                    <Icon size={32} />
                  </div>
                  <div className="process-title">{step.title}</div>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell-wrap" id="clients">
        <div className="section-accent accent-white" />
        <div className="section-shell">
          <SectionTitle
            eyebrow="Selected Clients"
            title="Trusted by brands across multiple industries and project types."
            text="A selection of companies and brands supported through strategy, branding, digital presence, growth execution, and rollout thinking."
          />

          <div className="client-marquee-mask">
            <div className="client-marquee">
              {[...clients, ...clients].map((name, i) => (
                <div key={`${name}-${i}`} className="client-marquee-item">
                  <div className="client-card">
                    <div className="client-card-inner">{name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell-wrap">
        <div className="section-accent accent-cyan" />
        <div className="section-shell">
          <div className="why-grid">
            {[
              [
                "Integrated intelligence",
                "Strategy, identity, interface, rollout logic, and commercial structure working together instead of operating in isolation.",
              ],
              [
                "Future-facing execution",
                "A more modern way to build brand presence, digital experiences, performance systems, and release momentum.",
              ],
              [
                "Immediate brand impact",
                "A stronger visual and strategic standard designed to create instant confidence, attention, and recall.",
              ],
            ].map(([t, txt]) => (
              <div key={t} className="why-card">
                <div className="eyebrow">Why Alzarosa</div>
                <div className="why-title">{t}</div>
                <p>{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell-wrap" id="contact">
        <div className="section-accent accent-red" />
        <div className="section-shell">
          <div className="contact-grid">
            <div>
              <div className="eyebrow">Contact</div>
              <h2 className="contact-title">
                Ready to build a sharper and more impressive digital presence?
              </h2>
              <p className="contact-copy">
                Let’s discuss the next step for your brand, your product, your
                campaign, or your next song and album rollout.
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-item">
                <Mail size={18} />
                <div>
                  <div className="micro-label">Email</div>
                  <div className="contact-text">alzarosallc@gmail.com</div>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={18} />
                <div>
                  <div className="micro-label">Phones</div>
                  <div className="contact-text">+383 49 444 806</div>
                  <div className="contact-text secondary">+383 49 31 31 16</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
