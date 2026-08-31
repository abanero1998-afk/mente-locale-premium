import './globals.css';
import './extra.css';
import './card-ristoranti.css';
import LOGO from './logo-data';

export const metadata = {
  title: 'Mente Locale — Più clienti, meno sbatti in 7 giorni',
  description: 'Onboarding 24h. Risultati garantiti. Ristoranti, saloni e negozi.',
};

const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, voglio prenotare l onboarding in 24h');
const IG = 'https://www.instagram.com/smart.srls.ia?igsi=dG1ncjl6cWhxbDBi&utm_source=qr';
const TT = 'https://www.tiktok.com/@mente.locale0';
const FB = 'https://www.facebook.com/share/19Q1m2xxHx/?mibextid=wwXIfr';
const MAIL = 'abanero1998@icloud.com';

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <div className="bg-scene" />
        <header className="nav-wrap">
          <nav className="nav liquid-glass">
            <a href="/" className="logo-link" aria-label="Mente Locale home">
              <img src={LOGO} alt="Mente Locale" className="logo-img" width={200} height={64} />
            </a>
            <a className="wa-prive nav-prive" href={WA} target="_blank" rel="noreferrer">
              WhatsApp Privé
            </a>
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
            <a className="social-icon liquid-glass" href={FB} target="_blank" rel="noreferrer" aria-label="Facebook">
              <img src="/icons/facebook.svg" alt="Facebook" width={56} height={56} />
            </a>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginBottom: 10 }}>
            <a href={'mailto:' + MAIL} style={{ color: 'inherit' }}>{MAIL}</a>
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
