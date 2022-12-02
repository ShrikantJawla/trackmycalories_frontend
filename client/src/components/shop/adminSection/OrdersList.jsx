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

const OrdersList = () => {
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
          {new Array(5).fill(0).map((ele, ind) => (
            <Tr key={ind}>
              <Td>5454544545</Td>
              <Td>Cash</Td>
              <Td>September 8th 2020</Td>
              <Td>September 12th 2020</Td>
              <Td>
                <Badge variant="solid" colorScheme="blue">
                  pending
                </Badge>
              </Td>
              <Td>Rs.3400</Td>
              <Td>
                <Icon cursor="pointer" fontSize={20} as={FcViewDetails} />
                <Icon cursor="pointer" fontSize={20} ml="10px" as={BiEdit} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default OrdersList
