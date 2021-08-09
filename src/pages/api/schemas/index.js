import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Logo {
    name: String
    url: String
    cdnUrl: String
  }

  type Coin {
    id: ID!
    name: String
    symbol: String
    rank: Int
    logo: Logo
    price: Float
    change: Float
    cap: Float
    volume: Float
    createdAt: String
    updatedAt: String
  }

  type MarketInfo {
    btcDominance: Float
    totalMarketCap: Float
    totalVolume24h: Float
  }

  type Market {
    current: MarketInfo!
    twentyFourHour: MarketInfo!
  }

  type Query {
    coins(page: Int): [Coin!]!
    market: Market!
  }
`
