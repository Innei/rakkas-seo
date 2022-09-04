import React from 'react'

import type { ItemListElements } from '~/types.js'
import { setItemListElements } from '~/utils/schema/setItemListElements.js'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

export interface ProfilePageJsonLdProps extends JsonLdProps {
  breadcrumb: string | ItemListElements[]
  lastReviewed?: string
}

function ProfilePageJsonLd({
  type = 'ProfilePage',
  keyOverride,
  breadcrumb,
  ...rest
}: ProfilePageJsonLdProps) {
  const data = {
    ...rest,
    breadcrumb: Array.isArray(breadcrumb)
      ? {
          '@type': 'BreadcrumbList',
          itemListElement: setItemListElements(breadcrumb),
        }
      : breadcrumb,
  }

  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="ProfilePage"
    />
  )
}

export default ProfilePageJsonLd
