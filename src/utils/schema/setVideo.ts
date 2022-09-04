import type { Video } from '~/types.js'

import { setBroadcastEvent } from './setBroadcastEvent.js'
import { setClip } from './setClip.js'
import { setInteractionStatistic } from './setInteractionStatistic.js'

export function setVideo(video?: Video, setContext = false) {
  function mapVideo(
    { thumbnailUrls, hasPart, watchCount, publication, ...rest }: Video,
    context: boolean,
  ) {
    return {
      ...rest,
      '@type': 'VideoObject',
      ...(context && { '@context': 'https://schema.org' }),
      thumbnailUrl: thumbnailUrls,
      hasPart: setClip(hasPart),
      interactionStatistic: setInteractionStatistic(watchCount),
      publication: setBroadcastEvent(publication),
    }
  }
  if (video) {
    return mapVideo(video, setContext)
  }
  return undefined
}
