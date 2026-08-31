const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, voglio Ristorazione Smart — Tavolo Sempre Pieno');

export const metadata = {
  title: 'Ristorazione Smart — Tavolo Sempre Pieno | Mente Locale',
  description: 'Sala live, carta QR, KDS cucina+bar, magazzino IA e HACCP Pro. Personalizzato sul tuo locale.',
};

const modules = [
  {
    href: '/ristorazione/sala',
    kicker: '01 · Sala',
    title: 'SALA LIVE',
    tag: 'Controlli 22 tavoli dal telefono. Senza urlare.',
    items: ['Planimetria glass 22 tavoli', 'VIP / conto / occupato live', 'Analytics vendite in sala'],
  },
  {
    href: '/ristorazione/carta',
    kicker: '02 · Menu',
    title: 'CARTA VIVA',
    tag: 'Cambi un prezzo in 10 secondi. Senza ristampare.',
    items: ['QR flip 3D → menu', 'Prezzo e lingue live', 'Push carta aggiornata'],
  },
  {
    href: '/ristorazione/kds',
    kicker: '03 · Cucina',
    title: 'KDS CUCINA + BAR',
    tag: 'Comanda dal tavolo → cucina + bar in 0.3s. Zero carta.',
    items: ['Tablet cucina + display bar', 'Allergie e ritorni', 'Pronto con pass al bar'],
  },
  {
    href: '/ristorazione/magazzino',
    kicker: '04 · Compliance',
    title: 'MAGAZZINO + HACCP',
    tag: 'Sa che finirai il Monfortino prima di te. E ti salva dal NAS.',
    items: ['Stock IA e food cost', 'Termometro e checklist', 'PDF automatici'],
  },
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
        <h2 className="section-title">Ristorazione</h2>
        <p className="service-lead" style={{ marginTop: 8, maxWidth: 640 }}>
          Personalizziamo ogni cosa in linea al tuo locale perché sono i dettagli che fanno la differenza
        </p>
        <div className="products-grid">
          {modules.map((p) => (
            <a key={p.href} href={p.href} className="product-card liquid-glass" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <p className="rd-kicker">{p.kicker}</p>
              <h3>{p.title}</h3>
              <p>{p.tag}</p>
              <ul>
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <span className="v-more">Apri il modulo →</span>
            </a>
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
