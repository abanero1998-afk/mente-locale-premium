'use client';

import { useEffect, useRef, useState } from 'react';
import LOGO from './logo-data';

const WA = 'https://wa.me/393444106229?text=' + encodeURIComponent("Ciao, voglio prenotare l'onboarding in 24h");
const IG = 'https://www.instagram.com/smart.srls.ia';
const TT = 'https://www.tiktok.com/@mente.locale0';
const FB = 'https://www.facebook.com/share/19Q1m2xxHx/?mibextid=wwXIfr';
const SITE = 'https://www.mentelocale.site';
const PHRASE = 'Il servizio perfetto non si vede. Si percepisce.';

export default function HeroCard() {
  const [n, setN] = useState(0);
  const [boot, setBoot] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setBoot(false), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setN((x) => (x >= PHRASE.length ? x : x + 1)), 40);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, raf, t = 0;
    const parts = Array.from({ length: 32 }, () => ({
      x: Math.random(), y: Math.random(), s: 4 + Math.random() * 14, v: 0.0004 + Math.random() * 0.001,
    }));
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    const loop = () => {
      t += 0.004;
      ctx.clearRect(0, 0, w, h);
      const b1x = w * (0.22 + Math.sin(t) * 0.08);
      const b1y = h * (0.22 + Math.cos(t * 0.8) * 0.06);
      const b2x = w * (0.78 + Math.cos(t * 0.7) * 0.07);
      const b2y = h * (0.28 + Math.sin(t) * 0.07);
      const g1 = ctx.createRadialGradient(b1x, b1y, 0, b1x, b1y, Math.max(w, h) * 0.42);
      g1.addColorStop(0, 'rgba(0,217,255,0.28)');
      g1.addColorStop(1, 'rgba(0,0,0,0)');
      const g2 = ctx.createRadialGradient(b2x, b2y, 0, b2x, b2y, Math.max(w, h) * 0.4);
      g2.addColorStop(0, 'rgba(123,97,255,0.28)');
      g2.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g1; ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = g2; ctx.fillRect(0, 0, w, h);
      parts.forEach((p) => {
        p.y -= p.v;
        if (p.y < -0.05) p.y = 1.05;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,0.18)';
        ctx.arc(p.x * w, p.y * h, p.s * 0.35, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <>
      {boot && (
        <div className="ml-loader">
          <img src={LOGO} alt="Mente Locale" />
        </div>
      )}
      <canvas ref={canvasRef} className="ml-fx" />
      <section className="hero-phone">
        <div className="badge liquid-glass hero-badge">
          <span className="dot-live" />
          Onboarding 24h · Risultati garantiti
        </div>
        <div className="phone-card">
          <img src={LOGO} alt="Mente Locale" className="phone-logo" />
          <p className="typewriter">
            {PHRASE.slice(0, n)}
            <span className="caret">|</span>
          </p>
          <h2 className="phone-h">
            PIÙ CLIENTI<br />MENO SBATTI<br />
            <span className="grad">IN 7 GIORNI</span>
          </h2>
          <div className="phone-socials five">
            <a className="sq wa" href={WA} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="sq ig" href={IG} target="_blank" rel="noreferrer">Instagram</a>
            <a className="sq fb" href={FB} target="_blank" rel="noreferrer">Facebook</a>
            <a className="sq tt" href={TT} target="_blank" rel="noreferrer">TikTok</a>
            <a className="sq web" href={SITE} target="_blank" rel="noreferrer">Sito</a>
          </div>
        </div>
        <a className="wa-prive" href={WA} target="_blank" rel="noreferrer">WhatsApp privato</a>
      </section>
    </>
  );
}
