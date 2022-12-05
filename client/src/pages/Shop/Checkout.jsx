import { Divider, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import CustomBreadcrumb from '../../components/shop/Breadcrumb'
import CheckoutTotalAmountDetail from '../../components/shop/checkout/CheckoutTotalAmountDetail'
import ChekoutLeftSide from '../../components/shop/checkout/ChekoutLeftSide'
import PurchaseSuccessfulModel from '../../components/shop/checkout/PurchaseSuccessfulModel'

const Checkout = () => {
  const [oldIsOpen, setOldIsOpen] = useState(false)
  const [address, setAddress] = useState({
    mobile: '',
    alternateMobile: '',
    firstName: '',
    lastName: '',
    pinCode: '',
    flatAdress: '',
    area: '',
    state: '',
    town: '',
  })
  const confirmDetails = (details) => {
    setAddress(details)
  }
  const toggleOldIsopen = () => {
    setOldIsOpen((prev) => (prev = !prev))
  }

  return (
    <VStack w={{ base: '100%', lg: '70%' }} margin="auto" p="10px" py="30px">
      <VStack w="full">
        {/* Page Title */}
        <Text w="full" fontSize={21} fontStyle="italic" fontWeight={700}>
          TRACK-MY-CALORIES
        </Text>
        {/* Bread-crumb */}
        <CustomBreadcrumb />
      </VStack>
      <Divider bg="gray" />
      <Stack
        w="full"
        h="full"
        direction={{ base: 'column', md: 'row' }}
        spacing={3}
      >
        <VStack w={{ base: 'full', lg: '55%' }}>
          {/* LeftSide */}
          <ChekoutLeftSide confirmDetails={confirmDetails} />
        </VStack>
        {/* Right-side */}
        <VStack w={{ base: 'full', lg: '45%' }} boxShadow="var(--boxShadow)">
          <CheckoutTotalAmountDetail
            toggleOldIsopen={toggleOldIsopen}
            address={address}
          />
        </VStack>
      </Stack>
      <PurchaseSuccessfulModel
        oldIsOpen={oldIsOpen}
        toggleOldIsopen={toggleOldIsopen}
      />
    </VStack>
  )
}

export default Checkout
