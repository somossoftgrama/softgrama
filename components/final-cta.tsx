'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = (entry.target as HTMLElement).querySelectorAll('.section-animate')
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add('in-view'), i * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      className="relative px-6 py-28 lg:py-40 flex items-center justify-center overflow-hidden text-center"
      style={{ background: '#0A0A0A' }}
    >
      {/* Orange glow blob */}
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

      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto gap-6">
        <div className="section-animate">
          <span
            className="inline-block text-[12px] font-medium uppercase tracking-[0.06em] mb-6"
            style={{ color: '#F97316' }}
          >
            Ready to grow?
          </span>
          <h2
            className="font-display text-balance leading-[1.2] tracking-[-0.02em] text-[#F5F5F3]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 36px)', fontWeight: 500 }}
          >
            Get a free AI audit of your site. No pitch. Just data.
          </h2>
          <p className="mt-4 text-[#A0A09A] text-[16px] leading-[1.7] max-w-lg mx-auto">
            Our AI analyzes your site, competitors, and conversion flow. You&apos;ll get a clear action plan — or book a call with us to discuss a custom strategy.
          </p>
        </div>

        <div className="section-animate flex flex-wrap items-center justify-center gap-3 mt-2">
          <a
            href="/audit"
            className="inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3.5 rounded-lg transition-all duration-150 hover:brightness-110 hover:scale-[1.01]"
            style={{ background: '#F97316', color: '#0A0A0A' }}
          >
            Get your free audit
            <ArrowRight size={16} />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3.5 rounded-lg transition-all duration-150"
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
            <Calendar size={16} />
            Book a free call
          </a>
        </div>

        <p className="section-animate text-[13px] text-[#5C5C58]">
          We take on 3 new projects per month. Response within 24 hours.
        </p>
      </div>
    </section>
  )
}
