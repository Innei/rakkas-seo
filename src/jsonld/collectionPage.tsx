import React from 'react'

import type { CreativeWork } from '~/types.js'
import { setCreativeWork } from '~/utils/schema/setCreativeWork.js'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

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
