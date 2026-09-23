/**
 * Stylized, non-photorealistic placeholder for the physician's portrait slot.
 * Deliberately abstract (no facial features, no attempt at a likeness) so it
 * can never be mistaken for an actual photo of a real person. Swap this
 * component out for a real <img> once an authorized photo of Dr. Win exists.
 */
export default function DoctorAvatar({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-100 via-sand-100 to-teal-50 ${className}`}
    >
      <span className="pointer-events-none absolute inset-0 bg-noise opacity-[0.04]" aria-hidden="true" />
      <svg
        viewBox="0 0 200 260"
        className="h-[78%] w-auto text-teal-700/80"
        fill="none"
        aria-hidden="true"
      >
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
