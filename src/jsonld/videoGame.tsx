import React from 'react'

import type {
  AggregateRating,
  ApplicationCategory,
  GamePlayMode,
  Offers,
  Review,
  Video,
} from '~/types.js'
import { setAggregateRating } from '~/utils/schema/setAggregateRating.js'
import { setAuthor } from '~/utils/schema/setAuthor.js'
import { setImage } from '~/utils/schema/setImage.js'
import { setOffers } from '~/utils/schema/setOffers.js'
import { setProducer } from '~/utils/schema/setProducer.js'
import { setProvider } from '~/utils/schema/setProvider.js'
import { setReviews } from '~/utils/schema/setReviews.js'
import { setVideo } from '~/utils/schema/setVideo.js'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

export interface VideoGameJsonLdProps extends JsonLdProps {
  keyOverride?: string
  name: string
  url?: string
  image?: string
  description?: string
  languageName?: string | string[]
  translatorName?: string | string[]
  authorName?: string
  aggregateRating?: AggregateRating
  applicationCategory?: ApplicationCategory
  platformName?: string | string[]
  operatingSystemName?: string | string[]
  datePublished?: string
  keywords?: string
  producerName?: string
  producerUrl?: string
  providerName?: string
  providerUrl?: string
  publisherName?: string | string[]
  offers?: Offers | Offers[]
  genreName?: string | string[]
  playMode?: GamePlayMode | GamePlayMode[]
  processorRequirements?: string
  memoryRequirements?: string
  storageRequirements?: string
  trailer?: Video
  reviews?: Review[]
}

function VideoGameJsonLd({
  type = 'VideoGame',
  keyOverride,
  aggregateRating,
  trailer,
  reviews,
  image,
  authorName,
  provider,
  producerName,
  producerUrl,
  offers,
  operatingSystemName,
  platformName,
  translatorName,
  languageName,
  genreName,
  publisherName,
  ...rest
}: VideoGameJsonLdProps) {
  const data = {
    ...rest,
    aggregateRating: setAggregateRating(aggregateRating),
    trailer: setVideo(trailer),
    review: setReviews(reviews),
    image: setImage(image),
    author: setAuthor(authorName),
    provider: setProvider(provider),
    producer: setProducer({ name: producerName, url: producerUrl } as any),
    offers: setOffers(offers),
    operatingSystem: operatingSystemName,
    gamePlatform: platformName,
    translator: translatorName,
    inLanguage: languageName,
    genre: genreName,
    publisher: publisherName,
  }

  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="VideoGame"
    />
  )
}

export default VideoGameJsonLd
