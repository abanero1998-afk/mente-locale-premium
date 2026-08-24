const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, ho una domanda su Mente Locale');

export const metadata = {
  title: 'FAQ | Mente Locale',
  description: 'Domande frequenti su onboarding, tempi, garanzia e servizi Mente Locale.',
};

const items = [
  {
    q: 'In 7 giorni è realistico?',
    a: 'Sì. Gli stack sono già pronti per ristoranti, saloni e negozi. Tu ci dai accessi e materiali, noi configuriamo e andiamo live. I ritardi di solito arrivano solo se mancano password o contenuti.',
  },
  {
    q: 'Devo cambiare cassa o gestionale?',
    a: 'Quasi mai. Integriamo quello che hai già, dove possibile. Se serve un pezzo nuovo, te lo diciamo prima e con chiarezza.',
  },
  {
    q: 'Come funziona la garanzia 14 giorni?',
    a: 'Se entro 14 giorni dal go-live non sei soddisfatto, puoi richiedere il rimborso secondo quanto scritto a contratto. Senza litigi inutili.',
  },
  {
    q: 'Quanto costa?',
    a: 'Dipende dal pacchetto e dal verticale. Ti facciamo un’offerta chiara dopo un breve confronto su WhatsApp, senza sorprese in fattura.',
  },
  {
    q: 'Resto da solo dopo il go-live?',
    a: 'No. Hai un canale WhatsApp diretto per le domande operative. Non sei un ticket in coda.',
  },
  {
    q: 'Lavorate solo in Italia?',
    a: 'Sì, il focus è sulle attività locali italiane. Lingua, abitudini e strumenti (WhatsApp, pagamenti, delivery) sono pensati per questo contesto.',
  },
  {
    q: 'I miei dati e quelli dei clienti sono al sicuro?',
    a: 'Trattiamo solo i dati necessari e rispettiamo il GDPR. Dettagli in Privacy Policy. I dati dei tuoi clienti restano sotto la tua responsabilità di titolare.',
  },
];

export default function Page() {
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="badge liquid-glass">Supporto</div>
        <h1>Domande frequenti</h1>
        <p className="service-lead">Le risposte chiare, senza giri di parole. Se non trovi la tua, scrivici su WhatsApp.</p>
      </section>

      <section className="products-section">
        <div className="products-grid" style={{ gridTemplateColumns: '1fr', maxWidth: 720, margin: '0 auto' }}>
          {items.map((item) => (
            <article key={item.q} className="product-card liquid-glass">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-cta liquid-glass">
        <div>
          <strong>Non hai trovato la risposta?</strong>
          <span>WhatsApp +39 344 410 6229</span>
        </div>
        <a className="btn-neon liquid-glass" href={WA} target="_blank" rel="noreferrer">
          Chiedi su WhatsApp →
        </a>
      </section>
    </main>
  );
}
