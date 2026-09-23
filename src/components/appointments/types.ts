export type BookingData = {
  specialty: string
  doctor: string
  date: string
  time: string
  firstName: string
  lastName: string
  phone: string
  email: string
  dob: string
  reason: string
  isNewPatient: boolean
  notes: string
}

export const initialBookingData: BookingData = {
  specialty: '',
  doctor: '',
  date: '',
  time: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  dob: '',
  reason: '',
  isNewPatient: true,
  notes: '',
}

export const steps = ['Specialty', 'Doctor', 'Date', 'Time', 'Details', 'Confirm'] as const
export type StepName = (typeof steps)[number]
