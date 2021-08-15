import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { NextSeo } from 'next-seo'
import { Box, Flex, Spinner } from '@chakra-ui/react'

import { GET_COIN_BY_SYMBOL } from '../../modules/coins/queries'
import { SCROLLBAR_STYLE } from '../../utils/constants'
import CoinInfoSection from './coin-info-section'
import CoinNewsSection from './coin-news-section'

export default function Coin() {
  const {
    query: { symbol },
  } = useRouter()

  const { data, loading } = useQuery(GET_COIN_BY_SYMBOL, {
    variables: { symbol },
    skip: !symbol,
  })

  const coin = useMemo(() => ({ ...data?.coin, logo: data?.coin?.logo?.url }), [data])

  return (
    <>
      <NextSeo
        title={coin?.name ? `${coin?.name} (${coin?.symbol}) | Blockfolio` : 'Blockfolio'}
        description={coin?.name ? `${coin?.name} latest news and data` : ''}
      />
      <Flex align="center" direction="column" h="100vh" justify="center" w="100vw">
        <Box maxW="1252px" mx="auto" w="100%">
          <Flex mt="36px">
            <Flex
              align="center"
              border="1px"
              borderColor="gray.200"
              borderRadius="12px"
              direction="column"
              justify={loading ? 'center' : 'flex-start'}
              p="40px 42px"
              w="800px"
            >
              {loading ? <Spinner /> : <CoinInfoSection coin={coin} />}
            </Flex>
            <Box
              border="1px"
              borderColor="gray.200"
              borderRadius="12px"
              css={SCROLLBAR_STYLE}
              ml="34px"
              h="75vh"
              maxH="700px"
              overflowY="scroll"
              p="24px"
              w="400px"
            >
              {coin.id && <CoinNewsSection coinId={coin?.id} coinLogo={coin?.logo} />}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}
