import React, { useState, useContext } from 'react'
import './ItemDetail.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';
import { CartContext } from '../../context/CartContext';



const ItemDetail = ({item, idItem}) => {
  const [quantity, setQuantity] = useState(1)

  const {cartItems, setCartItems} = useContext(CartContext)
  const cartIds = cartItems.map((el) => el.id)

  const stockFix = () => {
    if (cartIds.includes(idItem)) {
      return item.stock - (cartItems.find(el => (el.id === idItem))).quantity
    } else {return item.stock}
  }

  const addQuantity = () => {if (quantity < stockFix()) {setQuantity(quantity + 1)}}
  const removeQuantity = () => {if (quantity > 0) {setQuantity(quantity - 1)}}

  const addToCart = () => {
    let newCartItems = JSON.parse(JSON.stringify(cartItems))
    if (cartIds.includes(idItem)) {
      const existingItem = newCartItems.find(el => (el.id === idItem))
      existingItem.quantity += quantity
    } else {
      newCartItems.push({id: idItem, quantity: quantity, price: item.price, title: item.title, stock: item.stock})
    }
    setCartItems(newCartItems)
    setQuantity(0)
  }

  console.log(cartItems)

  return (
    <div className='ContainerDetail'>

        <div className='ItemDetail'>
        <h2>{item.title}</h2>
        <img src={item.image} alt='foto del producto' className= "ImageItem"></img>
        <p>Categoría: {item.category}</p>
        <p>{item.description}</p>
      </div>
      <div className='PriceStockAdd'>
        <h1>$ {item.price}</h1>
        <div>
          <div className='QuantityStock'>
            <RemoveCircleOutlineIcon onClick={removeQuantity} color="primary" fontSize="small"/>
            {quantity}
            <AddCircleOutlineIcon onClick={addQuantity} color="primary" fontSize="small"/>
          </div>
          <p>stock: {(cartIds.includes(idItem)) ? item.stock - (cartItems.find(el => (el.id === idItem))).quantity : item.stock}</p>
        </div>
        <Button onClick={addToCart} variant="contained" disableElevation>
          Agregar al carrito
        </Button>
      </div>
      
    </div>
  )
}

export default ItemDetail