import React from 'react'

import type { AggregateRating, Review } from '~/types.js'
import { setAggregateRating } from '~/utils/schema/setAggregateRating.js'
import { setReviews } from '~/utils/schema/setReviews.js'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

export interface SoftwareAppJsonLdProps extends JsonLdProps {
  name: string
  price: string
  priceCurrency: string
  applicationCategory?: string
  operatingSystem?: string
  review?: Review
  aggregateRating?: AggregateRating
}

function SoftwareAppJsonLd({
  type = 'SoftwareApplication',
  keyOverride,
  priceCurrency,
  price,
  aggregateRating,
  review,
  ...rest
}: SoftwareAppJsonLdProps) {
  const data = {
    ...rest,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency,
    },
    aggregateRating: setAggregateRating(aggregateRating),
    review: setReviews(review),
  }
  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="SoftwareApp"
    />
  )
}

export default SoftwareAppJsonLd
