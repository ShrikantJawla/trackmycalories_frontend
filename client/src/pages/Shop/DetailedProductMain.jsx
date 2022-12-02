import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import LeftProductDisplay from '../../components/shop/DetailedProduct/LeftProductDisplay'
import ProductDetails from '../../components/shop/DetailedProduct/ProductDetails'
import QuantityOrConfirmSection from '../../components/shop/DetailedProduct/QuantityOrConfirmSection'
import ReviewOrComments from '../../components/shop/DetailedProduct/ReviewOrComments'
import Navbar from '../../components/shop/Navbar'
import DiscountCircle from '../../components/shop/ProductsCrousel/DiscountCircle'

const DetailedProductMain = () => {
  const { productId } = useParams()
  return (
    <>
      <Navbar />
      <HStack w="full" spacing={0} alignItems="flex-start" mb="10px">
        <Box
          display="flex"
          flex="0.3"
          h="fit-content"
          boxShadow="var(--boxShadow2)"
          position="relative"
          py={10}
        >
          <LeftProductDisplay />
          <DiscountCircle />
        </Box>
        <Box display="flex" flex="0.5" h="full">
          <ProductDetails />
        </Box>
        <Box display="flex" flex="0.3" h="full">
          <QuantityOrConfirmSection />
        </Box>
      </HStack>
      <ReviewOrComments />
    </>
  )
}

export default DetailedProductMain
