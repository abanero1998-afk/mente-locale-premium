const WA = 'https://wa.me/393331234567?text=' + encodeURIComponent('Ciao, voglio Ristorazione Smart');
export const metadata = { title: 'Ristorazione Smart | Mente Locale' };
export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="badge liquid-glass">Ristorazione Smart</div>
        <h1>Tavolo Sempre Pieno</h1>
        <p>Sito ultra veloce + Menu QR animato, gestionale comande/cucina/asporto, etichette automatiche, prenotazioni WhatsApp. +30% coperti, zero errori in cucina.</p>
        <div className="cta-row" style={{ justifyContent: 'flex-start', marginTop: 24 }}>
          <a className="btn-glass btn-wa liquid-glass" href={WA} target="_blank" rel="noreferrer">Parla su WhatsApp</a>
        </div>
      </section>
      <div className="content-block liquid-glass">
        <h2>Cosa include</h2>
        <ul>
          <li>Sito web ultra veloce + Menu QR animato</li>
          <li>Gestionale comande + cucina + asporto/Deliveroo</li>
          <li>Stampante etichette lotti / scadenze / allergeni AUTOMATICA</li>
          <li>Prenotazione tavoli con conferma WhatsApp</li>
        </ul>
        <p>Garanzia 14 giorni soddisfatto o rimborsato, a contratto.</p>
      </div>
    </main>
  );
}
