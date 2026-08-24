const WA = 'https://wa.me/393331234567?text=' + encodeURIComponent('Ciao, voglio Agenda Blindata');
export const metadata = { title: 'Parrucchieri Smart | Mente Locale' };
export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="badge liquid-glass">Parrucchieri / Estetisti Smart</div>
        <h1>Agenda Blindata</h1>
        <p>App iOS/Android, calendario IA, magazzino prodotti, reminder WhatsApp. Zero buchi, -80% no-show.</p>
        <div className="cta-row" style={{ justifyContent: 'flex-start', marginTop: 24 }}>
          <a className="btn-glass btn-wa liquid-glass" href={WA} target="_blank" rel="noreferrer">Parla su WhatsApp</a>
        </div>
      </section>
      <div className="content-block liquid-glass">
        <ul>
          <li>App appuntamenti + sito</li>
          <li>Calendario smart con IA</li>
          <li>Alert magazzino tinta/shampoo</li>
          <li>Promemoria WhatsApp automatici</li>
        </ul>
      </div>
    </main>
  );
}
