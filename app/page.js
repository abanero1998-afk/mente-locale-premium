const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, voglio prenotare l onboarding in 24h');

const kpis = [
  { label: '+30%', sub: 'coperti' },
  { label: '−80%', sub: 'no-show' },
  { label: '0', sub: 'buchi' },
  { label: '24/7', sub: 'vendite' },
];

const verticals = [
  {
    href: '/ristorazione',
    icon: '/icons/ristoranti.svg',
    title: 'RISTORANTI',
    tag: 'Più coperti, meno no-show.',
    items: ['+30% coperti in 7 giorni', '−80% no-show automatici', '0 buchi in sala', 'Vendite 24/7'],
  },
  {
    href: '/parrucchieri',
    icon: '/icons/salon.svg',
    title: 'HAIR SALON',
    tag: 'Agenda piena, zero buchi.',
    items: ['+35% nuovi clienti', '−75% disdette last minute', 'Agenda ottimizzata 24/7', 'Più incassi, meno caos'],
  },
  {
    href: '/ferramenta',
    icon: '/icons/hardware.svg',
    title: 'HARDWARE STORE',
    tag: 'Più clienti, più strumenti.',
    items: ['+28% traffico in negozio', 'Lead qualificati 24/7', '0 messaggi senza risposta', 'Vendite omnicanale'],
  },
];

export default function Home() {
  return (
    <main className="home-b">
      <section className="hero-b">
        <div className="hero-b-left">
          <div className="badge liquid-glass">Onboarding 24h · Risultati garantiti</div>
          <h1>
            PIÙ CLIENTI
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
              Prenota onboarding 24h →
            </a>
            <a className="btn-ghost-b liquid-glass" href="/casi-studio">
              Vedi i risultati reali
            </a>
          </div>
        </div>

        <div className="hero-b-cards">
          {verticals.map((v) => (
            <a key={v.href} href={v.href} className="v-card liquid-glass">
              <div className="v-icon-wrap liquid-glass">
                <img src={v.icon} alt="" className="v-icon-img" width={56} height={56} />
              </div>
              <h3>{v.title}</h3>
              <p className="v-tag">{v.tag}</p>
              <ul>
                {v.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <span className="v-more">Scopri di più →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="guarantee-bar liquid-glass">
        <span className="g-left">✓ Soddisfatto o rimborsato <strong>14 giorni</strong></span>
        <span className="g-sep">|</span>
        <span className="g-right">Zero rischi. Solo risultati.</span>
      </section>
    </main>
  );
}
