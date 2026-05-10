import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Silva & Partners Case Study — Softgrama',
  description:
    'How we helped a legal services firm get 4.3× more form submissions with a conversion-first redesign, contact form optimization, and automated follow-up emails.',
}

const deliverables = [
  'Conversion-first web redesign with clear practice area pages',
  'Contact form optimization with field validation and spam protection',
  'Automated follow-up email sequences for new inquiries',
  'Testimonials and case results section to build trust',
  'Live chat integration for instant client communication',
]

const metrics = [
  { value: '4.3×', label: 'more form submissions per month' },
  { value: '-52%', label: 'average response time to inquiries' },
  { value: '+90%', label: 'qualified consultation bookings' },
]

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen" style={{ background: '#0A0A0A' }}>
      <Navbar />

      <section
        aria-label="Case Study Hero"
        className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          aria-hidden="true"
          style={{
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 65%)',
            animation: 'glow-pulse 4s ease-in-out infinite',
          }}
        />

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto gap-5">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium uppercase tracking-[0.06em]"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#F97316',
            }}
          >
            Legal Services
          </span>

          <h1
            className="font-display text-balance leading-[1.1] tracking-[-0.03em] text-[#F5F5F3]"
            style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600 }}
          >
            How we helped a law firm get{' '}
            <span style={{ color: '#F97316' }}>4.3× more form submissions</span>
          </h1>
        </div>
      </section>

      <section aria-label="The Challenge" className="relative px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display text-[#F5F5F3] mb-6"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 500 }}
          >
            The Challenge
          </h2>
          <p className="text-[15px] text-[#A0A09A] leading-[1.7] mb-4">
            Silva & Partners had a website that was built years ago by an intern. It was broken on mobile, the contact forms didn't actually submit anywhere, and there was zero analytics tracking in place. Potential clients who tried to reach out simply gave up.
          </p>
          <p className="text-[15px] text-[#A0A09A] leading-[1.7] mb-4">
            The firm specialized in corporate and immigration law, but visitors couldn't tell what they did or why they should choose Silva & Partners over any other firm. The site had no testimonials, no clear specializations, and no way for prospective clients to understand the firm's track record.
          </p>
          <p className="text-[15px] text-[#A0A09A] leading-[1.7]">
            They were losing high-value clients every month to competitors with better digital presence — and they didn't even know it because they had no visibility into their site's performance.
          </p>
        </div>
      </section>

      <section
        aria-label="What We Built"
        className="relative px-6 py-16"
        style={{ background: '#111111' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display text-[#F5F5F3] mb-6"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 500 }}
          >
            What We Built
          </h2>
          <ul className="flex flex-col gap-3">
            {deliverables.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[15px] text-[#A0A09A] leading-[1.6]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ background: '#F97316' }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="The Results" className="relative px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display text-[#F5F5F3] mb-8"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 500 }}
          >
            The Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="glass-card flex flex-col items-center text-center p-6"
              >
                <p
                  className="font-display text-[36px] font-semibold tracking-tight"
                  style={{ color: '#F97316' }}
                >
                  {metric.value}
                </p>
                <p className="text-[13px] text-[#5C5C58] leading-[1.4] mt-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label="Testimonial"
        className="relative px-6 py-16"
        style={{ background: '#111111' }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="glass-card p-8"
            style={{ borderLeft: '3px solid #F97316' }}
          >
            <p className="text-[16px] text-[#A0A09A] leading-[1.7] italic mb-6">
              &ldquo;We had no idea how many potential clients we were losing because of our broken website. Softgrama rebuilt everything from the ground up, and the automated follow-up emails alone have saved us hours every week. Our intake process is now seamless.&rdquo;
            </p>
            <div>
              <p className="text-[14px] font-medium text-[#F5F5F3]">
                Ana Silva
              </p>
              <p className="text-[13px] text-[#5C5C58]">
                Founding Partner, Silva & Partners
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Call to Action" className="relative px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="font-display text-[#F5F5F3] mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 500 }}
          >
            Want results like this?
          </h2>
          <p className="text-[15px] text-[#A0A09A] leading-[1.7] mb-6">
            Let's talk about what we can build for your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3.5 rounded-lg transition-all duration-150 hover:brightness-110 hover:scale-[1.01]"
            style={{ background: '#F97316', color: '#0A0A0A' }}
          >
            Let's talk
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <div className="pt-16" />
      <Footer />
    </main>
  )
}