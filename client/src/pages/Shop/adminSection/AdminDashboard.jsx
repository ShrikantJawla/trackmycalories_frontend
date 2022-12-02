import React from 'react'
import { Box, Stack, useBreakpointValue, VStack } from '@chakra-ui/react'
import DashboardSidebar from '../../../components/shop/adminSection/DashboardSidebar'
import DashboardMain from '../../../components/shop/adminSection/DashboardMain'

const AdminDashboard = () => {
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
      <Box>
        <DashboardSidebar location="adminHome" />
      </Box>
      <VStack
        style={{ marginLeft: margin }}
        w={{ base: 'full', lg: '85%' }}
        p={{ base: 'auto', lg: '15px' }}
      >
        <DashboardMain />
      </VStack>
    </Stack>
  )
}

export default AdminDashboard
