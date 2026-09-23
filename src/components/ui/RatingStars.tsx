import { Star, StarHalf } from 'lucide-react'

export default function RatingStars({
  rating,
  size = 16,
  className = '',
}: {
  rating: number
  size?: number
  className?: string
}) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75
  const roundedFull = rating - full >= 0.75 ? full + 1 : full

  return (
    <div className={`flex items-center gap-0.5 text-amber-500 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < roundedFull) {
          return <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
        }
        if (i === roundedFull && hasHalf) {
          return <StarHalf key={i} size={size} fill="currentColor" strokeWidth={0} />
        }
        return <Star key={i} size={size} className="text-ink-200" fill="currentColor" strokeWidth={0} />
      })}
    </div>
  )
}
