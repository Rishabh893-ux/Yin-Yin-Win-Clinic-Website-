export default function BrandMark({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <span
      className={`relative flex shrink-0 items-center justify-center rounded-full bg-teal-700 text-white ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-[3px] rounded-full border border-white/25" aria-hidden="true" />
      <span
        className="font-display font-medium leading-none tracking-tight"
        style={{ fontSize: size * 0.4 }}
      >
        YW
      </span>
    </span>
  )
}
