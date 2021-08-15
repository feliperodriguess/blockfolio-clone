import {
  blockfolioApi,
  getPageNumberId,
  parseCoinNewsResults,
  parseCoinResults,
} from '../utils/helpers'

export const resolvers = {
  Query: {
    coins: async (_, { page = null }) => {
      const baseUrl = '?isFiat=false&limit=50&sort=RANK%3AASC%2CNAME%3AASC'
      const url = page ? `${baseUrl}&cursor=${getPageNumberId(page)}` : baseUrl
      const { data } = await blockfolioApi.get(url)
      return parseCoinResults(data.results)
    },
    coin: async (_, { symbol }) => {
      const { data } = await blockfolioApi.get(`?symbols=${symbol}`)
      return parseCoinResults(data.results)[0]
    },
    coinNews: async (_, { coinId }) => {
      const { data } = await blockfolioApi.get(`/${coinId}/signals?limit=20`)
      return parseCoinNewsResults(data.results)
    },
    market: async () => {
      const { data } = await blockfolioApi.get('market?fiat=USD')
      return data
    },
  },
}
