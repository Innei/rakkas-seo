import React from 'react'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

export interface LogoJsonLdProps extends JsonLdProps {
  logo: string
  url: string
}

function LogoJsonLd({
  type = 'Organization',
  keyOverride,
  ...rest
}: LogoJsonLdProps) {
  return (
    <JsonLd type={type} keyOverride={keyOverride} {...rest} scriptKey="Logo" />
  )
}

export default LogoJsonLd
