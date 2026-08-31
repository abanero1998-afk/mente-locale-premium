'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const IMG =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80';

function haptic() {
  try {
    if (navigator.vibrate) navigator.vibrate(8);
  } catch (e) {}
}

export default function CardRistoranti() {
  const wrap = useRef(null);
  const [hover, setHover] = useState(false);
  const [fine, setFine] = useState(false);
  const [price, setPrice] = useState(28);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 160, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 160, damping: 20 });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)');
    const apply = () => setFine(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setPrice((p) => (p === 28 ? 29 : 28)), 2800);
    return () => clearInterval(id);
  }, []);

  const onMove = (e) => {
    if (!fine || !wrap.current) return;
    const b = wrap.current.getBoundingClientRect();
    mx.set((e.clientX - b.left) / b.width - 0.5);
    my.set((e.clientY - b.top) / b.height - 0.5);
  };

  return (
    <motion.a
      ref={wrap}
      href="/ristorazione"
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        mx.set(0);
        my.set(0);
      }}
      onClick={haptic}
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={fine ? { rotateX: rx, rotateY: ry, transformPerspective: 900 } : undefined}
      className="ml-resto-card"
    >
      <span className={'ml-resto-glow' + (hover ? ' is-hot' : '')} />

      <div className="ml-resto-scene">
        <img src={IMG} alt="Ristoranti e Locali" />
        <span className="ml-resto-vignette" />
        <span className="ml-smoke s1" />
        <span className="ml-smoke s2" />
        <span className="ml-smoke s3" />

        <motion.div className="ml-float f1" animate={{ y: [0, -8, 0] }} transition={{ duration: 4.2, repeat: Infinity }}>
          <b>Prenotazioni</b>
          <small>Stasera · 19:30 · Tavolo per 2</small>
          <em className="dot" />
        </motion.div>
        <motion.div className="ml-float f2" animate={{ y: [0, 9, 0] }} transition={{ duration: 4.8, repeat: Infinity }}>
          <b>Menu</b>
          <small>Pasta Tartufo · €{price}</small>
          <small>Wagyu · €64</small>
        </motion.div>
        <motion.div className="ml-float f3" animate={{ y: [0, -7, 0] }} transition={{ duration: 3.8, repeat: Infinity }}>
          <b>Ordina Online</b>
          <small>Delivery 25-35 min · Gratis</small>
          <i className="bar" />
        </motion.div>
      </div>

      <div className="ml-resto-body">
        <h3>
          Ristoranti e <em>Locali</em>
        </h3>
        <p className="ml-resto-sub">Il sistema che trasforma tavoli vuoti in incasso garantito.</p>
        <span className="ml-resto-cta">Vedi come funziona →</span>
      </div>
    </motion.a>
  );
}
