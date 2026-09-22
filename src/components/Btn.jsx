import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * Shared pill button / CTA.
 * - `to`   -> internal route (react-router Link)
 * - `href` -> external / file / mailto link (<a>)
 * - neither -> <button>
 * variant: 'primary' | 'secondary' | 'ghost'
 */
export default function Btn({
  children,
  to,
  href,
  variant = 'primary',
  size,
  download,
  external,
  className = '',
  ...rest
}) {
  const classes = [
    'ds-btn',
    `ds-btn--${variant}`,
    size === 'sm' ? 'ds-btn--sm' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-flex' }}>
        <Link to={to} className={classes} {...rest}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    const externalProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}
    return (
      <motion.a
        href={href}
        className={classes}
        download={download}
        {...externalProps}
        {...motionProps}
        {...rest}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} {...motionProps} {...rest}>
      {children}
    </motion.button>
  )
}
