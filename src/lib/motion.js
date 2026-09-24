// Shared Framer Motion presets so every page animates consistently.
// The `reveal` preset mirrors the Home page's scroll-in pattern.

// Scroll-triggered reveal — matches the Home page exactly.
// Spread onto any <motion.*> element: {...reveal}
export const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
}

// Top-level page entrance — a gentle fade + rise when a page first mounts.
// Spread onto the outermost <motion.section>/<motion.div> of a page.
export const pageEntrance = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

// Staggered list/card reveal. Use `staggerContainer` on the wrapper and
// `staggerItem` on each child so cards cascade in on scroll.
export const staggerContainer = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.15 },
  variants: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  },
}

export const staggerItem = {
  variants: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
}
