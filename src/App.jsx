import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
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
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LineChart as ReLineChart,
  Line,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import data from "./data/site.json";

const services = [
  {
    title: "Brand Strategy",
    description:
      "Positioning, identity systems, and brand architecture built to make ambitious companies clearer, sharper, and more competitive.",
    icon: PenTool,
    badges: ["Positioning", "Identity", "Architecture"],
  },
  {
    title: "Web Development",
    description:
      "High-performance websites, UX/UI systems, and custom digital builds designed for credibility, speed, and conversion.",
    icon: Globe,
    badges: ["UX/UI", "Frontend", "Custom Build"],
  },
  {
    title: "Performance Marketing",
    description:
      "Paid media systems across Meta, Google, and TikTok focused on scalable growth, sharper messaging, and measurable lift.",
    icon: Megaphone,
    badges: ["Meta", "Google", "TikTok"],
  },
  {
    title: "E-commerce Strategy",
    description:
      "Store architecture, offer logic, conversion direction, and product presentation designed to improve digital commerce performance.",
    icon: ShoppingBag,
    badges: ["Strategy", "Shopify", "Conversion"],
  },
  {
    title: "Product Development",
    description:
      "Launch readiness, product framing, and market-facing logic developed to improve clarity, structure, and commercial traction.",
    icon: Layers3,
    badges: ["Offers", "Launch", "Systems"],
  },
  {
    title: "Music & Film Rollout",
    description:
      "Album rollout strategy, artist positioning, visual campaign direction, editorial pitching, release sequencing, and platform execution.",
    icon: Disc3,
    badges: ["Spotify", "YouTube", "TikTok"],
  },
];

const sectors = [
  { title: "Retail & Fashion", icon: Store },
  { title: "Cosmetics & Beauty", icon: HeartPulse },
  { title: "Travel & Tourism", icon: Plane },
  { title: "Construction & Materials", icon: Building2 },
  { title: "Music & Entertainment", icon: Radio },
  { title: "Consumer Brands", icon: Package2 },
  { title: "Food & Beverage", icon: UtensilsCrossed },
  { title: "E-commerce", icon: ShoppingBag },
];

const processSteps = [
  { title: "Diagnose", description: "We identify positioning, brand, and execution gaps.", icon: ScanSearch },
  { title: "Position", description: "We define the strategic angle and commercial message architecture.", icon: Target },
  { title: "Design", description: "We shape identity, content direction, and interface systems.", icon: Palette },
  { title: "Build", description: "We develop the website, assets, campaigns, and rollout structure.", icon: Rocket },
  { title: "Scale", description: "We optimize growth systems and performance over time.", icon: LineChartIcon },
];

const momentumData = [
  { name: "W1", growth: 22, rollout: 14 },
  { name: "W2", growth: 36, rollout: 28 },
  { name: "W3", growth: 48, rollout: 41 },
  { name: "W4", growth: 64, rollout: 55 },
  { name: "W5", growth: 82, rollout: 71 },
  { name: "W6", growth: 96, rollout: 88 },
];

const releaseWaveData = [
  { name: "Tease", value: 18 },
  { name: "Reveal", value: 44 },
  { name: "Launch", value: 96 },
  { name: "Push", value: 72 },
  { name: "Sustain", value: 54 },
];

function AlzaLogo() {
  return (
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
  );
}

