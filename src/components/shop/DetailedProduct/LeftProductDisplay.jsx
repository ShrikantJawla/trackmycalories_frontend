import { Image, VStack } from '@chakra-ui/react'
import React from 'react'

const LeftProductDisplay = ({ image, name }) => {
  return (
    <VStack w="full" borderRight="1px solid grey">
      <Image src={image && image} alt={name && name} />
    </VStack>
  )
}

export default LeftProductDisplay
