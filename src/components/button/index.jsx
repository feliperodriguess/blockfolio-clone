import { Button as ChakraButton } from '@chakra-ui/react'

export default function Button({ children, ...otherProps }) {
  return (
    <ChakraButton
      border="1px"
      borderColor="gray.200"
      color="gray.100"
      colorScheme="black"
      fontSize="14px"
      fontWeight="400"
      lineHeight="19px"
      textStyle="h2"
      _hover={{ color: 'white' }}
      {...otherProps}
    >
      {children}
    </ChakraButton>
  )
}
