import PageTransition from '../components/ui/PageTransition'
import Seo from '../components/shared/Seo'
import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import ServicesPreview from '../components/home/ServicesPreview'
import Benefits from '../components/home/Benefits'
import DoctorPreview from '../components/home/DoctorPreview'
import ReviewsPreview from '../components/home/ReviewsPreview'
import LocationPreview from '../components/home/LocationPreview'
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
      <ServicesPreview />
      <Benefits />
      <DoctorPreview />
      <ReviewsPreview />
      <LocationPreview />
      <FinalCTA />
    </PageTransition>
  )
}
