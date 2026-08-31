'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const IMG = 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80';

function useCount(to, dur = 1100) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t0 = performance.now();
    let raf = 0;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, dur]);
  return n;
}

function haptic() {
  try {
    if (navigator.vibrate) navigator.vibrate(10);
    const C = window.AudioContext || window.webkitAudioContext;
    const ctx = new C();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.value = 420;
    g.gain.setValueAtTime(0.05, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.11);
  } catch (e) {}
}

export default function CardRistoranti() {
  const wrap = useRef(null);
  const [hover, setHover] = useState(false);
  const [fine, setFine] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 180, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 20 });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)');
    const apply = () => setFine(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  const c34 = useCount(34);
  const c92 = useCount(92);
  const c24 = useCount(24);

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
      onMouseLeave={() => { setHover(false); mx.set(0); my.set(0); }}
      onClick={haptic}
      initial={{ y: 28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 0.7 }}
      style={fine ? { rotateX: rx, rotateY: ry, transformPerspective: 900 } : undefined}
      className="ml-resto-card"
    >
      <span className={'ml-resto-glow' + (hover ? ' is-hot' : '')} />
      <span className="ml-resto-live">
        <i /><b>LIVE</b>
      </span>

      <div className="ml-resto-photo">
        <img src={IMG} alt="Ristorante vista mare" />
        <span className="ml-resto-fade" />
        <span className="ml-resto-hot">HOT IN ZONA</span>
        <span className="ml-resto-rate">4.9 ★</span>
      </div>

      <div className="ml-resto-body">
        <h3>
          Ristoranti &amp; Locali{' '}
          <em>Vista Mare</em>
        </h3>
        <p className="ml-resto-sub">
          Da Ladispoli a Fregene, trasformiamo tavoli vuoti in incasso garantito.
        </p>
        <i className="ml-resto-line" />

        <div className="ml-resto-metrics">
          <div><strong>+{c34}%</strong><small>coperti</small></div>
          <div><strong>−{c92}%</strong><small>no-show</small></div>
          <div><strong>€2.4k</strong><small>media /giorno</small></div>
          <div><strong>{c24}h</strong><small>onboarding</small></div>
        </div>

        <ul className="ml-resto-rows">
          <li>Sala Live — 22 tavoli</li>
          <li>Menu QR — prezzo in 10s</li>
          <li>KDS Cucina — zero errori</li>
        </ul>

        <span className="ml-resto-cta">Vedi Come Funziona →</span>
        <small className="ml-resto-note">Onboarding 24h • Risultati garantiti</small>
      </div>
    </motion.a>
  );
}
