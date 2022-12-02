import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import Product from './Product'

const ProductsCrousel = () => {
  return (
    <HStack w="full" h="376px" px="30px" py="10px" bg="white">
      <VStack flex="0.2">
        <HStack>
          <FiTrendingUp color="red" />
          <Text
            fontSize={{ base: 14, lg: 17 }}
            fontWeight="bold"
            textAlign="center"
          >
            TRENDING IN PROTEINS
          </Text>
        </HStack>
        <Button variant="solid" colorScheme="blue">
          VIEW ALL
        </Button>
      </VStack>
      <HStack flex={0.9} overflow="auto">
        <Product />
        <Product />
        <Product />
        <Product />
      </HStack>
    </HStack>
  )
}

export default ProductsCrousel
