import { HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdPendingActions } from 'react-icons/md'

const InformationBox = ({ text, val, color, icon }) => {
  return (
    <HStack
      bg="#e62222"
      rounded="5px"
      w="260px"
      boxShadow="md"
      h="100px"
      p="8px"
      pl="10px"
      color="white"
    >
      <VStack w="80%">
        <Text w="full">ORDER PENDING</Text>
        <Text w="full" fontWeight={700}>
          2
        </Text>
      </VStack>
      <Icon as={MdPendingActions} fontSize={29} />
    </HStack>
  )
}

export default InformationBox
