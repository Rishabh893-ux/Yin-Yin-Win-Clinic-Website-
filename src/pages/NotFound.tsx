import PageTransition from '../components/ui/PageTransition'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Seo from '../components/shared/Seo'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <PageTransition>
      <Seo title="Page Not Found | Yin Yin Win Medical PC" description="The page you're looking for doesn't exist or may have moved." />
      <section className="flex min-h-[60vh] items-center justify-center py-24">
        <Container className="text-center">
          <p className="eyebrow justify-center">404</p>
          <h1 className="mt-4 font-display text-4xl font-medium text-ink-900">Page not found</h1>
          <p className="mx-auto mt-3 max-w-sm text-ink-500">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Button to="/" className="mt-8 mx-auto" icon={<Home size={16} />}>
            Back to home
          </Button>
        </Container>
      </section>
    </PageTransition>
  )
}
