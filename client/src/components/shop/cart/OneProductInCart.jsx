import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import QuantityChangeStepper from './QuantityChangeStepper'
import { Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { deleteProductFromCart } from '../../../redux/cart/cart.actions'

const OneProductInCart = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <HStack w="full" p="5px">
      <Box h="150px">
        <Image
          h="full"
          src={
            product && product.product['attachment-woocommerce_thumbnail src']
          }
        />
      </Box>
      <VStack>
        <Text w="full" fontSize={18} fontWeight={600}>
          {product && product.product.name}
        </Text>
        <HStack w="full" spacing={2}>
          <Text fontSize={20} fontWeight={700} color="brown">
            ₹{product && product.product['woocommerce-Price-amount 2']}
          </Text>
          <Text
            textDecor="line-through"
            fontSize={18}
            fontWeight={500}
            color="gray"
          >
            ₹{product && product.product['woocommerce-Price-amount']}
          </Text>
          <Text fontSize={18} color="gray">
            {'('}
            {product && product.product.onsale}
            {')'}
          </Text>
        </HStack>
        <HStack w="full" justify="flex-start">
          <QuantityChangeStepper product={product} />
          <Button
            fontSize={14}
            h="40px"
            colorScheme="orange"
            variant="outline"
            onClick={() => dispatch(deleteProductFromCart(product._id))}
          >
            REMOVE
          </Button>
        </HStack>
      </VStack>
    </HStack>
  )
}

export default OneProductInCart
