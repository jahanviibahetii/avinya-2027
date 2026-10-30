import { useEffect, useRef, useState } from 'react'

/** Adds an `in-view` state once the element scrolls into view. */
export function useInView(threshold = 0.18) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return undefined
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

/** Scroll-reveal wrapper. `delay` is in ms, `from` picks the entry direction. */
export function Reveal({ as: Tag = 'div', delay = 0, from = 'up', className = '', children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${from} ${inView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/**
 * Subtle parallax: writes the element's progress through the viewport
 * (-1 → 1) into the `--p` CSS variable. Respects reduced-motion.
 */
export function useParallax() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let frame = 0
    const update = () => {
      frame = 0
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh
      node.style.setProperty('--p', Math.max(-1.5, Math.min(1.5, progress)).toFixed(3))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return ref
}
