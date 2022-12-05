import React, { useState } from 'react'
import { Box, HStack, Select, Stack, Text, VStack } from '@chakra-ui/react'
import CategoryDisplayLeftSideBar from '../../components/shop/categoryDisplay/CategoryDisplayLeftSideBar'
import CategoryDisplayProducts from '../../components/shop/categoryDisplay/CategoryDisplayProducts'
import Navbar from '../../components/shop/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCategoriesWithLengthForFilter,
  getShopProductsByQuery,
} from '../../redux/shopProducts/shop.actions'
import { useParams } from 'react-router-dom'

const CategoryDisplayMain = () => {
  const { category } = useParams()
  const [productCategory, setProductCategory] = useState(category)
  const [sort, setSort] = useState('')
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const { productsWithLength, categoriesWithLength } = useSelector(
    (s) => s.shop,
  )
  useEffect(() => {
    dispatch(getShopProductsByQuery(productCategory || 'protein', page, sort))
  }, [page, productCategory, sort])

  useEffect(() => {
    dispatch(getCategoriesWithLengthForFilter())
  }, [])
  useEffect(() => {
    dispatch(getShopProductsByQuery(category || 'protein', page, sort))
  }, [category])

  const changePage = (newPage) => {
    setPage(newPage)
  }
  const changeCategory = (newCategory) => {
    setProductCategory(newCategory)
  }
  const handleSorting = (e) => {
    setSort(e.target.value)
  }
  return (
    <>
      <Navbar />
      <Stack
        h="100vh"
        w={{ md: '100%', lg: '80%' }}
        direction={{ base: 'column', md: 'row' }}
        margin="auto"
      >
        <Box w={{ base: '100%', md: '27%' }} h="full">
          <CategoryDisplayLeftSideBar
            changeCategory={changeCategory}
            categoriesWithLength={categoriesWithLength}
          />
        </Box>
        <VStack w={{ base: '100%', lg: '83%' }} h="full" pt="15px">
          <HStack w="60%" alignSelf="flex-end">
            <Text>
              Showing {`${(page - 1) * 15 + 1}-${page * 15}`} of{' '}
              {productsWithLength && productsWithLength.length} results
            </Text>
            <Select
              w="200px"
              onChange={handleSorting}
              placeholder="Sort by Popularity"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </Select>
          </HStack>
          <CategoryDisplayProducts
            page={page}
            products={productsWithLength.products}
            length={productsWithLength.length}
            changePage={changePage}
          />
        </VStack>
      </Stack>
    </>
  )
}

export default CategoryDisplayMain
