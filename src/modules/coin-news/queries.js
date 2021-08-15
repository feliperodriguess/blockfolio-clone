import { gql } from '@apollo/client'

export const GET_COIN_NEWS = gql`
  query GetCoinNews($coinId: String) {
    coinNews(coinId: $coinId) {
      id
      text
      tag
      link
      authorName
      authorTitle
      category
      metaDataTitle
      metaDataDescription
      metaDataImage
      source
      createdAt
    }
  }
`
