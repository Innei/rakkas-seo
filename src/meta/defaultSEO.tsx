import { Head } from 'rakkasjs'
import React, { Component } from 'react'

import type { DefaultSeoProps } from '../types.js'
import buildTags from './buildTags.js'

export default class DefaultSeo extends Component<DefaultSeoProps, {}> {
  render() {
    const {
      title,
      titleTemplate,
      defaultTitle,
      dangerouslySetAllPagesToNoIndex = false,
      dangerouslySetAllPagesToNoFollow = false,
      description,
      canonical,
      facebook,
      openGraph,
      additionalMetaTags,
      twitter,
      defaultOpenGraphImageWidth,
      defaultOpenGraphImageHeight,
      defaultOpenGraphVideoWidth,
      defaultOpenGraphVideoHeight,
      mobileAlternate,
      languageAlternates,
      additionalLinkTags,
      robotsProps,
    } = this.props

    return (
      <Head>
        {buildTags({
          title,
          titleTemplate,
          defaultTitle,
          dangerouslySetAllPagesToNoIndex,
          dangerouslySetAllPagesToNoFollow,
          description,
          canonical,
          facebook,
          openGraph,
          additionalMetaTags,
          twitter,
          defaultOpenGraphImageWidth,
          defaultOpenGraphImageHeight,
          defaultOpenGraphVideoWidth,
          defaultOpenGraphVideoHeight,
          mobileAlternate,
          languageAlternates,
          additionalLinkTags,
          robotsProps,
        })}
      </Head>
    )
  }
}
