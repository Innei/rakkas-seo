import React from 'react'

import type { Video } from '~/types.js'
import { setVideo } from '~/utils/schema/setVideo.js'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

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
