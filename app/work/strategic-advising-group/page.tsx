import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Strategic Advising Group Case Study — Softgrama',
  description:
    'How we helped a B2B consulting firm generate +180% more qualified leads with a full web redesign, AI lead qualification chatbot, and technical SEO.',
}

const deliverables = [
  'Full web redesign with conversion-first layout',
  'AI lead qualification chatbot trained on services catalog',
  'Technical SEO — schema markup, Core Web Vitals optimization',
  'Calendly integration for instant meeting booking',
  'Case study hub to showcase past work and build trust',
]

const metrics = [
  { value: '+180%', label: 'qualified leads in 60 days' },
  { value: '-40%', label: 'bounce rate reduction' },
  { value: '3×', label: 'conversion rate improvement' },
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
            B2B Consulting
          </span>

          <h1
            className="font-display text-balance leading-[1.1] tracking-[-0.03em] text-[#F5F5F3]"
            style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600 }}
          >
            How we helped a B2B consulting firm generate{' '}
            <span style={{ color: '#F97316' }}>+180% more qualified leads</span>
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
            Strategic Advising Group had a beautiful portfolio site that showcased their consulting expertise — but it wasn't converting visitors into clients. Prospects browsed their case studies, read about their services, and then left without ever reaching out.
          </p>
          <p className="text-[15px] text-[#A0A09A] leading-[1.7] mb-4">
            There was no clear call to action, no way for prospective clients to self-qualify, and the site lacked the technical SEO foundation needed to rank for high-intent consulting keywords. The result: a steady flow of traffic that generated almost zero pipeline.
          </p>
          <p className="text-[15px] text-[#A0A09A] leading-[1.7]">
            They needed a site that worked as hard as their consultants — qualifying leads around the clock, presenting clear service offerings, and building trust before the first conversation ever took place.
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
              &ldquo;Softgrama didn't just redesign our website — they fundamentally changed how we generate business. The AI chatbot qualifies leads before they ever reach our inbox, and the SEO work brought us to page one for three of our target keywords. Our pipeline has never been fuller.&rdquo;
            </p>
            <div>
              <p className="text-[14px] font-medium text-[#F5F5F3]">
                Michael Torres
              </p>
              <p className="text-[13px] text-[#5C5C58]">
                Managing Partner, Strategic Advising Group
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