const WA = 'https://wa.me/393331234567?text=' + encodeURIComponent('Ciao, voglio partire');
export const metadata = { title: 'Contatti | Mente Locale' };
export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <h1>Contatti</h1>
        <p>WhatsApp è il canale principale.</p>
        <div className="cta-row" style={{ justifyContent: 'flex-start', marginTop: 24 }}>
          <a className="btn-glass btn-wa liquid-glass" href={WA} target="_blank" rel="noreferrer">Apri WhatsApp</a>
          <a className="btn-glass btn-ghost liquid-glass" href="https://instagram.com/mentelocale" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </section>
    </main>
  );
}
