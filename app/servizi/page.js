export const metadata = { title: 'Servizi | Mente Locale' };
export default function Page() {
  return (
    <main>
      <section className="page-hero"><h1>Servizi</h1><p>Tre verticali smart. Live in 7 giorni.</p></section>
      <div className="content-block liquid-glass">
        <h2><a href="/ristorazione" style={{color:'#fff'}}>Ristorazione Smart</a></h2>
        <p>Menu QR, comande, delivery, prenotazioni WhatsApp.</p>
        <h2><a href="/parrucchieri" style={{color:'#fff'}}>Parrucchieri Smart</a></h2>
        <p>Agenda IA, app, magazzino, reminder.</p>
        <h2><a href="/ferramenta" style={{color:'#fff'}}>Ferramenta Smart</a></h2>
        <p>Inventario IA, click & collect, cassa, alert.</p>
      </div>
    </main>
  );
}
