import { blockfolioApi, getPageNumberId } from '../utils/helpers'

export const resolvers = {
  Query: {
    coins: async (_, { page = null }) => {
      const baseUrl = '?isFiat=false&limit=50&sort=RANK%3AASC%2CNAME%3AASC'
      const url = page ? `${baseUrl}&cursor=${getPageNumberId(page)}` : baseUrl
      const {
        data: { results },
      } = await blockfolioApi.get(url)
      const parsedResults = results.map(
        ({
          id,
          symbol,
          name,
          logoLight,
          volume24hr,
          marketCapExc,
          percentChange24hr,
          rank,
          dateUpdated,
          dateCreated,
          ftxCoin,
        }) => ({
          id,
          name,
          symbol,
          rank,
          logo: logoLight,
          price: ftxCoin?.approxUsdValue,
          change: percentChange24hr,
          cap: marketCapExc,
          volume: volume24hr,
          createdAt: dateCreated,
          updatedAt: dateUpdated,
        })
      )
      return parsedResults
    },
    market: async () => {
      const { data } = await blockfolioApi.get('market?fiat=USD')
      return data
    },
  },
}
