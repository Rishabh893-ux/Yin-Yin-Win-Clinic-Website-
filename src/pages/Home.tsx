import PageTransition from '../components/ui/PageTransition'
import Seo from '../components/shared/Seo'
import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import ServicesSection from '../components/home/ServicesSection'
import Benefits from '../components/home/Benefits'
import AboutSection from '../components/home/AboutSection'
import DoctorSection from '../components/home/DoctorSection'
import ReviewsSection from '../components/home/ReviewsSection'
import FaqSection from '../components/home/FaqSection'
import ContactSection from '../components/home/ContactSection'
import FinalCTA from '../components/home/FinalCTA'

export default function Home() {
  return (
    <PageTransition>
      <Seo
        title="Yin Yin Win Medical PC | Internal Medicine & Primary Care, NYC"
        description="Attentive, unhurried internal medicine and primary care in Chinatown, NYC. 4.8-star rated, 185+ Google reviews. Open 7 days a week — book online."
      />
      <Hero />
      <TrustBar />
      <ServicesSection />
      <Benefits />
      <AboutSection />
      <DoctorSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
      <FinalCTA />
    </PageTransition>
  )
}
