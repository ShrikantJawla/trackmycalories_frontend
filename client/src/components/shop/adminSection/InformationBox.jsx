import { HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdPendingActions } from 'react-icons/md'

const InformationBox = ({ text, value, bg, icon, currency }) => {
  return (
    <HStack
      bg={bg}
      rounded="5px"
      w="80%"
      margin="auto"
      boxShadow="lg"
      h="100px"
      p="8px"
      pl="18px"
      color="white"
    >
      <VStack w="80%">
        <Text w="full">{text}</Text>
        <Text w="full" fontWeight={700}>
          {currency ? `₹${value}` : value}
        </Text>
      </VStack>
      <Icon as={icon || MdPendingActions} fontSize={29} />
    </HStack>
  )
}

export default InformationBox
