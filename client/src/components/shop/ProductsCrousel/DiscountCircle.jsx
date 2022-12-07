import { Circle, Text } from '@chakra-ui/react'
import React from 'react'

const DiscountCircle = ({ onsale }) => {
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
        {onsale && onsale}%
      </Text>
    </Circle>
  )
}

export default DiscountCircle
