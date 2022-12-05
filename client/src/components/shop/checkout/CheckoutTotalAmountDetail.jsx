import {
  Box,
  Button,
  Divider,
  HStack,
  Radio,
  RadioGroup,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addItemInPuchaseList,
  getAllCartItems,
} from '../../../redux/cart/cart.actions'

const CheckoutTotalAmountDetail = ({ address, toggleOldIsopen }) => {
  const { allCartItems } = useSelector((state) => state.cart)
  const [modeOfPayment, setModeOfPayment] = useState('cash')
  const dispatch = useDispatch()
  const toast = useToast()
  const customToast = (title, description, status) =>
    toast({
      position: 'top',
      title,
      description,
      status: status || 'warning',
      duration: 4000,
      isClosable: true,
    })

  useEffect(() => {
    dispatch(getAllCartItems())
  }, [])

  const handlePayment = () => {
    if (
      address.mobile === '' ||
      address.firstName === '' ||
      address.pinCode === '' ||
      address.flatAdress === '' ||
      address.area === '' ||
      address.state === '' ||
      address.town === ''
    ) {
      return customToast(
        'Missing Input error!',
        'Fill all the required fields',
        'error',
      )
    } else if (address.pinCode.length > 6) {
      return customToast(
        'Pin code error',
        'Pin code can not be greater than 6 characters',
      )
    } else if (address.mobile.length > 10) {
      return customToast(
        'Alternate mobile error',
        'Alternate mobile can not be less than 10 characters',
      )
    } else if (address.alternateMobile.length > 10) {
      return customToast(
        'Alternate mobile error',
        'Alternate mobile can not be less than 10 characters',
      )
    }
    dispatch(addItemInPuchaseList({ modeOfPayment }))
    toggleOldIsopen()
  }

  return (
    <VStack py="20px" w="full" bg="#f5f5f5" h="full" px="20px">
      <Text w="full" fontSize={19} fontWeight={700} textTransform="uppercase">
        Your Order
      </Text>
      <HStack w="full" justify="space-between">
        <Text textTransform="uppercase" fontWeight="600" color="gray">
          Product
        </Text>
        <Text textTransform="uppercase" fontWeight="600" color="gray">
          Subtotal
        </Text>
      </HStack>
      <Divider />
      <VStack w="full">
        {allCartItems &&
          allCartItems.map((ele) => (
            <VStack w="full">
              <HStack w="full">
                <Text w="84%" fontSize={14}>
                  {ele.product.name}{' '}
                  <Box as="span" fontWeight={600}>
                    × {ele.quantity}
                  </Box>
                </Text>
                <Text w="25%" fontSize={17} fontWeight="700">
                  ₹{ele.product['woocommerce-Price-amount 2']}
                </Text>
              </HStack>
              <Divider />
            </VStack>
          ))}
      </VStack>
      <VStack w="full" justify="space-between">
        <HStack w="full">
          <Text fontSize={18} fontWeight={600}>
            Subtotal
          </Text>
          <Text fontSize={14} fontWeight={400}>
            ₹{getSubTotal(allCartItems)}
          </Text>
        </HStack>
        <Divider />
      </VStack>
      <VStack w="full" justify="space-between">
        <HStack w="full">
          <Text fontSize={18} fontWeight={600}>
            Shipping
          </Text>
          <Text fontSize={14} fontWeight="normal">
            Free Shipping
          </Text>
        </HStack>
        <Divider />
      </VStack>
      <VStack w="full" justify="space-between">
        <HStack w="full">
          <Text fontSize={18} fontWeight={600}>
            Total
          </Text>
          <Text fontSize={14} fontWeight="normal" color="brown">
            ₹{getSubTotal(allCartItems)}
          </Text>
        </HStack>
        <Divider />
      </VStack>
      <VStack w="full" align="flex-start">
        <RadioGroup
          display="flex"
          flexDirection="column"
          onChange={(value) => setModeOfPayment(value)}
          value={modeOfPayment}
        >
          <Radio colorScheme="red" value="cash">
            Cash on delivery
          </Radio>
          <Radio colorScheme="red" value="card">
            Pay by Card
          </Radio>
        </RadioGroup>
      </VStack>
      <Button
        onClick={handlePayment}
        w="full"
        variant="solid"
        colorScheme="orange"
      >
        PLACE ORDER
      </Button>
    </VStack>
  )
}

export default CheckoutTotalAmountDetail

function getSubTotal(allCartItems) {
  let total = 0
  allCartItems &&
    allCartItems.forEach((ele) => {
      let price = +ele.product['woocommerce-Price-amount 2'].replace(',', '')
      total += price
    })
  return total
}
