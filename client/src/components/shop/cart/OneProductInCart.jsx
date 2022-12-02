import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import QuantityChangeStepper from './QuantityChangeStepper'
import { Button } from '@chakra-ui/react';

const OneProductInCart = () => {
  return (
    <HStack w="full" p="5px">
      <Box h="150px">
        <Image
          h="full"
          src="https://cdn.nutrabay.com/wp-content/uploads/2020/08/NB-OPT-1002-13_1-340x340.jpg"
        />
      </Box>
      <VStack>
        <Text w="full" fontSize={18} fontWeight={600}>
          Optimum Nutrition (ON) Gold Standard 100 Whey Protein Powder - 2 lbs,
          Delicious Strawberry
        </Text>
        <HStack w="full" spacing={2}>
          <Text fontSize={20} fontWeight={700} color="brown">
            Rs.3,997
          </Text>
          <Text
            textDecor="line-through"
            fontSize={18}
            fontWeight={500}
            color="gray"
          >
            2,222
          </Text>
          <Text fontSize={18} color="gray">
            {'('}
            7%off
            {')'}
          </Text>
        </HStack>
        <HStack w="full" justify="flex-start">
          <QuantityChangeStepper />
          <Button fontSize={14} h="40px" colorScheme="orange" variant="outline">
            REMOVE
          </Button>
        </HStack>
      </VStack>
    </HStack>
  )
}

export default OneProductInCart
