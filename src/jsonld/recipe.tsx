import React from 'react'

import type { AggregateRating, Instruction, Video } from '~/types'
import { setAggregateRating } from '~/utils/schema/setAggregateRating'
import { setAuthor } from '~/utils/schema/setAuthor'
import { setInstruction } from '~/utils/schema/setInstruction'
import { setNutrition } from '~/utils/schema/setNutrition'
import { setVideo } from '~/utils/schema/setVideo'

import type { JsonLdProps } from './jsonld'
import { JsonLd } from './jsonld'

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
