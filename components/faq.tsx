'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do you work with clients outside Ecuador / Latin America?',
    answer:
      'Yes. We work with service businesses and e-commerce companies across the US, Latin America, Spain, Europe, and beyond. All communication is in English or Spanish, and we\'re built for async, cross-timezone collaboration.',
  },
  {
    question: 'What if I need changes after the project is delivered?',
    answer:
      'You own everything — code, domain, hosting. You can make changes yourself or hire any developer. We recommend a care plan to handle updates, optimization, and growth ongoing, but it\'s not required.',
  },
  {
    question: 'Why do I need a care plan? Can I just pay once and be done?',
    answer:
      'You can. But websites without maintenance deteriorate — security gaps emerge, performance degrades, SEO drops. Our care plans keep your site fast, secure, and continuously optimized for leads. Plus, your 6-month project guarantee only applies if you have an active care plan.',
  },
  {
    question: 'How is Softgrama different from other web agencies?',
    answer:
      'We\'re not a generic design shop or a temporary "build and abandon" vendor. We combine conversion strategy with AI-powered development and mandatory monthly care plans. You get a growth partner, not just a website. Every project includes a measurable 6-month guarantee.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Most clients see measurable lift in leads within 30 days of launch. Growth accelerates with an active care plan — SEO gains compound, chatbots improve, automations mature. The 6-month guarantee reflects our confidence that combined strategy + ongoing optimization drives real growth.',
  },
  {
    question: 'What technology do you use?',
    answer:
      'Next.js, React, and Tailwind CSS for performance and SEO. Databases and integrations scale to your business — Supabase, Stripe, email automations, Calendly, HubSpot, Slack, and more. We recommend the stack based on your specific needs, not trends.',
  },
  {
    question: 'Do I need to provide content and images?',
    answer:
      'Our Growth and Scale plans include AI-powered copywriting and strategy. For images, we source high-quality stock photography or recommend custom illustration. You don\'t need to arrive fully prepared — we partner with you to develop the right message.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = (entry.target as HTMLElement).querySelectorAll('.section-animate')
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add('in-view'), i * 60)
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
      id="faq"
      className="relative px-6 py-24 lg:py-32"
      style={{ background: '#111111' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="section-animate text-center mb-12">
          <span
            className="inline-block text-[12px] font-medium uppercase tracking-[0.06em] mb-4"
            style={{ color: '#F97316' }}
          >
            FAQ
          </span>
          <h2
            className="font-display text-balance leading-[1.2] tracking-[-0.02em] text-[#F5F5F3]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 36px)', fontWeight: 500 }}
          >
            Questions we hear a lot.
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="section-animate"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer bg-transparent border-none gap-4"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[16px] font-medium leading-[1.4]"
                    style={{ color: isOpen ? '#F97316' : '#F5F5F3', transition: 'color 0.2s ease' }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: isOpen ? '#F97316' : '#5C5C58',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '400px' : '0px' }}
                >
                  <p className="pb-5 text-[14px] text-[#A0A09A] leading-[1.7]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
