import React from 'react'

import type { Question } from '~/types.js'
import { setQuestions } from '~/utils/schema/setQuestions.js'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

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
