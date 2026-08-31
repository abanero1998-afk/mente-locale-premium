'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const dots = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: (i * 37) % 100,
  y: (i * 53) % 100,
  s: 2 + (i % 5),
  d: 4 + (i % 8),
  c: i % 2 ? '#00D9FF' : '#7B61FF',
  o: 0.2 + (i % 5) * 0.08,
}));

export default function RistoScene() {
  const [price, setPrice] = useState(28);
  useEffect(() => {
    const t = setInterval(() => setPrice((p) => (p === 28 ? 29 : 28)), 2600);
    return () => clearInterval(t);
  }, []);

  const cards = useMemo(
    () => [
      {
        href: '/ristorazione/sala',
        title: 'Prenotazioni',
        lines: ['Stasera · 19:30 · Tavolo per 2'],
        live: true,
      },
      {
        href: '/ristorazione/carta',
        title: 'Menu Vivo',
        lines: [`Pasta Tartufo · €${price}`, 'Wagyu · €64'],
      },
      {
        href: '/ristorazione/kds',
        title: 'Ordina Online',
        lines: ['Delivery 25-35 min · Gratis'],
        bar: true,
      },
    ],
    [price]
  );

  return (
    <section className="rs-scene">
      <div className="rs-aurora a1" />
      <div className="rs-aurora a2" />
      <div className="rs-smoke sm1" />
      <div className="rs-smoke sm2" />
      <div className="rs-smoke sm3" />
      <div className="rs-vignette" />
      {dots.map((p) => (
        <span
          key={p.id}
          className="rs-dot"
          style={{
            left: p.x + '%',
            top: p.y + '%',
            width: p.s,
            height: p.s,
            background: p.c,
            opacity: p.o,
            animationDuration: p.d + 's',
          }}
        />
      ))}

      <div className="rs-head">
        <motion.h2
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          Ristoranti e <em>Locali</em>
        </motion.h2>
        <p>Il sistema che trasforma tavoli vuoti in incasso garantito</p>
      </div>

      <div className="rs-cards">
        {cards.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.href}
            className="rs-card"
            initial={{ y: 80, opacity: 0, rotateX: 22, filter: 'blur(12px)' }}
            animate={{ y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)' }}
            transition={{ type: 'spring', damping: 16, delay: 0.35 + i * 0.15 }}
          >
            <span className="rs-neon" />
            <strong>{c.title}</strong>
            {c.lines.map((l) => (
              <small key={l}>{l}</small>
            ))}
            {c.live && <i className="rs-live" />}
            {c.bar && <span className="rs-bar" />}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
