import { VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import InfoDisplayModal from '../InfoDisplayModal'
import AddNewProductAdmin from './AddNewProductAdmin'
import AdminProductsFilter from './Admin.products.filters'
import ProductsTableAdmin from './ProductsTableAdmin'

const DisplayAllProductsAdmin = ({ filteredProducts }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [productInfoIsVisible, setProductInfoIsVisible] = useState(false)
  const [editFormIsVisible, setEditFormIsVisible] = useState(false)
  const toggleVisiblity = () => setIsVisible((p) => (p = !p))
  const toggleProductInfoModelVisiblity = () =>
    setProductInfoIsVisible((p) => (p = !p))
  const toggleEditFormVisiblity = () => setEditFormIsVisible((p) => (p = !p))
  return (
    <VStack w="full" spacing={5}>
      <AdminProductsFilter toggleVisiblity={toggleVisiblity} />
      <AddNewProductAdmin
        isVisible={isVisible}
        toggleVisiblity={toggleVisiblity}
      />
      <ProductsTableAdmin
        toggleInfoModelVisiblity={toggleProductInfoModelVisiblity}
        filteredProducts={filteredProducts}
      />
      <InfoDisplayModal
        isOpen={productInfoIsVisible}
        toggleOpen={toggleProductInfoModelVisiblity}
      />
    </VStack>
  )
}

export default DisplayAllProductsAdmin
