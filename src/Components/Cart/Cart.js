import React from 'react'
import MenuList from '../Home/MenuList'
import CartItems from './CartItems'
/*This is the parent component for all the child component in cart page */
const Cart = () => {
  return (
    <div>
        <MenuList />
        <CartItems />
    </div>
  )
}

export default Cart