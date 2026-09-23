import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/layout/ScrollToTop'
import RouteLoader from './components/ui/RouteLoader'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Doctors = lazy(() => import('./pages/Doctors'))
const Services = lazy(() => import('./pages/Services'))
const Appointments = lazy(() => import('./pages/Appointments'))
const Contact = lazy(() => import('./pages/Contact'))
const Reviews = lazy(() => import('./pages/Reviews'))
const FAQ = lazy(() => import('./pages/FAQ'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<RouteLoader />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  )
}
