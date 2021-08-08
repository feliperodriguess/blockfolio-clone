import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Box, Flex, Spinner, Table as ChakraTable, Tbody } from '@chakra-ui/react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { GET_COINS } from '../../modules/coins/queries'
import Button from '../button'
import TableHeader from './table-header'
import TableRow from './table-row'

export default function Table() {
  const [page, setPage] = useState(1)
  const { data, loading } = useQuery(GET_COINS, { variables: { page } })

  if (loading) {
    return (
      <Flex align="center" h="100vh" justify="center" w="100vw">
        <Spinner />
      </Flex>
    )
  }

  return (
    <Box mt="54px" w="1264px">
      <Flex marginLeft="75%">
        <Button
          isDisabled={!page || page < 2 || loading}
          isLoading={!!page && !!loading}
          leftIcon={<FiChevronLeft />}
          onClick={() => setPage((previousState) => previousState - 1)}
        >
          Previous 50
        </Button>
        <Button
          isDisabled={loading}
          isLoading={!!page && !!loading}
          ml="8px"
          onClick={() => setPage((previousState) => previousState + 1)}
          rightIcon={<FiChevronRight />}
        >
          Next 50
        </Button>
      </Flex>
      <Box borderColor="gray.200" borderRadius="12px" m="16px auto 12px" p="14px 60px 38px">
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
