import data from "./data/site.json";

export default function App() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div>
          <h1>{data.hero.title}</h1>
          <p>{data.hero.description}</p>

          <div className="actions">
            <button className="btn btn-primary">
              {data.hero.ctaPrimary}
            </button>

            <button className="btn btn-secondary">
              {data.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2>Services</h2>

        <div className="services-grid">
          {data.services.map((service, i) => (
            <div key={i} className="card">
              <div className="card-inner">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section">
        <h2>Clients</h2>

        <div className="client-row">
          {data.clients.map((client, i) => (
            <div key={i} className="client-card">
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{ maxWidth: "120px", maxHeight: "60px", objectFit: "contain" }}
                />
              ) : (
                <span>{client.name}</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
