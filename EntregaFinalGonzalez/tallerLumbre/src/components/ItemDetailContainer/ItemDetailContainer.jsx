import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'

import { db } from "../../firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";



const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [spinner, setSpinner] = useState(true)
  const [badId, setBadId] = useState(false)

  let { id } = useParams();

  console.log(item);

  useEffect(() => {
    getDoc(doc(db, "items", `${id}`))
      .then((prod) => setItem(prod.data()))   
  }, [id]);

  useEffect(() => {
    console.log("ITEM", item)
    if (item) {
      if (item.title) {setSpinner(false)}
    } else {
      if (item === undefined) {
        setSpinner(false)
        setBadId(true)
      }
    }
  }, [item])

  return (
    <div style={{paddingTop: "11vh"}}>
    { spinner ? <Box sx={{textAlign: 'center'}}>
            <CircularProgress size={80}/> 
            </Box> : 
      badId ? <h1 style={{textAlign: "center"}}>El producto no existe</h1> : 
      <ItemDetail item = {item} idItem = {id}/>
    }
    </div>
  )
}

export default ItemDetailContainer