import {
  Button,
  Divider,
  HStack,
  Icon,
  Input,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const AdminProductsFilter = ({ toggleVisiblity }) => {
  const [input, setInput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)
    setInput('')
  }
  return (
    <VStack w="full" spacing={5}>
      {/* Search Bar */}

      <HStack
        as="form"
        w={{ base: 'full', lg: '70%' }}
        border="1px solid grey"
        rounded="10px"
        px="10px"
        py="5px"
        onSubmit={handleSubmit}
      >
        <Icon fontSize={25} as={BiSearchAlt} />
        <Input
          value={input}
          onChange={({ target: { value } }) => setInput(value)}
          variant="unstyled"
          placeholder="search with product name"
        />
        <Button type="submit" variant="solid" colorScheme="cyan">
          Search
        </Button>
      </HStack>
      {/* Other filters */}

      <HStack w="70%" justify="space-between">
        {/* Filter by Rating */}
        <VStack w="200px">
          <Text w="full" pl="5px" fontWeight={600}>
            Filter by Rating
          </Text>
          <Select placeholder="Select option">
            <option value="option1">asc</option>
            <option value="option2">desc</option>
          </Select>
        </VStack>
        {/* Filter by Category */}
        <VStack w="200px">
          <Text w="full" pl="5px" fontWeight={600}>
            Filter by Category
          </Text>
          <Select placeholder="Select option">
            <option value="protein">Protein</option>
            <option value="bcaa">BCAA</option>
            <option value="bcaa">Vitamins</option>
            <option value="bcaa">Gainers</option>
            <option value="bcaa">Omega-3</option>
            <option value="bcaa">Peanut-butter</option>
            <option value="bcaa">Plant Protein</option>
            <option value="bcaa">Recently added</option>
          </Select>
        </VStack>
        {/* Filter by Quantity */}
        <VStack w="200px">
          <Text w="full" pl="5px" fontWeight={600}>
            Filter by Quantity
          </Text>
          <Select placeholder="Select option">
            <option value="option1">asc</option>
            <option value="option2">desc</option>
          </Select>
        </VStack>
      </HStack>
      {/* Add Product */}

      <HStack w="40%" justify="center">
        <Button
          onClick={toggleVisiblity}
          variant="outline"
          colorScheme="orange"
        >
          Add a new Product
        </Button>
      </HStack>
      <Divider />
    </VStack>
  )
}

export default AdminProductsFilter
