import { Grid, GridItem, Input, Select, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { filterOrders } from '../../../../redux/admin/admin.actions'

const AdminOrdersFilters = () => {
  const dispatch = useDispatch()
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1,1fr)',
        md: 'repeat(3,1fr)',
        lg: 'repeat(5,1fr)',
      }}
      w="full"
      justifyContent={{ base: 'center', lg: 'space-between' }}
      alignItems="center"
    >
      {/* Filter by PaymentMethods */}
      <GridItem w="full">
        <VStack>
          <Text w="full" fontSize={13} pl="5px" fontWeight={600}>
            Filter by Payment Methods
          </Text>
          <Select
            onClick={({ target: { value } }) => dispatch(filterOrders(value))}
            placeholder="Select option"
          >
            <option value="card">Card</option>
            <option value="cash">Cash</option>
          </Select>
        </VStack>
      </GridItem>

      {/* Filter Order by Month */}
      <GridItem w="full">
        <VStack>
          <Text w="full" fontSize={13} pl="5px" fontWeight={600}>
            Filter Order by Month
          </Text>
          <Input
            onChange={({ target: { value } }) => {
              dispatch(filterOrders('', value.split('-')[1]))
            }}
            type="month"
          />
        </VStack>
      </GridItem>

      {/* Filter by delevery date */}
      <GridItem w="full">
        <VStack>
          <Text w="full" fontSize={13} pl="5px" fontWeight={600}>
            Filter by Product delevery month
          </Text>
          <Input
            onChange={({ target: { value } }) => {
              dispatch(filterOrders('', '', value.split('-')[1]))
            }}
            type="month"
          />
        </VStack>
      </GridItem>

      {/* Filter by Status */}
      <GridItem w="full">
        <VStack>
          <Text w="full" fontSize={13} pl="5px" fontWeight={600}>
            Filter by Status
          </Text>
          <Select
            onChange={({ target: { value } }) => {
              dispatch(filterOrders('', '', '', value))
            }}
            placeholder="Select option"
          >
            <option value="pending">Pending</option>
            {/* <option value="cancelled">cancelled</option> */}
            <option value="delevered">Delevered</option>
          </Select>
        </VStack>
      </GridItem>

      {/* Filter by Amount */}
      <GridItem w="full">
        <VStack>
          <Text w="full" fontSize={13} pl="5px" fontWeight={600}>
            Filter by Amount
          </Text>
          <Select
            onClick={({ target: { value } }) => {
              dispatch(filterOrders('', '', '', '', value))
            }}
            placeholder="Select option"
          >
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </Select>
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default AdminOrdersFilters
