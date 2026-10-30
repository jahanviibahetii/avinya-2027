import { Reveal } from '../hooks/useReveal.jsx'
import { Compass } from './Icons.jsx'

const HIGHLIGHTS = [
  { k: '3', v: 'Days', d: '12 · 13 · 14 March 2027' },
  { k: '3', v: 'Islands', d: 'Three worlds to discover' },
  { k: '1', v: 'Unforgettable Festival', d: 'AVINYA 2027' },
]

const PREVIEWS = [
  { href: '#day-1', cls: 'preview--desert', day: 'Day 1', name: 'The Last Outpost', date: '12 March', image: '/images/day1-last-outpost.jpg' },
  { href: '#day-2', cls: 'preview--synth', day: 'Day 2', name: 'The Pandemonium', date: '13 March', image: '/images/day2-pandemonium.jpg' },
  { href: '#day-3', cls: 'preview--carnival', day: 'Day 3', name: 'The Carnival Island', date: '14 March', image: '/images/day3-carnival.jpg' },
]

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="about__glow" aria-hidden="true" />
      <div className="container about__grid">
        <Reveal className="about__text">
          <p className="eyebrow">
            <Compass /> The story of Avinya
          </p>
          <h2 id="about-title" className="section__title">
            Every great journey begins with a <span className="text-gradient">destination unknown.</span>
          </h2>
          <p className="lead">
            This March, set sail into a world where technology meets creativity, where imagination meets
            innovation, and where every island holds a new experience.
          </p>
          <p>Three days. Three extraordinary worlds. One unforgettable journey.</p>
          <p className="about__welcome">Welcome to AVINYA 2027.</p>
          <p className="about__org">
            The techno-cultural fest of <strong>IIIT Dharwad</strong>.
          </p>
        </Reveal>

        <Reveal className="about__cards" delay={150} from="right">
          {HIGHLIGHTS.map((f) => (
            <div className="fact glass" key={f.v}>
              <span className="fact__k">{f.k}</span>
              <div>
                <strong>{f.v}</strong>
                <span>{f.d}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="container about__islands">
        <Reveal>
          <p className="about__chart-label">Your route</p>
        </Reveal>
        <ul className="previews">
          {PREVIEWS.map((p, i) => (
            <li key={p.href}>
              <Reveal as="div" delay={i * 120}>
                <a className={`preview ${p.cls}`} href={p.href}>
                  <img src={p.image} alt="" loading="lazy" decoding="async" width="623" height="266" />
                  <span className="preview__shade" aria-hidden="true" />
                  <span className="preview__text">
                    <small>
                      {p.day} · {p.date}
                    </small>
                    <strong>{p.name}</strong>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
