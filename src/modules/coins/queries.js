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

export const GET_COIN_BY_SYMBOL = gql`
  query GetCoinBySymbol($symbol: String) {
    coin(symbol: $symbol) {
      id
      name
      symbol
      rank
      price
      volume
      change
      cap
      totalSupply
      logo {
        url
      }
    }
  }
`
