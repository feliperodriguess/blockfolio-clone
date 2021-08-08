export const formatCurrency = (value) => {
  const formattedValue = value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  if (value > 10 ** 9) {
    return `${formattedValue.slice(0, -9)}.${formattedValue.slice(-2)}B`
  }
  if (value > 10 ** 6) {
    return `${formattedValue.slice(0, -6)}.${formattedValue.slice(-2)}MM`
  }
  return formattedValue
}
