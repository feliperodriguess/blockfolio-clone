import axios from 'axios'

export const blockfolioApi = axios.create({
  baseURL: process.env.BLOCKFOLIO_API_URL,
  headers: {
    'x-blockfolio-accesstoken': process.env.BLOCKFOLIO_API_TOKEN,
  },
})

export const getPageNumberId = (pageNumber) => {
  const halfOfPageNumberInteger = Math.ceil(pageNumber / 2)
  if (pageNumber === 2) {
    return 'a524'
  }
  if (pageNumber % 2 === 0) {
    return `a${halfOfPageNumberInteger - 1}21ab`
  }
  return `a${halfOfPageNumberInteger - 1}24ab`
}

export const parseCoinResults = (results) =>
  results.map(
    ({
      id,
      symbol,
      name,
      logoLight,
      volume24hr,
      marketCapExc,
      rank,
      percentChange24hr,
      dateUpdated,
      dateCreated,
      ftxCoin,
      ftxUsCoin,
      totalSupply,
    }) => ({
      id,
      name,
      symbol,
      rank,
      logo: logoLight,
      price: ftxCoin?.approxUsdValue || ftxUsCoin?.approxUsdValue,
      change: percentChange24hr,
      cap: marketCapExc,
      volume: volume24hr,
      totalSupply,
      createdAt: dateCreated,
      updatedAt: dateUpdated,
    })
  )

export const parseCoinNewsResults = (results) =>
  results.map(({ id, attributedAuthor, category, dateCreated, richText, text }) => ({
    id,
    text: text.split('\n')[0],
    tag: text.split('\n').slice(-3)[0],
    link: text.split('\n').slice(-1)[0],
    authorName: attributedAuthor?.user?.displayName,
    authorTitle: attributedAuthor?.title,
    category: category?.description,
    metaDataTitle: richText?.textItems?.slice(-1)[0]?.metaData?.title,
    metaDataDescription: richText?.textItems?.slice(-1)[0]?.metaData?.ogDescription,
    metaDataImage: richText?.textItems?.slice(-1)[0]?.metaData?.ogImage,
    source: attributedAuthor?.signalTeam?.name,
    createdAt: dateCreated,
  }))
