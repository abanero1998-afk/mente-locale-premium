const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, voglio Negozi Smart — nemmeno una vite persa');

export const metadata = {
  title: 'Ferramenta Smart — Nemmeno una vite persa | Mente Locale',
  description: 'Magazzino IA, preventivi smart, catalogo click&collect. +28% traffico in negozio.',
};

const products = [
  { title: 'Magazzino Smart IA + barcode', desc: 'Inventario automatico. Fotografi il pezzo e il sistema lo trova. Zero viti perse.' },
  { title: 'Preventivi Smart', desc: 'Preventivi in 30 secondi da mobile o WhatsApp. Professionali e immediati.' },
  { title: 'Sito Catalogo + Click&Collect', desc: 'Catalogo online + ritiro in negozio. Vendi anche di notte, consegna in 10 minuti.' },
  { title: 'Inventory alerts', desc: 'Scorta minima e riordini automatici. Non finisci mai i pezzi più venduti.' },
  { title: 'Lead & WhatsApp automatizzati', desc: 'Risposte immediate ai messaggi. Lead qualificati 24/7 senza perdere richieste.' },
  { title: 'Analytics vendite', desc: 'Cosa si vende, cosa resta fermo, trend reali. Decisioni basate sui dati.' },
];

const reviews = [
  { text: 'Non perdiamo più pezzi. Il magazzino è sotto controllo e i clienti trovano tutto.', name: 'Roberto', role: 'Ferramenta Centro' },
  { text: 'Il click&collect ha portato clienti nuovi anche la sera. Il catalogo online funziona.', name: 'Elena', role: 'Brico Point' },
  { text: 'I preventivi da WhatsApp ci hanno fatto chiudere lavori che prima perdevamo.', name: 'Paolo', role: 'Utensileria Pro' },
];

export default function Page() {
  return (
    <main className="service-page service-ferramenta">
      <section className="service-hero">
        <div className="badge liquid-glass">Ferramenta / Negozi Smart</div>
        <h1>Nemmeno una vite persa</h1>
        <p className="service-lead">Fotografi il pezzo, il sistema lo trova. Magazzino, cassa ed e-commerce parlano. Vendi anche di notte con click & collect.</p>
        <div className="kpi-pills service-kpis">
          <div className="kpi-pill liquid-glass"><span className="kpi-val">+28%</span><span className="kpi-sub">traffico</span></div>
          <div className="kpi-pill liquid-glass"><span className="kpi-val">0</span><span className="kpi-sub">perdite</span></div>
          <div className="kpi-pill liquid-glass"><span className="kpi-val">24/7</span><span className="kpi-sub">vendite</span></div>
          <div className="kpi-pill liquid-glass"><span className="kpi-val">10min</span><span className="kpi-sub">ritiro</span></div>
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
        <h2 className="section-title">Cosa dicono i negozi</h2>
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
