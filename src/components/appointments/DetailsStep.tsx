import type { BookingData } from './types'

export type DetailsErrors = Partial<Record<keyof BookingData, string>>

const inputClasses =
  'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-300 transition-colors focus:border-teal-600'

const errorClasses = 'border-red-300 focus:border-red-400'

const labelClasses = 'mb-1.5 block text-xs font-medium text-ink-600'

export default function DetailsStep({
  data,
  errors,
  onChange,
}: {
  data: BookingData
  errors: DetailsErrors
  onChange: (patch: Partial<BookingData>) => void
}) {
  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-ink-900">Your details</h2>
      <p className="mt-1.5 text-sm text-ink-500">
        We'll use this information to confirm your appointment request.
      </p>

      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="firstName">First name</label>
          <input
            id="firstName"
            className={`${inputClasses} ${errors.firstName ? errorClasses : ''}`}
            value={data.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            placeholder="Jane"
          />
          {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
        </div>
        <div>
          <label className={labelClasses} htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            className={`${inputClasses} ${errors.lastName ? errorClasses : ''}`}
            value={data.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            placeholder="Doe"
          />
          {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="phone">Phone number</label>
          <input
            id="phone"
            type="tel"
            className={`${inputClasses} ${errors.phone ? errorClasses : ''}`}
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            placeholder="(212) 555-0100"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label className={labelClasses} htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            className={`${inputClasses} ${errors.email ? errorClasses : ''}`}
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="dob">Date of birth</label>
          <input
            id="dob"
            type="date"
            className={`${inputClasses} ${errors.dob ? errorClasses : ''}`}
            value={data.dob}
            onChange={(e) => onChange({ dob: e.target.value })}
          />
          {errors.dob && <p className="mt-1 text-xs text-red-500">{errors.dob}</p>}
        </div>
        <div>
          <label className={labelClasses}>Are you a new patient?</label>
          <div className="flex gap-2.5">
            {[
              { label: 'New patient', value: true },
              { label: 'Returning', value: false },
            ].map((opt) => (
              <button
                type="button"
                key={opt.label}
                onClick={() => onChange({ isNewPatient: opt.value })}
                className={`flex-1 rounded-xl border py-3 text-sm font-medium transition-colors ${
                  data.isNewPatient === opt.value
                    ? 'border-teal-700 bg-teal-50 text-teal-800'
                    : 'border-ink-200 text-ink-600 hover:border-teal-300'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="reason">Reason for visit</label>
          <input
            id="reason"
            className={`${inputClasses} ${errors.reason ? errorClasses : ''}`}
            value={data.reason}
            onChange={(e) => onChange({ reason: e.target.value })}
            placeholder="e.g. Annual physical, follow-up, fever & cough"
          />
          {errors.reason && <p className="mt-1 text-xs text-red-500">{errors.reason}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="notes">Additional notes (optional)</label>
          <textarea
            id="notes"
            rows={3}
            className={`${inputClasses} resize-none`}
            value={data.notes}
            onChange={(e) => onChange({ notes: e.target.value })}
            placeholder="Anything else you'd like the office to know before your visit"
          />
        </div>
      </div>
    </div>
  )
}
