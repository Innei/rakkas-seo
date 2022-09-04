import React from 'react'

import type {
  AggregateOffer,
  EventAttendanceMode,
  EventStatus,
  Location,
  Offers,
  Organizer,
  Performer,
} from '~/types'
import { setAggregateOffer } from '~/utils/schema/setAggregateOffer'
import { setLocation } from '~/utils/schema/setLocation'
import { setOffers } from '~/utils/schema/setOffers'
import { setOrganizer } from '~/utils/schema/setOrganizer'
import { setPerformer } from '~/utils/schema/setPerformer'

import { JsonLd, JsonLdProps } from './jsonld'

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
