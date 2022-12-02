import { Stack, useBreakpointValue, VStack } from '@chakra-ui/react'
import React from 'react'
import DisplayAllProductsAdmin from '../../../components/shop/adminSection/admin-products/DisplayAllProductsAdmin'
import DashboardSidebar from '../../../components/shop/adminSection/DashboardSidebar'

const AdminProducts = () => {
  const margin = useBreakpointValue(
    {
      base: 'auto',
      lg: '15%',
    },
    {
      fallback: 'md',
    },
  )
  return (
    <Stack direction={{ base: 'column', md: 'row' }} w="full">
      <DashboardSidebar location="adminProducts" />
      <VStack
        style={{ marginLeft: margin }}
        w={{ base: 'full', lg: '85%' }}
        p={{ base: 'auto', lg: '15px' }}
      >
        <DisplayAllProductsAdmin />
      </VStack>
    </Stack>
  )
}

export default AdminProducts
