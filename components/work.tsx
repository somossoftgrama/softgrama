'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const caseStudies = [
  {
    industry: 'B2B Consulting',
    client: 'Strategic Advising Group',
    challenge: 'Beautiful portfolio site, but no lead conversion. Prospects visited but never called.',
    built: 'Rebuilt with clear service pricing, case study hubs, AI chatbot for qualification, and Calendly integration.',
    metric: '+180%',
    metricLabel: 'qualified leads in 60 days',
    tag: 'Consulting',
  },
  {
    industry: 'Legal Services',
    client: 'Silva & Partners',
    challenge: 'Site built by intern. Mobile-broken. Forms didn\'t work. Zero analytics.',
    built: 'Conversion-first redesign with clear specializations, testimonials section, live chat, and form automations to HubSpot.',
    metric: '4.3×',
    metricLabel: 'more form submissions per month',
    tag: 'Legal',
  },
  {
    industry: 'E-Commerce',
    client: 'Andino Artisan Goods',
    challenge: 'Shipping confusion, cart abandonment at 79%, no way to reach support.',
    built: 'Rebuilt on Next.js with clear shipping info, AI chat support, email automations, and SEO-optimized product pages.',
    metric: '+$45K',
    metricLabel: 'in attributed revenue first 90 days',
    tag: 'E-commerce',
  },
  {
    industry: 'Coach & Wellness',
    client: 'Vitality Coaching',
    challenge: 'Coaching business with no online booking. All sales were manual email threads.',
    built: 'Branded portal with service offerings, transparent pricing, Calendly booking, and email sequence automations.',
    metric: '+320%',
    metricLabel: 'month-over-month client acquisition',
    tag: 'Coaching',
  },
]

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = (entry.target as HTMLElement).querySelectorAll('.section-animate')
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add('in-view'), i * 120)
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
      id="work"
      className="relative px-6 py-24 lg:py-32"
      style={{ background: '#0A0A0A' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="section-animate text-center mb-14">
          <span
            className="inline-block text-[12px] font-medium uppercase tracking-[0.06em] mb-4"
            style={{ color: '#F97316' }}
          >
            Work
          </span>
          <h2
            className="font-display text-balance leading-[1.2] tracking-[-0.02em] text-[#F5F5F3]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 36px)', fontWeight: 500 }}
          >
            Real problems. Real results.
          </h2>
          <p className="mt-3 text-[#A0A09A] text-[16px] leading-[1.7] max-w-xl mx-auto">
            Every project starts with broken conversions and ends with measurable growth. Here&apos;s what we built.
          </p>
        </div>

        {/* Case study grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <article
              key={cs.client}
              className="section-animate glass-card flex flex-col overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top image area */}
              <div
                className="relative h-44 flex items-end p-5"
                style={{
                  background: `linear-gradient(135deg, #111111 0%, #1A1A1A 100%)`,
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span
                  className="absolute top-4 left-5 text-[11px] font-medium uppercase tracking-[0.06em] px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#A0A09A',
                  }}
                >
                  {cs.tag}
                </span>
                <h3 className="text-[16px] font-medium text-[#F5F5F3] leading-[1.3]">
                  {cs.client}
                </h3>
                <span className="text-[11px] text-[#5C5C58] mt-1">
                  Demo project
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#5C5C58] mb-1">
                    Challenge
                  </p>
                  <p className="text-[14px] text-[#A0A09A] leading-[1.6]">{cs.challenge}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#5C5C58] mb-1">
                    What we built
                  </p>
                  <p className="text-[14px] text-[#A0A09A] leading-[1.6]">{cs.built}</p>
                </div>

                <div
                  className="mt-auto pt-4"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-end justify-between">
                    <div>
                      <p
                        className="font-display text-[36px] font-semibold tracking-tight"
                        style={{ color: '#F97316' }}
                      >
                        {cs.metric}
                      </p>
                      <p className="text-[13px] text-[#5C5C58] leading-[1.4]">
                        {cs.metricLabel}
                      </p>
                    </div>
                    <a
                      href="/work/case-study"
                      className="inline-flex items-center gap-1 text-[13px] font-medium group-hover:gap-2 transition-all duration-200"
                      style={{ color: '#F97316' }}
                    >
                      Read case study
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
