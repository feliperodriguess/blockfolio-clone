import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

import { formatCurrency } from '../../../utils/helpers'

export default function CoinInfoSection({ coin }) {
  return (
    <Box>
      <Flex align="center" mr="auto">
        {coinLogo && <Avatar alt="Bitcoin" h="34px" src={coin?.logo} w="34px" />}
        <Text color="gray.50" fontSize="30px" fontWeight="bold" lineHeight="45px" mx="8px">
          {coin?.name}
        </Text>
        <Text color="gray.100" fontSize="18px" fontWeight="300" lineHeight="27px" m="auto 0 4px">
          {coin?.symbol}
        </Text>
      </Flex>

      <Flex align="center" justify="space-between" mt="25%" w="100%">
        <Text fontSize="40px" fontWeight="bold" lineHeight="60px">
          {formatCurrency(coin?.price)}
        </Text>
        <Text color={coin?.change > 0 ? 'green.50' : 'red.50'} textStyle="h1">
          {coin?.change > 0
            ? `+${coin?.change?.toFixed(2) || ''}%▲`
            : `${coin?.change?.toFixed(2) || ''}%▼`}
        </Text>
      </Flex>

      <Flex
        align="center"
        border="1px"
        borderColor="gray.200"
        borderRadius="12px"
        justify="space-between"
        mt="40px"
        p="0 20px"
        w="100%"
      >
        <Flex align="center" direction="column" justify="center" p="25px">
          <Text color="gray.100" textStyle="h3">
            RANK
          </Text>
          <Text color="gray.50" fontSize="16px" fontWeight="bold" lineHeight="22px" mt="8px">
            {coin?.rank}
          </Text>
        </Flex>
        <Flex align="center" direction="column" justify="center" p="25px">
          <Text color="gray.100" textStyle="h3">
            MARKET CAP
          </Text>
          <Text color="gray.50" fontSize="16px" fontWeight="bold" lineHeight="22px" mt="8px">
            {formatCurrency(coin?.cap) || ''}
          </Text>
        </Flex>
        <Flex align="center" direction="column" justify="center" p="25px">
          <Text color="gray.100" textStyle="h3">
            CIRCULATING SUPPLY
          </Text>
          <Text color="gray.50" fontSize="16px" fontWeight="bold" lineHeight="22px" mt="8px">
            {`${formatCurrency(coin?.totalSupply) || ''} ${coin?.totalSupply ? coin?.symbol : ''}`}
          </Text>
        </Flex>
        <Flex align="center" direction="column" justify="center" p="25px">
          <Text color="gray.100" textStyle="h3">
            VOLUME (1D)
          </Text>
          <Text color="gray.50" fontSize="16px" fontWeight="bold" lineHeight="22px" mt="8px">
            {formatCurrency(coin?.volume) || ''}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
