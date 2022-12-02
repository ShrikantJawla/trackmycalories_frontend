import React from 'react'
import {
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { FcViewDetails } from 'react-icons/fc'
import { BiEdit } from 'react-icons/bi'

const ProductsTableAdmin = () => {
  return (
    <TableContainer w="full" maxH="500px" overflowY="scroll">
      <Text textAlign="center" fontSize={20} fontWeight={600} w="full">
        Products list
      </Text>
      <Table variant="striped">
        <Thead bg="orange.200">
          <Tr>
            <Th>Product Id</Th>
            <Th>Name</Th>
            <Th>Category</Th>
            <Th>Ratings</Th>
            <Th>Quantity</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {new Array(15).fill(0).map((ele, ind) => (
            <Tr key={ind}>
              <Td>5454544545</Td>
              <Td maxW="200px" whiteSpace="break-spaces">
                Optimum Nutrition (ON) Gold Standard 100 Whey Protein Powder
              </Td>
              <Td>Protein</Td>
              <Td>24</Td>
              <Td>20</Td>
              <Td fontSize={20}>
                <Icon cursor='pointer' as={FcViewDetails} />
                <Icon cursor='pointer' ml="10px" as={BiEdit} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default ProductsTableAdmin
