'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DOTS = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  x: (i * 29 + 7) % 100,
  y: (i * 17 + 4) % 92,
  s: 2 + (i % 5),
  d: 4 + (i % 7),
  c: i % 2 ? '#00D9FF' : '#b197ff',
}));

export default function RistoScene() {
  const [price, setPrice] = useState(28);
  useEffect(() => {
    const t = setInterval(() => setPrice((p) => (p === 28 ? 29 : 28)), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="rs-scene">
      <div className="rs-aurora a1" />
      <div className="rs-aurora a2" />
      <div className="rs-smoke sm1" />
      <div className="rs-smoke sm2" />
      <div className="rs-smoke sm3" />
      <div className="rs-vignette" />
      {DOTS.map((p) => (
        <span
          key={p.id}
          className="rs-dot"
          style={{
            left: p.x + '%',
            top: p.y + '%',
            width: p.s,
            height: p.s,
            background: p.c,
            animationDuration: p.d + 's',
            animationDelay: (p.id % 5) * 0.35 + 's',
          }}
        />
      ))}

      <div className="rs-head">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ristoranti e <em>Locali</em>
        </motion.h2>
        <p>Il sistema che trasforma tavoli vuoti in incasso garantito.</p>
      </div>

      <div className="rs-stack">
        <GlassCard href="/ristorazione/sala" delay={0.35} className="c1" live>
          <span className="ico">▣</span>
          <div>
            <strong>Prenotazioni</strong>
            <small>Stasera · 19:30 · Tavolo per 2</small>
          </div>
        </GlassCard>
        <GlassCard href="/ristorazione/carta" delay={0.5} className="c2">
          <span className="ico">☰</span>
          <div>
            <strong>Menu</strong>
            <small>Pasta Tartufo · €{price}</small>
            <small>Wagyu · €64</small>
          </div>
        </GlassCard>
        <GlassCard href="/ristorazione/kds" delay={0.65} className="c3">
          <span className="ico">▦</span>
          <div>
            <strong>Ordina online</strong>
            <small>Delivery 25-35 min · Gratis</small>
            <i className="rs-bar" />
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function GlassCard({ href, delay, className, live, children }) {
  return (
    <motion.a
      href={href}
      className={'rs-glass ' + className}
      initial={{ y: 90, opacity: 0, rotateX: 24, filter: 'blur(16px)' }}
      animate={{ y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)' }}
      transition={{ type: 'spring', damping: 16, delay }}
    >
      <span className="rs-neon" />
      {live && <i className="rs-live" />}
      {children}
    </motion.a>
  );
}
