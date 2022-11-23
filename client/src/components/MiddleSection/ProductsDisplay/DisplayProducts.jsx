import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Product from './Product'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const DisplayProducts = () => {
  const { foodItemsInList, baseValue } = useSelector((store) => store.diary)

  return (
    <VStack
      w="70%"
      h="400px"
      bg="var(--cardBackground)"
      rounded="10px"
      boxShadow="var(--boxShadow)"
      borderTop="var(--borderTop)"
      borderLeft="var(--borderLeft)"
    >
      <Box w="full" textAlign="center" boxShadow="lg" p="10px">
        <Text color="#426696" fontWeight={700} w="full">
          Food items in today's diet
        </Text>
      </Box>
      <StyledVStack w="full" h="85%" spacing={0} overflow="auto">
        {foodItemsInList &&
          foodItemsInList.map(
            ({ totalEnergy, _id, servings, product: { Description } }) => (
              <Product
                key={_id}
                serving={servings}
                description={Description}
                totalEnergy={totalEnergy}
                _id={_id}
              />
            ),
          )}
      </StyledVStack>
    </VStack>
  )
}

export default DisplayProducts

const StyledVStack = styled(VStack)`
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color4);
  }
`
