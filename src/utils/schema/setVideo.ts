import type { Video } from '~/types'

import { setBroadcastEvent } from './setBroadcastEvent'
import { setClip } from './setClip'
import { setInteractionStatistic } from './setInteractionStatistic'

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
