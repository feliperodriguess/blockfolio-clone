import { ChakraProvider } from '@chakra-ui/react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri:
      process.env.NODE_ENV === 'production'
        ? 'https://blockfolio-clone-5p9mzvhv4-feliperodriguess.vercel.app/api/graphql'
        : process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
