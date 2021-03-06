import { useRouter } from 'next/router'
import { NetworkStatus, useQuery } from '@apollo/client'
import {
  Box,
  Flex,
  IconButton,
  Spinner,
  Table as ChakraTable,
  Tbody,
  Tooltip,
} from '@chakra-ui/react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { RepeatIcon } from '@chakra-ui/icons'

import { GET_COINS } from '../../modules/coins/queries'
import Button from '../button'
import MarketSection from './market-section'
import TableHeader from './table-header'
import TableRow from './table-row'

export default function Table() {
  const { query, push } = useRouter()
  const { data, loading, networkStatus, refetch } = useQuery(GET_COINS, {
    variables: { page: Number(query.page) || 1 },
    notifyOnNetworkStatusChange: true,
  })
  const isRefetching = networkStatus === NetworkStatus.refetch
  const isLoading = loading && !isRefetching

  if (isLoading) {
    return (
      <Flex align="center" h="100vh" justify="center" w="100vw">
        <Spinner />
      </Flex>
    )
  }

  return (
    <Box mt="54px">
      <MarketSection />
      <Flex marginLeft="72.5%">
        <Tooltip aria-label="Refresh cryptocurrencies data" label="Refresh cryptocurrencies data">
          <IconButton
            aria-label="Refresh data"
            colorScheme="pink"
            icon={<RepeatIcon />}
            isLoading={isRefetching}
            isDisabled={isRefetching}
            onClick={() => refetch()}
            p="8px"
            variant="outline"
            _hover={{ colorScheme: 'pink' }}
            _pressed={{ colorScheme: 'pink' }}
          />
        </Tooltip>
        <Button
          isDisabled={!query.page || query.page < 2 || isLoading}
          isLoading={!!query.page && isLoading}
          leftIcon={<FiChevronLeft />}
          mx="8px"
          onClick={() => push(`/?page=${(Number(query.page) || 1) - 1}`)}
        >
          Previous 50
        </Button>
        <Button
          isDisabled={isLoading}
          isLoading={!!query.page && isLoading}
          onClick={() => push(`/?page=${(Number(query.page) || 1) + 1}`)}
          rightIcon={<FiChevronRight />}
        >
          Next 50
        </Button>
      </Flex>
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="12px"
        m="16px auto 12px"
        p="14px 60px 38px"
        maxW="1264px"
        w="80vw"
      >
        <ChakraTable variant="simple">
          <TableHeader />
          <Tbody>
            {data?.coins?.map((coin) => (
              <TableRow key={coin.id} {...coin} />
            ))}
          </Tbody>
        </ChakraTable>
      </Box>
    </Box>
  )
}
