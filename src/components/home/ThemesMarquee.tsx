import { reviewThemes } from '@/data/clinic'

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-3 pr-3" aria-hidden="true">
      {reviewThemes.map((theme) => (
        <span
          key={theme.label}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-700 shadow-sm"
        >
          {theme.label}
          <span className="rounded-full bg-teal-50 px-2 py-0.5 text-xs font-semibold text-teal-700">
            {theme.count}
          </span>
        </span>
      ))}
    </div>
  )
}

/** Auto-scrolling, pause-on-hover strip of review theme tags. Pauses for prefers-reduced-motion. */
export default function ThemesMarquee() {
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Row />
        <Row />
      </div>
      <span className="sr-only">
        Common review themes: {reviewThemes.map((t) => `${t.label} (${t.count})`).join(', ')}
      </span>
    </div>
  )
}
