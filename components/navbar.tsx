'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#care-plan' },
  { label: 'Work', href: '#work' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: '64px',
          background: scrolled
            ? 'rgba(10,10,10,0.5)'
            : 'rgba(10,10,10,0.3)',
          backdropFilter: 'blur(40px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Softgrama home"
          >
            <Image
              src="/logo-softgrama.svg"
              alt="Softgrama"
              height={32}
              width={128}
              className="h-8 w-auto"
              priority
              unoptimized
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[14px] text-[#A0A09A] hover:text-[#F5F5F3] transition-colors duration-200 relative group cursor-pointer bg-transparent border-none"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#F97316] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/contact"
              className="text-[14px] text-[#F5F5F3] hover:text-[#A0A09A] transition-colors duration-200"
            >
              Book a call
            </a>
            <a
              href="/audit"
              className="text-[14px] font-medium px-5 py-2.5 rounded-lg transition-all duration-150 hover:brightness-110 hover:scale-[1.01]"
              style={{
                background: '#F97316',
                color: '#0A0A0A',
              }}
            >
              Get a free audit
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#A0A09A] hover:text-[#F5F5F3] transition-colors duration-200 cursor-pointer bg-transparent border-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-down Panel */}
      <div
        className="fixed top-[64px] left-0 right-0 z-40 md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: mobileOpen ? '400px' : '0px',
          background: 'rgba(10,10,10,0.4)',
          backdropFilter: 'blur(40px)',
          borderBottom: mobileOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col px-6 py-6 gap-5" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-[16px] text-[#A0A09A] hover:text-[#F97316] transition-colors duration-200 cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-[rgba(255,255,255,0.06)]">
            <a
              href="/contact"
              className="text-left text-[14px] text-[#A0A09A] hover:text-[#F97316] transition-colors duration-200"
            >
              Book a call
            </a>
            <a
              href="/audit"
              className="text-[14px] font-medium px-5 py-3 rounded-lg text-center transition-all duration-150"
              style={{ background: '#F97316', color: '#0A0A0A' }}
            >
              Get a free audit
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
