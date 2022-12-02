import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Product from '../ProductsCrousel/Product'
import Pagination from './Pagination'

const CategoryDisplayProducts = () => {
  return (
    <>
      <Grid
        w="full"
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(4,1fr)',
        }}
      >
        {new Array(12).fill(' ').map((ele) => (
          <GridItem>
            <Product />
          </GridItem>
        ))}
      </Grid>
      <Pagination />
    </>
  )
}

export default CategoryDisplayProducts
