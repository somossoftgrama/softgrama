'use client'

import { useEffect, useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'

const valueProps = [
  'Launched in 3–4 weeks',
  'AI-powered chatbots',
  'Built for conversions',
  'Monthly care included',
]

const logos = [
  'Service Professionals', 'E-commerce', 'Consulting', 'Healthcare',
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    el.classList.add('in-view')
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Orange glow blob */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)',
          animation: 'glow-pulse 4s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto gap-6">
        {/* Label pill */}
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium uppercase tracking-[0.06em]"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#A0A09A',
          }}
        >
          AI-Powered Web Studio
        </span>

        {/* H1 */}
        <h1
          className="font-display text-balance leading-[1.1] tracking-[-0.03em] text-[#F5F5F3]"
          style={{ fontSize: 'clamp(36px, 5.5vw, 56px)', fontWeight: 600 }}
        >
          Your website should be your{' '}
          <span style={{ color: '#F97316' }}>best salesperson.</span> We make that happen — with AI.
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-[560px] text-[#A0A09A] leading-[1.7]"
          style={{ fontSize: '16px' }}
        >
          We build AI-powered websites for service businesses and e-commerce. Conversion-optimized, launched fast, and backed by a monthly care plan that keeps them growing.
        </p>

        {/* Value prop chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {valueProps.map((prop) => (
            <span
              key={prop}
              className="inline-flex items-center gap-1.5 text-[13px] text-[#A0A09A]"
            >
              <Check size={14} className="text-[#F97316] flex-shrink-0" />
              {prop}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <button
            onClick={() => {
              document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3 rounded-lg transition-all duration-150 hover:brightness-110 hover:scale-[1.01] cursor-pointer"
            style={{ background: '#F97316', color: '#0A0A0A' }}
          >
            See how it works
            <ArrowRight size={16} />
          </button>
          <a
            href="/audit"
            className="inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3 rounded-lg transition-all duration-150"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#F5F5F3',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            Get a free audit →
          </a>
        </div>

        {/* Social proof bar */}
        <div className="flex flex-col items-center gap-4 mt-4 pt-6 border-t w-full max-w-lg" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-[13px] text-[#5C5C58]">
            Trusted by service businesses in 8+ countries
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {logos.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-lg text-[12px] font-medium uppercase tracking-[0.04em]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#5C5C58',
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
