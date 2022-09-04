import React from 'react'

import type {
  Action,
  Address,
  AggregateRating,
  Geo,
  GeoCircle,
  Offer,
  OpeningHoursSpecification,
  Review,
} from '~/types.js'
import { setAction } from '~/utils/schema/setAction.js'
import { setAddress } from '~/utils/schema/setAddress.js'
import { setAggregateRating } from '~/utils/schema/setAggregateRating.js'
import { setGeo } from '~/utils/schema/setGeo.js'
import { setGeoCircle } from '~/utils/schema/setGeoCircle.js'
import { setOffer } from '~/utils/schema/setOffer.js'
import { setOpeningHours } from '~/utils/schema/setOpeningHours.js'
import { setReviews } from '~/utils/schema/setReviews.js'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

export interface LocalBusinessJsonLdProps extends JsonLdProps {
  type: string
  id: string
  name: string
  description: string
  url?: string
  telephone?: string
  address: Address
  geo?: Geo
  images?: string[]
  rating?: AggregateRating
  review?: Review[]
  priceRange?: string
  servesCuisine?: string | string[]
  sameAs?: string[]
  openingHours?: OpeningHoursSpecification | OpeningHoursSpecification[]
  action?: Action
  areaServed?: GeoCircle[]
  makesOffer?: Offer[]
}

function LocalBusinessJsonLd({
  type = 'LocalBusiness',
  keyOverride,
  address,
  geo,
  rating,
  review,
  action,
  areaServed,
  makesOffer,
  openingHours,
  images,
  ...rest
}: LocalBusinessJsonLdProps) {
  const data = {
    ...rest,
    image: images,
    address: setAddress(address),
    geo: setGeo(geo),
    aggregateRating: setAggregateRating(rating),
    review: setReviews(review),
    potentialAction: setAction(action),
    areaServed: areaServed && areaServed.map(setGeoCircle),
    makesOffer: makesOffer?.map(setOffer),
    openingHoursSpecification: Array.isArray(openingHours)
      ? openingHours.map(setOpeningHours)
      : setOpeningHours(openingHours),
  }

  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="LocalBusiness"
    />
  )
}

export default LocalBusinessJsonLd
