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
import { useDispatch } from 'react-redux'
import { getFilteredShopProducts } from '../../../../redux/admin/admin.actions'

const AdminProductsFilter = ({ toggleVisiblity }) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === '') return
    dispatch(getFilteredShopProducts(input))
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

      <HStack w={{ base: 'full', lg: '70%' }} justify="space-between">
        {/* Filter by Rating */}
        <VStack w="200px">
          <Text w="full" pl="5px" fontWeight={600}>
            Filter by Rating
          </Text>
          <Select
            onChange={({ target: { value } }) =>
              dispatch(getFilteredShopProducts('', 1, value))
            }
            placeholder="Select option"
          >
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </Select>
        </VStack>
        {/* Filter by Category */}
        <VStack w="200px">
          <Text w="full" pl="5px" fontWeight={600}>
            Filter by Category
          </Text>
          <Select
            onChange={({ target: { value } }) =>
              dispatch(getFilteredShopProducts('', 1, '', value))
            }
            placeholder="Select option"
          >
            <option value="protein">Protein</option>
            <option value="bcaa">BCAA</option>
            <option value="vitamins">Vitamins</option>
            <option value="massgainers">Gainers</option>
            <option value="omega3">Omega-3</option>
            <option value="peanutButter">Peanut-butter</option>
            <option value="plantprotein">Plant Protein</option>
            <option value="recentlyadded">Recently added</option>
          </Select>
        </VStack>
        {/* Filter by Quantity */}
        <VStack w="200px">
          <Text w="full" pl="5px" fontWeight={600}>
            Filter by Quantity
          </Text>
          <Select
            onChange={({ target: { value } }) =>
              dispatch(getFilteredShopProducts('', 1, '', '', value))
            }
            placeholder="Select option"
          >
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </Select>
        </VStack>
      </HStack>

      {/* Add Product */}

      <HStack w={{ lg: '40%' }} justify="center">
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
