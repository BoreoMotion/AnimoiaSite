import { LegalDocument } from '@/components/legal-document'
import { LICENSE_CLOSING, LICENSE_INTRO, LICENSE_LAST_UPDATED, LICENSE_SECTIONS } from '@/lib/license'

export function LicenseDocument() {
  return (
    <LegalDocument
      title="Animoia End User License Agreement"
      lastUpdated={LICENSE_LAST_UPDATED}
      intro={LICENSE_INTRO}
      sections={LICENSE_SECTIONS}
      closing={LICENSE_CLOSING}
    />
  )
}
