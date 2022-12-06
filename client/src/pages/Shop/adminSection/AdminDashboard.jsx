import React, { useEffect, useState } from 'react'
import { Box, Stack, useBreakpointValue, VStack } from '@chakra-ui/react'
import DashboardSidebar from '../../../components/shop/adminSection/DashboardSidebar'
import DashboardMain from '../../../components/shop/adminSection/DashboardMain'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrderRelatedData } from '../../../redux/admin/admin.actions'
import InfoDisplayModal from '../../../components/shop/adminSection/InfoDisplayModal'

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const { ordersDetails } = useSelector((s) => s.admin)
  const margin = useBreakpointValue(
    {
      base: 'auto',
      lg: '15%',
    },
    {
      fallback: 'md',
    },
  )

  const toggleOpen = () => {
    setIsOpen((p) => (p = !p))
  }

  useEffect(() => {
    dispatch(getAllOrderRelatedData())
  }, [])

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
        <DashboardMain toggleOpen={toggleOpen} orderDetails={ordersDetails} />
        <InfoDisplayModal isOpen={isOpen} toggleOpen={toggleOpen} />
      </VStack>
    </Stack>
  )
}

export default AdminDashboard
