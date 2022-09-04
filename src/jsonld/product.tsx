import React from 'react'

import type {
  AggregateOffer,
  AggregateRating,
  Offers,
  Review,
} from '~/types.js'
import { setAggregateOffer } from '~/utils/schema/setAggregateOffer.js'
import { setAggregateRating } from '~/utils/schema/setAggregateRating.js'
import { setBrand } from '~/utils/schema/setBrand.js'
import { setManufacturer } from '~/utils/schema/setManufacturer.js'
import { setOffers } from '~/utils/schema/setOffers.js'
import { setReviews } from '~/utils/schema/setReviews.js'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

export interface ProductJsonLdProps extends JsonLdProps {
  productName: string
  images?: string[]
  description?: string
  brand?: string
  reviews?: Review[]
  aggregateRating?: AggregateRating
  offers?: Offers | Offers[]
  aggregateOffer?: AggregateOffer
  sku?: string
  gtin8?: string
  gtin13?: string
  gtin14?: string
  mpn?: string
  color?: string
  manufacturerName?: string
  manufacturerLogo?: string
  material?: string
  slogan?: string
  disambiguatingDescription?: string
  productionDate?: string
  purchaseDate?: string
  releaseDate?: string
  award?: string
}

function ProductJsonLd({
  type = 'Product',
  keyOverride,
  images,
  brand,
  reviews,
  aggregateRating,
  manufacturerLogo,
  manufacturerName,
  offers,
  aggregateOffer,
  productName,
  ...rest
}: ProductJsonLdProps) {
  const data = {
    ...rest,
    image: images,
    brand: setBrand(brand),
    review: setReviews(reviews),
    aggregateRating: setAggregateRating(aggregateRating),
    manufacturer: setManufacturer({ manufacturerLogo, manufacturerName }),
    offers: offers ? setOffers(offers) : setAggregateOffer(aggregateOffer),
    name: productName,
  }
  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="Product"
    />
  )
}

export default ProductJsonLd