function ClientTile({ client }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="client-marquee-item">
      <div className="client-card">
        <div className="client-card-inner">
          {client.logo && !failed ? (
            <img
              src={client.logo}
              alt={client.name}
              style={{ maxWidth: "140px", maxHeight: "68px", objectFit: "contain" }}
              onError={() => setFailed(true)}
            />
          ) : (
            <span>{client.name}</span>
          )}
        </div>
      </div>
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
          <AlzaLogo />

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

      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge">
              <Sparkles size={14} />
              Intelligent Creative Systems
            </div>

            <div style={{ height: 24 }} />

            <h1 className="hero-title">
              High-tech brand systems built to
              <span>create instant impact.</span>
            </h1>

            <p className="hero-copy">
              Alzarosa combines strategy, identity, web development, performance marketing,
              and cultural rollout systems into one modern execution layer.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Start a Project
                <ArrowRight size={16} />
              </a>
              <a href="#clients" className="btn-secondary">
                View Work
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-panel"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-panel-overlay" />
          </motion.div>
        </div>
      </section>

      <section className="section-shell-wrap" id="about">
        <div className="section-accent accent-cyan" />
        <div className="section-shell">
          <div className="two-col">
            <div>
              <div className="eyebrow">About</div>
              <div style={{ height: 16 }} />
              <h2>A modern agency model built for sharper positioning and stronger execution.</h2>

              <div className="stack-cards">
                <div className="text-card">
                  We help brands look more advanced, more relevant, and more convincing from the first interaction.
                </div>
                <div className="text-card">
                  From visual systems to websites, campaigns, content direction, and rollout logic, every layer is designed to support growth.
                </div>
                <div className="text-card">
                  The result is a cleaner, stronger, and more intelligent digital presence for ambitious businesses and brands.
                </div>
              </div>
            </div>

            <div className="about-card">
              <div className="card-head">
                <div>
                  <div className="micro-label">System Snapshot</div>
                  <div className="card-title">Brand × Interface × Growth</div>
                </div>
              </div>

              <div style={{ height: 24 }} />

              <div className="text-card">
                Strategy, identity, web experiences, performance systems, e-commerce thinking, and rollout execution in one integrated structure.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell-wrap" id="services">
        <div className="section-accent accent-blue" />
        <div className="section-shell">
          <div className="eyebrow">Services</div>
          <div style={{ height: 16 }} />
          <h2>Integrated capabilities built for brand growth and execution precision.</h2>
          <p style={{ maxWidth: 760, marginTop: 20 }}>
            Strategy, identity, digital experiences, performance systems, e-commerce, and rollout architecture in one modern structure.
          </p>

          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="service-card-wrap"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                >
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
                      {service.badges.map((badge) => (
                        <span key={badge} className="badge">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
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
              <div className="eyebrow">Momentum</div>
              <div style={{ height: 16 }} />
              <h2>Visual systems that turn campaigns and launches into visible movement.</h2>
              <p style={{ maxWidth: 760, marginTop: 20 }}>
                A more dynamic layer for showcasing performance, motion, and commercial rhythm.
              </p>

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
                        <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.55)", fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis hide />
                        <Tooltip />
                        <Area type="monotone" dataKey="growth" stroke="#22d3ee" fill="url(#growthFill)" strokeWidth={2.5} />
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
                        <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.55)", fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis hide />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#d946ef" strokeWidth={3} dot={{ fill: "#22d3ee", strokeWidth: 0, r: 4 }} />
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
                  <span>Motion panel</span>
                </div>
                <div className="hero-media">
                  <div className="hero-media-play">
                    <Play size={18} />
                  </div>
                </div>
              </div>

              <div className="rollout-card">
                <div className="chart-head">
                  <Rocket size={18} />
                  <span>Rollout system</span>
                </div>

                <div className="rollout-stack">
                  <div className="rollout-item">
                    <div className="phase">Phase 01</div>
                    <div className="phase-text">Pre-save / teaser system</div>
                  </div>
                  <div className="rollout-item">
                    <div className="phase">Phase 02</div>
                    <div className="phase-text">Reveal and sequencing</div>
                  </div>
                  <div className="rollout-item">
                    <div className="phase">Phase 03</div>
                    <div className="phase-text">Launch push and paid media</div>
                  </div>
                  <div className="rollout-item">
                    <div className="phase">Phase 04</div>
                    <div className="phase-text">Sustain and post-release lift</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell-wrap" id="sectors">
        <div className="section-accent accent-red" />
        <div className="section-shell">
          <div className="eyebrow">Sectors</div>
          <div style={{ height: 16 }} />
          <h2>Built to adapt across industries, categories, and business models.</h2>
          <p style={{ maxWidth: 760, marginTop: 20 }}>
            A flexible structure designed to support different markets with clarity and execution quality.
          </p>

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
        <div className="section-accent accent-amber" />
        <div className="section-shell">
          <div className="eyebrow">Capability Map</div>
          <div style={{ height: 16 }} />
          <h2>An interactive model of how capabilities influence one another.</h2>
          <p style={{ maxWidth: 760, marginTop: 20 }}>
            Move the controls and watch the system respond across connected brand and growth dimensions.
          </p>

          <div className="capability-grid">
            <div className="chart-card">
              <div className="chart-box tall">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} outerRadius="72%">
                    <PolarGrid stroke="rgba(255,255,255,0.12)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "rgba(255,255,255,0.75)", fontSize: 12 }} />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar dataKey="value" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.28} />
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
        <div className="section-accent accent-white" />
        <div className="section-shell">
          <div className="eyebrow">Process</div>
          <div style={{ height: 16 }} />
          <h2>A structured path from insight to execution.</h2>
          <p style={{ maxWidth: 760, marginTop: 20 }}>
            Each stage is designed to reduce noise, sharpen decisions, and improve quality over time.
          </p>

          <div className="process-grid">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="process-card">
                  <div className="process-icon">
                    <Icon size={30} />
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
        <div className="section-accent accent-cyan" />
        <div className="section-shell">
          <div className="eyebrow">Selected Clients</div>
          <div style={{ height: 16 }} />
          <h2>Trusted by brands across multiple industries and project types.</h2>
          <p style={{ maxWidth: 760, marginTop: 20 }}>
            A selection of companies and brands supported through strategy, identity, digital presence, growth execution, and rollout thinking.
          </p>

          <div className="client-marquee-mask">
            <div className="client-marquee">
              {data.clients.map((client, i) => (
                <ClientTile key={`${client.name}-${i}`} client={client} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell-wrap">
        <div className="section-accent accent-pink" />
        <div className="section-shell">
          <div className="why-grid">
            <div className="why-card">
              <div className="eyebrow">Why Alzarosa</div>
              <div className="why-title">Strategy-first approach</div>
              <p>
                Strategy, identity, interface, rollout logic, and commercial structure working together instead of operating in isolation.
              </p>
            </div>

            <div className="why-card">
              <div className="eyebrow">Why Alzarosa</div>
              <div className="why-title">Execution excellence</div>
              <p>
                A more modern way to build brand presence, digital experiences, performance systems, and release momentum.
              </p>
            </div>

            <div className="why-card">
              <div className="eyebrow">Why Alzarosa</div>
              <div className="why-title">Performance-driven systems</div>
              <p>
                A stronger visual and strategic standard designed to create instant confidence, attention, and recall.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell-wrap" id="contact">
        <div className="section-accent accent-red" />
        <div className="section-shell">
          <div className="contact-grid">
            <div>
              <div className="eyebrow">Contact</div>
              <div className="contact-title">Let’s build something that performs.</div>
              <div className="contact-copy">
                Strategy, identity, web experiences, performance marketing, e-commerce systems, and launch execution.
              </div>
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
