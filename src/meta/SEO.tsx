import { Head } from 'rakkasjs'
import React, { Component } from 'react'

import type { NextSeoProps } from '../types.js'
import buildTags from './buildTags.js'

export default class Seo extends Component<NextSeoProps, {}> {
  render() {
    const {
      title,
      noindex = false,
      nofollow,
      robotsProps,
      description,
      canonical,
      openGraph,
      facebook,
      twitter,
      additionalMetaTags,
      titleTemplate,
      defaultTitle,
      mobileAlternate,
      languageAlternates,
      additionalLinkTags,
    } = this.props

    return (
      <Head>
        {/* @ts-ignore */}
        {buildTags({
          title,
          noindex,
          nofollow,
          robotsProps,
          description,
          canonical,
          facebook,
          openGraph,
          additionalMetaTags,
          twitter,
          titleTemplate,
          defaultTitle,
          mobileAlternate,
          languageAlternates,
          additionalLinkTags,
        })}
      </Head>
    )
  }
}
