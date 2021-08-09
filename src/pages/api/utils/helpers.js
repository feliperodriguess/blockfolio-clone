import axios from 'axios'

export const blockfolioApi = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'x-blockfolio-accesstoken': process.env.TOKEN,
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
