import { useRouter } from 'next/router'
import { Avatar, Image, Box, Button, Divider, Flex, Link, Stack, Tag, Text } from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'

import { SCROLLBAR_STYLE } from '../../utils/constants'

export default function Coin() {
  const {
    query: { name },
  } = useRouter()

  return (
    <Flex align="center" direction="column" h="100vh" justify="center" w="100vw">
      <Box maxW="1252px" mx="auto" w="100%">
        <Flex align="center">
          <Avatar
            alt="Bitcoin"
            h="34px"
            src="https://www.infomoney.com.br/wp-content/uploads/2019/06/bitcoin-1.png?resize=360%2C202&quality=50&strip=all"
            w="34px"
          />
          <Text color="gray.50" fontSize="30px" fontWeight="bold" lineHeight="45px" mx="8px">
            Bitcoin
          </Text>
          <Text color="gray.100" fontSize="18px" fontWeight="300" lineHeight="27px" m="auto 0 4px">
            BTC
          </Text>
        </Flex>

        <Flex mt="36px">
          <Flex
            align="center"
            border="1px"
            borderColor="gray.200"
            borderRadius="12px"
            direction="column"
            justify="center"
            p="40px 42px"
            w="800px"
          >
            <Flex align="center" justify="space-between" w="100%">
              <Text fontSize="40px" fontWeight="bold" lineHeight="60px">
                $46,121.53
              </Text>
              <Text
                // color={change > 0 ? 'green.50' : 'red.50'}
                color="green.50"
                textStyle="h1"
              >
                {/* {change > 0 ? `+${change?.toFixed(2)}%▲` : `${change?.toFixed(2)}%▼`} */}
                +$3.5%▲
              </Text>
            </Flex>
            <Flex mr="auto" mt="24px">
              <Flex>
                <Text color="gray.200" fontWeight="bold" textStyle="h2">
                  LOW
                </Text>
                <Text color="gray.50" fontWeight="bold" ml="6px" textStyle="h2">
                  $46,121.53
                </Text>
              </Flex>
              <Flex ml="16px">
                <Text color="gray.200" fontWeight="bold" textStyle="h2">
                  HIGH
                </Text>
                <Text color="gray.50" fontWeight="bold" ml="6px" textStyle="h2">
                  $46,121.53
                </Text>
              </Flex>
            </Flex>

            <Flex
              align="center"
              border="1px"
              borderColor="gray.200"
              borderRadius="12px"
              justify="space-between"
              mt="40px"
              p="0 20px"
              w="100%"
            >
              <Box p="25px">
                <Text color="gray.100" textStyle="h3">
                  RANK
                </Text>
                <Text color="gray.50" fontSize="16px" fontWeight="bold" lineHeight="22px" mt="8px">
                  1
                </Text>
              </Box>
              <Divider orientation="vertical" />
              <Box p="25px">
                <Text color="gray.100" textStyle="h3">
                  MARKET CAP
                </Text>
                <Text color="gray.50" fontSize="16px" fontWeight="bold" lineHeight="22px" mt="8px">
                  $866.86B
                </Text>
              </Box>
              <Divider orientation="vertical" />
              <Box p="25px">
                <Text color="gray.100" textStyle="h3">
                  CIRCULATING SUPPLY
                </Text>
                <Text color="gray.50" fontSize="16px" fontWeight="bold" lineHeight="22px" mt="8px">
                  18.783MM BTC
                </Text>
              </Box>
              <Divider orientation="vertical" />
              <Box p="25px">
                <Text color="gray.100" textStyle="h3">
                  VOLUME (1D)
                </Text>
                <Text color="gray.50" fontSize="16px" fontWeight="bold" lineHeight="22px" mt="8px">
                  $34.67B
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Box
            border="1px"
            borderColor="gray.200"
            borderRadius="12px"
            css={SCROLLBAR_STYLE}
            ml="34px"
            maxH="700px"
            overflowY="scroll"
            p="24px"
            w="400px"
          >
            <Box>
              <Flex>
                <Avatar
                  alt="Bitcoin"
                  h="25px"
                  src="https://www.infomoney.com.br/wp-content/uploads/2019/06/bitcoin-1.png?resize=360%2C202&quality=50&strip=all"
                  w="25px"
                />
                <Box ml="8px">
                  <Text color="gray.50" textStyle="h2">
                    Bitcoin News
                  </Text>
                  <Text color="gray.100" fontSize="10px" lineHeight="15px" mt="4px">
                    Jason Hamlin, Ecosystem Insights
                  </Text>
                </Box>
                <Tag
                  bg="linear-gradient(90deg, rgb(106, 17, 203) 0%, rgb(37, 117, 252) 100%)"
                  borderRadius="24px"
                  color="white"
                  fontSize="8px"
                  lineHeight="12px"
                  maxH="16px"
                  ml="auto"
                  p="4px"
                  textTransform="uppercase"
                >
                  Technical
                </Tag>
              </Flex>
              <Text color="gray.50" mt="14px" textStyle="h2">
                AMC Entertainment Holdings, which runs the largest movie theater chain in the US,
                will begin accepting bitcoin payments for tickets and concessions by the end of the
                year, the company’s CEO, Adam Aron, said on a second-quarter earnings call Monday.
              </Text>
            </Box>
            <Link display="block" color="blue.50" mt="14px" textStyle="h2">
              $BTC
            </Link>
            <Link display="block" color="blue.50" mt="18px" textStyle="h2">
              www.coindesk.com/amc-to-accept-bitcoin-for-tickets-and-concessions-later-this-year
            </Link>
            <Box border="1px" borderColor="gray.200" borderRadius="8px" mt="14px" pb="16px">
              <Image
                alt="Bitcoin"
                h="172px"
                src="https://www.infomoney.com.br/wp-content/uploads/2019/06/bitcoin-1.png?resize=360%2C202&quality=50&strip=all"
                w="100%"
              />
              <Stack p="12px 0 0 12px" spacing={2}>
                <Text color="gray.50" mt="8px" noOfLines={1} textStyle="h2">
                  AMC to Accept Bitcoin for Tickets and Concessions Later This Year - CoinDesk
                </Text>
                <Text color="gray.100" noOfLines={2} textStyle="h2">
                  AMC Theatres, the largest movie theater chain in the U.S., will soon accept
                  bitcoin payments for tickets and concessions.
                </Text>
                <Link fontSize="12px" color="gray.100">
                  coindesk.com
                </Link>
              </Stack>
            </Box>
            <Flex align="center" justify="space-between" my="8px">
              <Button
                color="white"
                fontSize="12px"
                leftIcon={<LinkIcon />}
                lineHeight="18px"
                textStyle="h4"
                variant="ghost"
              >
                Copy Link
              </Button>
              <Text color="gray.100" textStyle="h3">
                a day ago
              </Text>
            </Flex>
            <Divider mb="8px" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
