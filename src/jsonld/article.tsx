import React from 'react'

import type { ArticleAuthor } from '~/types'
import { setAuthor } from '~/utils/schema/setAuthor'
import { setPublisher } from '~/utils/schema/setPublisher'

import type { JsonLdProps } from './jsonld'
import { JsonLd } from './jsonld'

export interface ArticleJsonLdProps extends JsonLdProps {
  type?: 'Article' | 'Blog' | 'NewsArticle'
  url: string
  title: string
  images: ReadonlyArray<string>
  datePublished: string
  dateModified?: string
  authorName: string | string[] | ArticleAuthor | ArticleAuthor[]
  description: string
  publisherName?: string
  publisherLogo?: string
}

function ArticleJsonLd({
  type = 'Article',
  keyOverride,
  url,
  title,
  images,
  datePublished,
  dateModified,
  authorName,
  publisherName = undefined,
  publisherLogo = undefined,
  description,
}: ArticleJsonLdProps) {
  const data = {
    datePublished,
    description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    image: images,
    dateModified: dateModified || datePublished,
    author: setAuthor(authorName),
    publisher: setPublisher(publisherName, publisherLogo),
  }
  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="article"
    />
  )
}

export default ArticleJsonLd
