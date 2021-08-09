import { gql } from '@apollo/client'

export const GET_MARKET = gql`
  query GetMarket {
    market {
      current {
        btcDominance
        totalMarketCap
        totalVolume24h
      }
      twentyFourHour {
        btcDominance
        totalMarketCap
        totalVolume24h
      }
    }
  }
`
