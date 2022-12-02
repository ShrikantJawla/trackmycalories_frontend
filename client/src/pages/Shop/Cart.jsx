import React, { useState } from 'react'
import CartItems from '../../components/shop/cart/CartItems'
import EmptyCart from '../../components/shop/cart/EmptyCart'
import Navbar from '../../components/shop/Navbar'

const Cart = () => {
  const [isEmpty, setIsEmpty] = useState(false)
  return (
    <>
      <Navbar />
      {isEmpty ? <EmptyCart /> : <CartItems />}
    </>
  )
}

export default Cart
