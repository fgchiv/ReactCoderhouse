import React, { useContext } from 'react'
import './CartWidget.css'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {cartItems} = useContext(CartContext)
  let quantity = 0
  console.log(cartItems)
  cartItems.forEach(el => {
    quantity += el.quantity
  });
  return (
    <div className='CartWidgetContainer'>
      <Badge badgeContent={quantity} color="primary">
        <ShoppingCartIcon sx={{ fontSize: 40, color: 'black' }}></ShoppingCartIcon>
      </Badge>
    </div>
  )
}

export default CartWidget