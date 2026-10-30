import { Reveal, useParallax } from '../hooks/useReveal.jsx'
import Particles from './Particles.jsx'
import { ArrowRight } from './Icons.jsx'

/*
 * Island content. Line-up and schedule are intentionally empty:
 * add entries to `lineup` / `schedule` as `{ time: '...', title: '...' }`
 * (or plain strings for lineup) once official details are published.
 * While the arrays are empty, a "Coming Soon" notice is shown.
 */
const ISLANDS = [
  {
    id: 'day-1',
    cls: 'island--desert',
    particles: { kind: 'dust', count: 34 },
    day: 'Day 1',
    date: '12 March 2027',
    name: 'The Last Outpost',
    blurb:
      'The ocean gives way to endless dunes. Ancient, half-buried structures glow beneath a giant planet as the sun melts into gold. Few arrive here. Fewer leave unchanged.',
    tags: ['Dune · Desert', 'Post-apocalyptic', 'Golden hour'],
    image: '/images/day1-last-outpost.jpg',
    alt: 'A lone traveller overlooks a ruined desert outpost beneath a giant planet at sunset',
    lineup: [],
    schedule: [],
    next: { href: '#day-2', label: 'Sail to Day 2' },
  },
  {
    id: 'day-2',
    cls: 'island--synth',
    particles: null,
    day: 'Day 2',
    date: '13 March 2027',
    name: 'The Pandemonium',
    blurb:
      'Neon takes over. A synthwave skyline rises over palm-lined waterways, and the whole island hums in pink, violet and electric blue — loud, bright and gloriously out of control.',
    tags: ['Synthwave', 'Cyberpunk', 'Neon'],
    image: '/images/day2-pandemonium.jpg',
    alt: 'A neon cyberpunk city and palm trees reflected in water under a pink sunset',
    lineup: [],
    schedule: [],
    next: { href: '#day-3', label: 'Sail to Day 3' },
  },
  {
    id: 'day-3',
    cls: 'island--carnival',
    particles: { kind: 'lantern', count: 16 },
    day: 'Day 3',
    date: '14 March 2027',
    name: 'The Carnival Island',
    blurb:
      'The final landfall. A glittering waterfront of lanterns, striped tents and a towering Ferris wheel — the night belongs to the festival, and the whole sky is a celebration.',
    tags: ['Ferris wheel', 'Lantern lights', 'Night carnival'],
    image: '/images/day3-carnival.jpg',
    alt: 'A night carnival with a lit Ferris wheel and lanterns reflected on the waterfront',
    lineup: [],
    schedule: [],
    next: { href: '#hack2future', label: 'Continue to Hack2Future' },
  },
]

function Slot({ title, items }) {
  const has = items && items.length > 0
  return (
    <div className="slot">
      <h4>{title}</h4>
      {has ? (
        <ul>
          {items.map((it, i) => (
            <li key={i}>
              {typeof it === 'string' ? (
                it
              ) : (
                <>
                  {it.time && <b>{it.time}</b>} {it.title}
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="slot__soon">Coming Soon</p>
      )}
    </div>
  )
}

function Island({ data, index }) {
  const ref = useParallax()
  const flip = index % 2 === 1
  return (
    <article id={data.id} className={`island ${data.cls} ${flip ? 'island--flip' : ''}`} ref={ref} aria-labelledby={`${data.id}-title`}>
      <div className="island__bg" aria-hidden="true" />
      {data.particles && <Particles {...data.particles} seed={index + 11} />}
      <div className="container island__grid">
        <Reveal className="island__media" from={flip ? 'right' : 'left'}>
          <div className="island__frame">
            <img src={data.image} alt={data.alt} loading="lazy" decoding="async" width="623" height="266" />
            <span className="island__badge">{data.day}</span>
          </div>
        </Reveal>

        <Reveal className="island__copy" delay={120} from={flip ? 'left' : 'right'}>
          <p className="island__date">{data.date}</p>
          <h3 id={`${data.id}-title`} className="island__name">
            {data.name}
          </h3>
          <p className="island__blurb">{data.blurb}</p>
          <ul className="chips" aria-label={`${data.name} themes`}>
            {data.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="slots">
            <Slot title="Line-up" items={data.lineup} />
            <Slot title="Schedule" items={data.schedule} />
          </div>
          <a className="btn btn--island" href={data.next.href}>
            {data.next.label} <ArrowRight />
          </a>
        </Reveal>
      </div>
    </article>
  )
}

export default function Islands() {
  return (
    <section id="islands" className="islands" aria-labelledby="islands-title">
      <div className="container islands__head">
        <Reveal>
          <p className="eyebrow">Three days · three islands</p>
          <h2 id="islands-title" className="section__title">
            Land on the <span className="text-gradient">Islands</span>
          </h2>
          <p className="lead lead--center">
            Every morning the boat reaches a new shore. Choose your day — or take the whole voyage.
          </p>
        </Reveal>
      </div>

      <div className="route" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {ISLANDS.map((d, i) => (
        <Island key={d.id} data={d} index={i} />
      ))}
    </section>
  )
}
