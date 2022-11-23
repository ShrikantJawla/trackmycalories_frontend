import {
  Box,
  Button,
  Divider,
  FormControl,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { IoSearchOutline } from 'react-icons/io5'
import ProductInSearchDiv from '../components/ProductInSearchDiv'
import styled from 'styled-components'
import DoughnutChart from '../components/MiddleSection/Charts/DoughnutChart'
import { useDispatch, useSelector } from 'react-redux'
import {
  addNewProduct,
  getAllProductToDisplay,
} from '../redux/diary/diary.actions'

const SearchPage = () => {
  const dispatch = useDispatch()
  const { token } = useSelector((store) => store.auth)
  const toast = useToast()
  const { allFoodItems } = useSelector((store) => store.diary)
  const [query, setQuery] = useState('')
  const [product, setProduct] = useState({})
  const [selected, setSelected] = useState('')
  const [servings, setServings] = useState(1)

  React.useEffect(() => {
    if (query === '') dispatch(getAllProductToDisplay(query))
  }, [dispatch])

  const handleSearch = () => {
    dispatch(getAllProductToDisplay(query))
  }
  const handleSelected = (id, ele) => {
    setSelected(id)
    setProduct(ele)
  }

  const handleAddProduct = () => {
    if (!product.Data) {
      toast({
        position: 'top',
        title: 'Please select a product first!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })
    } else {
      dispatch(addNewProduct({ product, serving: servings },token))
      toast({
        position: 'top',
        title: 'Product has beed added successfully!',
        description: 'Go to dashboard to see list of added products',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return (
    <StyledWrapper
      style={{ marginLeft: '6%' }}
      w="94%"
      bg="var(--backgroundColor)"
      justify="space-between"
      h="100vh"
    >
      <Sidebar location={'searchproducts'} />
      <VStack
        w="50%"
        h="500px"
        rounded="10px"
        boxShadow="var(--boxShadow)"
        bg="var(--cardBackground)"
        pt="5px"
        justify="space-between"
      >
        <HStack w="80%" justify="center" p="7px">
          <HStack
            w="70%"
            rounded="10px"
            h="38px"
            boxShadow="var(--boxShadow3)"
            px="6px"
            bg="white"
          >
            <IoSearchOutline fontSize={18} />
            <FormControl>
              <Input
                value={query}
                onChange={({ target: { value } }) => setQuery(value)}
                variant="unstyled"
                placeholder="enter a product name to search"
              />
            </FormControl>
          </HStack>
          <Button
            onClick={handleSearch}
            variant="outline"
            colorScheme="blue"
            bg="var(--cardBackground)"
          >
            Search
          </Button>
        </HStack>
        <VStack
          className="products_Container"
          w="100%"
          h="90%"
          borderBottomRadius="10px"
          boxShadow="var(--boxShadow)"
          p="4px"
          spacing={0}
          overflow="auto"
        >
          {allFoodItems &&
            allFoodItems.map((ele) => (
              <ProductInSearchDiv
                key={ele._id}
                ele={ele}
                selected={selected}
                handleSelected={handleSelected}
              />
            ))}
        </VStack>
      </VStack>
      <VStack
        w="50%"
        h="500px"
        py="15px"
        bg="var(--cardBackground)"
        pb="30px"
        rounded="10px"
        boxShadow="var(--boxShadow)"
        justify="space-between"
      >
        <VStack w="full">
          <Text
            fontSize={16}
            fontFamily={`'Poppins', sans - serif`}
            fontWeight={400}
          >
            Some info about the food-item
          </Text>
          <Divider />
          <Text color="red" fontWeight="600">
            {product.Description || 'Select any Product'}
          </Text>
        </VStack>
        <Box>
          <DoughnutChart product={product} />
        </Box>
        <HStack spacing="80px">
          <HStack spacing={0} w="180px">
            <Text fontSize={11}>Enter number of servings</Text>
            <NumberInput
              defaultValue={1}
              bg="var(--cardBackground)"
              rounded='10px'
              min={1}
              max={20}
              w="80px"
              onChange={(value) => setServings(value)}
              boxShadow="var(--boxShadow)"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
          <Button
            onClick={handleAddProduct}
            variant="outline"
            colorScheme="blue"
            bg="var(--cardBackground)"
          >
            Add Product
          </Button>
        </HStack>
      </VStack>
    </StyledWrapper>
  )
}

export default SearchPage

const StyledWrapper = styled(HStack)`
  .products_Container {
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #f98787;
    }
  }
`
