import type { Metadata } from 'next'
import AuditClient from './AuditClient'

export const metadata: Metadata = {
  title: 'Free AI Website Audit — Softgrama',
  description:
    'Get an instant AI-powered analysis of your website: messaging clarity, conversion readiness, AI opportunities and your top 3 quick wins. Free, no commitment.',
  alternates: {
    canonical: 'https://softgrama.com/audit',
  },
}

export default function AuditPage() {
  return <AuditClient />
}
