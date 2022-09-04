import React from 'react'

import type { ContactPoint } from '~/types'
import { setContactPoint } from '~/utils/schema/setContactPoint'

import type { JsonLdProps } from './jsonld'
import { JsonLd } from './jsonld'

export interface CorporateContactJsonLdProps extends JsonLdProps {
  url: string
  contactPoint: ContactPoint[]
  logo?: string
}

function CorporateContactJsonLd({
  type = 'Organization',
  keyOverride,
  contactPoint,
  ...rest
}: CorporateContactJsonLdProps) {
  const data = {
    ...rest,
    contactPoint: contactPoint.map(setContactPoint),
  }
  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="CorporateContact"
    />
  )
}

export default CorporateContactJsonLd
