import React from 'react'
import { Box, Divider, Image, Text, VStack } from '@chakra-ui/react'
import emptyCartImage from '../../../assets/images/emptycart.svg'

const EmptyCart = () => {
  return (
    <Box w="full" bg="gray.100" h="90vh">
      <VStack
        w={{ base: 'full', lg: '80%' }}
        margin="auto"
        h="90%"
        bg="white"
        shadow="lg"
        py="15px"
      >
        <Text w="full" textAlign="center" fontSize={20} fontWeight={600}>
          SHOPPING CART
        </Text>
        <Divider />
        <Image src={emptyCartImage} />
        <Text fontSize={19} fontWeight={700} color="green">
          Your Cart is Empty!
        </Text>
        <Text>Add a item to your cart to display list here.</Text>
      </VStack>
    </Box>
  )
}

export default EmptyCart
