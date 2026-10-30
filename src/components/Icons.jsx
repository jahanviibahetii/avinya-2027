const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)
export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)
export const ArrowDown = (p) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
)
export const ArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)
export const Instagram = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
)
export const Twitter = (p) => (
  <svg {...base} {...p}>
    <path d="M4 4l16 16M20 4L4 20" />
  </svg>
)
export const Linkedin = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7" />
  </svg>
)
export const Youtube = (p) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="4" />
    <path d="M10 9l5 3-5 3z" fill="currentColor" />
  </svg>
)
export const Mail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M3 8l9 6 9-6" />
  </svg>
)
export const Phone = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
)
export const MapPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)
export const Compass = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5z" />
  </svg>
)
