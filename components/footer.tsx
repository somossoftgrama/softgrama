'use client'

import Image from 'next/image'
import { Linkedin, Twitter, Instagram, Mail, MapPin } from 'lucide-react'

const serviceLinks = [
  { label: 'Professional Web', href: '#services' },
  { label: 'Web + AI', href: '#services' },
  { label: 'Digital Platform', href: '#services' },
  { label: 'Care Plans', href: '#care-plan' },
]

const companyLinks = [
  { label: 'Contact', href: 'mailto:hola@softgrama.com' },
  { label: 'Free Audit', href: '#final-cta' },
  { label: 'Our Work', href: '#work' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

const socialLinks = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/softgrama' },
  { label: 'Twitter / X', icon: Twitter, href: 'https://twitter.com/somossoftgrama' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/somossoftgrama' },
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer
      className="px-6 pt-16 pb-8"
      style={{
        background: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2 group" aria-label="Softgrama home">
              <Image
                src="/logo-softgrama.svg"
                alt="Softgrama"
                height={28}
                width={112}
                className="h-7 w-auto"
                unoptimized
              />
            </a>
            <p className="text-[14px] text-[#5C5C58] leading-[1.6] max-w-[200px]">
              AI-powered web studio. We build growth machines for service businesses and e-commerce.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:border-[rgba(255,255,255,0.2)]"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#5C5C58',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#F97316'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#5C5C58'
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div className="flex flex-col gap-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#5C5C58] mb-1">
              Services
            </p>
            {serviceLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-[14px] text-[#A0A09A] hover:text-[#F97316] transition-colors duration-200 cursor-pointer bg-transparent border-none w-fit"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Col 3 — Company */}
          <div className="flex flex-col gap-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#5C5C58] mb-1">
              Company
            </p>
            {companyLinks.map((link) => (
              link.href.startsWith('#') ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-[14px] text-[#A0A09A] hover:text-[#F97316] transition-colors duration-200 cursor-pointer bg-transparent border-none w-fit"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] text-[#A0A09A] hover:text-[#F97316] transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Col 4 — Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#5C5C58] mb-1">
              Contact
            </p>
            <a
              href="mailto:hola@softgrama.com"
              className="inline-flex items-center gap-2 text-[14px] text-[#A0A09A] hover:text-[#F97316] transition-colors duration-200"
            >
              <Mail size={14} className="flex-shrink-0" />
              hola@softgrama.com
            </a>
            <a
              href="https://twitter.com/somossoftgrama"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] text-[#A0A09A] hover:text-[#F97316] transition-colors duration-200"
            >
              <Twitter size={14} className="flex-shrink-0" />
              @somossoftgrama
            </a>
            <div className="flex items-start gap-2 text-[14px] text-[#A0A09A]">
              <MapPin size={14} className="flex-shrink-0 mt-0.5" />
              <span>
                Quito, Ecuador — serving clients worldwide
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-[#5C5C58]">
            &copy; {new Date().getFullYear()} Softgrama. All rights reserved.
          </p>
          <p className="text-[12px] text-[#5C5C58]">
            Built with care and AI — Quito, Ecuador
          </p>
        </div>
      </div>
    </footer>
  )
}
