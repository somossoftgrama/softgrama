'use client'

import { useEffect, useRef } from 'react'
import { Check, Clock, Shield } from 'lucide-react'

const plans = [
  {
    name: 'Maintain',
    delivery: 'Hosting + Security',
    featured: false,
    features: [
      'Hosting + uptime monitoring',
      'Security patches & backups',
      'Performance monitoring',
      '2 hours/month site changes',
      'Email support',
    ],
    cta: 'Choose Maintain',
  },
  {
    name: 'Grow',
    delivery: 'Growth focused',
    featured: true,
    features: [
      'Everything in Maintain +',
      'SEO optimization & monitoring',
      'Active AI chatbot management',
      '4 hours/month dev work',
      'Monthly strategy call',
      'Lead analysis & optimization',
    ],
    cta: 'Choose Grow',
  },
  {
    name: 'Scale',
    delivery: 'Dedicated growth',
    featured: false,
    features: [
      'Everything in Grow +',
      'Conversion rate optimization',
      '8 hours/month dev work',
      'Advanced AI automations',
      'Priority 24h support',
      'Bi-weekly strategy calls',
    ],
    cta: 'Choose Scale',
  },
]

export default function CarePlan() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="care-plan"
      className="relative px-6 py-24 lg:py-32"
      style={{ background: '#111111' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="section-animate text-center mb-14">
          <span
            className="inline-block text-[12px] font-medium uppercase tracking-[0.06em] mb-4"
            style={{ color: '#F97316' }}
          >
            Care Plans
          </span>
          <h2
            className="font-display text-balance leading-[1.2] tracking-[-0.02em] text-[#F5F5F3]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 36px)', fontWeight: 500 }}
          >
            Grow beyond launch.
          </h2>
          <p className="mt-3 text-[#A0A09A] text-[16px] leading-[1.7] max-w-xl mx-auto">
            A website without maintenance deteriorates. Our care plans keep yours fast, secure, and actively optimized for conversions — month after month.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className="section-animate glass-card flex flex-col p-8 relative"
              style={{
                animationDelay: `${i * 0.1}s`,
                transform: plan.featured ? 'scale(1.02)' : undefined,
                borderTop: plan.featured ? '2px solid #F97316' : undefined,
              }}
            >
              {plan.featured && (
                <span
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-[0.06em] whitespace-nowrap z-10"
                  style={{
                    background: '#111111',
                    border: '1px solid #F97316',
                    color: '#F97316',
                  }}
                >
                  Most popular
                </span>
              )}

              <div className="mb-5">
                <h3 className="text-[13px] font-medium uppercase tracking-[0.06em] text-[#A0A09A] mb-1">
                  {plan.name}
                </h3>
                <span
                  className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full text-[12px]"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#A0A09A',
                  }}
                >
                  <Clock size={11} />
                  {plan.delivery}
                </span>
              </div>

              <div className="mb-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[14px] text-[#A0A09A]">
                    <Check size={15} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="w-full text-[14px] font-medium py-3 rounded-lg transition-all duration-150 text-center inline-block"
                style={
                  plan.featured
                    ? { background: '#F97316', color: '#0A0A0A' }
                    : {
                        background: 'transparent',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#F5F5F3',
                      }
                }
                onMouseEnter={(e) => {
                  if (plan.featured) {
                    e.currentTarget.style.filter = 'brightness(1.1)'
                  } else {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.featured) {
                    e.currentTarget.style.filter = ''
                  } else {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee callout */}
        <div
          className="section-animate flex items-start gap-3 px-5 py-4 rounded-xl"
          style={{
            background: 'rgba(249,115,22,0.08)',
            border: '1px solid rgba(249,115,22,0.2)',
          }}
        >
          <Shield size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#F97316' }} />
          <p className="text-[14px] leading-[1.6]" style={{ color: '#F97316' }}>
            <span className="font-medium">Your 6-month project guarantee</span> is only valid with an active care plan. We stand behind every site we build — and we&apos;ll fix anything that doesn&apos;t perform as promised.
          </p>
        </div>
      </div>
    </section>
  )
}
