export const formatCurrency = (value) => {
  const formattedValue = value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  if (value > 10 ** 12) {
    return `${formattedValue.slice(0, -12)}.${formattedValue.slice(-2)}T`
  }
  if (value > 10 ** 9) {
    return `${formattedValue.slice(0, -9)}.${formattedValue.slice(-2)}B`
  }
  if (value > 10 ** 6) {
    return `${formattedValue.slice(0, -6)}.${formattedValue.slice(-2)}MM`
  }
  return formattedValue
}

const ONE_MINUTE = 60
const ONE_HOUR = ONE_MINUTE * 60
const ONE_DAY = ONE_HOUR * 24
const ONE_MONTH = ONE_DAY * 30

export const getPeriod = (date) => {
  const currentDate = new Date()
  const comparedDate = new Date(date)
  const diff = Math.round((currentDate.getTime() - comparedDate.getTime()) / 1000)
  if (diff < ONE_MINUTE) {
    return 'just now'
  }
  if (diff < ONE_MINUTE * 2) {
    return 'a minute ago'
  }
  if (diff < ONE_HOUR) {
    return `${Math.round(diff / ONE_MINUTE)} minutes ago`
  }
  if (diff < ONE_HOUR * 2) {
    return 'a hour ago'
  }
  if (diff < ONE_DAY) {
    return `${Math.round(diff / ONE_HOUR)} hours ago`
  }
  if (diff < ONE_DAY * 2) {
    return 'a day ago'
  }
  if (diff < ONE_MONTH) {
    return `${Math.round(diff / ONE_DAY)} days ago`
  }
  if (diff < ONE_MONTH * 2) {
    return 'a month ago'
  }
  return `${Math.round(diff / ONE_MONTH)} months ago`
}
