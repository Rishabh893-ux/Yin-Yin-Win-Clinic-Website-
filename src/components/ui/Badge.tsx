import type { ReactNode } from 'react'

export default function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-ink-200/70 bg-white px-3 py-1.5 text-xs font-medium text-ink-700 shadow-sm ${className}`}
    >
      {children}
    </span>
  )
}
