export const metadata = {
  title: 'Termini e Condizioni | Mente Locale',
  description: 'Termini e condizioni di utilizzo dei servizi Mente Locale.',
};

export default function Page() {
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="badge liquid-glass">Legale</div>
        <h1>Termini e Condizioni</h1>
        <p className="service-lead">Condizioni generali di utilizzo e di fornitura dei servizi Mente Locale.</p>
      </section>
      <div className="products-section">
        <article className="product-card liquid-glass" style={{ maxWidth: 800, margin: '0 auto' }}>
          <h3>1. Oggetto</h3>
          <p>Mente Locale fornisce servizi digitali per attività locali (ristorazione, saloni, negozi): siti, gestionali, automazioni WhatsApp, onboarding e supporto.</p>
          <h3 style={{ marginTop: 18 }}>2. Onboarding e tempi</h3>
          <p>L’onboarding standard è in 24 ore dalla conferma. Il go-live è previsto entro 7 giorni, salvo ritardi dovuti a accessi o materiali non forniti dal cliente.</p>
          <h3 style={{ marginTop: 18 }}>3. Garanzia 14 giorni</h3>
          <p>Se non sei soddisfatto entro 14 giorni dal go-live, puoi richiedere il rimborso secondo quanto concordato a contratto. La garanzia non copre usi impropri o mancata collaborazione del cliente.</p>
          <h3 style={{ marginTop: 18 }}>4. Responsabilità del cliente</h3>
          <p>Il cliente fornisce contenuti veritieri, accessi necessari e rispetta le normative del proprio settore (HACCP, privacy clienti, ecc.).</p>
          <h3 style={{ marginTop: 18 }}>5. Limitazione di responsabilità</h3>
          <p>Mente Locale non è responsabile di interruzioni di servizi terzi (WhatsApp, hosting, pagamenti) né di danni indiretti derivanti dall’uso delle soluzioni.</p>
          <h3 style={{ marginTop: 18 }}>6. Pagamenti</h3>
          <p>I corrispettivi e le modalità di pagamento sono definiti nel contratto o nell’offerta accettata. I ritardi di pagamento possono sospendere il servizio.</p>
          <h3 style={{ marginTop: 18 }}>7. Legge applicabile</h3>
          <p>Si applica la legge italiana. Foro competente: quello del domicilio del consumatore se applicabile, altrimenti quello indicato a contratto.</p>
          <p style={{ marginTop: 20, fontSize: '0.85rem', color: 'rgba(226,232,240,0.55)' }}>Contatti: abanero1998@icloud.com · +39 344 410 6229</p>
        </article>
      </div>
    </main>
  );
}
