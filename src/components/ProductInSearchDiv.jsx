import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { GiHealthPotion } from 'react-icons/gi'
import styled from 'styled-components'

const ProductInSearchDiv = ({ ele, handleSelected, selected }) => {
  const { Description, _id } = ele
  return (
    <StyledWrapper w="full" >
      <HStack
        w="full" 
        bg="var(--cardBackground)"
        px="17px"
        py="9px"
        boxShadow="var(--boxShadow3)"
        justify="space-between"
        cursor="pointer"
        onClick={() => {
          handleSelected(_id, ele)
        }}
        id={selected === _id ? 'active' : 'unactive'}
      >
        <Text fontSize={14} fontWeight={500}>
          {Description}
        </Text>
        <HStack>
          <GiHealthPotion />
          <Text>NCCDB</Text>
        </HStack>
      </HStack>
    </StyledWrapper>
  )
}

export default ProductInSearchDiv

const StyledWrapper = styled(Box)`
  #active {
    background-color: #f1efef;
  }
`
