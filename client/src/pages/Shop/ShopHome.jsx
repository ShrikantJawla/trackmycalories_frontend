import { VStack } from '@chakra-ui/react'
import Footer from '../../components/shop/Footer'
import ImagesCrousel from '../../components/shop/ImagesCrousel'
import Navbar from '../../components/shop/Navbar'

const ShopHome = () => {
  return (
    <VStack w="full" bg="#f2f3f6">
      <Navbar />
      <ImagesCrousel />
      <Footer />
    </VStack>
  )
}

export default ShopHome
