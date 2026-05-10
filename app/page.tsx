import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import HowItWorks from '@/components/how-it-works'
import CarePlan from '@/components/care-plan'
import Work from '@/components/work'
import FAQ from '@/components/faq'
import FinalCTA from '@/components/final-cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#0A0A0A' }}>
      <Navbar />
      <Hero />
      <section aria-label="Services">
        <Services />
      </section>
      <section aria-label="How It Works">
        <HowItWorks />
      </section>
      <section aria-label="Care Plans">
        <CarePlan />
      </section>
      <section aria-label="Our Work">
        <Work />
      </section>
      <section aria-label="Frequently Asked Questions">
        <FAQ />
      </section>
      <section aria-label="Call to Action">
        <FinalCTA />
      </section>
      <Footer />
    </main>
  )
}
