import {
  Avatar,
  Badge,
  Box,
  Button,
  HStack,
  Icon,
  Progress,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ReviewOrComments = () => {
  return (
    <VStack w="full" h="300px">
      <VStack w="full" py="15px">
        <Text fontSize={18} fontWeight={600}>
          REVIEWS
        </Text>
        <Box w="full" h="1px" bg="grey" />
      </VStack>
      <HStack w="full" justify="space-evenly" px="40px" py="20px">
        <HStack w="400px">
          <VStack w="40%">
            <Text w="full" fontSize={25} fontWeight="bold">
              4.75/5
            </Text>
            <Box w="full" display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <Icon
                    as={AiFillStar}
                    fontSize={25}
                    key={i}
                    color={'teal.500'}
                  />
                ))}
            </Box>
            <Box w="full" as="span" color="grey">
              {'('}200{')'}Reviews
            </Box>
          </VStack>
          <VStack w="60%">
            <HStack w="full">
              <Badge fontSize={14}>
                5<Icon as={AiFillStar} />
              </Badge>
              <Progress value={80} w="full" size="sm" />
              <Box as="span">80%</Box>
            </HStack>
            <HStack w="full">
              <Badge fontSize={14}>
                5<Icon as={AiFillStar} />
              </Badge>
              <Progress value={80} w="full" size="sm" />
              <Box as="span">80%</Box>
            </HStack>
            <HStack w="full">
              <Badge fontSize={14}>
                5<Icon as={AiFillStar} />
              </Badge>
              <Progress value={80} w="full" size="sm" />
              <Box as="span">80%</Box>
            </HStack>
            <HStack w="full">
              <Badge fontSize={14}>
                5<Icon as={AiFillStar} />
              </Badge>
              <Progress value={80} w="full" size="sm" />
              <Box as="span">80%</Box>
            </HStack>
            <HStack w="full">
              <Badge fontSize={14}>
                5<Icon as={AiFillStar} />
              </Badge>
              <Progress value={80} w="full" size="sm" />
              <Box as="span">80%</Box>
            </HStack>
          </VStack>
        </HStack>
        <Button variant="solid" colorScheme="blue">
          Write a Review
        </Button>
      </HStack>
      <Box w="full" h="1px" bg="grey" />
      <VStack w="full" px="70px" py="10px" spacing={4}>
        <HStack w="full">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuP4A26vUkEZwYJL4zGV8KRxUbBmcX11Mdw&usqp=CAU" />
          <VStack>
            <Text fontWeight={700}>Shrikant Jawla</Text>
            <Box w="full" display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <Icon
                    as={AiFillStar}
                    fontSize={20}
                    key={i}
                    color={'yellow.500'}
                  />
                ))}
            </Box>
          </VStack>
        </HStack>
        <Text w="full">
          First I'm impressed with delivery within 3 days at Aurangabad
          Maharashtra. Even amezon can't delivery at same place. This is my
          first time of using Whey or any other supplements. I'm not regularly
          intakes proteins. This product is genuine and safe to use. I hope it
          will works best. After 10 days I'll share my experience same Here.
          Thank You Nutrabay.
        </Text>
      </VStack>
    </VStack>
  )
}

export default ReviewOrComments
