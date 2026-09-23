import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap'

const variants: Record<Variant, string> = {
  primary: 'bg-teal-700 text-white shadow-soft hover:bg-teal-800 hover:shadow-lift active:bg-teal-900',
  secondary: 'bg-ink-900 text-white hover:bg-ink-800',
  outline: 'border border-ink-200 text-ink-800 bg-white/60 hover:border-teal-600 hover:text-teal-800',
  ghost: 'text-ink-700 hover:text-teal-700',
}

const sizes: Record<Size, string> = {
  md: 'text-sm px-5 py-2.5 rounded-full',
  lg: 'text-[0.95rem] px-7 py-3.5 rounded-full',
}

type Props = {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  children: ReactNode
  className?: string
  /** Internal route — renders a React Router <Link>. */
  to?: string
  /** External URL or tel:/mailto: link — renders an <a>. */
  href?: string
  target?: string
  rel?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className = '',
  to,
  href,
  target,
  rel,
  type,
  ...rest
}: Props) {
  const classes = `group ${base} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type={type ?? 'button'} className={classes} {...rest}>
      {content}
    </button>
  )
}
