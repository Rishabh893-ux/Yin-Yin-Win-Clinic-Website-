import { useEffect, type ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import MobileCTA from './MobileCTA'
import { buildMedicalBusinessSchema } from '@/lib/structuredData'

const STRUCTURED_DATA_ID = 'clinic-structured-data'

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (document.getElementById(STRUCTURED_DATA_ID)) return
    const script = document.createElement('script')
    script.id = STRUCTURED_DATA_ID
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(buildMedicalBusinessSchema(window.location.origin))
    document.head.appendChild(script)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white shadow-lift transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}
