import { useQuery } from '@apollo/client'
import { Box, Divider, Flex, Spinner, Text } from '@chakra-ui/react'

import { GET_MARKET } from '../../../modules/market/queries'
import { formatCurrency } from '../../../utils/helpers'

const Item = ({ percentage, title, value }) => {
  return (
    <Box>
      <Text color="gray.100" textStyle="h3">
        {title}
      </Text>
      <Flex align="flex-end" mt="4px">
        <Text color="white" mr="6px" textStyle="h2" fontWeight="bold">
          {value}
        </Text>
        <Text color={percentage > 0 ? 'green.50' : 'red.50'} textStyle="h3">
          {percentage > 0 ? `+${percentage?.toFixed(2)}%▲` : `${percentage?.toFixed(2)}%▼`}
        </Text>
      </Flex>
    </Box>
  )
}

export default function MarketSection() {
  const { data, loading } = useQuery(GET_MARKET)

  if (loading) {
    return (
      <Flex align="center" h="100px" justify="center" w="300px">
        <Spinner />
      </Flex>
    )
  }

  const { current, twentyFourHour } = data?.market

  return (
    <Flex pl="60px">
      <Item
        percentage={(1 - twentyFourHour?.totalMarketCap / current?.totalMarketCap) * 100}
        title="MARKET CAP"
        value={`$${formatCurrency(current?.totalMarketCap?.toFixed(0))}`}
      />
      <Divider colorScheme="gray.200" h="40px" m="0 12px 0 40px" orientation="vertical" />
      <Item
        percentage={(1 - twentyFourHour?.totalVolume24h / current?.totalVolume24h) * 100}
        title="24HR VOLUME"
        value={`$${formatCurrency(current?.totalVolume24h?.toFixed(0))}`}
      />
      <Divider colorScheme="gray.200" h="40px" m="0 12px 0 40px" orientation="vertical" />
      <Item
        percentage={(1 - twentyFourHour?.btcDominance / current?.btcDominance) * 100}
        title="BTC DOMINANCE"
        value={`${current?.btcDominance?.toFixed(2)}%`}
      />
    </Flex>
  )
}
