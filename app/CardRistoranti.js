'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

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
    g.gain.setValueAtTime(0.06, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.13);
  } catch (e) {}
}

export default function CardRistoranti() {
  const wrap = useRef(null);
  const [hover, setHover] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [cur, setCur] = useState({ x: 0, y: 0, on: false });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 180, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 180, damping: 18 });
  const lx = useTransform(mx, [-0.5, 0.5], [10, 90]);
  const ly = useTransform(my, [-0.5, 0.5], [10, 90]);
  const c34 = useCount(34);
  const c92 = useCount(92);
  const c24 = useCount(24);

  const onMove = (e) => {
    const el = wrap.current; if (!el) return;
    const b = el.getBoundingClientRect();
    mx.set((e.clientX - b.left) / b.width - 0.5);
    my.set((e.clientY - b.top) / b.height - 0.5);
    setCur({ x: e.clientX - b.left, y: e.clientY - b.top, on: true });
  };

  const onClick = (e) => {
    haptic();
    const el = wrap.current; if (!el) return;
    const b = el.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - b.left, y: e.clientY - b.top }]);
    setTimeout(() => setRipples((r) => r.filter((x) => x.id !== id)), 700);
  };

  const rows = [
    ['Sala Live', '22 tavoli controllati'],
    ['Menu QR Vivo', 'prezzo cambiato in 10s'],
    ['KDS Cucina', 'zero errori'],
  ];

  return (
    <motion.a
      ref={wrap}
      href="/ristorazione"
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); mx.set(0); my.set(0); setCur((c) => ({ ...c, on: false })); }}
      onClick={onClick}
      initial={{ y: 40, scale: 0.9, filter: 'blur(20px)', opacity: 0 }}
      animate={{ y: 0, scale: 1, filter: 'blur(0px)', opacity: 1 }}
      transition={{ type: 'spring', duration: 0.8, bounce: 0.22 }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="group relative mx-auto block max-w-[440px] w-full rounded-[40px] overflow-hidden no-underline text-white"
    >
      <motion.div
        className="absolute inset-0 rounded-[40px] pointer-events-none z-30"
        animate={{
          boxShadow: ['0 0 0px #00D9FF', '0 0 60px rgba(0,217,255,0.4)', '0 0 0px #00D9FF'],
          borderColor: ['rgba(255,255,255,0.08)', '#00D9FF', 'rgba(255,255,255,0.08)'],
        }}
        transition={{ duration: hover ? 1 : 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
      />
      <div className="relative rounded-[40px] overflow-hidden bg-white/[0.04]" style={{ backdropFilter: 'blur(60px)', WebkitBackdropFilter: 'blur(60px)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)' }}>
        <motion.div className="pointer-events-none absolute inset-0 z-20 mix-blend-soft-light" style={{
          background: useTransform([lx, ly], ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(0,217,255,0.28), transparent 42%)`)
        }} />
        {[0,1,2,3,4,5].map((i) => (
          <motion.span key={i} className="pointer-events-none absolute rounded-full bg-[#00D9FF]/30"
            style={{ width: 6, height: 6, left: `${12 + i * 15}%`, top: `${28 + (i % 3) * 16}%` }}
            animate={{ y: [0, -16, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 5 + i * 0.4, repeat: Infinity }} />
        ))}
        <div className="relative h-[180px] overflow-hidden">
          <motion.img src={IMG} alt="Ristorante vista mare" className="h-full w-full object-cover" animate={{ scale: hover ? 1.1 : 1 }} transition={{ duration: 0.6 }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#05070A]" />
          <motion.div className="absolute inset-0 bg-[#00D9FF]/10" animate={{ opacity: hover ? 1 : 0 }} />
          <motion.div className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-semibold border border-[#00D9FF]/50 bg-black/30 backdrop-blur-md"
            animate={{ y: [0, -4, 0] }} transition={{ duration: 3.2, repeat: Infinity }}>\uD83D\uDD25 HOT IN ZONA</motion.div>
          <div className="absolute top-3 right-3 rounded-full px-2.5 py-1 text-[11px] font-semibold bg-black/45 backdrop-blur-md border border-white/10">4.9 \u2605</div>
          <div className="absolute top-3 right-[72px] flex items-center gap-1.5">
            <span className="relative flex h-2 w-2"><span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" /><span className="relative h-2 w-2 rounded-full bg-emerald-400" /></span>
            <span className="text-[10px] uppercase tracking-[2px] text-[#00D9FF]">Live</span>
          </div>
        </div>
        <div className="px-7 pb-6 pt-3">
          <h3 className="text-2xl font-bold leading-tight">Ristoranti & Locali <span className="bg-gradient-to-r from-[#00D9FF] to-[#7B61FF] bg-clip-text text-transparent">Vista Mare</span></h3>
          <p className="mt-1.5 text-sm text-white/60">Da Ladispoli a Fregene, trasformiamo tavoli vuoti in incasso garantito.</p>
          <div className="relative my-3 h-px overflow-hidden bg-white/10">
            <motion.div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent"
              animate={{ x: ['-40%', '340%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[{k:`+${c34}%`,s:'coperti',bar:true},{k:`\u2212${c92}%`,s:'no-show',check:true},{k:'\u20ac2.4k',s:'media /giorno'},{k:`${c24}h`,s:'onboarding',clock:true}].map((m)=>(
              <div key={m.s} className="rounded-2xl p-3 bg-white/[0.03] border border-white/[0.06] hover:scale-105 hover:border-[#00D9FF]/50 transition">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#00D9FF]">{m.k}</span>
                  {m.check && <span className="text-emerald-400">\u2713</span>}
                  {m.clock && <motion.span animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}>\u23F1</motion.span>}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/40">{m.s}</div>
                {m.bar && <div className="mt-1.5 h-1 rounded-full bg-white/10 overflow-hidden"><motion.div className="h-full bg-[#00D9FF]" initial={{width:0}} animate={{width:'100%'}} transition={{duration:1.2}} /></div>}
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-1.5">
            {rows.map(([a,b]) => (
              <div key={a} className="flex items-center gap-2 text-xs text-white/75">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF] animate-pulse" />
                <span className="flex-1">{a} <span className="text-white/40">\u2192 {b}</span></span>
                <span className="text-[#00D9FF]">\u2192</span>
              </div>
            ))}
          </div>
          <span className="relative mt-4 flex w-full overflow-hidden rounded-full py-2.5 text-sm font-bold text-[#05070A] justify-center"
            style={{ background: 'linear-gradient(90deg,#00D9FF,#7B61FF)', boxShadow: hover ? '0 10px 40px rgba(0,217,255,0.4)' : 'none' }}>
            Vedi Come Funziona \u2192
            {ripples.map((r) => (
              <motion.span key={r.id} className="pointer-events-none absolute rounded-full bg-white/50"
                style={{ left: r.x, top: r.y, width: 8, height: 8 }}
                initial={{ scale: 0, opacity: 0.6 }} animate={{ scale: 28, opacity: 0 }} />
            ))}
          </span>
          <p className="mt-2 text-center text-[11px] text-white/40">Onboarding 24h \u2022 Risultati garantiti</p>
        </div>
      </div>
      {cur.on && (
        <motion.div className="pointer-events-none absolute z-50 grid h-[60px] w-[60px] place-items-center rounded-full border border-[#00D9FF] bg-[#00D9FF]/15 text-[10px] uppercase tracking-widest text-[#00D9FF]"
          style={{ left: cur.x - 30, top: cur.y - 30 }} initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          Apri
        </motion.div>
      )}
    </motion.a>
  );
}
