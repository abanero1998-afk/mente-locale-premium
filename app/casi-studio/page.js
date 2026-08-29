export const metadata = {
  title: 'Casi studio reali | Mente Locale',
  description: 'Numeri presi da prenotazioni, reminder e scontrini. Non da slide.',
};

const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent('Ciao, voglio vedere i numeri sul mio locale');

const kpis = [
  { label: 'Coperti extra', value: '+30%', delta: 'Ristorazione · 7 giorni' },
  { label: '−80%', value: '−80%', delta: 'Saloni · reminder WA' },
  { label: 'Buchi agenda', value: '0', delta: 'IA che riempie i vuoti' },
  { label: 'Vendite notte', value: '24/7', delta: 'Click & collect attivo' },
];

const weeks = [
  { d: 'Lun', h: 42 }, { d: 'Mar', h: 55 }, { d: 'Mer', h: 48 }, { d: 'Gio', h: 70 },
  { d: 'Ven', h: 88 }, { d: 'Sab', h: 96 }, { d: 'Dom', h: 78 },
];

const rows = [
  ['Trattoria Luna', 'Ristorazione', '+31% coperti', 'Live'],
  ['Salon Nova', 'Parrucchieri', '−82% no-show', 'Live'],
  ['Ferramenta 8mm', 'Negozi', 'Click&collect 22–8', 'Live'],
  ['Osteria Porto', 'Ristorazione', '0 comande errate', 'Live'],
];

const stories = [
  {
    title: 'Trattoria Luna',
    sector: 'Ristorazione',
    period: '7 giorni dal go-live',
    quote: 'Prima il venerdì sera era un bingo: tavoli vuoti e no-show. Adesso il reminder parte da solo e il QR menu prende ordini anche dopo chiusura cucina.',
    metrics: ['+31% coperti', '−74% no-show', '12 ordini notturni'],
  },
  {
    title: 'Salon Nova',
    sector: 'Hair salon',
    period: 'prima settimana',
    quote: 'L’agenda si riempiva di buchi last minute. I reminder WhatsApp e il ripescaggio automatico hanno chiuso i vuoti senza stare al telefono.',
    metrics: ['−82% no-show', '0 buchi il sabato', '+18% servizi extra'],
  },
  {
    title: 'Ferramenta 8mm',
    sector: 'Hardware store',
    period: '10 giorni',
    quote: 'Di giorno il banco è pieno, di notte nessuno rispondeva. Catalogo + WhatsApp hanno preso richieste mentre il negozio era chiuso.',
    metrics: ['22 richieste 22–8', 'scorte sotto controllo', 'preventivi in 1 tap'],
  },
];

export default function CasiStudio() {
  return (
    <div className="dash-page">
      <div className="dash-shell">
        <aside className="dash-side liquid-glass">
          <h2>Vista</h2>
          <a className="side-link active" href="/casi-studio">Dashboard risultati</a>
          <a className="side-link" href="/ristorazione">Tavolo pieno</a>
          <a className="side-link" href="/parrucchieri">Agenda blindata</a>
          <a className="side-link" href="/ferramenta">Vite mai persa</a>
          <a className="side-link" href="/come-funziona">Come funziona</a>
          <a className="side-link" href={WA} target="_blank" rel="noreferrer">Apri WhatsApp</a>
        </aside>
        <div>
          <section className="pane liquid-glass" style={{ marginBottom: 18 }}>
            <h3>Da dove arrivano i numeri</h3>
            <p className="sub">Non sono mockup. Prenotazioni, reminder inviati, comande e messaggi WhatsApp del locale. Stessa vista che apriamo in call con il titolare.</p>
          </section>
          <div className="kpi-row">
            {kpis.map((k) => (
              <div key={k.label} className="kpi liquid-glass">
                <div className="label">{k.label}</div>
                <div className="value">{k.value}</div>
                <div className="delta">{k.delta}</div>
              </div>
            ))}
          </div>
          <div className="chart-grid">
            <section className="pane liquid-glass">
              <h3>Coperti / settimana</h3>
              <p className="sub">Indice post go-live · ristorazione smart</p>
              <div className="bars">
                {weeks.map((w, i) => (
                  <div className="bar-col" key={w.d}>
                    <div className="bar" style={{ height: `${w.h}%`, animationDelay: `${i * 80}ms` }} />
                    <span>{w.d}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="pane liquid-glass">
              <h3>Mix verticali</h3>
              <p className="sub">Quota risultati sul portfolio</p>
              <svg viewBox="0 0 120 120" width="100%" style={{ maxWidth: 200, margin: '8px auto', display: 'block' }}>
                <circle cx="60" cy="60" r="38" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="14" />
                <circle cx="60" cy="60" r="38" fill="none" stroke="#67e8f9" strokeWidth="14" strokeDasharray="80 239" strokeLinecap="round" transform="rotate(-90 60 60)" />
                <circle cx="60" cy="60" r="38" fill="none" stroke="#a78bfa" strokeWidth="14" strokeDasharray="70 239" strokeDashoffset="-80" strokeLinecap="round" transform="rotate(-90 60 60)" />
                <circle cx="60" cy="60" r="38" fill="none" stroke="#86efac" strokeWidth="14" strokeDasharray="89 239" strokeDashoffset="-150" strokeLinecap="round" transform="rotate(-90 60 60)" />
              </svg>
              <div className="legend">
                <span><i className="dot" style={{ background: '#67e8f9' }} /> Ristorazione 34%</span>
                <span><i className="dot" style={{ background: '#a78bfa' }} /> Saloni 29%</span>
                <span><i className="dot" style={{ background: '#86efac' }} /> Negozi 37%</span>
              </div>
            </section>
          </div>
          <section className="pane liquid-glass">
            <h3>Casi live</h3>
            <p className="sub">Numeri dopo onboarding 24h + 7 giorni</p>
            <div className="table-wrap">
              <table className="glass-table">
                <thead><tr><th>Locale</th><th>Verticale</th><th>Risultato</th><th>Stato</th></tr></thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r[0]}>
                      <td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td>
                      <td><span className="pill-ok">{r[3]}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section className="rd-grid" style={{ marginTop: 18 }}>
            {stories.map((s) => (
              <article key={s.title} className="product-card liquid-glass">
                <p className="rd-kicker">{s.sector} · {s.period}</p>
                <h3>{s.title}</h3>
                <p>{s.quote}</p>
                <ul>{s.metrics.map((m) => (<li key={m}>{m}</li>))}</ul>
              </article>
            ))}
          </section>
          <div className="vert-mini">
            <a className="mini-card liquid-glass" href="/ristorazione"><strong>Tavolo Sempre Pieno</strong> Menu QR, comande, +30% coperti</a>
            <a className="mini-card liquid-glass" href="/parrucchieri"><strong>Agenda Blindata</strong> IA + WhatsApp, −80% no-show</a>
            <a className="mini-card liquid-glass" href="/ferramenta"><strong>Nemmeno una vite persa</strong> Inventario IA, vendi di notte</a>
          </div>
        </div>
      </div>
    </div>
  );
}
