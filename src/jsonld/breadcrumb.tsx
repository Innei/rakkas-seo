import React from 'react'

import type { ItemListElements } from '~/types.js'
import { setItemListElements } from '~/utils/schema/setItemListElements.js'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

export interface BreadCrumbJsonLdProps extends JsonLdProps {
  itemListElements: ItemListElements[]
}

function BreadCrumbJsonLd({
  type = 'BreadcrumbList',
  keyOverride,
  itemListElements,
}: BreadCrumbJsonLdProps) {
  const data = {
    itemListElement: setItemListElements(itemListElements),
  }

  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="breadcrumb"
    />
  )
}

export default BreadCrumbJsonLd
