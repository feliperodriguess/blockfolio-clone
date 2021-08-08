import { gql } from '@apollo/client'

export const GET_COINS = gql`
  query GetCoins($page: Int) {
    coins(page: $page) {
      id
      name
      symbol
      rank
      price
      volume
      change
      cap
      logo {
        url
      }
    }
  }
`
