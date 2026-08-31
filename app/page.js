import HeroCard from './HeroCard';
import CardRistoranti from './CardRistoranti';

const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, voglio prenotare l onboarding in 24h');

const kpis = [
  { label: '+30%', sub: 'coperti' },
  { label: '\u221280%', sub: 'no-show' },
  { label: '0', sub: 'buchi' },
  { label: '24/7', sub: 'vendite' },
];

export default function Home() {
  return (
    <main className="home-b">
      <HeroCard />

      <section className="hero-b">
        <div className="hero-b-left">
          <h1>
            PI\u00d9 CLIENTI
            <br />
            MENO SBATTI
            <br />
            <span className="grad">IN 7 GIORNI</span>
          </h1>
          <div className="kpi-pills">
            {kpis.map((k) => (
              <div key={k.sub} className="kpi-pill liquid-glass">
                <span className="kpi-val">{k.label}</span>
                <span className="kpi-sub">{k.sub}</span>
              </div>
            ))}
          </div>
          <div className="cta-row-b">
            <a className="btn-neon liquid-glass" href={WA} target="_blank" rel="noreferrer">
              Prenota onboarding 24h \u2192
            </a>
            <a className="btn-ghost-b liquid-glass" href="/casi-studio">
              Vedi i risultati reali
            </a>
          </div>
        </div>

        <div className="hero-b-cards" style={{ display: 'flex', justifyContent: 'center' }}>
          <CardRistoranti />
        </div>
      </section>

      <section className="real-data liquid-glass">
        <p className="rd-kicker">Dati reali, non slide</p>
        <h2>Numeri presi dai locali, non da un template</h2>
        <p className="rd-lead">
          Ogni KPI che vedi (+30% coperti, \u221280% no-show, agenda senza buchi) arriva da
          prenotazioni, comande e reminder effettivamente usati. Niente demo vuote:
          dashboard collegata al tuo flusso WhatsApp e al tuo punto vendita.
        </p>
        <div className="rd-grid">
          <article>
            <strong>Fonte</strong>
            <span>Prenotazioni, no-show, scontrini e messaggi del locale</span>
          </article>
          <article>
            <strong>Aggiornamento</strong>
            <span>Live dopo il go-live, non report una tantum</span>
          </article>
          <article>
            <strong>Controllo</strong>
            <span>Tu vedi gli stessi numeri che usiamo noi in call</span>
          </article>
        </div>
        <a className="btn-ghost-b liquid-glass" href="/casi-studio">Apri la dashboard risultati</a>
      </section>

      <section className="guarantee-bar liquid-glass">
        <span className="g-left">\u2713 Soddisfatto o rimborsato <strong>14 giorni</strong></span>
        <span className="g-sep">|</span>
        <span className="g-right">Zero rischi. Solo risultati.</span>
      </section>
    </main>
  );
}
