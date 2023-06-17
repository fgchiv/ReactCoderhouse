import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import {useParams} from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';



const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  console.log("ITEMS", items);

  let { catId } = useParams();

    useEffect(() => {
      if (catId) {fetch(`https://fakestoreapi.com/products/category/${catId}`)
          .then(res=>res.json())
          .then(data=>setItems(data)
      )} else {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setItems(data))
      }
    }, [catId]);


  return (
    <div>
        <h1 className='Title'>{catId ? `Categoría: ${catId}` : "Todos los productos"}</h1>
      <div className='ContainerItems'>
        {items.map((item) => {
        return (
          <div className='Item' key={item.id}>
            <Link to={`/item/${item.id}`}>
              <ProductCard data={item} />
            </Link>
          </div>
         );
        })}
      </div>
    </div>
  )
}

export default ItemListContainer