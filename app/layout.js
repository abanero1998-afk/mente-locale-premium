import './globals.css';

export const metadata = {
  title: 'Mente Locale — Più clienti, meno sbatti in 7 giorni',
  description: 'Onboarding 24h. Risultati garantiti. Ristoranti, saloni e negozi.',
};

const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, voglio prenotare l onboarding in 24h');
const IG = 'https://www.instagram.com/smart.srls.ia?igsi=dG1ncjl6cWhxbDBi&utm_source=qr';
const TT = 'https://www.tiktok.com/@mente.locale0';

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <div className="bg-scene" />

        <header className="nav-wrap">
          <nav className="nav liquid-glass">
            <a href="/" className="logo-link" aria-label="Mente Locale home">
              <img
                src="/logo-mente-locale.svg"
                alt="Mente Locale"
                className="logo-img"
                width={140}
                height={40}
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
