import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '22px',
    },
    h2: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '19px',
    },
    h3: {
      fontSize: '11px',
      fontWeight: 'bold',
      lineHeight: '15px',
    },
  },
  colors: {
    gray: {
      200: '#666666',
      100: '#808080',
      50: '#E6E6E6',
    },
    green: {
      50: '#46C796',
    },
    red: {
      50: '#F15858',
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'gray.50',
      },
    },
  },
})
