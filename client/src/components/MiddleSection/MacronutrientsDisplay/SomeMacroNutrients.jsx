import { Progress, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const SomeMacroNutrients = ({ title, value }) => {
  return (
    <VStack
      w="full"
      spacing={2}
      boxShadow="var(--boxShadow)"
      bg="var(--cardBackground)"
      borderTop="var(--borderTop)"
      borderLeft="var(--borderLeft)"
      rounded="10px"
      h="fit-content"
      p="12px"
      justify="space-evenly"
      color="#426696"
    >
      <VStack w="full">
        <Text w="full" fontSize="13px" fontWeight="bold">
          {title}
        </Text>
      </VStack>
      <Progress w="full" value={value} size="xs" colorScheme="green" />
      <Text w="full">{value.toFixed(2)}</Text>
    </VStack>
  )
}

export default SomeMacroNutrients
