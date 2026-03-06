import { useMemo } from 'react';

const ParticleBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      tx: `${(Math.random() - 0.5) * 200}px`,
      ty: `${(Math.random() - 0.5) * 200}px`,
      duration: `${Math.random() * 10 + 8}s`,
      delay: `${Math.random() * 5}s`,
      color: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--secondary)' : 'var(--accent)',
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: `hsl(${p.color})`,
            boxShadow: `0 0 ${p.size * 3}px hsl(${p.color} / 0.5)`,
            '--tx': p.tx,
            '--ty': p.ty,
            '--duration': p.duration,
            '--delay': p.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
