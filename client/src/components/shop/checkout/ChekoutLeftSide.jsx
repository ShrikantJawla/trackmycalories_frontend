import {
  Divider,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'

const ChekoutLeftSide = ({ confirmDetails }) => {
  
  const [details, setDetails] = useState({
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

  const fillDetails = (e) => {
    const { name, value } = e.target
    setDetails({
      ...details,
      [name]: value,
    })
    confirmDetails(details)
  }
  return (
    <VStack w="full" spacing={4}>
      <Text px="20px" pt="20px" w="full" fontSize={21} fontWeight={600}>
        BILLING DETAILS
      </Text>
      <Divider />
      <FormControl boxShadow="md">
        <Input
          type="number"
          value={details.mobile}
          name="mobile"
          onChange={fillDetails}
          placeholder="Mobile number (10digits)"
          variant="outline"
        />
      </FormControl>
      <FormControl boxShadow="md">
        <Input
          type="number"
          name="alternateMobile"
          value={details.alternateMobile}
          onChange={fillDetails}
          placeholder="Alternate Mobile number (optional)"
          variant="outline"
        />
      </FormControl>
      <HStack w="full">
        <FormControl boxShadow="md">
          <Input
            name="firstName"
            value={details.firstName}
            onChange={fillDetails}
            placeholder="First name"
            variant="outline"
          />
        </FormControl>
        <FormControl boxShadow="md">
          <Input
            name="lastName"
            value={details.lastName}
            onChange={fillDetails}
            placeholder="Last name"
            variant="outline"
          />
        </FormControl>
      </HStack>
      <HStack w="full">
        <FormControl boxShadow="md">
          <Input
            placeholder="Country"
            variant="outline"
            value="India"
            readOnly
          />
        </FormControl>
        <FormControl boxShadow="md">
          <Input
            name="pinCode"
            value={details.pinCode}
            onChange={fillDetails}
            placeholder="Pin code (6digits)"
            variant="outline"
          />
        </FormControl>
      </HStack>
      <FormControl boxShadow="md">
        <Input
          name="flatAdress"
          value={details.flatAdress}
          onChange={fillDetails}
          placeholder="Flat,House Number, Building,Company"
          variant="outline"
        />
      </FormControl>
      <FormControl boxShadow="md">
        <Input
          name="area"
          value={details.area}
          onChange={fillDetails}
          placeholder="Sector,Area,Street,Colony,Village"
          variant="outline"
        />
      </FormControl>
      <HStack w="full">
        <FormControl boxShadow="md">
          <Input
            name="state"
            value={details.state}
            onChange={fillDetails}
            placeholder="State"
            variant="outline"
          />
        </FormControl>
        <FormControl boxShadow="md">
          <Input
            name="town"
            value={details.town}
            onChange={fillDetails}
            placeholder="Town,City"
            variant="outline"
          />
        </FormControl>
      </HStack>
      <Divider />
    </VStack>
  )
}

export default ChekoutLeftSide
