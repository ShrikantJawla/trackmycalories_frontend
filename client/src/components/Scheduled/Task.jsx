import { Badge, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BiEditAlt } from 'react-icons/bi'

const Task = () => {
  return (
    <VStack
      w="full"
      bg="var(--cardBackground1)"
      padding="8px"
      rounded="4%"
      boxShadow="var(--boxShadow)"
    >
      <HStack w="full" justify="space-between">
        <Text fontSize={14}>Running Park</Text>
        <BiEditAlt cursor="pointer" />
      </HStack>
      <HStack w="full" justify="space-between" px="20px">
        <Badge variant="outline" colorScheme="green">
          Default
        </Badge>
        <Text fontSize={13}>20 oct</Text>
      </HStack>
    </VStack>
  )
}

export default Task
