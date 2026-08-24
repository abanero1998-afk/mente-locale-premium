import './globals.css';

export const metadata = {
  title: 'Mente Locale — Più clienti, meno sbatti in 7 giorni',
  description: 'Onboarding 24h. Risultati garantiti.',
};

const WA = 'https://wa.me/393331234567?text=' + encodeURIComponent('Ciao, voglio prenotare l onboarding in 24h');
const IG = 'https://www.instagram.com/smart.srls.ia?igsi=dG1ncjl6cWhxbDBi&utm_source=qr';

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
            <a href="/" className="logo-link" aria-label="Mente Locale home">
              <img
                src="/logo-mente-locale.png"
                srcSet="/logo-mente-locale.png 1x, /logo-mente-locale@2x.png 2x"
                alt="Mente Locale"
                className="logo-img"
                width={140}
                height={66}
              />
            </a>
            <ul className="nav-links">
              <li><a href="/come-funziona">Strategia</a></li>
              <li><a href="/servizi">Servizi</a></li>
              <li><a href="/come-funziona">Come funziona</a></li>
              <li><a href="/casi-studio">Case study</a></li>
              <li><a href="/contatti">Chi siamo</a></li>
            </ul>
            <div className="nav-socials">
              <a className="nav-icon-btn" href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <img src="/icons/whatsapp.svg" alt="" width={40} height={40} />
              </a>
              <a className="nav-icon-btn" href={IG} target="_blank" rel="noreferrer" aria-label="Instagram">
                <img src="/icons/instagram.svg" alt="" width={40} height={40} />
              </a>
            </div>
          </nav>
        </header>

        {children}

        <footer>
          <div className="socials">
            <a className="social-icon" href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <img src="/icons/whatsapp.svg" alt="WhatsApp" width={56} height={56} />
            </a>
            <a className="social-icon" href={IG} target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src="/icons/instagram.svg" alt="Instagram" width={56} height={56} />
            </a>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>
            © 2026 Mente Locale · Garanzia 14 giorni
          </p>
        </footer>
      </body>
    </html>
  );
}
