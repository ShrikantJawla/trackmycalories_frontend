import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Product from './Product'

const ProductsCrousel = ({ products }) => {
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
            TRENDING IN {products && products[0].category}
          </Text>
        </HStack>
        <Link to={`/products/${products && products[0].category}`}>
          <Button variant="solid" colorScheme="blue">
            VIEW ALL
          </Button>
        </Link>
      </VStack>
      <HStack flex={0.9} overflow="auto">
        {products &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </HStack>
    </HStack>
  )
}

export default ProductsCrousel
