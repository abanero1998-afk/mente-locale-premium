const WA = 'https://wa.me/393331234567?text=' + encodeURIComponent('Ciao, voglio Agenda Blindata per il salone');

export const metadata = {
  title: 'Parrucchieri Smart — Agenda Blindata | Mente Locale',
  description: 'Agenda IA, gestionale estetica, app clienti, reminder WhatsApp. −80% no-show.',
};

const products = [
  {
    title: 'Agenda Smart IA',
    desc: 'Calendario intelligente che riempie i buchi da solo. Ottimizza slot e riduce i tempi morti.',
  },
  {
    title: 'Gestionale Estetica',
    desc: 'Storico clienti, trattamenti, note private e preferenze. Tutto organizzato in un click.',
  },
  {
    title: 'App Clienti & Fidelity',
    desc: 'App branded per iOS/Android. Prenotazioni autonome e programma fedeltà integrato.',
  },
  {
    title: 'Reminder WhatsApp automatici',
    desc: 'Messaggi personalizzati 24h e 2h prima dell’appuntamento. No-show quasi azzerati.',
  },
  {
    title: 'Sito + Booking online',
    desc: 'Sito premium con calendario live. I clienti prenotano anche di notte.',
  },
  {
    title: 'Inventory prodotti & alert',
    desc: 'Scorte coloranti, shampoo e prodotti. Avvisi automatici prima che finiscano.',
  },
];

const reviews = [
  {
    text: 'L’agenda si riempie da sola. I buchi del martedì sono spariti in due settimane.',
    name: 'Giulia',
    role: 'Hair Studio Milano',
  },
  {
    text: 'I clienti adorano l’app. Prenotano da soli e arrivano puntuali grazie ai reminder.',
    name: 'Francesca',
    role: 'Estetica Bellezza',
  },
  {
    text: 'Meno disdette last minute, più incassi. Finalmente lavoro senza stress da telefono.',
    name: 'Davide',
    role: 'Barber Lab',
  },
];

export default function Page() {
  return (
    <main className="service-page service-parrucchieri">
      <section className="service-hero">
        <div className="badge liquid-glass">Parrucchieri / Estetisti Smart</div>
        <h1>Agenda Blindata</h1>
        <p className="service-lead">
          I buchi si riempiono da soli. I clienti prenotano dall’app, ricevono promemoria WhatsApp e tu smetti di rincorrere i no-show.
        </p>
        <div className="kpi-pills service-kpis">
          <div className="kpi-pill liquid-glass"><span className="kpi-val">+35%</span><span className="kpi-sub">clienti</span></div>
          <div className="kpi-pill liquid-glass"><span className="kpi-val">−75%</span><span className="kpi-sub">disdette</span></div>
          <div className="kpi-pill liquid-glass"><span className="kpi-val">0</span><span className="kpi-sub">buchi</span></div>
          <div className="kpi-pill liquid-glass"><span className="kpi-val">24/7</span><span className="kpi-sub">booking</span></div>
        </div>
      </section>

      <section className="products-section">
        <h2 className="section-title">Cosa puoi attivare</h2>
        <div className="products-grid">
          {products.map((p) => (
            <article key={p.title} className="product-card liquid-glass">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a className="btn-wa-sm liquid-glass" href={WA} target="_blank" rel="noreferrer">
                Richiedi su WhatsApp →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <h2 className="section-title">Cosa dicono i saloni</h2>
        <div className="reviews-grid">
          {reviews.map((r) => (
            <blockquote key={r.name} className="review-card liquid-glass">
              <div className="stars">★★★★★</div>
              <p>“{r.text}”</p>
              <footer>
                <strong>{r.name}</strong>
                <span>{r.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="service-cta liquid-glass">
        <div>
          <strong>✓ Soddisfatto o rimborsato 14 giorni</strong>
          <span>Onboarding 24h · Zero rischi</span>
        </div>
        <a className="btn-neon liquid-glass" href={WA} target="_blank" rel="noreferrer">
          Prenota onboarding 24h →
        </a>
      </section>
    </main>
  );
}
