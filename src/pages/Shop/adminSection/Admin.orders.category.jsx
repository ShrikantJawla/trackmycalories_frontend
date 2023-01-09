import { useBreakpointValue, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardSidebar from '../../../components/shop/adminSection/DashboardSidebar'
import InfoDisplayModal from '../../../components/shop/adminSection/InfoDisplayModal'
import NavbarAdmin from '../../../components/shop/adminSection/NavbarAdmin'
import AdminOrdersFilters from '../../../components/shop/adminSection/orders-categories/Admin.orders.filters'
import AdminOrdersListDisplay from '../../../components/shop/adminSection/orders-categories/Admin.OrdersList.Display'
import Pagination from '../../../components/shop/categoryDisplay/Pagination'
import { filterOrders } from '../../../redux/admin/admin.actions'

const AdminOrdersCategory = () => {
  const [page, setPage] = useState(1)
  const { filteredOrders } = useSelector((s) => s.admin)
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen((p) => (p = !p))
  const changePage = (newPage) => setPage(newPage)
  const margin = useBreakpointValue(
    {
      base: 'auto',
      lg: '15%',
    },
    {
      fallback: 'md',
    },
  )

  useEffect(() => {
    dispatch(filterOrders())
  }, [])
  useEffect(() => {
    dispatch(filterOrders('', '', '', '', '', page))
  }, [page])

  return (
    <>
      <DashboardSidebar location="adminSectionCategories" />
      <NavbarAdmin />
      <VStack
        style={{ marginLeft: margin }}
        w={{ base: 'full', lg: '85%' }}
        p={{ base: 'auto', lg: '15px' }}
        pt="10px"
      >
        <AdminOrdersFilters />
        <AdminOrdersListDisplay
          toggleOpen={toggleOpen}
          filteredOrders={filteredOrders}
        />
        <Pagination pageNumber={page} changePage={changePage} />
        <InfoDisplayModal isOpen={isOpen} toggleOpen={toggleOpen} />
      </VStack>
    </>
  )
}

export default AdminOrdersCategory
