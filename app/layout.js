import './globals.css';

export const metadata = {
  title: 'Mente Locale — Più clienti, meno sbatti in 7 giorni',
  description: 'Onboarding 24h. Risultati garantiti. Ristoranti, saloni e negozi.',
};

const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, voglio prenotare l onboarding in 24h');
const IG = 'https://www.instagram.com/smart.srls.ia?igsi=dG1ncjl6cWhxbDBi&utm_source=qr';
const TT = 'https://www.tiktok.com/@mente.locale0';
const LOGO = "data:image/webp;base64,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";

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <div className="bg-scene" />

        <header className="nav-wrap">
          <nav className="nav liquid-glass">
            <a href="/" className="logo-link" aria-label="Mente Locale home">
              <img
                src={LOGO}
                alt="Mente Locale"
                className="logo-img"
                width={127}
                height={64}
              />
            </a>
            <ul className="nav-links">
              <li><a href="/come-funziona">Come funziona</a></li>
              <li><a href="/servizi">Servizi</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/casi-studio">Case study</a></li>
              <li><a href="/contatti">Chi siamo</a></li>
            </ul>
            <div className="nav-socials">
              <a className="nav-icon-btn liquid-glass" href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <img src="/icons/whatsapp.svg" alt="" width={40} height={40} />
              </a>
              <a className="nav-icon-btn liquid-glass" href={IG} target="_blank" rel="noreferrer" aria-label="Instagram">
                <img src="/icons/instagram.svg" alt="" width={40} height={40} />
              </a>
              <a className="nav-icon-btn liquid-glass" href={TT} target="_blank" rel="noreferrer" aria-label="TikTok">
                <img src="/icons/tiktok.svg" alt="" width={40} height={40} />
              </a>
            </div>
          </nav>
        </header>

        {children}

        <footer>
          <div className="socials">
            <a className="social-icon liquid-glass" href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <img src="/icons/whatsapp.svg" alt="WhatsApp" width={56} height={56} />
            </a>
            <a className="social-icon liquid-glass" href={IG} target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src="/icons/instagram.svg" alt="Instagram" width={56} height={56} />
            </a>
            <a className="social-icon liquid-glass" href={TT} target="_blank" rel="noreferrer" aria-label="TikTok">
              <img src="/icons/tiktok.svg" alt="TikTok" width={56} height={56} />
            </a>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginBottom: 10 }}>
            <a href="mailto:mentelocale@gmail.com" style={{ color: 'inherit' }}>mentelocale@gmail.com</a>
            {' · '}
            <a href={WA} style={{ color: 'inherit' }}>+39 344 410 6229</a>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginBottom: 8 }}>
            <a href="/privacy" style={{ color: 'inherit', marginRight: 12 }}>Privacy</a>
            <a href="/termini" style={{ color: 'inherit', marginRight: 12 }}>Termini</a>
            <a href="/cookie" style={{ color: 'inherit' }}>Cookie</a>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>
            © 2026 Mente Locale · Garanzia 14 giorni
          </p>
        </footer>
      </body>
    </html>
  );
}
