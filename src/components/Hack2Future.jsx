import { useMemo } from 'react'
import { Reveal, useParallax } from '../hooks/useReveal.jsx'
import { ArrowRight } from './Icons.jsx'

/*
 * EDITABLE CONTENT — Hack2Future
 * Fill in `value` for any item once the official information is published.
 * An empty `value` renders a "Coming Soon" label. Nothing here is official data.
 */
const DETAILS = [
  { id: 'desc', title: 'Hackathon description', value: '' },
  { id: 'problems', title: 'Problem statements', value: '' },
  { id: 'dates', title: 'Important dates', value: '' },
  { id: 'prizes', title: 'Prizes', value: '' },
  { id: 'rules', title: 'Rules & eligibility', value: '' },
]
const REGISTRATION = { title: 'Registration', url: '' } // set `url` to enable the button
const FAQS = [
  { q: 'Who can participate?', a: '' },
  { q: 'How are teams formed?', a: '' },
  { q: 'What should participants bring?', a: '' },
  { q: 'Where can I ask a question?', a: '' },
]

function Starfield() {
  const stars = useMemo(() => {
    let s = 7
    const rnd = () => {
      s = (s * 16807) % 2147483647
      return (s - 1) / 2147483646
    }
    return Array.from({ length: 110 }, (_, i) => ({
      id: i,
      left: rnd() * 100,
      top: rnd() * 100,
      size: 1 + rnd() * 2.2,
      delay: rnd() * 5,
      dur: 2.5 + rnd() * 4,
    }))
  }, [])
  return (
    <div className="stars" aria-hidden="true">
      {stars.map((s) => (
        <i
          key={s.id}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  )
}

function Astronaut() {
  return (
    <svg className="astro" viewBox="0 0 300 380" role="img" aria-label="An astronaut floating in space">
      <defs>
        <linearGradient id="suit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#b9c6e8" />
        </linearGradient>
        <linearGradient id="visor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6d7bff" />
          <stop offset="0.5" stopColor="#1a1f5c" />
          <stop offset="1" stopColor="#c04dff" />
        </linearGradient>
        <radialGradient id="auraG">
          <stop offset="0" stopColor="#6d7bff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#6d7bff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="150" cy="190" r="170" fill="url(#auraG)" />
      <path d="M232 250 Q300 290 280 360" stroke="#7fd0ff" strokeWidth="3" fill="none" strokeDasharray="2 6" strokeLinecap="round" />
      <rect x="86" y="150" width="128" height="140" rx="26" fill="#8f9cc9" />
      <rect x="108" y="278" width="40" height="78" rx="18" fill="url(#suit)" transform="rotate(8 128 278)" />
      <rect x="156" y="278" width="40" height="78" rx="18" fill="url(#suit)" transform="rotate(-10 176 278)" />
      <rect x="104" y="338" width="50" height="22" rx="10" fill="#5a6aa8" transform="rotate(8 128 338)" />
      <rect x="152" y="338" width="50" height="22" rx="10" fill="#5a6aa8" transform="rotate(-10 176 338)" />
      <rect x="56" y="170" width="38" height="90" rx="19" fill="url(#suit)" transform="rotate(24 75 170)" />
      <rect x="206" y="160" width="38" height="90" rx="19" fill="url(#suit)" transform="rotate(-38 225 160)" />
      <circle cx="52" cy="262" r="19" fill="#5a6aa8" />
      <circle cx="262" cy="240" r="19" fill="#5a6aa8" />
      <rect x="96" y="150" width="108" height="140" rx="34" fill="url(#suit)" />
      <rect x="124" y="190" width="52" height="40" rx="10" fill="#1a1f5c" />
      <circle cx="138" cy="204" r="5" fill="#4df0ff" />
      <circle cx="156" cy="204" r="5" fill="#ff4fd8" />
      <rect x="132" y="218" width="36" height="5" rx="2.5" fill="#6d7bff" />
      <circle cx="150" cy="104" r="68" fill="url(#suit)" />
      <rect x="96" y="66" width="108" height="74" rx="36" fill="url(#visor)" />
      <ellipse cx="128" cy="86" rx="20" ry="9" fill="#fff" opacity="0.35" transform="rotate(-24 128 86)" />
      <circle cx="82" cy="108" r="8" fill="#8f9cc9" />
      <circle cx="218" cy="108" r="8" fill="#8f9cc9" />
    </svg>
  )
}

function Planet() {
  return (
    <svg className="planet" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="pg" cx="0.32" cy="0.3" r="0.85">
          <stop offset="0" stopColor="#c58bff" />
          <stop offset="0.45" stopColor="#5a3fd0" />
          <stop offset="1" stopColor="#0c0a3a" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="120" fill="url(#pg)" />
      <ellipse cx="200" cy="200" rx="190" ry="38" fill="none" stroke="#8fd8ff" strokeOpacity="0.55" strokeWidth="5" transform="rotate(-18 200 200)" />
      <ellipse cx="200" cy="200" rx="165" ry="30" fill="none" stroke="#c58bff" strokeOpacity="0.35" strokeWidth="3" transform="rotate(-18 200 200)" />
      <circle cx="160" cy="170" r="16" fill="#0c0a3a" opacity="0.25" />
      <circle cx="232" cy="236" r="10" fill="#0c0a3a" opacity="0.25" />
    </svg>
  )
}

function Moon() {
  return (
    <svg className="moonlet" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="mg" cx="0.35" cy="0.3" r="0.9">
          <stop offset="0" stopColor="#ffd7f5" />
          <stop offset="0.6" stopColor="#c45bd6" />
          <stop offset="1" stopColor="#2a0e55" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#mg)" />
      <circle cx="38" cy="40" r="7" fill="#2a0e55" opacity="0.25" />
      <circle cx="62" cy="62" r="5" fill="#2a0e55" opacity="0.25" />
    </svg>
  )
}

function Station() {
  return (
    <svg className="station" viewBox="0 0 320 140" aria-hidden="true" focusable="false">
      <g stroke="#4df0ff" strokeWidth="1.5" fill="#0b1240">
        <rect x="10" y="40" width="90" height="60" rx="3" />
        <rect x="220" y="40" width="90" height="60" rx="3" />
        <path d="M30 40v60M50 40v60M70 40v60M90 40v60M240 40v60M260 40v60M280 40v60M300 40v60" fill="none" opacity="0.5" />
        <rect x="100" y="64" width="120" height="12" />
        <rect x="128" y="36" width="64" height="68" rx="16" fill="#141b66" />
        <circle cx="160" cy="70" r="14" fill="#06091f" />
        <circle cx="160" cy="70" r="6" fill="#4df0ff" stroke="none" />
        <path d="M160 36V12M152 12h16" fill="none" />
      </g>
      <circle cx="160" cy="12" r="3" fill="#ff4fd8" />
    </svg>
  )
}

export default function Hack2Future() {
  const ref = useParallax()

  return (
    <section id="hack2future" className="space" ref={ref} aria-labelledby="h2f-title">
      <div className="space__bg" aria-hidden="true" />
      <Starfield />
      <div className="space__nebula" aria-hidden="true" />
      <div className="space__cloud space__cloud--a" aria-hidden="true" />
      <div className="space__cloud space__cloud--b" aria-hidden="true" />
      <Planet />
      <Moon />
      <Station />

      <div className="container space__grid">
        <Reveal className="space__copy">
          <p className="eyebrow eyebrow--neon">A national-level flagship hackathon</p>
          <h2 id="h2f-title" className="space__title">
            <span>HACK</span>
            <b>2</b>
            <span>FUTURE</span>
          </h2>
          <p className="space__tagline">Build the future. One idea at a time.</p>
          <p className="lead">
            When the ocean ends, the sky begins. Hack2Future is the flagship national-level hackathon of
            IIIT Dharwad, happening during AVINYA 2027 — a launchpad for the people who build what comes
            next.
          </p>
          <a className="btn btn--neon" href="#h2f-details">
            Explore Hack2Future <ArrowRight />
          </a>
        </Reveal>

        <Reveal className="space__visual" delay={150} from="right">
          <div className="astro-wrap">
            <Astronaut />
          </div>
        </Reveal>
      </div>

      <div id="h2f-details" className="container mission-control">
        <Reveal>
          <p className="eyebrow eyebrow--neon">Mission control</p>
          <h3 className="mission-control__title">Everything you need to launch</h3>
          <p className="mission-control__note">
            Official details will appear here as soon as they are announced.
          </p>
        </Reveal>

        <div className="mission-grid">
          {DETAILS.map((d, i) => (
            <Reveal key={d.id} delay={i * 70} className="mcard">
              <h4>{d.title}</h4>
              {d.value ? <p>{d.value}</p> : <span className="soon">Coming Soon</span>}
            </Reveal>
          ))}
          <Reveal delay={DETAILS.length * 70} className="mcard mcard--cta">
            <h4>{REGISTRATION.title}</h4>
            {REGISTRATION.url ? (
              <a className="btn btn--neon" href={REGISTRATION.url} target="_blank" rel="noopener noreferrer">
                Register now <ArrowRight />
              </a>
            ) : (
              <>
                <span className="soon">Opens Soon</span>
                <button type="button" className="btn btn--disabled" disabled>
                  Registration link — coming soon
                </button>
              </>
            )}
          </Reveal>
        </div>

        <Reveal className="faq">
          <h3 className="faq__title">FAQs</h3>
          {FAQS.map((f) => (
            <details key={f.q} className="faq__item">
              <summary>{f.q}</summary>
              <p>{f.a || 'Coming Soon — the official answer will be published here.'}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
