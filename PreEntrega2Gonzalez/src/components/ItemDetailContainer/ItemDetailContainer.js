import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';



const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  let { id } = useParams();

  console.log(item);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>setItem(data)
            )
  }, [id]);
  return (
    <div className='ContainerItem'>
      <h2>{item.title}</h2>
      <img src={item.image} alt='foto del producto' className= "ImageItem"></img>
      <h1>$ {item.price}</h1>
      <p>{item.description}</p>
      <p>Categoría: {item.category}</p>
    </div>
  )
}

export default ItemDetailContainer