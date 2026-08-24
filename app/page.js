const WA = 'https://wa.me/393331234567?text=' + encodeURIComponent('Ciao, voglio più clienti e meno sbatti.');
const cards = [
  { href: '/ristorazione', title: 'Ristorazione Smart', tag: 'Tavolo Sempre Pieno', items: ['Sito web ultra veloce + Menu QR animato (il cliente inquadra e ordina)', 'Gestionale comande + cucina + asporto/Deliveroo integrato', 'Stampante etichette lotti / scadenze / allergeni AUTOMATICA', 'Prenotazione tavoli con conferma WhatsApp'], result: 'Risultato: +30% di coperti, zero errori in cucina' },
  { href: '/parrucchieri', title: 'Parrucchieri / Estetisti Smart', tag: 'Agenda Blindata', items: ['App appuntamenti per cliente (iOS/Android) + Sito web', 'Calendario smart che riempie i buchi da solo con IA', 'Magazzino prodotti: ti avvisa quando finisce tinta/shampoo', 'Promemoria automatici WhatsApp'], result: 'Risultato: Zero buchi, -80% no-show, clienti fidelizzati' },
  { href: '/ferramenta', title: 'Ferramenta / Negozi Smart', tag: 'Nemmeno una vite persa', items: ['Inventario con IA + lettore barcode', 'Sito e-commerce click&collect', 'Cassa smart collegata al magazzino', 'Alert scorte automatici'], result: 'Risultato: Basta perdite, vendi anche di notte' }
];
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="badge liquid-glass">Onboarding in 24h · Risultati garantiti</div>
        <h1>PIÙ CLIENTI MENO SBATTI<span className="grad">IN 7 GIORNI</span></h1>
        <p className="lead">Strategia data-driven, onboarding in 24h. Pronto in una settimana, senza complessità. Più clienti, meno gestione manuale.</p>
        <div className="cta-row">
          <a className="btn-glass btn-wa liquid-glass" href={WA} target="_blank" rel="noreferrer">Parla su WhatsApp</a>
          <a className="btn-glass btn-ghost liquid-glass" href="/casi-studio">Scopri i casi studio</a>
        </div>
      </section>
      <section className="section">
        <p className="section-label">3 soluzioni — tutto quello che ti serve</p>
        <div className="cards">
          {cards.map((c) => (
            <a key={c.href} href={c.href} className="card liquid-glass">
              <div className="icon-orb" />
              <h3>{c.title}</h3>
              <div className="tag">“{c.tag}”</div>
              <ul>{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
              <div className="result">{c.result}</div>
              <span className="card-cta">Scrivici</span>
            </a>
          ))}
        </div>
      </section>
      <section className="guarantee liquid-glass">
        <h2>Garanzia 14 giorni</h2>
        <p>Soddisfatto o rimborsato 14 giorni. Senza domande. Lo mettiamo a contratto.</p>
      </section>
    </main>
  );
}
