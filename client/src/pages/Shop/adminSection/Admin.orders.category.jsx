import { Stack, useBreakpointValue, VStack } from '@chakra-ui/react'
import React from 'react'
import DashboardSidebar from '../../../components/shop/adminSection/DashboardSidebar'
import AdminOrdersFilters from '../../../components/shop/adminSection/orders-categories/Admin.orders.filters'
import AdminOrdersListDisplay from '../../../components/shop/adminSection/orders-categories/Admin.OrdersList.Display'

const AdminOrdersCategory = () => {
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
    <>
      <DashboardSidebar location="adminSectionCategories" />
      <VStack
        style={{ marginLeft: margin }}
        w={{base:"full",lg:'85%'}}
        p={{ base: 'auto', lg: '15px' }}
      >
        <AdminOrdersFilters />
        <AdminOrdersListDisplay />
      </VStack>
    </>
  )
}

export default AdminOrdersCategory
