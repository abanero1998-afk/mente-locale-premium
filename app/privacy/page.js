export const metadata = {
  title: 'Privacy Policy | Mente Locale',
  description: 'Informativa sulla privacy di Mente Locale — trattamento dati personali GDPR.',
};

export default function Page() {
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="badge liquid-glass">Legale</div>
        <h1>Privacy Policy</h1>
        <p className="service-lead">Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).</p>
      </section>
      <div className="products-section">
        <article className="product-card liquid-glass" style={{ maxWidth: 800, margin: '0 auto' }}>
          <h3>1. Titolare del trattamento</h3>
          <p>Mente Locale — email: abanero1998@icloud.com — WhatsApp: +39 344 410 6229.</p>
          <h3 style={{ marginTop: 18 }}>2. Dati raccolti</h3>
          <p>Raccogliamo solo i dati che ci fornisci volontariamente (nome, numero di telefono, messaggio WhatsApp, email) per rispondere alle richieste di informazione e onboarding.</p>
          <h3 style={{ marginTop: 18 }}>3. Finalità</h3>
          <p>Gestione richieste commerciali, onboarding clienti, assistenza e adempimenti contrattuali. Non vendiamo né cediamo i tuoi dati a terzi per marketing.</p>
          <h3 style={{ marginTop: 18 }}>4. Base giuridica</h3>
          <p>Consenso dell’interessato e/o esecuzione di misure precontrattuali e contrattuali.</p>
          <h3 style={{ marginTop: 18 }}>5. Conservazione</h3>
          <p>I dati sono conservati per il tempo necessario a evadere la richiesta e, se diventa cliente, per la durata del rapporto e gli obblighi di legge.</p>
          <h3 style={{ marginTop: 18 }}>6. Diritti</h3>
          <p>Puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità e opposizione scrivendo a abanero1998@icloud.com o su WhatsApp.</p>
          <h3 style={{ marginTop: 18 }}>7. Cookie</h3>
          <p>Per i dettagli sui cookie consulta la <a href="/cookie" style={{ color: '#67e8f9' }}>Cookie Policy</a>.</p>
          <p style={{ marginTop: 20, fontSize: '0.85rem', color: 'rgba(226,232,240,0.55)' }}>Ultimo aggiornamento: agosto 2026</p>
        </article>
      </div>
    </main>
  );
}
