import React, { useState } from 'react'
import {
  Button,
  CloseButton,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { updateShopProduct } from '../../../../redux/admin/admin.actions'
import { BiEdit } from 'react-icons/bi'

const UpdateShopProduct = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()
  const toast = useToast()
  const [newProductDetails, setNewProductDetails] = useState({
    name: product.name,
    image: product['attachment-woocommerce_thumbnail src'],
    quantity: product.Quantity,
    totalPrice: product['woocommerce-Price-amount'].replace(',', ''),
    discountPercentage: product.onsale.replace('%', ''),
    afterDiscountPrice: product['woocommerce-Price-amount 2'].replace(',', ''),
    category: product.category,
  })
  const toggleVisiblity = () => setIsVisible((p) => (p = !p))
  const handleChange = (e) => {
    const { name, value } = e.target
    setNewProductDetails({ ...newProductDetails, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      newProductDetails.name === '' ||
      newProductDetails.image === '' ||
      newProductDetails.totalPrice === '' ||
      newProductDetails.afterDiscountPrice === '' ||
      newProductDetails.category === '' ||
      newProductDetails.discountPercentage === ''
    ) {
      return toast({
        position: 'top',
        title: 'Input feild Error!',
        description: 'Please fill all the fields to proceed!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })
    }
    dispatch(updateShopProduct(product._id, newProductDetails))
    toast({
      position: 'top',
      title: 'Product update!',
      description: 'Product has been updated successfully',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
    toggleVisiblity()
  }
  return (
    <>
      <Icon cursor="pointer" onClick={toggleVisiblity} ml="6px" as={BiEdit} />
      {isVisible && (
        <VStack
          as="form"
          w={{ base: 'full', md: '500px' }}
          boxShadow="var(--boxShadow)"
          position="fixed"
          bg="white"
          top="10%"
          left={{ base: '0', md: '17%', lg: '38%' }}
          px="19px"
          py="20px"
          onSubmit={handleSubmit}
        >
          <HStack w="full" justifyContent="flex-end" px="25px">
            <CloseButton fontSize={19} onClick={toggleVisiblity} />
          </HStack>
          <Text w="full" textAlign="center" fontSize={19} fontWeight={600}>
            Update Product
          </Text>
          <Divider />
          <FormControl>
            <FormLabel>Name of Product</FormLabel>
            <Input
              name="name"
              value={newProductDetails.name}
              onChange={handleChange}
            />
          </FormControl>
          <HStack w="full">
            <FormControl w="60%">
              <FormLabel>Image url of Product</FormLabel>
              <Input
                name="image"
                type="url"
                value={newProductDetails.image}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl w="40%">
              <FormLabel>Category of Product</FormLabel>
              <Input
                name="category"
                type="text"
                value={newProductDetails.category}
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          <HStack w="full" justify="space-between">
            <FormControl>
              <FormLabel>Total price of Product</FormLabel>
              <Input
                name="totalPrice"
                type="number"
                value={newProductDetails.totalPrice}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>discount percentage</FormLabel>
              <Input
                name="discountPercentage"
                type="number"
                value={newProductDetails.discountPercentage}
                onChange={handleChange}
              />
            </FormControl>
          </HStack>
          <HStack w="full" justify="space-between">
            <FormControl>
              <FormLabel>Price after discount</FormLabel>
              <Input
                name="afterDiscountPrice"
                type="number"
                value={newProductDetails.afterDiscountPrice}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Quantity of Product</FormLabel>
              <Input
                name="quantity"
                type="number"
                value={newProductDetails.quantity}
                onChange={handleChange}
              />
            </FormControl>
          </HStack>
          <Button
            type="submit"
            style={{ marginTop: '20px' }}
            w="50%"
            variant="solid"
            colorScheme="cyan"
          >
            Update
          </Button>
        </VStack>
      )}
    </>
  )
}

export default UpdateShopProduct
