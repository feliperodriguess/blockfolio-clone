import { Avatar, Box, Flex, Link, Text, Tr, Td } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { formatCurrency } from '../../../utils/helpers'

export default function TableRow({ name, symbol, rank, logo, price, change, cap, volume }) {
  const router = useRouter()

  return (
    <Tr cursor="pointer" onClick={() => router.push(`/coin/${symbol}`)} _hover={{ bg: 'gray.300' }}>
      <Td>
        <Flex align="center" gap="4px">
          <Text color="gray.200" textStyle="h1">
            {rank}
          </Text>
          <Avatar h="30px" mx="18px" name={name} src={logo?.url} w="30px" />
          <Box>
            <Text color="gray.50" textStyle="h1">
              {symbol}
            </Text>
            <Text color="gray.200" textStyle="h1">
              {name}
            </Text>
          </Box>
        </Flex>
      </Td>
      <Td color="gray.50" textStyle="h1">
        {formatCurrency(price)}
      </Td>
      <Td color={change > 0 ? 'green.50' : 'red.50'} textStyle="h1">
        {change >= 0 ? `+${change?.toFixed(2)}%▲` : `${change?.toFixed(2)}%▼`}
      </Td>
      <Td color="gray.50" textStyle="h1">
        {formatCurrency(cap)}
      </Td>
      <Td color="gray.50" textStyle="h1">
        {formatCurrency(volume)}
      </Td>
    </Tr>
  )
}
