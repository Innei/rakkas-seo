import React from 'react'

import type { Address, ContactPoint, OrganizationCategory } from '~/types'
import { setAddress } from '~/utils/schema/setAddress'
import { setContactPoints } from '~/utils/schema/setContactPoints'

import type { JsonLdProps } from './jsonld'
import { JsonLd } from './jsonld'

export interface OrganizationJsonLdProps extends JsonLdProps {
  type?: OrganizationCategory
  id?: string
  name: string
  logo?: string
  url: string
  legalName?: string
  sameAs?: string[]
  address?: Address
  contactPoints?: ContactPoint[]
}

function OrganizationJsonLd({
  type = 'Organization',
  keyOverride,
  address,
  contactPoints,
  ...rest
}: OrganizationJsonLdProps) {
  const data = {
    ...rest,
    address: setAddress(address),
    contactPoints: setContactPoints(contactPoints),
  }
  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="organization"
    />
  )
}

export default OrganizationJsonLd
