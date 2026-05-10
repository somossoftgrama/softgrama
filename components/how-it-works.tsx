'use client'

import { useEffect, useRef } from 'react'
import { Search, Pencil, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Audit',
    description:
      'We start with a deep audit of your current site, competitors, and target audience. You get a clear diagnosis of what\'s working and what\'s costing you leads.',
  },
  {
    number: '02',
    icon: Pencil,
    title: 'Strategy & Design',
    description:
      'Our team crafts a conversion-first design in Figma, aligned with your brand. You review, approve, and we refine until it\'s exactly right.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'AI-Powered Build',
    description:
      'We develop your site using modern AI-assisted tooling — clean code, fast load times, and pixel-perfect execution. No shortcuts, no templates.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Optimize',
    description:
      'We handle deployment, DNS, and go-live QA. Then we monitor performance for 30 days and make data-driven tweaks to maximize your ROI.',
  },
]

export default function HowItWorks() {
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative px-6 py-24 lg:py-32"
      style={{ background: '#0A0A0A' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="section-animate text-center mb-16">
          <span
            className="inline-block text-[12px] font-medium uppercase tracking-[0.06em] mb-4"
            style={{ color: '#F97316' }}
          >
            Process
          </span>
          <h2
            className="font-display text-balance leading-[1.2] tracking-[-0.02em] text-[#F5F5F3]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 36px)', fontWeight: 500 }}
          >
            How we build your site.
          </h2>
          <p className="mt-3 text-[#A0A09A] text-[16px] leading-[1.7] max-w-xl mx-auto">
            A four-step process refined across dozens of projects. No surprises, no scope creep — just a clear path from kickoff to launch.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting dashed line — desktop only */}
          <div
            className="hidden lg:block absolute top-[28px] left-[12.5%] right-[12.5%] h-px"
            aria-hidden="true"
            style={{
              borderTop: '1px dashed rgba(249,115,22,0.2)',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="section-animate relative flex flex-col lg:items-center lg:text-center gap-4"
                >
                  {/* Step number bg */}
                  <div className="relative flex items-center justify-center lg:justify-center mb-2">
                    <span
                      className="font-display font-semibold select-none absolute"
                      style={{
                        fontSize: '64px',
                        color: 'rgba(249,115,22,0.12)',
                        lineHeight: 1,
                        userSelect: 'none',
                        letterSpacing: '-0.03em',
                      }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <div
                      className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <Icon size={22} style={{ color: '#F97316' }} />
                    </div>
                  </div>

                  {/* Vertical connecting line — mobile only */}
                  {i < steps.length - 1 && (
                    <div
                      className="lg:hidden absolute left-7 top-[72px] w-px h-full max-h-16"
                      aria-hidden="true"
                      style={{ borderLeft: '1px dashed rgba(249,115,22,0.2)' }}
                    />
                  )}

                  <div>
                    <h3
                      className="text-[18px] font-medium tracking-[-0.01em] text-[#F5F5F3] mb-2 leading-[1.3]"
                    >
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#A0A09A] leading-[1.6]">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
