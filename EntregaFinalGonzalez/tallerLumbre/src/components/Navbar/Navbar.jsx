import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import logo from '../../assets/letrasLumbre.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';



const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className= "ContNavbar" >
      <Link to='/'>
        <img src={logo} alt='logo Talleres Lumbre' className= "imgLogo"></img>
      </Link>
      <div className="ContButtons">
        <Stack direction="row" spacing={2}>
              <Button variant="contained"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                Categorías
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                 <Link to={`category/pedales`}> <MenuItem onClick={handleClose}>Pedales</MenuItem></Link>
                 <Link to={`category/cubiertas`}> <MenuItem onClick={handleClose}>Cubiertas</MenuItem> </Link>
                 <Link to={`category/desviador_trasero`}> <MenuItem onClick={handleClose}>Desviador trasero</MenuItem> </Link>
                 <Link to={`category/cadenas`}> <MenuItem onClick={handleClose}>Cadenas</MenuItem> </Link>
                 <Link to={`category/cuadros`}> <MenuItem onClick={handleClose}>Cuadros</MenuItem> </Link>
              </Menu>
          <Link to={'about'}> <Button variant="contained">Sobre Nosotros</Button> </Link>      
        </Stack>
      </div>
      <Link to='cart/'>
        <div className="Cart"><CartWidget /></div>        
      </Link>
    </div>
  )
}

export default Navbar