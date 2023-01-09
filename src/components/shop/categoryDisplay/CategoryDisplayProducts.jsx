import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Product from '../ProductsCrousel/Product'
import Pagination from './Pagination'

const CategoryDisplayProducts = ({ page, products, changePage, length }) => {
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
        {products &&
          products.map((ele) => (
            <GridItem
              key={
                ele._id +
                `${Date.now().toString}+${Math.random()}` +
                Math.random()
              }
            >
              {<Product product={ele} />}
            </GridItem>
          ))}
      </Grid>
      <Pagination pageNumber={page} changePage={changePage} length={length} />
    </>
  )
}

export default CategoryDisplayProducts
