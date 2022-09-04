import React from 'react'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

export type HEREJsonLdProps = JsonLdProps

function HEREJsonLd({ type = 'HERE', keyOverride, ...rest }: HEREJsonLdProps) {
  return (
    <JsonLd type={type} keyOverride={keyOverride} {...rest} scriptKey="HERE" />
  )
}

export default HEREJsonLd
