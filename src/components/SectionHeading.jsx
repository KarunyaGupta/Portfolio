import React from 'react'
import { motion } from 'framer-motion'

/**
 * Shared section heading used across every page + homepage section.
 * Keeps eyebrow + gradient title + subtitle consistent everywhere.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <motion.div
      className="ds-heading-wrap"
      style={align === 'left' ? { textAlign: 'left', alignItems: 'flex-start' } : undefined}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && <span className="ds-eyebrow">{eyebrow}</span>}
      {title && <h2 className="ds-heading">{title}</h2>}
      {subtitle && <p className="ds-subheading">{subtitle}</p>}
    </motion.div>
  )
}
