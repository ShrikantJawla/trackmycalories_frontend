import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  useNumberInput,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../../redux/cart/cart.actions'

const boxShadow =
  'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'

const QuantityOrConfirmSection = ({
  productId,
  fromAmount,
  sellingAmount,
  currencySimbol,
}) => {
  const dispatch = useDispatch()
  const [quantityInput, setQuantityInput] = useState(1)
  const toast = useToast()

  let savedAmount
  if (fromAmount && sellingAmount) {
    savedAmount = +fromAmount.replace(',', '') - +sellingAmount.replace(',', '')
  }

  const handleAddProductInCart = () => {
    dispatch(addItemToCart({ product: productId, quantity: quantityInput }))
    toast({
      position: 'top',
      title: 'Cart update',
      description: 'Cart has been updated!',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
  }

  return (
    <VStack
      w="full"
      px="13px"
      py="15px"
      boxShadow={boxShadow}
      h="440px"
      rounded="10px"
    >
      {/* Weight part */}
      <VStack w="full" my="10px">
        <Text w="full" fontSize={11} fontWeight={600}>
          Weight
        </Text>
        <HStack w="full">
          <Box
            h="26px"
            w="50px"
            rounded="6px"
            border="1px solid gray"
            fontSize={13}
            fontWeight={600}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            1kg
          </Box>
        </HStack>
      </VStack>
      <Box w="full" h="1px" bg="gray" />
      {/* Price Section */}
      <VStack w="full" style={{ marginTop: '20px', marginBottom: '10px' }}>
        <Text w="full">
          MRP:{' '}
          <Box as="span" color="gray" textDecor="line-through">
            {currencySimbol && currencySimbol}
            {fromAmount && fromAmount}
          </Box>
        </Text>
        <Text w="full">
          Selling Price:{' '}
          <Box as="span" color="brown" fontWeight={700} fontSize={20}>
            {currencySimbol && currencySimbol}
            {sellingAmount && sellingAmount}
          </Box>
        </Text>
        <Text w="full">
          You Save:{' '}
          <Box as="span" color="gray">
            {currencySimbol && currencySimbol}
            {savedAmount}
          </Box>
        </Text>
        <Text fontSize={13} w="full">
          Inclusive of all taxes
        </Text>
      </VStack>
      <VStack w="full">
        <Text w="full" color="green" fontWeight={700} fontSize={17}>
          In Stock
        </Text>
        <HStack w="full">
          <HStack w="35%" spacing="1px">
            <Button
              variant="solid"
              colorScheme="blackAlpha"
              size="sm"
              disabled={quantityInput === 1}
              onClick={() => setQuantityInput(quantityInput - 1)}
            >
              -
            </Button>
            <Input value={quantityInput} />
            <Button
              variant="solid"
              colorScheme="blackAlpha"
              size="sm"
              disabled={quantityInput === 10}
              onClick={() => setQuantityInput(quantityInput + 1)}
            >
              +
            </Button>
          </HStack>
          <Button
            variant="solid"
            colorScheme="blue"
            w="65%"
            onClick={handleAddProductInCart}
          >
            ADD TO CART
          </Button>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default QuantityOrConfirmSection
