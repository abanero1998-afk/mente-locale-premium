import './risto-scene.css';

export default function DemoEmbed({ back = '/ristorazione', kicker, title, lead, src }) {
  return (
    <main className="service-page service-ristoranti">
      <section className="service-hero" style={{ overflow: 'visible' }}>
        <a href={back} className="badge liquid-glass" style={{ textDecoration: 'none' }}>← Ristorazione</a>
        <p className="rd-kicker" style={{ marginTop: 16 }}>{kicker}</p>
        <h1>{title}</h1>
        {lead ? <p className="service-lead">{lead}</p> : null}
      </section>
      <div className="product-card liquid-glass" style={{ margin: '0 16px 40px', borderRadius: 28, overflow: 'hidden', border: 0 }}>
        <iframe
          src={src}
          title={title}
          style={{ width: '100%', minHeight: '80vh', height: '90vh', border: 0, background: 'transparent' }}
        />
      </div>
    </main>
  );
}
