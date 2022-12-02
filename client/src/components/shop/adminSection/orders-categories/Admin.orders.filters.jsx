import { Grid, GridItem, Input, Select, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const AdminOrdersFilters = () => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(2,1fr)',
        md: 'repeat(3,1fr)',
        lg: 'repeat(5,1fr)',
      }}
      w="full"
      justify={{ base: 'center', lg: 'space-between' }}
    >
      {/* Filter by PaymentMethods */}
      <GridItem>
        <VStack w="200px">
          <Text w="full" fontSize={13} pl="5px" fontWeight={600}>
            Filter by Payment Methods
          </Text>
          <Select placeholder="Select option">
            <option value="card">Card</option>
            <option value="cash">Cash</option>
          </Select>
        </VStack>
      </GridItem>

      {/* Filter Order by Month */}
      <GridItem>
        <VStack w="200px">
          <Text w="full" fontSize={13} pl="5px" fontWeight={600}>
            Filter Order by Month
          </Text>
          <Input type="month" />
        </VStack>
      </GridItem>

      {/* Filter by delevery date */}
      <GridItem>
        <VStack w="200px">
          <Text w="full" fontSize={13} pl="5px" fontWeight={600}>
            Filter by Product delevery month
          </Text>
          <Input type="month" />
        </VStack>
      </GridItem>

      {/* Filter by Status */}
      <GridItem>
        <VStack w="200px">
          <Text w="full" fontSize={13} pl="5px" fontWeight={600}>
            Filter by Status
          </Text>
          <Select placeholder="Select option">
            <option value="pending">Pending</option>
            <option value="cancelled">cancelled</option>
            <option value="delevered">Delevered</option>
          </Select>
        </VStack>
      </GridItem>

      {/* Filter by Amount */}
      <GridItem>
        <VStack w="200px">
          <Text w="full" fontSize={13} pl="5px" fontWeight={600}>
            Filter by Amount
          </Text>
          <Select placeholder="Select option">
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </Select>
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default AdminOrdersFilters
