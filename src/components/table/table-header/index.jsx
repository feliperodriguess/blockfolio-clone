import { Thead, Tr, Th } from '@chakra-ui/react'

export default function TableHeader() {
  return (
    <Thead>
      <Tr>
        <Th color="white" textStyle="h3">
          RANK
        </Th>
        <Th color="gray.200" textStyle="h3">
          PRICE
        </Th>
        <Th color="gray.200" textStyle="h3">
          CHANGE (24H)
        </Th>
        <Th color="gray.200" textStyle="h3">
          CAP
        </Th>
        <Th color="gray.200" textStyle="h3">
          VOL (24H)
        </Th>
      </Tr>
    </Thead>
  )
}
