import axios from 'axios'

import { getPageNumberId } from '../utils/helpers'

export const resolvers = {
  Query: {
    coins: async (_, { page = null }) => {
      const url = page
        ? `${process.env.BASE_URL}&cursor=${getPageNumberId(page)}`
        : process.env.BASE_URL
      const {
        data: { results },
      } = await axios.get(url, {
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
