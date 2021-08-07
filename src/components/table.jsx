import {
  Avatar,
  Flex,
  Text,
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'

export default function Table({ coins }) {
  return (
    <ChakraTable colorScheme="pink" variant="simple">
      <Thead>
        <Tr>
          <Th>RANK</Th>
          <Th>PRICE</Th>
          <Th>CHANGE (24H)</Th>
          <Th>CAP</Th>
          <Th>VOL (24H)</Th>
        </Tr>
      </Thead>
      <Tbody>
        {coins.map(({ id, name, logo, rank, price, change, cap, volume }) => (
          <Tr key={id}>
            <Td>
              <Flex align="center" gap={4}>
                <Text>{rank}</Text>
                <Avatar mx={4} name={name} src={logo.url} />
                <Text>{name}</Text>
              </Flex>
            </Td>
            <Td isNumeric>{price}</Td>
            <Td isNumeric>{change}</Td>
            <Td isNumeric>{cap}</Td>
            <Td isNumeric>{volume}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  )
}
