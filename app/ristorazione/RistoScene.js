'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function RistoScene() {
  const [price, setPrice] = useState(28);
  useEffect(() => {
    const t = setInterval(() => setPrice((p) => (p === 28 ? 29 : 28)), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="rs-scene">
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
