import React from 'react'

import type { AggregateRating, Review } from '~/types'
import { setAggregateRating } from '~/utils/schema/setAggregateRating'
import { setReviews } from '~/utils/schema/setReviews'

import { JsonLd, JsonLdProps } from './jsonld'

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
      priceCurrency: priceCurrency,
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
