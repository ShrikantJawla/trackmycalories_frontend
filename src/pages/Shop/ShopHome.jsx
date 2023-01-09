import { VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/shop/Footer'
import ImagesCrousel from '../../components/shop/ImagesCrousel'
import Navbar from '../../components/shop/Navbar'
import ProductsCrousel from '../../components/shop/ProductsCrousel/ProductsCrousel'
import { categoryWiseProductDisplay } from '../../redux/shopProducts/shop.actions'

const ShopHome = () => {
  const dispatch = useDispatch()
  const { homePageProducts } = useSelector((s) => s.shop)
  const {
    bcaa,
    massgainer,
    omega3,
    peanutButter,
    plantprotein,
    protein,
    vitamins,
  } = homePageProducts
  let categoryWiseProducts = [
    bcaa,
    massgainer,
    omega3,
    peanutButter,
    plantprotein,
    protein,
    vitamins,
  ]

  useEffect(() => {
    dispatch(categoryWiseProductDisplay())
  }, [])

  return (
    <VStack w="full" bg="#f2f3f6">
      <Navbar />
      <ImagesCrousel />
      {categoryWiseProducts &&
        categoryWiseProducts.map((category) => (
          <ProductsCrousel products={category} />
        ))}
      <Footer />
    </VStack>
  )
}

export default ShopHome
