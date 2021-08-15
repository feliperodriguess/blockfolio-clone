import { Flex } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import Table from '../components/table'

export default function Home() {
  return (
    <>
      <NextSeo title="Markets | Blockfolio" description="Cryptocurrencies market data" />
      <Flex align="center" justify="center" p="40px">
        <Table />
      </Flex>
    </>
  )
}
