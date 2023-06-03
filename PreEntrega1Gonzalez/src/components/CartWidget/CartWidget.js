import React from 'react'
import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div className='CartWidgetContainer'>
      <ShoppingCartIcon sx={{ fontSize: 40 }}></ShoppingCartIcon>
      <p className='NumeroCarro'>3</p>
    </div>
  )
}

export default CartWidget