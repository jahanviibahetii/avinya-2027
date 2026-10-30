# AVINYA 2027 — Official Website

Single-page website for **AVINYA 2027**, the annual techno-cultural fest of IIIT Dharwad
(12, 13 & 14 March 2027). A boat sails through a mysterious ocean and discovers three islands —
one for each day — before leaving the sea for the **Hack2Future** space mission.

React 19 + Vite 7, plain CSS, inline SVG art. No animation library, no UI library, no backend.

## Run locally

Requires Node.js 20.19 or newer.

    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build into dist/
    npm run preview    # serve the production build

## Project layout

    index.html                 page shell, meta tags, Google Fonts
    public/                    favicon + island images (public/images)
    src/main.jsx               entry point
    src/App.jsx                page composition
    src/index.css              reset, design tokens, reduced-motion rule
    src/App.css                section styles and animations
    src/hooks/useReveal.jsx    scroll reveal (IntersectionObserver) + parallax (rAF)
    src/components/            Navbar, Hero, About, Islands, Hack2Future, Footer,
                               Particles, Icons

## Filling in official information

Nothing official has been invented. Placeholders are labelled **Coming Soon** and are easy to replace:

| What | Where |
| --- | --- |
| Line-up and schedule for each day | `lineup` / `schedule` arrays in `src/components/Islands.jsx` |
| Hack2Future description, problem statements, dates, prizes, rules | `DETAILS` in `src/components/Hack2Future.jsx` (set `value`) |
| Hack2Future registration link | `REGISTRATION.url` in `src/components/Hack2Future.jsx` |
| Hack2Future FAQ answers | `FAQS` in `src/components/Hack2Future.jsx` (set `a`) |
| Social profile links | `SOCIALS` / TODO in `src/components/Footer.jsx` |
| Address, email, phone | contact block in `src/components/Footer.jsx` |
| Island images (keep file names) | `public/images/` |

## Accessibility and motion

Skip link, semantic landmarks, keyboard-operable menu (Escape closes it), visible focus rings,
alt text on images. Animations are disabled/shortened when the visitor prefers reduced motion.
