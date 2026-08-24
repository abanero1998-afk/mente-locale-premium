const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, voglio Ristorazione Smart — Tavolo Sempre Pieno');

export const metadata = {
  title: 'Ristorazione Smart — Tavolo Sempre Pieno | Mente Locale',
  description: 'Gestionale comande, QR menu, HACCP Pro, prenotazioni WhatsApp. +30% coperti in 7 giorni.',
};

const products = [
  { title: 'Gestionale Comande', desc: 'Comande digitali sincronizzate tra sala e cucina. Zero carta, zero errori, ordine sempre chiaro.' },
  { title: 'QR Menu Digitale', desc: 'Menu interattivo aggiornabile in tempo reale. Allergeni, foto, upselling automatico.' },
  { title: 'HACCP Pro', desc: 'Check-list digitali, alert scadenze e report automatici. Conformità senza stress.' },
  { title: 'Prenotazioni WhatsApp + IA', desc: 'Booking 24/7, reminder automatici e gestione no-show. I tavoli si riempiono da soli.' },
  { title: 'Sito Web + SEO Locale', desc: 'Sito veloce ottimizzato per Google Maps e ricerche locali. Più clienti dal web.' },
  { title: 'Analytics & Report', desc: 'Dashboard coperti, ticket medio e performance reali. Decidi con i numeri, non a sentimento.' },
];

const reviews = [
  { text: 'In 11 giorni i tavoli del venerdì sono sempre pieni. Zero sbatti con le comande.', name: 'Marco', role: 'Trattoria del Borgo' },
  { text: 'Le comande digitali ci hanno tolto 2 ore di lavoro al giorno. La cucina ringrazia.', name: 'Laura', role: 'Osteria 12' },
  { text: 'I no-show sono quasi spariti grazie ai reminder WhatsApp. Valeva ogni centesimo.', name: 'Andrea', role: 'Ristorante Il Giardino' },
];

export default function Page() {
  return (
    <main className="service-page service-ristoranti">
      <section className="service-hero">
        <div className="badge liquid-glass">Ristorazione Smart</div>
        <h1>Tavolo Sempre Pieno</h1>
        <p className="service-lead">Dal QR al piatto, senza sbatti. Il cliente inquadra, ordina, paga. La cucina riceve la comanda pulita. Tu riempi i tavoli e tagli gli errori.</p>
        <div className="kpi-pills service-kpis">
          <div className="kpi-pill liquid-glass"><span className="kpi-val">+30%</span><span className="kpi-sub">coperti</span></div>
          <div className="kpi-pill liquid-glass"><span className="kpi-val">−80%</span><span className="kpi-sub">no-show</span></div>
          <div className="kpi-pill liquid-glass"><span className="kpi-val">0</span><span className="kpi-sub">errori</span></div>
          <div className="kpi-pill liquid-glass"><span className="kpi-val">7gg</span><span className="kpi-sub">live</span></div>
        </div>
      </section>
      <section className="products-section">
        <h2 className="section-title">Cosa puoi attivare</h2>
        <div className="products-grid">
          {products.map((p) => (
            <article key={p.title} className="product-card liquid-glass">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a className="btn-wa-sm liquid-glass" href={WA} target="_blank" rel="noreferrer">Richiedi su WhatsApp →</a>
            </article>
          ))}
        </div>
      </section>
      <section className="reviews-section">
        <h2 className="section-title">Cosa dicono i ristoratori</h2>
        <div className="reviews-grid">
          {reviews.map((r) => (
            <blockquote key={r.name} className="review-card liquid-glass">
              <div className="stars">★★★★★</div>
              <p>“{r.text}”</p>
              <footer><strong>{r.name}</strong><span>{r.role}</span></footer>
            </blockquote>
          ))}
        </div>
      </section>
      <section className="service-cta liquid-glass">
        <div><strong>✓ Soddisfatto o rimborsato 14 giorni</strong><span>Onboarding 24h · Zero rischi</span></div>
        <a className="btn-neon liquid-glass" href={WA} target="_blank" rel="noreferrer">Prenota onboarding 24h →</a>
      </section>
    </main>
  );
}
