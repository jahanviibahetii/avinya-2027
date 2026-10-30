import { useMemo } from 'react'

/**
 * Decorative floating particles (embers, dust, lanterns…).
 * Positions come from a seeded generator so they are stable between renders.
 * Purely visual: hidden from assistive tech and disabled for reduced motion in CSS.
 */
export default function Particles({ kind = 'mote', count = 18, seed = 1 }) {
  const items = useMemo(() => {
    let s = seed * 9301 + 49297
    const rnd = () => {
      s = (s * 16807) % 2147483647
      return (s - 1) / 2147483646
    }
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rnd() * 100,
      size: 2 + rnd() * (kind === 'lantern' ? 9 : 4),
      dur: 14 + rnd() * 18,
      delay: -rnd() * 30,
      dx: (rnd() - 0.4) * (kind === 'dust' ? 420 : 120),
      o: 0.25 + rnd() * 0.6,
      hue: Math.floor(rnd() * 3),
    }))
  }, [count, seed, kind])

  return (
    <div className={`particles particles--${kind}`} aria-hidden="true">
      {items.map((p) => (
        <i
          key={p.id}
          className={`h${p.hue}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            '--dur': `${p.dur}s`,
            '--delay': `${p.delay}s`,
            '--dx': `${p.dx}px`,
            '--o': p.o,
          }}
        />
      ))}
    </div>
  )
}
