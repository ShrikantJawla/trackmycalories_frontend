import {
  Button,
  Divider,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import OneProductInCart from './OneProductInCart'

const CartItems = () => {
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
        <VStack w="full">
          {new Array(5).fill(0).map((ele, ind) => (
            <VStack>
              <OneProductInCart key={ind + `${Date.now()}`} />
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
            Subtotal (2 items):
          </Text>
          <Text fontSize={28} fontWeight={700} color="orange.600">
            ₹11,676
          </Text>
        </HStack>
        <Button w="full" bg="orange">
          PLACE ORDER
        </Button>
      </VStack>
    </Stack>
  )
}

export default CartItems
