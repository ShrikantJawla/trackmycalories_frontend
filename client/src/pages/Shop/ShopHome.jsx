import { VStack } from '@chakra-ui/react'
import Footer from '../../components/shop/Footer'
import ImagesCrousel from '../../components/shop/ImagesCrousel'
import Navbar from '../../components/shop/Navbar'
import ProductsCrousel from '../../components/shop/ProductsCrousel/ProductsCrousel'

const ShopHome = () => {
  return (
    <VStack w="full" bg="#f2f3f6">
      <Navbar />
      <ImagesCrousel />
      <ProductsCrousel />
      <ProductsCrousel />
      <ProductsCrousel />
      <ProductsCrousel />
      <ProductsCrousel />
      <ProductsCrousel />
      <ProductsCrousel />
      <ProductsCrousel />
      <Footer />
    </VStack>
  )
}

export default ShopHome
