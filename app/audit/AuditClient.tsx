'use client'

import { useState } from 'react'
import { ArrowRight, Loader2, Search, Zap, TrendingUp, Bot, Gauge } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

interface Category {
  name: string
  score: number
  findings: string[]
}

interface Opportunity {
  title: string
  description: string
}

interface AuditResult {
  categories: Category[]
  opportunities: Opportunity[]
}

const categoryIcons: Record<string, React.ElementType> = {
  'Messaging clarity': Search,
  'Conversion readiness': TrendingUp,
  'AI readiness': Bot,
  'SEO & performance': Gauge,
}

export default function AuditClient() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AuditResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong')
        return
      }

      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze website')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen" style={{ background: '#0A0A0A' }}>
      <Navbar />

      {/* Hero */}
      <section
        aria-label="Free AI Website Audit Hero"
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

        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto gap-5">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium uppercase tracking-[0.06em]"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#A0A09A',
            }}
          >
            AI-Powered Analysis
          </span>

          <h1
            className="font-display text-balance leading-[1.1] tracking-[-0.03em] text-[#F5F5F3]"
            style={{ fontSize: 'clamp(36px, 5.5vw, 56px)', fontWeight: 600 }}
          >
            Free AI Website Audit
          </h1>

          <p
            className="max-w-[560px] text-[#A0A09A] leading-[1.7]"
            style={{ fontSize: '16px' }}
          >
            Get an instant analysis of your site's messaging, conversion readiness, AI opportunities, and top 3 quick wins — powered by Claude.
          </p>
        </div>
      </section>

      {/* Input form */}
      <section aria-label="Audit URL Input" className="relative px-6 pb-12">
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="url"
              required
              placeholder="https://yourwebsite.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-lg text-[15px] outline-none transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#F5F5F3',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 text-[15px] font-medium px-6 py-3.5 rounded-lg transition-all duration-150 hover:brightness-110 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              style={{ background: '#F97316', color: '#0A0A0A' }}
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Analyzing…
                </>
              ) : (
                <>
                  Analyze my website
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {error && (
            <p className="mt-4 text-[14px] text-center" style={{ color: '#EF4444' }}>
              {error}
            </p>
          )}
        </div>
      </section>

      {/* Loading state */}
      {loading && (
        <section aria-label="Loading" className="relative px-6 py-20">
          <div className="max-w-xl mx-auto text-center">
            <Loader2 size={32} className="animate-spin mx-auto mb-4" style={{ color: '#F97316' }} />
            <p className="text-[16px] text-[#A0A09A]">Analyzing your website…</p>
          </div>
        </section>
      )}

      {/* Results */}
      {result && !loading && (
        <section aria-label="Audit Results" className="relative px-6 py-12">
          <div className="max-w-4xl mx-auto flex flex-col gap-12">

            {/* Category cards */}
            <div>
              <h2
                className="font-display text-center mb-8 text-[#F5F5F3]"
                style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 500 }}
              >
                Audit Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {result.categories.map((cat) => {
                  const Icon = categoryIcons[cat.name] || Zap
                  return (
                    <div
                      key={cat.name}
                      className="glass-card flex flex-col p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                            }}
                          >
                            <Icon size={18} style={{ color: '#F97316' }} />
                          </div>
                          <h3 className="text-[16px] font-medium text-[#F5F5F3]">
                            {cat.name}
                          </h3>
                        </div>
                        <span
                          className="font-display text-[24px] font-semibold tracking-tight"
                          style={{ color: '#F97316' }}
                        >
                          {cat.score}<span className="text-[14px] text-[#5C5C58]">/10</span>
                        </span>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {cat.findings.map((finding, i) => (
                          <li
                            key={i}
                            className="text-[14px] text-[#A0A09A] leading-[1.6] flex items-start gap-2"
                          >
                            <span
                              className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                              style={{ background: '#F97316' }}
                            />
                            {finding}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Opportunities */}
            <div>
              <h2
                className="font-display text-center mb-8 text-[#F5F5F3]"
                style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 500 }}
              >
                Top Opportunities
              </h2>
              <div className="flex flex-col gap-4">
                {result.opportunities.map((opp, i) => (
                  <div
                    key={i}
                    className="glass-card flex items-start gap-4 p-5"
                  >
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-display text-[14px] font-semibold"
                      style={{
                        background: 'rgba(249,115,22,0.15)',
                        color: '#F97316',
                        border: '1px solid rgba(249,115,22,0.3)',
                      }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-medium text-[#F5F5F3] mb-1">
                        {opp.title}
                      </h3>
                      <p className="text-[14px] text-[#A0A09A] leading-[1.6]">
                        {opp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div
              className="glass-card flex flex-col items-center text-center gap-5 p-8"
              style={{
                background: 'rgba(249,115,22,0.06)',
                border: '1px solid rgba(249,115,22,0.2)',
              }}
            >
              <h3
                className="font-display text-[#F5F5F3]"
                style={{ fontSize: 'clamp(20px, 2.5vw, 24px)', fontWeight: 500 }}
              >
                Want the full action plan?
              </h3>
              <p className="text-[15px] text-[#A0A09A] max-w-md">
                Book a free strategy call and we'll walk you through exactly what to fix — and how Softgrama can do it for you.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3 rounded-lg transition-all duration-150 hover:brightness-110 hover:scale-[1.01]"
                style={{ background: '#F97316', color: '#0A0A0A' }}
              >
                Book a free strategy call
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      )}

      <div className="pt-16" />
      <Footer />
    </main>
  )
}
