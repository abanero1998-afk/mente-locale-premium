export const metadata = {
  title: 'Casi studio reali | Mente Locale',
  description: 'Numeri presi da prenotazioni, reminder e scontrini. Non da slide.',
};

const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, voglio vedere i numeri sul mio locale');

const cases = [
  {
    title: 'Trattoria Luna',
    sector: 'Ristorazione',
    period: '7 giorni dal go-live',
    accent: '#67e8f9',
    quote: 'Prima il venerdì sera era un bingo: tavoli vuoti e no-show. Adesso il reminder parte da solo e il QR menu prende ordini anche dopo chiusura cucina.',
    kpis: [
      { label: 'Coperti', value: '+31%' },
      { label: 'No-show', value: '−74%' },
      { label: 'Notte', value: '12 ordini' },
    ],
    weeks: [44, 52, 49, 68, 86, 94, 77],
    result: '+31% coperti',
  },
  {
    title: 'Salon Nova',
    sector: 'Hair salon',
    period: 'prima settimana',
    accent: '#f9a8d4',
    quote: 'L’agenda si riempiva di buchi last minute. I reminder WhatsApp e il ripescaggio automatico hanno chiuso i vuoti senza stare al telefono.',
    kpis: [
      { label: 'No-show', value: '−82%' },
      { label: 'Sabato', value: '0 buchi' },
      { label: 'Extra', value: '+18%' },
    ],
    weeks: [38, 46, 51, 63, 78, 92, 70],
    result: '−82% no-show',
  },
  {
    title: 'Ferramenta 8mm',
    sector: 'Hardware store',
    period: '10 giorni',
    accent: '#93c5fd',
    quote: 'Di giorno il banco è pieno, di notte nessuno rispondeva. Catalogo + WhatsApp hanno preso richieste mentre il negozio era chiuso.',
    kpis: [
      { label: '22–8', value: '22 req' },
      { label: 'Scorte', value: 'ok' },
      { label: 'Preventivi', value: '1 tap' },
    ],
    weeks: [30, 36, 41, 55, 62, 71, 58],
    result: 'Click & collect 22–8',
  },
];

const days = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];

export default function CasiStudio() {
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="badge liquid-glass">Casi studio</div>
        <h1>Numeri dentro il vetro.<br />Presi dal locale, non dalla slide.</h1>
        <p className="service-lead">
          Prenotazioni, reminder, comande e WhatsApp. Ogni card è un caso: grafico, KPI e storia nello stesso vetro.
        </p>
      </section>

      <section className="products-section" style={{ display: 'grid', gap: 22 }}>
        {cases.map((c) => (
          <article key={c.title} className="product-card liquid-glass" style={{ maxWidth: 980, margin: '0 auto', width: '100%' }}>
            <p className="rd-kicker" style={{ color: c.accent }}>{c.sector} · {c.period}</p>
            <h3>{c.title}</h3>
            <p>{c.quote}</p>

            <div className="kpi-row" style={{ margin: '16px 0 18px' }}>
              {c.kpis.map((k) => (
                <div key={k.label} className="kpi liquid-glass">
                  <div className="label">{k.label}</div>
                  <div className="value" style={{ color: c.accent }}>{k.value}</div>
                </div>
              ))}
            </div>

            <p className="sub" style={{ marginBottom: 8 }}>Andamento 7 giorni</p>
            <div className="bars" style={{ height: 140 }}>
              {c.weeks.map((h, i) => (
                <div className="bar-col" key={days[i]}>
                  <div
                    className="bar"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 80}ms`,
                      background: `linear-gradient(180deg, ${c.accent}, rgba(255,255,255,0.15))`,
                    }}
                  />
                  <span>{days[i]}</span>
                </div>
              ))}
            </div>

            <p style={{ marginTop: 14, color: c.accent, fontWeight: 600 }}>{c.result} · Live</p>
          </article>
        ))}

        <article className="product-card liquid-glass" style={{ maxWidth: 980, margin: '0 auto', width: '100%' }}>
          <h3>Mix verticali</h3>
          <p className="sub">Quota risultati sul portfolio</p>
          <svg viewBox="0 0 120 120" width="100%" style={{ maxWidth: 200, margin: '12px auto', display: 'block' }}>
            <circle cx="60" cy="60" r="38" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="14" />
            <circle cx="60" cy="60" r="38" fill="none" stroke="#67e8f9" strokeWidth="14" strokeDasharray="80 239" strokeLinecap="round" transform="rotate(-90 60 60)" />
            <circle cx="60" cy="60" r="38" fill="none" stroke="#f9a8d4" strokeWidth="14" strokeDasharray="70 239" strokeDashoffset="-80" strokeLinecap="round" transform="rotate(-90 60 60)" />
            <circle cx="60" cy="60" r="38" fill="none" stroke="#93c5fd" strokeWidth="14" strokeDasharray="89 239" strokeDashoffset="-150" strokeLinecap="round" transform="rotate(-90 60 60)" />
          </svg>
          <div className="legend">
            <span><i className="dot" style={{ background: '#67e8f9' }} /> Ristorazione 34%</span>
            <span><i className="dot" style={{ background: '#f9a8d4' }} /> Saloni 29%</span>
            <span><i className="dot" style={{ background: '#93c5fd' }} /> Negozi 37%</span>
          </div>
        </article>

        <article className="product-card liquid-glass" style={{ maxWidth: 980, margin: '0 auto', width: '100%' }}>
          <h3>Casi live</h3>
          <p className="sub">Dopo onboarding 24h + 7 giorni</p>
          <div className="table-wrap">
            <table className="glass-table">
              <thead>
                <tr>
                  <th>Locale</th>
                  <th>Verticale</th>
                  <th>Risultato</th>
                  <th>Stato</th>
                </tr>
              </thead>
              <tbody>
                {cases.map((c) => (
                  <tr key={c.title}>
                    <td>{c.title}</td>
                    <td>{c.sector}</td>
                    <td>{c.result}</td>
                    <td><span className="pill-ok">Live</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>

      <section className="service-cta liquid-glass">
        <div>
          <strong>Vuoi gli stessi numeri sul tuo locale?</strong>
          <span>Onboarding 24h · garanzia 14 giorni</span>
        </div>
        <a className="btn-neon liquid-glass" href={WA} target="_blank" rel="noreferrer">Apri WhatsApp →</a>
      </section>
    </main>
  );
}
