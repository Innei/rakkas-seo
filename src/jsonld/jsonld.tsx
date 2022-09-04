import { Head } from 'rakkasjs'
import React from 'react'

import toJson from '~/utils/toJson'

export interface JsonLdProps {
  type?: string
  scriptId?: string
  [key: string]: any
}

function JsonLd({
  type = 'Thing',
  keyOverride,
  scriptKey,
  scriptId = undefined,
  ...rest
}: JsonLdProps & { scriptKey: string }) {
  return (
    <Head>
      <script
        type="application/ld+json"
        id={scriptId}
        dangerouslySetInnerHTML={toJson(type, { ...rest })}
        key={`jsonld-${scriptKey}${keyOverride ? `-${keyOverride}` : ''}`}
      />
    </Head>
  )
}

export { JsonLd }
