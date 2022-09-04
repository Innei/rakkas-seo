import React from 'react'

import type { AggregateOffer, AggregateRating, Offers, Review } from '~/types'
import { setAggregateOffer } from '~/utils/schema/setAggregateOffer'
import { setAggregateRating } from '~/utils/schema/setAggregateRating'
import { setBrand } from '~/utils/schema/setBrand'
import { setManufacturer } from '~/utils/schema/setManufacturer'
import { setOffers } from '~/utils/schema/setOffers'
import { setReviews } from '~/utils/schema/setReviews'

import { JsonLd, JsonLdProps } from './jsonld'

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
