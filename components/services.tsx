'use client'

import { useEffect, useRef } from 'react'
import { Check, Clock } from 'lucide-react'

const plans = [
  {
    name: 'Professional Web',
    delivery: '15 days',
    featured: false,
    features: [
      'Custom UI design',
      'CMS integration',
      'SEO on-page optimization',
      'Contact form & lead capture',
      'Mobile-first responsive',
    ],
    cta: 'Start with Professional Web',
  },
  {
    name: 'Web + AI Integr.',
    delivery: '21 days',
    featured: true,
    features: [
      'Everything in Starter +',
      'AI-trained chatbot',
      'Analytics dashboard',
      'Email/CRM automation',
      'Advanced SEO + schema markup',
      '6-month guarantee',
    ],
    cta: 'Start with Web + AI',
  },
  {
    name: 'Digital Platform',
    delivery: '30–45 days',
    featured: false,
    features: [
      'Everything in Growth +',
      'E-commerce or client portal',
      'Multi-function AI agent',
      'API integrations',
      '90-day growth strategy',
      '3 months care plan included',
    ],
    cta: 'Start with Digital Platform',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1 }
    )
    const cards = sectionRef.current?.querySelectorAll('.section-animate')
    cards?.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
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
            Services
          </span>
          <h2
            className="font-display text-balance leading-[1.2] tracking-[-0.02em] text-[#F5F5F3]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 36px)', fontWeight: 500 }}
          >
            One-time projects. Built for growth.
          </h2>
          <p className="mt-3 text-[#A0A09A] text-[16px] leading-[1.7] max-w-xl mx-auto">
            Choose the tier that matches your ambition. Every project includes strategy, design, development, and a launch that drives results.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`section-animate glass-card flex flex-col p-8 relative`}
              style={{
                animationDelay: `${i * 0.1}s`,
                transform: plan.featured ? 'scale(1.02)' : undefined,
                borderTop: plan.featured ? '2px solid #F97316' : undefined,
                borderColor: plan.featured ? undefined : 'rgba(255,255,255,0.08)',
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

              {/* Tier name + delivery */}
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

              {/* Divider */}
              <div className="mb-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

              {/* Feature list */}
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[14px] text-[#A0A09A]">
                    <Check size={15} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
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
                    e.currentTarget.style.transform = 'scale(1.01)'
                  } else {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.featured) {
                    e.currentTarget.style.filter = ''
                    e.currentTarget.style.transform = ''
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
      </div>
    </section>
  )
}
