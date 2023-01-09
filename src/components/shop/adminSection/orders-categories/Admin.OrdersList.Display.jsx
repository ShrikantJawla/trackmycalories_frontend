import {
  Badge,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Icon,
} from '@chakra-ui/react'
import { FcViewDetails } from 'react-icons/fc'
import { BiEdit } from 'react-icons/bi'
import React from 'react'
import uuid from 'react-uuid'
import { useDispatch } from 'react-redux'
import { showSingleProduct } from '../../../../redux/admin/admin.actions'

const AdminOrdersListDisplay = ({ filteredOrders,toggleOpen }) => {
  const dispatch = useDispatch()
 
  return (
    <TableContainer w="full" h="90vh" overflowY="scroll">
      <Text textAlign="center" fontSize={20} fontWeight={600} w="full">
        Total orders
      </Text>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Order Id</Th>
            <Th>Payment Method</Th>
            <Th>Order Date</Th>
            <Th>Delevery Date</Th>
            <Th>Status</Th>
            <Th>Total</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredOrders &&
            filteredOrders.map((ele, ind) => (
              <Tr key={uuid()}>
                <Td>{ele.product?._id}</Td>
                <Td>{ele.modeOfPayment}</Td>
                <Td>{ele.dateOfPurchase.slice(0, 10)}</Td>
                <Td>{ele.dateOfDelevery.slice(0, 10)}</Td>
                <Td>
                  <Badge
                    variant="solid"
                    colorScheme={
                      StatusOfOrder(ele?.dateOfDelevery, currentTime()) ===
                      'Pending'
                        ? 'orange'
                        : 'green'
                    }
                  >
                    {StatusOfOrder(ele?.dateOfDelevery, currentTime())}
                  </Badge>
                </Td>
                <Td>₹{ele.product['woocommerce-Price-amount 2']}</Td>
                <Td>
                  <Icon
                    cursor="pointer"
                    onClick={() => {
                      toggleOpen()
                      dispatch(showSingleProduct(ele?.product))
                    }}
                    fontSize={20}
                    as={FcViewDetails}
                  />
                  {/* <Icon cursor="pointer" fontSize={20} ml="10px" as={BiEdit} /> */}
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default AdminOrdersListDisplay

function StatusOfOrder(deleveryTime, currentTime) {
  if (new Date(deleveryTime) - new Date(currentTime) > 0) {
    return 'Pending'
  } else {
    return 'Delevered'
  }
}

function currentTime() {
  let time = new Date()
  return `${time.getFullYear()}-${
    time.getMonth() + 1 < 10 ? `0${time.getMonth() + 1}` : time.getMonth() + 1
  }-${time.getDate() < 10 ? `0${time.getDate()}` : time.getDate()}T${
    time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
  }:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`
}
