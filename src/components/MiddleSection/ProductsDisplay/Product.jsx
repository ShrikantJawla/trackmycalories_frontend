import { HStack, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { deleteItem } from '../../../redux/diary/diary.actions'

const Product = ({ serving, description, totalEnergy, _id }) => {
  const toast = useToast()
  const dispatch = useDispatch()
  const { token } = useSelector((store) => store.auth)
  const [hoverEffect, setHoverEffect] = useState('')

  const handleDelete = () => {
    dispatch(deleteItem(_id, token))
    toast({
      position: 'top',
      title: 'Product has beed deleted successfully!',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
  }

  return (
    <StyleWrapper
      w="full"
      boxShadow="var(--boxShadow3)"
      bg="var(--cardBackground)"
      h="50px"
      p="12px"
      justify="space-between"
      hoverEffect={hoverEffect}
    >
      <Text w="27%" fontSize={13} fontWeight={500} color="red">
        {description}
      </Text>
      <Text fontWeight="bold" color="#2a6ac4">
        {serving}{' '}
        <span style={{ fontSize: '12px', fontWeight: 'normal' }}>
          (Servings)
        </span>
      </Text>
      <Text fontWeight="bold">
        {totalEnergy.toFixed(1)}{' '}
        <span style={{ fontSize: '12px', fontWeight: 'normal' }}>k(cal)</span>
      </Text>
      <MdDeleteForever
        className="delete_btn"
        onMouseOver={() => setHoverEffect('active')}
        onMouseOut={() => setHoverEffect('notActive')}
        onClick={handleDelete}
        cursor="pointer"
        color="red"
        fontSize={25}
      />
    </StyleWrapper>
  )
}

export default Product

const StyleWrapper = styled(HStack)`
  transition: all 0.2s ease-in-out;
  border: ${({ hoverEffect }) =>
    hoverEffect === 'active' ? '1px solid #cb2626' : 'none'};
  .delete_btn:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.4);
  }
`
