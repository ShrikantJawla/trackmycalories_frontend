import React from 'react'
import { Box, HStack, Select, Stack, Text, VStack } from '@chakra-ui/react'
import CategoryDisplayLeftSideBar from '../../components/shop/categoryDisplay/CategoryDisplayLeftSideBar'
import CategoryDisplayProducts from '../../components/shop/categoryDisplay/CategoryDisplayProducts'
import Navbar from "../../components/shop/Navbar";

const CategoryDisplayMain = () => {
  return (
    <>
      <Navbar/>
      <Stack
        h="100vh"
        w={{ md: '100%', lg: '80%' }}
        direction={{ base: 'column', md: 'row' }}
        margin="auto"
      >
        <Box w={{ base: '100%', md: '27%' }} h="full">
          <CategoryDisplayLeftSideBar />
        </Box>
        <VStack w={{ base: '100%', lg: '83%' }} h="full" pt="15px">
          <HStack w="60%" alignSelf="flex-end">
            <Text>Showing 101-120 of 223 results</Text>
            <Select w="200px" placeholder="Sort by Popularity">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <CategoryDisplayProducts />
        </VStack>
      </Stack>
    </>
  )
}

export default CategoryDisplayMain
