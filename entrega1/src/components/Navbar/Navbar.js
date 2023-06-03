import React from 'react'
import './Navbar.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import logo from './letrasLumbre.png';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <div className= "ContNavbar" >
      <img src={logo} className= "imgLogo"></img>
      <div className="ContButtons">
        <Stack direction="row" spacing={2}>
            <Button variant="contained">Tienda</Button>
            <Button variant="contained">Sobre Nosotros</Button>
            <Button variant="contained">Blog</Button>
        </Stack>
      </div>
      <div className="Cart"><CartWidget /></div>        
    </div>
  )
}

export default Navbar