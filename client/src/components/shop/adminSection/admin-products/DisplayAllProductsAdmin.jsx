import { VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import AddNewProductAdmin from './AddNewProductAdmin'
import AdminProductsFilter from './Admin.products.filters'
import ProductsTableAdmin from './ProductsTableAdmin'

const DisplayAllProductsAdmin = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisiblity = () => setIsVisible((p) => (p = !p))
  return (
    <VStack w="full" spacing={5}>
      <AdminProductsFilter toggleVisiblity={toggleVisiblity} />
      <AddNewProductAdmin
        isVisible={isVisible}
        toggleVisiblity={toggleVisiblity}
      />
      <ProductsTableAdmin />
    </VStack>
  )
}

export default DisplayAllProductsAdmin
