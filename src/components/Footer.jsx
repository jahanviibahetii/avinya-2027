import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Compass } from './Icons.jsx'

const SOCIALS = [
  { label: 'Instagram', Icon: Instagram },
  { label: 'X (Twitter)', Icon: Twitter },
  { label: 'LinkedIn', Icon: Linkedin },
  { label: 'YouTube', Icon: Youtube },
]

const QUICK_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#islands', label: 'The Islands' },
  { href: '#day-1', label: 'Day 1 · The Last Outpost' },
  { href: '#day-2', label: 'Day 2 · The Pandemonium' },
  { href: '#day-3', label: 'Day 3 · The Carnival Island' },
  { href: '#hack2future', label: 'Hack2Future' },
]

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__waves" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0 60 Q180 10 360 60 T720 60 T1080 60 T1440 60 V120 H0 Z" fill="#050b1a" opacity="0.6" />
          <path d="M0 80 Q180 40 360 80 T720 80 T1080 80 T1440 80 V120 H0 Z" fill="#050b1a" />
        </svg>
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__logo">
            <Compass /> AVINYA <small>2027</small>
          </p>
          <p>The techno-cultural fest of IIIT Dharwad.</p>
          <p className="footer__dates">12–14 March 2027</p>
          <ul className="socials" aria-label="Social media">
            {SOCIALS.map(({ label, Icon }) => (
              // TODO: once the official profiles exist, swap each <span> for
              // <a href="https://…" target="_blank" rel="noopener noreferrer" aria-label={label}>
              <li key={label}>
                <span className="social-pending" role="img" aria-label={`${label} — link coming soon`} title="Coming soon">
                  <Icon />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer__links" aria-label="Quick links">
          <h2>Quick links</h2>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="footer__contact">
          <h2>Contact</h2>
          <p>
            <MapPin /> IIIT Dharwad — [full campus address to be added]
          </p>
          <p>
            <Mail /> [email address to be added]
          </p>
          <p>
            <Phone /> [phone number to be added]
          </p>
        </address>
      </div>

      <p className="footer__copy">© 2027 AVINYA · IIIT Dharwad. All rights reserved.</p>
    </footer>
  )
}
