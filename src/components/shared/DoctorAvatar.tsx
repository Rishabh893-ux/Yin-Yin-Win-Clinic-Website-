/**
 * Stylized, non-photorealistic placeholder for the physician's portrait slot.
 * Deliberately abstract (no facial features, no attempt at a likeness) so it
 * can never be mistaken for an actual photo of a real person. Swap this
 * component out for a real <img> once an authorized photo of Dr. Win exists.
 */
export default function DoctorAvatar({ size = 160, className = '' }: { size?: number; className?: string }) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 via-sand-100 to-teal-50 shadow-card ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-0 rounded-full border border-ink-100" aria-hidden="true" />
      <span className="absolute inset-[7%] rounded-full border border-teal-700/20" aria-hidden="true" />

      <svg viewBox="0 0 200 260" className="relative h-[68%] w-auto text-teal-800" fill="none" aria-hidden="true">
        {/* soft depth fill behind the figure */}
        <circle cx="100" cy="62" r="44" fill="currentColor" opacity="0.07" />
        <path
          d="M24 244c0-48 34-74 76-74s76 26 76 74"
          fill="currentColor"
          opacity="0.05"
        />

        {/* head */}
        <circle cx="100" cy="62" r="40" stroke="currentColor" strokeWidth="2" />
        {/* shoulders / coat */}
        <path
          d="M28 240c0-46 32-70 72-70s72 24 72 70"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* coat lapels */}
        <path d="M100 170v70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M78 176l22 20 22-20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* stethoscope */}
        <path
          d="M70 178c0 22 10 34 30 34s30-12 30-34"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="70" cy="178" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="130" cy="178" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="222" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  )
}
