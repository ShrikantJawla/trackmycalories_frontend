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
import React, { useState } from 'react'
import { useEffect } from 'react'

const OrdersList = ({ orderDetails, toggleOpen }) => {
  const [allOrders, setAllOrders] = useState([])
  useEffect(() => {
    if (orderDetails.deleveredOrders) {
      setAllOrders([
        ...orderDetails?.pendingOrders,
        ...orderDetails?.deleveredOrders,
      ])
    }
  }, [orderDetails.deleveredOrders])
  return (
    <TableContainer w="full">
      <Text textAlign="center" fontSize={20} fontWeight={600} w="full">
        Recent orders
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
          {allOrders.map((ele, ind) => (
            <Tr key={ind}>
              <Td>{ele?._id}</Td>
              <Td textAlign="center">{ele?.modeOfPayment}</Td>
              <Td textAlign="center">{ele?.dateOfPurchase}</Td>
              <Td textAlign="center">{ele?.dateOfDelevery}</Td>
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
              <Td>₹{ele?.product['woocommerce-Price-amount 2']}</Td>
              <Td>
                <Icon
                  cursor="pointer"
                  fontSize={20}
                  onClick={toggleOpen}
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

export default OrdersList

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
