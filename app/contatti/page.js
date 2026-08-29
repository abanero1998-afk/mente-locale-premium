const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, voglio conoscere Mente Locale');

export const metadata = {
  title: 'Chi siamo | Mente Locale',
  description: 'La storia di Mente Locale: tecnologia semplice per attività locali che vogliono più clienti e meno sbatti.',
};

export default function Page() {
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="badge liquid-glass">Chi siamo</div>
        <h1>Non siamo un’agenzia.
          <br />Siamo il braccio digitale del tuo locale.</h1>
        <p className="service-lead">
          Mente Locale nasce da una convinzione semplice: i ristoranti, i saloni e i negozi non hanno bisogno di software complicati.
          Hanno bisogno di strumenti che funzionano in 7 giorni e si sentono dal primo weekend.
        </p>
      </section>
      <section className="products-section">
        <div className="products-grid">
          <article className="product-card liquid-glass">
            <h3>La storia</h3>
            <p>Abbiamo visto troppi titolari passare le serate a inseguire no-show, scorte finite e messaggi WhatsApp senza risposta. Così abbiamo costruito pacchetti pronti — non progetti lunghi mesi — pensati per chi lavora sul campo.</p>
          </article>
          <article className="product-card liquid-glass">
            <h3>Come lavoriamo</h3>
            <p>Onboarding in 24 ore. Setup in una settimana. Garanzia 14 giorni soddisfatto o rimborsato, scritta a contratto. Parliamo chiaro e restiamo raggiungibili su WhatsApp.</p>
          </article>
          <article className="product-card liquid-glass">
            <h3>Per chi</h3>
            <p>Ristoranti, trattorie, pizzerie. Parrucchieri ed estetisti. Ferramenta e negozi di prossimità. Se hai un’attività locale e vuoi più clienti con meno caos, siamo il pezzo che ti manca.</p>
          </article>
        </div>
      </section>
      <section className="service-cta liquid-glass">
        <div>
          <strong>Parliamone</strong>
          <span>WhatsApp +39 344 410 6229 · abanero1998@icloud.com</span>
        </div>
        <a className="btn-neon liquid-glass" href={WA} target="_blank" rel="noreferrer">Scrivici su WhatsApp →</a>
      </section>
    </main>
  );
}
