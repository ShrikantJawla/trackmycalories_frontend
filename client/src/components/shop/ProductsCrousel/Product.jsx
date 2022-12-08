import { Box, Icon, Image, Text, VStack } from '@chakra-ui/react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import React from 'react'
import DiscountCircle from './DiscountCircle'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  const { _id, onsale, name } = product
  return (
    <Link to={`/product/${_id}`} style={{ width: '250px' }} >
      <VStack bg="white" p="14px" position="relative" cursor="pointer" w="full">
        <Box h="80%" w='150px'>
          <Image
            h="160px"
            w="200px"
            src={product && product['attachment-woocommerce_thumbnail src']}
            alt={name && name}
          />
        </Box>
        <VStack w="90%">
          <Text
            w="full"
            textAlign="center"
            color="blue"
            fontSize="15"
            noOfLines={2}
          >
            {name && name}
          </Text>
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <Icon as={AiFillStar} key={i} color={'teal.500'} />
              ))}
            <Box
              as="span"
              ml="2"
              color="gray.600"
              fontSize="sm"
              fontWeight={700}
            >
              {product && product['widget-lite-count'] === ''
                ? '(0)'
                : product['widget-lite-count']}
            </Box>
          </Box>
          <Box as="p">
            From:{' '}
            <Box as="span" textDecoration="line-through" color="gray">
              ₹{product && product['woocommerce-Price-amount']}
            </Box>
            <Box as="span" fontWeight="bold">
              {' '}
              ₹{product && product['woocommerce-Price-amount 2']}
            </Box>
          </Box>
        </VStack>
        <DiscountCircle onsale={onsale} />
      </VStack>
    </Link>
  )
}

export default Product
