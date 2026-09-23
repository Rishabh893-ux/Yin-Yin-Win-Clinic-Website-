import { useEffect, useState } from 'react'

/** Minutes since midnight, in the clinic's local (America/New_York) time. */
function getNYMinutes() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(new Date())
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0)
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? 0)
  return hour * 60 + minute
}

const OPEN_AT = 9 * 60
const CLOSE_AT = 17 * 60 + 30

/** Live open/closed indicator based on the clinic's real, published hours (9:00 AM–5:30 PM, 7 days a week). */
export default function OpenStatus({ className = '' }: { className?: string }) {
  const [minutes, setMinutes] = useState<number | null>(null)

  useEffect(() => {
    setMinutes(getNYMinutes())
    const id = setInterval(() => setMinutes(getNYMinutes()), 60_000)
    return () => clearInterval(id)
  }, [])

  if (minutes === null) return null

  const isOpen = minutes >= OPEN_AT && minutes < CLOSE_AT

  return (
    <div className={`inline-flex items-center gap-2 text-sm ${className}`}>
      <span className="relative flex h-2 w-2">
        {isOpen && (
          <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-400 opacity-75" />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${isOpen ? 'bg-emerald-500' : 'bg-ink-300'}`} />
      </span>
      <span className={isOpen ? 'font-medium text-emerald-700' : 'text-ink-500'}>
        {isOpen ? 'Open now' : 'Closed now'} · 9:00 AM–5:30 PM daily
      </span>
    </div>
  )
}
