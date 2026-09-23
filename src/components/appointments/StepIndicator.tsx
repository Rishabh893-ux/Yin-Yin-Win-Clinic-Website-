import { Check } from 'lucide-react'
import { steps } from './types'

export default function StepIndicator({ current }: { current: number }) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex items-center">
        {steps.map((label, i) => {
          const isComplete = i < current
          const isActive = i === current
          return (
            <div key={label} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-medium transition-colors duration-300 ${
                    isComplete
                      ? 'border-teal-700 bg-teal-700 text-white'
                      : isActive
                        ? 'border-teal-700 text-teal-700 bg-white'
                        : 'border-ink-200 text-ink-400 bg-white'
                  }`}
                >
                  {isComplete ? <Check size={16} /> : i + 1}
                </div>
                <span
                  className={`mt-2 hidden text-[0.7rem] font-medium sm:block ${
                    isActive || isComplete ? 'text-ink-800' : 'text-ink-400'
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="mx-2 h-px flex-1 bg-ink-100 relative overflow-hidden sm:mx-3">
                  <div
                    className="absolute inset-y-0 left-0 bg-teal-700 transition-all duration-500"
                    style={{ width: isComplete ? '100%' : '0%' }}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
