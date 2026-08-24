const WA = 'https://wa.me/393331234567?text=' + encodeURIComponent('Ciao, voglio Negozi Smart');
export const metadata = { title: 'Ferramenta Smart | Mente Locale' };
export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="badge liquid-glass">Ferramenta / Negozi Smart</div>
        <h1>Nemmeno una vite persa</h1>
        <p>Inventario IA + barcode, click&collect, cassa collegata, alert scorte. Vendi anche di notte.</p>
        <div className="cta-row" style={{ justifyContent: 'flex-start', marginTop: 24 }}>
          <a className="btn-glass btn-wa liquid-glass" href={WA} target="_blank" rel="noreferrer">Parla su WhatsApp</a>
        </div>
      </section>
      <div className="content-block liquid-glass">
        <ul>
          <li>Inventario IA: fotografi la vite e la trova</li>
          <li>E-commerce click&collect in 10 minuti</li>
          <li>Cassa smart collegata al magazzino</li>
          <li>Alert “Stai per finire tasselli 8mm”</li>
        </ul>
      </div>
    </main>
  );
}
