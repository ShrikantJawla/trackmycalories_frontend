import { Box, HStack, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import LeftProductDisplay from '../../components/shop/DetailedProduct/LeftProductDisplay'
import ProductDetails from '../../components/shop/DetailedProduct/ProductDetails'
import QuantityOrConfirmSection from '../../components/shop/DetailedProduct/QuantityOrConfirmSection'
import ReviewOrComments from '../../components/shop/DetailedProduct/ReviewOrComments'
import Navbar from '../../components/shop/Navbar'
import DiscountCircle from '../../components/shop/ProductsCrousel/DiscountCircle'
import { getSingleShopProduct } from '../../redux/shopProducts/shop.actions'

const DetailedProductMain = () => {
  const dispatch = useDispatch()
  const { singleProduct } = useSelector((s) => s.shop)
  const { productId } = useParams()
  useEffect(() => {
    dispatch(getSingleShopProduct(productId))
  }, [productId])
  return (
    <>
      <Navbar />
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        w="full"
        spacing={0}
        alignItems="flex-start"
        mb="10px"
      >
        <Box
          display="flex"
          flex="0.3"
          h="fit-content"
          boxShadow="var(--boxShadow2)"
          position="relative"
          py={10}
        >
          <LeftProductDisplay
            image={singleProduct['attachment-woocommerce_thumbnail src']}
            name={singleProduct.name}
          />
          <DiscountCircle onsale={singleProduct.onsale} />
        </Box>
        <Box display="flex" flex="0.5" h="full">
          <ProductDetails
            name={singleProduct.name}
            rating={singleProduct['widget-lite-count']}
          />
        </Box>
        <Box display="flex" flex="0.3" h="full">
          <QuantityOrConfirmSection
            productId={singleProduct._id}
            fromAmount={singleProduct['woocommerce-Price-amount']}
            sellingAmount={singleProduct['woocommerce-Price-amount 2']}
            currencySimbol={singleProduct['woocommerce-Price-currencySymbol 2']}
          />
        </Box>
      </Stack>
      <Box w="full">
        <ReviewOrComments product={singleProduct} />
      </Box>
    </>
  )
}

export default DetailedProductMain
