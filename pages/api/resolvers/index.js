import axios from 'axios'

export const resolvers = {
  Query: {
    getCoins: async () => {
      const {
        data: { results },
      } = await axios.get(process.env.BASE_URL, {
        headers: {
          'x-blockfolio-accesstoken': process.env.TOKEN,
        },
      })
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
  },
}
