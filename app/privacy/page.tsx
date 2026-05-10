import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Softgrama',
  robots: {
    index: false,
    follow: false,
  },
}

const sections = [
  {
    title: 'Who we are',
    body: 'Softgrama is an AI-powered web studio based in Quito, Ecuador. We build high-performance websites for service businesses and e-commerce companies worldwide. If you have any questions about this policy, you can reach us at hello@softgrama.com.',
  },
  {
    title: 'What data we collect',
    body: 'We only collect the information you voluntarily provide to us: your name, email address, and website URL submitted through our audit tool or contact form. We do not collect any personal data automatically beyond basic analytics (see the Cookies section below).',
  },
  {
    title: 'How we use your data',
    body: 'We use your data to respond to inquiries, deliver the free audit report you request, and send occasional relevant updates about our services. We never sell your data to third parties, and we do not use it for any purpose other than the ones described here.',
  },
  {
    title: 'Cookies',
    body: 'We use basic analytics cookies to understand how visitors interact with our site. We do not use advertising cookies, tracking pixels, or any third-party tools that profile users for marketing purposes.',
  },
  {
    title: 'Third party services',
    body: 'We use Calendly for scheduling calls and an AI service to power our free audit tool. Any data processed through these services is handled according to their respective privacy policies. We recommend reviewing those policies if you have specific questions about how they handle data.',
  },
  {
    title: 'Your rights',
    body: 'You can request deletion of your data at any time by emailing hello@softgrama.com. We will process your request promptly and confirm once your data has been removed from our systems.',
  },
  {
    title: 'Changes to this policy',
    body: 'We may update this Privacy Policy from time to time. When we do, we will revise the date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your data.',
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ background: '#0A0A0A' }}>
      <Navbar />

      <section aria-label="Privacy Policy Content" className="relative px-6 pt-32 pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[13px] text-[#5C5C58] mb-4">Last updated: May 2026</p>

          <h1
            className="font-display text-[#F5F5F3] mb-10"
            style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.03em' }}
          >
            Privacy Policy
          </h1>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <section key={section.title} aria-label={section.title}>
                <h2
                  className="font-display text-[#F5F5F3] mb-3"
                  style={{ fontSize: '20px', fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  {section.title}
                </h2>
                <p className="text-[15px] text-[#A0A09A] leading-[1.7]">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}