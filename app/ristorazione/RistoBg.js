'use client';

export default function RistoBg() {
  const dots = Array.from({ length: 32 }, (_, i) => i);
  return (
    <div className="rs-page-bg" aria-hidden>
      <div className="rs-photo" />
      <div className="rs-aurora a1" />
      <div className="rs-aurora a2" />
      <div className="rs-smoke sm1" />
      <div className="rs-smoke sm2" />
      <div className="rs-smoke sm3" />
      <div className="rs-vignette" />
      {dots.map((i) => (
        <span
          key={i}
          className="rs-dot"
          style={{
            left: ((i * 29 + 8) % 100) + '%',
            top: ((i * 17 + 6) % 95) + '%',
            width: 2 + (i % 5),
            height: 2 + (i % 5),
            background: i % 2 ? '#00D9FF' : '#b197ff',
            animationDuration: 4 + (i % 7) + 's',
          }}
        />
      ))}
    </div>
  );
}
