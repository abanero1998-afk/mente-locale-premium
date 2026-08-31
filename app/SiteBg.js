'use client';

export default function SiteBg() {
  const dots = Array.from({ length: 28 }, (_, i) => i);
  return (
    <div className="site-fx" aria-hidden>
      <div className="site-fx-photo" />
      <div className="site-fx-a a1" />
      <div className="site-fx-a a2" />
      <div className="site-fx-s s1" />
      <div className="site-fx-s s2" />
      <div className="site-fx-s s3" />
      <div className="site-fx-vig" />
      {dots.map((i) => (
        <span
          key={i}
          className="site-fx-dot"
          style={{
            left: ((i * 31 + 6) % 100) + '%',
            top: ((i * 19 + 5) % 96) + '%',
            width: 2 + (i % 4),
            height: 2 + (i % 4),
            background: i % 2 ? '#00D9FF' : '#b197ff',
            animationDuration: 5 + (i % 6) + 's',
          }}
        />
      ))}
    </div>
  );
}
