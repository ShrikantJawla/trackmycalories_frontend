import React, { useState } from 'react'
import {
  Button,
  CloseButton,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'

const AddNewProductAdmin = ({ isVisible, toggleVisiblity }) => {
  const [newProductDetails, setNewProductDetails] = useState({
    name: '',
    image: '',
    quantity: 1,
    totalPrice: '',
    discountPercentage: '',
    afterDiscountPrice: '',
    category: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setNewProductDetails({ ...newProductDetails, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newProductDetails)
  }
  if (isVisible)
    return (
      <VStack
        as="form"
        position="fixed"
        w={{ base: 'full', md: '500px' }}
        boxShadow="var(--boxShadow)"
        bg="white"
        top="15%"
        left={{ base: '0', md: '17%', lg: '38%' }}
        px="15px"
        py="20px"
        onSubmit={handleSubmit}
      >
        <HStack w="full" justifyContent="flex-end" px="25px">
          <CloseButton fontSize={19} onClick={toggleVisiblity} />
        </HStack>
        <Text w="full" textAlign="center" fontSize={19} fontWeight={600}>
          Add a new Product
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
              type="url"
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
          Add Product
        </Button>
      </VStack>
    )
}

export default AddNewProductAdmin
