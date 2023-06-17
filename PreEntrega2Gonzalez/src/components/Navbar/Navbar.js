import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import logo from '../../assets/letrasLumbre.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [cats, setCats] = useState([]);

  console.log("CATS", cats);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res=>res.json())
      .then(data=>setCats(data))
  }, []);
  return (
    <div className= "ContNavbar" >
      <Link to='/'>
        <img src={logo} alt='logo Talleres Lumbre' className= "imgLogo"></img>
      </Link>
      <div className="ContButtons">
        <Stack direction="row" spacing={2}>
          {
            cats.map(cat => {
              return (
                <Link to={`category/${cat}`}> 
                  <Button variant="contained">{cat}</Button>
                </Link>
              )
            })
          }{/* 
            <Button variant="contained">Tienda</Button>
            <Button variant="contained">Sobre Nosotros</Button>
            <Button variant="contained">Blog</Button> */}
        </Stack>
      </div>
      <Link to='cart/'>
        <div className="Cart"><CartWidget /></div>        
      </Link>
    </div>
  )
}

export default Navbar