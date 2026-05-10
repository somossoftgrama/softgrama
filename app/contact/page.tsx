import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Book a Free Strategy Call — Softgrama',
  description:
    "Schedule a free 30-minute strategy call with Softgrama. We'll review your site, identify opportunities, and outline exactly what we'd build for you.",
  alternates: {
    canonical: 'https://softgrama.com/contact',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
