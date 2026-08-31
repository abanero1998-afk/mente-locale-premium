import RistoBg from './RistoBg';
import RistoScene from './RistoScene';
import './risto-scene.css';

const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, voglio Ristoranti e Locali');

export const metadata = {
  title: 'Ristoranti e Locali | Mente Locale',
  description: 'Sala live, carta QR, KDS cucina+bar, magazzino IA e HACCP Pro.',
};

const modules = [
  {
    href: '/ristorazione/sala',
    demo: '/ristorazione/sala-live.html',
    kicker: '01 · Sala',
    title: 'SALA LIVE',
    tag: 'Controlli 22 tavoli dal telefono. Senza urlare.',
  },
  {
    href: '/ristorazione/carta',
    demo: '/ristorazione/carta-viva.html',
    kicker: '02 · Menu',
    title: 'CARTA VIVA',
    tag: 'Cambi un prezzo in 10 secondi. Senza ristampare.',
  },
  {
    href: '/ristorazione/kds',
    demo: '/ristorazione/kds.html',
    kicker: '03 · Cucina',
    title: 'KDS CUCINA + BAR',
    tag: 'Comanda dal tavolo → cucina + bar in 0.3s. Zero carta.',
  },
  {
    href: '/ristorazione/magazzino',
    demo: '/ristorazione/magazzino.html',
    kicker: '04 · Compliance',
    title: 'MAGAZZINO + HACCP',
    tag: 'Sa che finirai il Monfortino prima di te. E ti salva dal NAS.',
  },
];

export default function Page() {
  return (
    <main className="service-page service-ristoranti">
      <RistoBg />
      <section className="service-hero" style={{ paddingBottom: 12 }}>
        <div className="badge liquid-glass">Ristoranti e Locali</div>
        <h1>Tavolo sempre pieno</h1>
        <p className="service-lead">Il sistema che trasforma tavoli vuoti in incasso garantito.</p>
      </section>

      <div className="products-section">
        <RistoScene />
      </div>

      <section className="products-section">
        <h2 className="section-title">Ristorazione</h2>
        <p className="service-lead" style={{ marginTop: 8, maxWidth: 640 }}>
          Personalizziamo ogni cosa in linea al tuo locale perché sono i dettagli che fanno la differenza
        </p>
        <div className="products-grid">
          {modules.map((p) => (
            <article key={p.href} className="product-card liquid-glass">
              <p className="rd-kicker">{p.kicker}</p>
              <h3>{p.title}</h3>
              <p>{p.tag}</p>
              <div className="prod-demo">
                <iframe src={p.demo} title={p.title} loading="lazy" />
              </div>
              <a href={p.href} className="v-more">Apri la demo →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="service-cta liquid-glass">
        <div><strong>✓ Soddisfatto o rimborsato 14 giorni</strong><span>Onboarding 24h · Zero rischi</span></div>
        <a className="btn-neon liquid-glass" href={WA} target="_blank" rel="noreferrer">Prenota onboarding 24h →</a>
      </section>
    </main>
  );
}
