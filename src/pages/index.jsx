import { Box, Flex, Spinner } from '@chakra-ui/react'
import useSWR from 'swr'

import Table from '../components/table'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
  // const { data, error } = useSWR('/api/coins', fetcher)

  // if (error) return <div>failed to load</div>

  // if (!data) {
  //   return (
  //     <Flex align="center" h="100vh" justify="center" w="100vw">
  //       <Spinner />
  //     </Flex>
  //   )
  // }

  // return (
  //   <Flex align="center" h="100vh" justify="center" maxW={1264} mx="auto" p={40}>
  //     <Box maxH="100%">
  //       <Table coins={data} />
  //     </Box>
  //   </Flex>
  // )
  return <h1>Hello World</h1>
}
