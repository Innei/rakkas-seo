import React from 'react'

import type { AggregateRating, Instruction, Video } from '~/types.js'
import { setAggregateRating } from '~/utils/schema/setAggregateRating.js'
import { setAuthor } from '~/utils/schema/setAuthor.js'
import { setInstruction } from '~/utils/schema/setInstruction.js'
import { setNutrition } from '~/utils/schema/setNutrition.js'
import { setVideo } from '~/utils/schema/setVideo.js'

import type { JsonLdProps } from './jsonld.js'
import { JsonLd } from './jsonld.js'

export interface RecipeJsonLdProps extends JsonLdProps {
  name: string
  description: string
  authorName: string | string[]
  ingredients: string[]
  instructions: Instruction[]
  images?: string[]
  datePublished?: string
  prepTime?: string
  cookTime?: string
  totalTime?: string
  keywords?: string
  yields?: string
  category?: string
  cuisine?: string
  calories?: number
  aggregateRating?: AggregateRating
  video?: Video
}

function RecipeJsonLd({
  type = 'Recipe',
  keyOverride,
  authorName,
  images,
  yields,
  category,
  cuisine,
  calories,
  aggregateRating,
  video,
  ingredients,
  instructions,
  ...rest
}: RecipeJsonLdProps) {
  const data = {
    ...rest,
    author: setAuthor(authorName),
    image: images,
    recipeYield: yields,
    recipeCategory: category,
    recipeCuisine: cuisine,
    nutrition: setNutrition(calories),
    aggregateRating: setAggregateRating(aggregateRating),
    video: setVideo(video),
    recipeIngredient: ingredients,
    recipeInstructions: instructions.map(setInstruction),
  }

  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="recipe"
    />
  )
}

export default RecipeJsonLd
