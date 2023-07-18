import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import {useParams} from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'

import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";



const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [spinner, setSpinner] = useState(false)


  console.log("ITEMS", items);

  let { catId } = useParams();

    useEffect( () => {
      if (catId) {
        setSpinner(true)
        getDocs(query(collection(db, "items"), where("category", "==", `${catId.replace("_", " ")}`)))
          .then((snapshot) => {
            setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })))
        setSpinner(false)
          })        
          
      } else {
        setSpinner(true)
        getDocs(collection(db, "items"))
          .then((snapshot) => {
            setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })))
        setSpinner(false)
          })

      }
    }, [catId]);


  return (
      <div>
        <h1 className='Title'>{catId ? ((items.length > 0) ? `Categoría: ${catId.replace("_", " ")}` : 
          `No hay productos de la categoría ${catId.replace("_", " ")}`)  :
          "Todos los productos"}</h1>
      
                
          {spinner ? <Box sx={{textAlign: 'center'}}>
            <CircularProgress size={80}/> 
            </Box> :
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
          }
    </div>
  )
}

export default ItemListContainer