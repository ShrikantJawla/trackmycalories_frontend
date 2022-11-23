import { HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiFireFill } from 'react-icons/ri'

const CaloriesAndMacro = ({ wid, val, title }) => {
  return (
    <HStack
      bg="var(--cardBackground)"
      boxShadow="var(--boxShadow3)"
      w={wid}
      justify="space-evenly"
      p="15px"
      rounded="10px"
      color="#426696"
    >
      <IconButton
        w="50px"
        h="50px"
        variant="outline"
        icon={<RiFireFill color="red" size="25px" />}
      />
      <VStack spacing={0}>
        <Text fontWeight="bold" fontSize={17}>
          {val}%
        </Text>
        <Text color="gray.600" fontSize={13}>
          {title}
        </Text>
      </VStack>
    </HStack>
  )
}

export default CaloriesAndMacro
