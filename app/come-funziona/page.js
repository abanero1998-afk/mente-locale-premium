const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, voglio partire con l onboarding');

export const metadata = {
  title: 'Come funziona | Mente Locale',
  description: 'Onboarding 24h, go-live in 7 giorni. Il metodo Mente Locale passo dopo passo.',
};

const steps = [
  {
    n: '01',
    title: 'Kick-off WhatsApp',
    desc: 'Ci scrivi. In 24 ore fissiamo il brief: cosa ti serve, accessi, menu o listino, obiettivi. Niente call infinite.',
  },
  {
    n: '02',
    title: 'Setup e integrazioni',
    desc: 'Configuriamo sito, menu/QR o agenda, WhatsApp, magazzino o cassa dove serve. Tu lavori, noi montiamo.',
  },
  {
    n: '03',
    title: 'Test con te',
    desc: 'Proviamo insieme i flussi critici (prenotazione, comanda, ordine, alert). Correggiamo prima del go-live.',
  },
  {
    n: '04',
    title: 'Go-live + formazione',
    desc: 'Entro 7 giorni sei online. Formiamo lo staff in modo pratico. Poi resti con un canale WhatsApp diretto.',
  },
];

export default function Page() {
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="badge liquid-glass">Metodo</div>
        <h1>Come funziona</h1>
        <p className="service-lead">
          Onboarding in 24 ore. Live in 7 giorni. Garanzia 14 giorni. Niente progetti che durano mesi.
        </p>
      </section>

      <section className="products-section">
        <div className="products-grid">
          {steps.map((s) => (
            <article key={s.n} className="product-card liquid-glass">
              <h3>
                <span style={{ color: '#67e8f9', marginRight: 8 }}>{s.n}</span>
                {s.title}
              </h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-cta liquid-glass">
        <div>
          <strong>✓ Soddisfatto o rimborsato 14 giorni</strong>
          <span>Scritto a contratto · Zero rischi</span>
        </div>
        <a className="btn-neon liquid-glass" href={WA} target="_blank" rel="noreferrer">
          Prenota onboarding 24h →
        </a>
      </section>
    </main>
  );
}
