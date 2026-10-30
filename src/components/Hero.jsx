import { useMemo } from 'react'
import { ArrowDown } from './Icons.jsx'
import Particles from './Particles.jsx'
import { useParallax } from '../hooks/useReveal.jsx'

// Deterministic pseudo-random so stars don't jump between renders.
function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function HeroArt() {
  const stars = useMemo(() => {
    const rnd = seeded(42)
    return Array.from({ length: 90 }, (_, i) => ({
      id: i,
      x: rnd() * 1440,
      y: rnd() * 400,
      r: 0.6 + rnd() * 1.4,
      d: 2 + rnd() * 4,
      o: 0.4 + rnd() * 0.6,
    }))
  }, [])

  return (
    <svg
      className="hero__svg"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMax meet"
      role="img"
      aria-label="A sailing boat on a dark ocean at dusk, with three mysterious islands on the horizon"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#040816" />
          <stop offset="0.55" stopColor="#0c1a3f" />
          <stop offset="0.85" stopColor="#3a2a66" />
          <stop offset="1" stopColor="#e07a5f" />
        </linearGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1d3a6b" />
          <stop offset="0.35" stopColor="#0b1f45" />
          <stop offset="1" stopColor="#040b1c" />
        </linearGradient>
        <radialGradient id="moonGlow">
          <stop offset="0" stopColor="#fff3d6" stopOpacity="0.9" />
          <stop offset="0.35" stopColor="#ffd9a0" stopOpacity="0.25" />
          <stop offset="1" stopColor="#ffd9a0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sailA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff6e5" />
          <stop offset="1" stopColor="#f2b88a" />
        </linearGradient>
        <linearGradient id="sailB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe9d1" />
          <stop offset="1" stopColor="#e58e6a" />
        </linearGradient>
        <linearGradient id="hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6b3b2a" />
          <stop offset="1" stopColor="#2a140f" />
        </linearGradient>
        <linearGradient id="reflect" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffd9a0" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffd9a0" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffd9a0" stopOpacity="0" />
        </linearGradient>
        <filter id="blur6" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="1440" height="480" fill="url(#sky)" />
      <g className="hero__stars">
        {stars.map((s) => (
          <circle
            key={s.id}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="#fff"
            opacity={s.o}
            style={{ animationDuration: `${s.d}s`, animationDelay: `${(s.id % 7) * 0.4}s` }}
          />
        ))}
      </g>

      {/* Moon */}
      <circle cx="1080" cy="150" r="190" fill="url(#moonGlow)" />
      <circle cx="1080" cy="150" r="46" fill="#fff3d6" />
      <circle cx="1066" cy="140" r="9" fill="#f0dcb4" opacity="0.7" />
      <circle cx="1094" cy="164" r="6" fill="#f0dcb4" opacity="0.6" />

      {/* Distant clouds */}
      <g className="hero__clouds" fill="#6a5aa8" opacity="0.28">
        <ellipse cx="260" cy="330" rx="170" ry="14" />
        <ellipse cx="420" cy="345" rx="120" ry="10" />
        <ellipse cx="1180" cy="300" rx="190" ry="12" />
        <ellipse cx="980" cy="360" rx="130" ry="9" />
      </g>

      {/* Island 1 — The Last Outpost (desert, giant planet) */}
      <g className="isle isle--1">
        <circle cx="330" cy="330" r="62" fill="#c97a3b" opacity="0.55" />
        <circle cx="330" cy="330" r="62" fill="none" stroke="#ffb866" strokeWidth="2" opacity="0.5" />
        <ellipse cx="330" cy="330" rx="108" ry="12" fill="none" stroke="#ffd29a" strokeWidth="1.5" opacity="0.4" transform="rotate(-14 330 330)" />
        <path d="M150 482 Q215 405 290 432 Q340 380 400 430 Q470 400 520 482 Z" fill="#2a1a22" />
        <path d="M150 482 Q215 415 290 440 Q340 395 400 438 Q470 412 520 482 Z" fill="#4a2a24" opacity="0.8" />
        <path d="M300 438 L300 384 L308 384 L308 360 L316 384 L324 384 L324 438 Z" fill="#1a0f14" />
        <path d="M352 436 L352 398 L368 398 L368 436 Z" fill="#1a0f14" />
        <rect x="302" y="392" width="4" height="6" fill="#ffb866" />
        <rect x="358" y="410" width="4" height="6" fill="#ffb866" />
      </g>

      {/* Island 2 — The Pandemonium (cyberpunk, palms) */}
      <g className="isle isle--2">
        <path d="M600 482 Q640 430 700 440 Q760 420 830 442 Q880 432 920 482 Z" fill="#1a1038" />
        <g fill="#241450">
          <rect x="660" y="372" width="14" height="70" />
          <rect x="682" y="344" width="18" height="98" />
          <rect x="708" y="388" width="14" height="54" />
          <rect x="730" y="360" width="12" height="82" />
          <rect x="750" y="396" width="16" height="46" />
        </g>
        <g fill="#ff4fd8">
          <rect x="686" y="352" width="3" height="3" />
          <rect x="692" y="366" width="3" height="3" />
          <rect x="734" y="372" width="3" height="3" />
          <rect x="664" y="386" width="3" height="3" />
          <rect x="754" y="410" width="3" height="3" />
        </g>
        <rect x="690" y="330" width="2" height="16" fill="#ff4fd8" />
        <path d="M612 444 Q610 410 622 394 M622 394 Q606 394 596 402 M622 394 Q636 388 646 396 M622 394 Q620 380 630 372" stroke="#0d0824" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M884 446 Q888 414 878 400 M878 400 Q894 398 902 406 M878 400 Q864 396 856 404" stroke="#0d0824" strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="760" cy="470" rx="170" ry="8" fill="#ff4fd8" opacity="0.18" filter="url(#blur6)" />
      </g>

      {/* Island 3 — The Carnival Island (ferris wheel) */}
      <g className="isle isle--3">
        <path d="M980 482 Q1040 420 1110 438 Q1170 412 1240 436 Q1290 440 1320 482 Z" fill="#0a1d1f" />
        <g stroke="#ffcf5a" strokeWidth="1.6" fill="none">
          <circle cx="1130" cy="388" r="44" />
          <circle cx="1130" cy="388" r="26" opacity="0.6" />
          <path d="M1130 344v88M1086 388h88M1099 357l62 62M1161 357l-62 62" />
        </g>
        <path d="M1130 388 L1112 442 M1130 388 L1148 442" stroke="#ffcf5a" strokeWidth="2" />
        <g fill="#ff5d73">
          <circle cx="1130" cy="344" r="3.5" />
          <circle cx="1174" cy="388" r="3.5" />
          <circle cx="1130" cy="432" r="3.5" />
          <circle cx="1086" cy="388" r="3.5" />
        </g>
        <g fill="#5df0c8">
          <circle cx="1161" cy="357" r="3" />
          <circle cx="1161" cy="419" r="3" />
          <circle cx="1099" cy="419" r="3" />
          <circle cx="1099" cy="357" r="3" />
        </g>
        <path d="M1200 440 L1218 414 L1236 440 Z M1236 440 L1254 418 L1272 440 Z" fill="#ff5d73" opacity="0.9" />
        <path d="M1010 450 L1030 428 L1050 450 Z" fill="#ffcf5a" opacity="0.85" />
      </g>

      {/* Horizon haze + sea */}
      <rect x="0" y="470" width="1440" height="14" fill="#e07a5f" opacity="0.25" filter="url(#blur6)" />
      <rect x="0" y="480" width="1440" height="280" fill="url(#sea)" />

      {/* Moon reflection */}
      <g className="hero__reflect">
        <rect x="1030" y="486" width="100" height="5" rx="2" fill="url(#reflect)" />
        <rect x="1040" y="506" width="80" height="4" rx="2" fill="url(#reflect)" />
        <rect x="1020" y="530" width="120" height="4" rx="2" fill="url(#reflect)" />
        <rect x="1050" y="558" width="60" height="3" rx="2" fill="url(#reflect)" />
        <rect x="1030" y="590" width="100" height="3" rx="2" fill="url(#reflect)" />
      </g>

      {/* Back wave */}
      <g className="wave wave--back">
        <path
          d="M0 540 Q60 524 120 540 T240 540 T360 540 T480 540 T600 540 T720 540 T840 540 T960 540 T1080 540 T1200 540 T1320 540 T1440 540 T1560 540 T1680 540 T1800 540 T1920 540 T2040 540 T2160 540 T2280 540 T2400 540 T2520 540 T2640 540 T2760 540 T2880 540 V760 H0 Z"
          fill="#12294f"
          opacity="0.75"
        />
      </g>


      {/* Mid + front waves */}
      <g className="wave wave--mid">
        <path
          d="M0 640 Q60 620 120 640 T240 640 T360 640 T480 640 T600 640 T720 640 T840 640 T960 640 T1080 640 T1200 640 T1320 640 T1440 640 T1560 640 T1680 640 T1800 640 T1920 640 T2040 640 T2160 640 T2280 640 T2400 640 T2520 640 T2640 640 T2760 640 T2880 640 V760 H0 Z"
          fill="#0a1a3a"
          opacity="0.9"
        />
      </g>
      {/* Boat */}
      <g className="boat" transform="translate(720 652) scale(0.66)">
        <ellipse cx="0" cy="62" rx="150" ry="9" fill="#ffd9a0" opacity="0.18" filter="url(#blur6)" />
        <g className="boat__body">
          <path d="M-8 -230 L-8 40" stroke="#2a140f" strokeWidth="6" strokeLinecap="round" />
          <path d="M-14 -226 Q-130 -150 -150 -20 L-14 -34 Z" fill="url(#sailA)" />
          <path d="M-2 -210 Q80 -150 110 -30 L-2 -34 Z" fill="url(#sailB)" />
          <path d="M-14 -226 Q-70 -150 -150 -20" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
          <path d="M-8 -236 L18 -246 L-8 -256 Z" fill="#ff5d73" />
          <path d="M-190 24 L190 24 Q165 78 100 84 L-100 84 Q-165 78 -190 24 Z" fill="url(#hull)" />
          <path d="M-190 24 L190 24" stroke="#ffb866" strokeWidth="3" />
          <path d="M-176 40 L176 40" stroke="#ffb866" strokeOpacity="0.35" strokeWidth="2" />
          <circle cx="-70" cy="52" r="5" fill="#ffd9a0" />
          <circle cx="-30" cy="52" r="5" fill="#ffd9a0" />
          <circle cx="10" cy="52" r="5" fill="#ffd9a0" />
          <circle cx="50" cy="52" r="5" fill="#ffd9a0" />
          <circle cx="160" cy="16" r="6" fill="#ffd9a0" />
          <circle cx="160" cy="16" r="26" fill="url(#moonGlow)" />
        </g>
      </g>

      <g className="wave wave--front">
        <path
          d="M0 700 Q80 676 160 700 T320 700 T480 700 T640 700 T800 700 T960 700 T1120 700 T1280 700 T1440 700 T1600 700 T1760 700 T1920 700 T2080 700 T2240 700 T2400 700 T2560 700 T2720 700 T2880 700 V760 H0 Z"
          fill="#050d22"
        />
      </g>

      {/* Boat reflection on the foreground water */}
      <g className="hero__boat-reflect" opacity="0.5">
        <rect x="640" y="716" width="160" height="4" rx="2" fill="url(#reflect)" />
        <rect x="662" y="728" width="116" height="3" rx="1.5" fill="url(#reflect)" />
        <rect x="684" y="740" width="72" height="3" rx="1.5" fill="url(#reflect)" />
      </g>
    </svg>
  )
}

export default function Hero() {
  const ref = useParallax()

  const explore = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section id="home" className="hero" ref={ref} aria-labelledby="hero-title">
      <div className="hero__art" aria-hidden="false">
        <HeroArt />
      </div>
      <Particles kind="mote" count={26} seed={3} />
      <div className="hero__vignette" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">IIIT Dharwad presents</p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__title-main">AVINYA</span>
          <span className="hero__title-year">2027</span>
        </h1>
        <p className="hero__college">IIIT DHARWAD</p>
        <p className="hero__dates">
          <span>12</span>
          <i aria-hidden="true" />
          <span>13</span>
          <i aria-hidden="true" />
          <span>14</span>
          <em>March 2027</em>
        </p>
        <p className="hero__tagline">The Journey Begins</p>
        <p className="hero__desc">
          The techno-cultural fest of IIIT Dharwad. Set sail across an uncharted ocean and land on three
          islands — one for every day of the festival.
        </p>
        <button type="button" className="btn btn--primary hero__cta" onClick={explore}>
          Begin your journey <ArrowDown />
        </button>
      </div>
    </section>
  )
}
