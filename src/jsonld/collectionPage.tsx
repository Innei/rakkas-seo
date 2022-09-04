import React from 'react'

import type { CreativeWork } from '~/types'
import { setCreativeWork } from '~/utils/schema/setCreativeWork'

import type { JsonLdProps } from './jsonld'
import { JsonLd } from './jsonld'

export interface CollectionPageJsonLdProps extends JsonLdProps {
  name: string
  hasPart: CreativeWork[]
}

function CollectionPageJsonLd({
  type = 'CollectionPage',
  keyOverride,
  hasPart,
  ...rest
}: CollectionPageJsonLdProps) {
  const data = {
    ...rest,
    hasPart: hasPart.map(setCreativeWork),
  }
  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="CollectionPage"
    />
  )
}

export default CollectionPageJsonLd
