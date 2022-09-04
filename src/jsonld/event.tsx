import React from 'react'

import type {
  AggregateOffer,
  EventAttendanceMode,
  EventStatus,
  Location,
  Offers,
  Organizer,
  Performer,
} from '~/types.js'
import { setAggregateOffer } from '~/utils/schema/setAggregateOffer.js'
import { setLocation } from '~/utils/schema/setLocation.js'
import { setOffers } from '~/utils/schema/setOffers.js'
import { setOrganizer } from '~/utils/schema/setOrganizer.js'
import { setPerformer } from '~/utils/schema/setPerformer.js'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

export interface EventJsonLdProps extends JsonLdProps {
  name: string
  startDate: string
  endDate: string
  location: Location
  url?: string
  description?: string
  images?: string[]
  offers?: Offers | Offers[]
  aggregateOffer?: AggregateOffer
  performers?: Performer | Performer[]
  organizer?: Organizer
  eventStatus?: EventStatus
  eventAttendanceMode?: EventAttendanceMode
}

function EventJsonLd({
  type = 'Event',
  keyOverride,
  location,
  images,
  offers,
  aggregateOffer,
  performers,
  organizer,
  eventStatus,
  eventAttendanceMode,
  ...rest
}: EventJsonLdProps) {
  const data = {
    ...rest,
    location: setLocation(location),
    image: images,
    offers: offers ? setOffers(offers) : setAggregateOffer(aggregateOffer),
    performer: Array.isArray(performers)
      ? performers.map(setPerformer)
      : setPerformer(performers),
    organizer: Array.isArray(organizer)
      ? organizer.map(setOrganizer)
      : setOrganizer(organizer),
    eventStatus: `https://schema.org/${eventStatus}`,
    eventAttendanceMode: `https://schema.org/${eventAttendanceMode}`,
  }

  return (
    <JsonLd type={type} keyOverride={keyOverride} {...data} scriptKey="Event" />
  )
}

export default EventJsonLd
