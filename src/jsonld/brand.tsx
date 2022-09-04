import React from 'react'

import type { AggregateRating } from '~/types.js'
import { setAggregateRating } from '~/utils/schema/setAggregateRating.js'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

export interface BrandJsonLdProps extends JsonLdProps {
  id: string
  slogan?: string
  logo?: string
  aggregateRating?: AggregateRating
}

function BrandJsonLd({
  type = 'Brand',
  id,
  keyOverride,
  aggregateRating,
  ...rest
}: BrandJsonLdProps) {
  const data = {
    aggregateRating: setAggregateRating(aggregateRating),
    '@id': id,
    ...rest,
  }
  return (
    <JsonLd type={type} keyOverride={keyOverride} {...data} scriptKey="brand" />
  )
}

export default BrandJsonLd
