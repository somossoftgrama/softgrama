'use client'

import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const bulletPoints = [
  'No commitment required',
  'Specific recommendations for your business',
  'Fixed-price proposal if we\'re a good fit',
]

export default function ContactClient() {
  const calendlyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!calendlyRef.current) return

    const existingScript = document.getElementById('calendly-script')
    if (!existingScript) {
      const script = document.createElement('script')
      script.id = 'calendly-script'
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <main className="min-h-screen" style={{ background: '#0A0A0A' }}>
      <Navbar />

      {/* Hero */}
      <section
        aria-label="Book a Strategy Call Hero"
        className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-12 overflow-hidden"
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

        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto gap-5">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium uppercase tracking-[0.06em]"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#A0A09A',
            }}
          >
            Book a Call
          </span>

          <h1
            className="font-display text-balance leading-[1.1] tracking-[-0.03em] text-[#F5F5F3]"
            style={{ fontSize: 'clamp(36px, 5.5vw, 56px)', fontWeight: 600 }}
          >
            Let's build something great
          </h1>

          <p
            className="max-w-[560px] text-[#A0A09A] leading-[1.7]"
            style={{ fontSize: '16px' }}
          >
            Book a free 30-minute strategy call. We'll review your current site, identify the biggest opportunities, and outline exactly what we'd build for you.
          </p>

          <div className="flex flex-col items-start gap-2.5 mt-2">
            {bulletPoints.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 text-[14px] text-[#A0A09A]"
              >
                <Check size={14} className="text-[#F97316] flex-shrink-0" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Embed */}
      <section aria-label="Calendly Scheduling" className="relative px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <div
            className="glass-card overflow-hidden"
            style={{ minHeight: '700px' }}
          >
            <div
              ref={calendlyRef}
              className="calendly-inline-widget"
              data-url="https://calendly.com/softgrama"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          <p className="text-center text-[14px] text-[#5C5C58] mt-6">
            Prefer email? Reach us at{' '}
            <a
              href="mailto:hola@softgrama.com"
              className="text-[#A0A09A] hover:text-[#F97316] transition-colors duration-200"
            >
              hola@softgrama.com
            </a>
          </p>
        </div>
      </section>

      <div className="pt-16" />
      <Footer />
    </main>
  )
}
