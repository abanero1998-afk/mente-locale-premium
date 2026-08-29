export const metadata = {
  title: 'Cookie Policy | Mente Locale',
  description: 'Informativa sui cookie utilizzati sul sito Mente Locale.',
};

export default function Page() {
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="badge liquid-glass">Legale</div>
        <h1>Cookie Policy</h1>
        <p className="service-lead">Come utilizziamo i cookie su questo sito.</p>
      </section>
      <div className="products-section">
        <article className="product-card liquid-glass" style={{ maxWidth: 800, margin: '0 auto' }}>
          <h3>1. Cosa sono i cookie</h3>
          <p>I cookie sono piccoli file di testo salvati sul tuo dispositivo quando visiti un sito. Servono a far funzionare il sito e, eventualmente, a misurarne l’uso.</p>
          <h3 style={{ marginTop: 18 }}>2. Cookie tecnici</h3>
          <p>Utilizziamo cookie strettamente necessari al funzionamento del sito (navigazione, sicurezza, preferenze di base). Non richiedono consenso.</p>
          <h3 style={{ marginTop: 18 }}>3. Cookie di terze parti</h3>
          <p>Il sito può caricare risorse da servizi esterni (es. font Google, immagini Unsplash, hosting Vercel). Questi soggetti possono impostare cookie propri secondo le loro policy.</p>
          <h3 style={{ marginTop: 18 }}>4. Analytics</h3>
          <p>Se attivi strumenti di statistica, i dati sono usati in forma aggregata per migliorare il sito.</p>
          <h3 style={{ marginTop: 18 }}>5. Come gestire i cookie</h3>
          <p>Puoi bloccare o cancellare i cookie dalle impostazioni del browser. La disattivazione di quelli tecnici può compromettere alcune funzioni del sito.</p>
          <h3 style={{ marginTop: 18 }}>6. Contatti</h3>
          <p>Per domande: abanero1998@icloud.com · WhatsApp +39 344 410 6229</p>
          <p style={{ marginTop: 20, fontSize: '0.85rem', color: 'rgba(226,232,240,0.55)' }}>Ultimo aggiornamento: agosto 2026</p>
        </article>
      </div>
    </main>
  );
}
