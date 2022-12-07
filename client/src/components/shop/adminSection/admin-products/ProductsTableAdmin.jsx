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
  useToast,
} from '@chakra-ui/react'
import { FcViewDetails } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import {
  deleteShopProduct,
  showSingleProduct,
} from '../../../../redux/admin/admin.actions'
import AlertDialogBox from '../../AlertDialog'
import UpdateShopProduct from './UpdateShopProductAdmin'

const ProductsTableAdmin = ({ filteredProducts, toggleInfoModelVisiblity }) => {
  const dispatch = useDispatch()
  const toast = useToast()
  const handleDeleteProduct = (productId) => {
    dispatch(deleteShopProduct(productId))
    toast({
      position: 'top',
      title: 'Product delete update',
      description: 'Product has been deleted!',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
  }
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
          {filteredProducts &&
            filteredProducts.map((ele, ind) => (
              <Tr key={ind}>
                <Td>{ele._id}</Td>
                <Td maxW="200px" whiteSpace="break-spaces">
                  {ele.name}
                </Td>
                <Td>{ele.category}</Td>
                <Td>{ele['widget-lite-count']}</Td>
                <Td>{ele.Quantity}</Td>
                <Td fontSize={20}>
                  <AlertDialogBox
                    title="Want to delete Product?"
                    text="Are you sure you want to delete this product? it will be deleted
            permanently."
                    yesFunction={() => {
                      handleDeleteProduct(ele._id)
                    }}
                  />
                  <Icon
                    cursor="pointer"
                    onClick={() => {
                      toggleInfoModelVisiblity()
                      dispatch(showSingleProduct(ele))
                    }}
                    as={FcViewDetails}
                  />
                  <UpdateShopProduct product={ele} />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default ProductsTableAdmin
