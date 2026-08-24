import './globals.css';

export const metadata = {
  title: 'Mente Locale — Più clienti, meno sbatti in 7 giorni',
  description: 'Soluzioni smart per ristorazione, parrucchieri e negozi. Onboarding in 24h. Risultati garantiti.',
};

const WA = 'https://wa.me/393331234567?text=' + encodeURIComponent('Ciao, voglio più clienti e meno sbatti.');
const IG = 'https://instagram.com/mentelocale';

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <div className="bg-scene" />
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
        <header className="nav-wrap">
          <nav className="nav liquid-glass">
            <a href="/" className="logo" style={{ textDecoration: 'none', color: '#fff' }}>MENTE<span>LOCALE</span></a>
            <ul className="nav-links">
              <li><a href="/servizi">Servizi</a></li>
              <li><a href="/come-funziona">Come funziona</a></li>
              <li><a href="/casi-studio">Casi Studio</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contatti">Contatti</a></li>
            </ul>
            <a className="wa-pill" href={WA} target="_blank" rel="noreferrer">WhatsApp</a>
          </nav>
        </header>
        {children}
        <footer>
          <div className="socials">
            <a className="social liquid-glass" href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
            <a className="social liquid-glass" href={IG} target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>© 2026 Mente Locale · Onboarding in 24h · Risultati garantiti</p>
        </footer>
      </body>
    </html>
  );
}
