import {
  Stethoscope,
  HeartPulse,
  Thermometer,
  HeartHandshake,
  Users,
  FlaskConical,
  UserCheck,
  Languages,
  CalendarCheck,
  Building2,
  type LucideIcon,
} from 'lucide-react'

/**
 * Explicit icon map for icons referenced by string key in data/clinic.ts.
 * Using named imports (instead of `import * as Icons`) lets the bundler
 * tree-shake the ~1,000 unused icons in the library.
 */
export const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  HeartPulse,
  Thermometer,
  HeartHandshake,
  Users,
  FlaskConical,
  UserCheck,
  Languages,
  CalendarCheck,
  Building2,
}

export function getIcon(name: string, fallback: LucideIcon = Stethoscope): LucideIcon {
  return iconMap[name] ?? fallback
}
