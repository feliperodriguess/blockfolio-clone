import { Fragment, useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Link,
  Spinner,
  Stack,
  Tag,
  Text,
  useClipboard,
  useToast,
} from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { useQuery } from '@apollo/client'

import { GET_COIN_NEWS } from '../../../modules/coin-news/queries'
import { getPeriod } from '../../../utils/helpers'
import { ANIMATION_DEFAULT_OPTIONS } from '../../../utils/constants'

export default function CoinNewsSection({ coinId, coinLogo }) {
  const [currentCopiedLink, setCurrentCopiedLink] = useState('')
  const { data, loading } = useQuery(GET_COIN_NEWS, {
    variables: { coinId },
  })
  const toast = useToast()
  const { onCopy } = useClipboard(currentCopiedLink, 1000 * 60 * 60)

  const handleCopyToClipboard = (event) => {
    setCurrentCopiedLink(event.target.dataset.link)
    toast({
      duration: 2000,
      isClosable: true,
      position: 'bottom-right',
      title: 'Link Copied!',
      status: 'success',
    })
  }

  useEffect(() => {
    if (!!currentCopiedLink) {
      onCopy()
    }
  }, [currentCopiedLink, onCopy])

  if (loading) {
    return (
      <Flex align="center" h="100%" justify="center" w="100%">
        <Spinner />
      </Flex>
    )
  }

  if (!data?.coinNews.length) {
    return (
      <Flex align="center" direction="column" h="100%" justify="center" w="100%">
        <Text maxW="70%" textAlign="center" textStyle="h1">
          Could not find news about this cryptocurrency 😢
        </Text>
        <Lottie options={ANIMATION_DEFAULT_OPTIONS} height={400} width={300} />
      </Flex>
    )
  }

  return data?.coinNews?.map((item, index) => (
    <Fragment key={item.id}>
      <Box mt={index ? '24px' : '8px'}>
        <Flex>
          <Avatar alt={item.tag} h="25px" src={coinLogo} w="25px" />
          <Box ml="8px">
            <Text color="gray.50" textStyle="h2">
              {item.source}
            </Text>
            <Text color="gray.100" fontSize="10px" lineHeight="15px" mt="4px">
              {item.authorName}, {item.authorTitle}
            </Text>
          </Box>
          <Tag
            bg={
              item.category === 'Community'
                ? 'linear-gradient(90deg, rgb(18, 165, 128) 0%, rgb(62, 117, 200) 100%)'
                : 'linear-gradient(90deg, rgb(106, 17, 203) 0%, rgb(37, 117, 252) 100%)'
            }
            borderRadius="24px"
            color="white"
            fontSize="8px"
            lineHeight="12px"
            maxH="16px"
            ml="auto"
            p="4px"
            textTransform="uppercase"
          >
            {item.category}
          </Tag>
        </Flex>
        <Text color="gray.50" mt="14px" textStyle="h2">
          {item.text}
        </Text>
      </Box>
      {item.tag?.startsWith('$') && (
        <Text display="block" color="blue.50" mt="14px" textStyle="h2">
          {item.tag}
        </Text>
      )}
      {item?.link?.startsWith('https://') && (
        <Link display="block" color="blue.50" href={item.link} isExternal mt="18px" textStyle="h2">
          {item.link}
        </Link>
      )}
      {item.metaDataImage && item.link.startsWith('https://') && (
        <Box
          border="1px"
          borderColor="gray.200"
          borderRadius="8px"
          mt="14px"
          pb="16px"
          position="relative"
        >
          <Link
            position="absolute"
            h="100%"
            href={item?.link}
            isExternal
            left="0"
            top="0"
            w="100%"
          />
          <Image
            alt={item.metaDataTitle}
            borderRadius="8px 8px 0 0"
            h="172px"
            src={item.metaDataImage}
            w="100%"
          />
          <Stack p="12px 12px 0" spacing={2}>
            <Text color="gray.50" mt="8px" noOfLines={1} textStyle="h2">
              {item.metaDataTitle}
            </Text>
            <Text color="gray.100" noOfLines={2} textStyle="h2">
              {item.metaDataDescription}
            </Text>
            <Text fontSize="12px" color="gray.100">
              {item?.link?.slice(8, item?.link?.indexOf('m/') + 1)}
            </Text>
          </Stack>
        </Box>
      )}
      <Flex align="center" justify="space-between" my="8px">
        {item?.link?.startsWith('https://') && (
          <Button
            color="white"
            data-link={item?.link}
            fontSize="12px"
            leftIcon={<LinkIcon />}
            lineHeight="18px"
            onClick={handleCopyToClipboard}
            textStyle="h4"
            variant="ghost"
            _hover={{ bg: 'black' }}
            _active={{ bg: 'black' }}
          >
            Copy Link
          </Button>
        )}
        <Text color="gray.100" ml="auto" textStyle="h3">
          {getPeriod(item?.createdAt)}
        </Text>
      </Flex>
      <Divider mb="8px" />
    </Fragment>
  ))
}
