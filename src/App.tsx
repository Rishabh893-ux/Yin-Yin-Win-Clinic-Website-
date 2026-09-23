import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/layout/ScrollToTop'
import RouteLoader from './components/ui/RouteLoader'

const Home = lazy(() => import('./pages/Home'))
const Appointments = lazy(() => import('./pages/Appointments'))
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
            <Route path="/appointments" element={<Appointments />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  )
}
