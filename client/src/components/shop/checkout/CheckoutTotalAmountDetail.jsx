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
import React from 'react'

const CheckoutTotalAmountDetail = ({ address }) => {
  const toast = useToast()
  const customToast = (title, description) =>
    toast({
      position: 'top',
      title,
      description,
      status: 'warning',
      duration: 4000,
      isClosable: true,
    })
  const handlePayment = () => {
    if (address.pinCode.length >= 6) {
      return customToast(
        'Pin code error',
        'Pin code can not be greater than 6 characters',
      )
    }
    if (address.mobile.length > 10) {
      return customToast(
        'Alternate mobile error',
        'Alternate mobile can not be less than 10 characters',
      )
    }
    if (address.alternateMobile.length > 10) {
      return customToast(
        'Alternate mobile error',
        'Alternate mobile can not be less than 10 characters',
      )
    }
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
        {new Array(3).fill(0).map((ele) => (
          <VStack w="full">
            <HStack w="full">
              <Text w="84%" fontSize={14}>
                Optimum Nutrition (ON) Gold Standard 100 Whey Protein Powder - 2
                lbs, Delicious Strawberry{' '}
                <Box as="span" fontWeight={600}>
                  × 1
                </Box>
              </Text>
              <Text w="25%" fontSize={17} fontWeight="700">
                Rs.1,559
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
          <Text fontSize={14} fontWeight="normal">
            Rs.6,238
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
            6,675
          </Text>
        </HStack>
        <Divider />
      </VStack>
      <VStack w="full" align="flex-start">
        <RadioGroup
          display="flex"
          flexDirection="column"
          onChange={() => {}}
          value={'cash-on-delivery'}
        >
          <Radio colorScheme="red" value="cash-on-delivery">
            Cash on delivery
          </Radio>
          <Radio colorScheme="red" value="card">
            Pay by Card
          </Radio>
          <Radio colorScheme="red" value="online">
            Pay online
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
