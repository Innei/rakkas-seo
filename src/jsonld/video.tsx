import React from 'react'

import type { Video } from '~/types'
import { setVideo } from '~/utils/schema/setVideo'

import type { JsonLdProps } from './jsonld'
import { JsonLd } from './jsonld'

export interface VideoJsonLdProps extends JsonLdProps, Video {}

function VideoJsonLd({
  type = 'Video',
  keyOverride,
  ...rest
}: VideoJsonLdProps) {
  const data = setVideo(rest, true)
  return (
    <JsonLd type={type} keyOverride={keyOverride} {...data} scriptKey="Video" />
  )
}

export default VideoJsonLd
