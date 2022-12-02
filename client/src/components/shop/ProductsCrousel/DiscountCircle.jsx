import { Circle, Text } from '@chakra-ui/react'
import React from 'react'

const DiscountCircle = () => {
  return (
    <Circle
      position="absolute"
      left="5%"
      top="10%"
      w="50px"
      h="50px"
      bg="red.500"
    >
      <Text fontWeight="bold" color="white" fontSize={17}>
        -44%
      </Text>
    </Circle>
  )
}

export default DiscountCircle
