import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from '../../components/shop/cart/CartItems'
import EmptyCart from '../../components/shop/cart/EmptyCart'
import Navbar from '../../components/shop/Navbar'
import { getAllCartItems } from '../../redux/cart/cart.actions'

const Cart = () => {
  const dispatch = useDispatch()
  const { allCartItems } = useSelector((s) => s.cart)
  useEffect(() => {
    dispatch(getAllCartItems())
  }, [])
  return (
    <>
      <Navbar />
      {allCartItems && allCartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartItems allCartItems={allCartItems} />
      )}
    </>
  )
}

export default Cart
