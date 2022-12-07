import { Button, Divider, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import OneProductInCart from './OneProductInCart'
import uuid from 'react-uuid'
import { useNavigate } from 'react-router-dom'

const CartItems = ({ allCartItems }) => {
  const navigate = useNavigate()
  return (
    <Stack
      w="full"
      direction={{ base: 'column', lg: 'row' }}
      bg="gray.100"
      p="10px"
    >
      <VStack
        w="72%"
        bg="white"
        h="fit-content"
        px="10px"
        py="20px"
        rounded="10px"
      >
        <Text w="full" px="15px" fontSize={21} fontWeight={600}>
          SHOPPING CART
        </Text>
        <Divider m="5px" />
        <VStack w="full" h="90vh" overflowY="scroll">
          {allCartItems &&
            allCartItems.map((ele) => (
              <VStack w="full" key={uuid()}>
                <OneProductInCart product={ele} />
                <Divider />
              </VStack>
            ))}
        </VStack>
      </VStack>
      <VStack
        w="28%"
        bg="white"
        h="fit-content"
        px="10px"
        py="20px"
        rounded="10px"
      >
        <HStack w="full" justify="space-between" px="8px">
          <Text fontSize={24} fontWeight={600}>
            Subtotal{` (${allCartItems && allCartItems.length}) `}items:
          </Text>
          <Text fontSize={22} fontWeight={700} color="orange.600">
            ₹{allCartItems && getSubTotal(allCartItems)}
          </Text>
        </HStack>
        <Button w="full" bg="orange" onClick={() => navigate('/checkout')}>
          PLACE ORDER
        </Button>
      </VStack>
    </Stack>
  )
}

export default CartItems

function getSubTotal(allCartItems) {
  let total = 0
  allCartItems &&
    allCartItems.forEach((ele) => {
      let price = +ele.product['woocommerce-Price-amount 2']
      total += price
    })
  return total
}
