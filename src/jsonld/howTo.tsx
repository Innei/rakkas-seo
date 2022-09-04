import React from 'react'

import type { PriceSpecification, Step } from '~/types.js'
import { setCost } from '~/utils/schema/setCost.js'
import { setImage } from '~/utils/schema/setImage.js'
import { setStep } from '~/utils/schema/setStep.js'
import { setSupply } from '~/utils/schema/setSupply.js'
import { setTool } from '~/utils/schema/setTool.js'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

export interface HowToJsonLdProps extends JsonLdProps {
  name: string
  image?: string
  estimatedCost?: PriceSpecification
  supply?: string[]
  tool?: string[]
  step: Step[]
  totalTime?: string
}

function howToJsonLd({
  type = 'HowTo',
  keyOverride,
  image,
  estimatedCost,
  supply,
  tool,
  step,
  ...rest
}: HowToJsonLdProps) {
  const data = {
    ...rest,
    image: setImage(image),
    estimatedCost: setCost(estimatedCost),
    supply: setSupply(supply),
    tool: setTool(tool),
    step: setStep(step),
  }
  return (
    <JsonLd type={type} keyOverride={keyOverride} {...data} scriptKey="howTo" />
  )
}

export default howToJsonLd
