import React from 'react'

import type { Question } from '~/types'
import { setQuestions } from '~/utils/schema/setQuestions'

import type { JsonLdProps } from './jsonld'
import { JsonLd } from './jsonld'

export interface FAQPageJsonLdProps extends JsonLdProps {
  mainEntity: Question[]
}

function FAQPageJsonLd({
  type = 'FAQPage',
  keyOverride,
  mainEntity,
  ...rest
}: FAQPageJsonLdProps) {
  const data = {
    ...rest,
    mainEntity: setQuestions(mainEntity),
  }

  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="faq-page"
    />
  )
}

export default FAQPageJsonLd
