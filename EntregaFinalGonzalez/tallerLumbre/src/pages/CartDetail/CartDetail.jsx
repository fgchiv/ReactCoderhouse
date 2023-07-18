import React, {useContext, useState, useEffect} from 'react';
import { CartContext } from '../../context/CartContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import './CartDetail.css'

const CartDetail = () => {

  const initialState = {
    name: "",
    lastName: "",
    telNumber: "",
    email: "",
    emailConf: ""
  };

  const {cartItems, setCartItems} = useContext(CartContext)
  const [inputValues, setInputValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(null);
  const [loadFailure, setLoadFailure] = useState(false)
  const [spinner, setSpinner] = useState(false)
  const [blankCheck, setBlanckCheck] = useState(true)
  const toggleSpinner = () => {setSpinner(!spinner)}


  useEffect( () => {
    let arrayBool = []
    for (let key in inputValues) {
      if (inputValues[key] !== "") {
        arrayBool.push(true)
     } else arrayBool.push(false)
    }
    if (arrayBool.every((el) => el === true)) {setBlanckCheck(false)} else {setBlanckCheck(true)}
  },[inputValues])

  let total = 0
  cartItems.forEach(el => {total += el.price * el.quantity});

  const inputChange = (e) => {
    const { value, name } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const userDataCheck = () => {
    if (inputValues.telNumber &&
          inputValues.lastName &&
          inputValues.name &&
          inputValues.email &&
          inputValues.email == inputValues.emailConf ) {
      return inputValues
    } else {return null}
  }

  const itemsDataCheck = () => {
    let quantity = 0
    cartItems.forEach(el => {quantity += el.quantity})
    if (quantity > 0) {
      const itemsData = cartItems.map(el => ({id: el.id, title: el.title, quantity: el.quantity, price: el.price}))
      return itemsData
    } else {return null}
  }

  const formSubmit = async () => {
    
    const userData = userDataCheck()
    const itemsData = itemsDataCheck()
    const newOrder = {date: new Date()}
    console.log("DEBUGGING", userData, itemsData, newOrder)
    if (itemsData && userData) {
      newOrder.userData = userData
      newOrder.itemsData = itemsData

      toggleSpinner()
      const upload = await addDoc(collection(db, "orders"), {newOrder});
      // console.log("Document written with ID: ", docRef.id);

      setPurchaseID(upload.id);
      setInputValues(initialState);
      setCartItems([])
      toggleSpinner()
    } else {
        setLoadFailure(true)
        }
  }

  const deleteItem = (id) => {
    let delCartItems = JSON.parse(JSON.stringify(cartItems))
    delCartItems = delCartItems.filter(el => el.id !== id)
    setCartItems(delCartItems)
  }

  const addQuantity = (id) => {
    let addCartItems = JSON.parse(JSON.stringify(cartItems))
    let item = addCartItems.find((el) => el.id == id)
    if (item.quantity < item.stock) {item.quantity += 1}
    setCartItems(addCartItems)
  } 

  const removeQuantity = (id) => {
    let removeCartItems = JSON.parse(JSON.stringify(cartItems))
    let item = removeCartItems.find((el) => el.id == id)
    console.log(item)
    if (item.quantity > 1) {item.quantity -= 1}
    setCartItems(removeCartItems)
  }

  return (
    <div className='ContainerCheckout'>   
      <div className='ItemsTableContainer'>
        {(cartItems.length == 0) ? <h1>No hay productos en el carrito</h1> : 
        <div>
        <h1>Resumen de compra</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Producto</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Precio unitario</TableCell>
                <TableCell align="right">Subtotal</TableCell>
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((el) => (
                <TableRow
                  key={el.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row"> {el.title} </TableCell>
                  <TableCell align="right">{el.quantity}</TableCell>
                  <TableCell align="right">$ {el.price}</TableCell>
                  <TableCell align="right">$ {el.price * el.quantity}</TableCell>
                  <TableCell align="center">
                    <AddCircleOutlineIcon onClick={() => addQuantity(el.id)} color='primary' />
                    <RemoveCircleOutlineIcon onClick={() => removeQuantity(el.id)} color='primary' />
                    <DeleteOutlineIcon onClick={() => deleteItem(el.id)} color='primary' />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h3>Total: $ {total}</h3>
        </div>
        }
      </div>
      <div className='CheckoutFormContainer'>
        <h1>Datos del cliente</h1>
        <p>Ingrese sus datos para realizar la compra</p>
        <form className='CheckoutForm'>
          <TextField
            variant='outlined'
            placeholder='Nombre'
            className='InputTextFields'
            name='name'
            value={inputValues.name}
            onChange={inputChange}
          />
          <TextField
            variant='outlined'
            placeholder='Apellido'
            className='InputTextFields'
            name='lastName'
            value={inputValues.lastName}
            onChange={inputChange}
          />
          <TextField
            variant='outlined'
            placeholder='Teléfono'
            className='InputTextFields'
            name='telNumber'
            value={inputValues.telNumber}
            onChange={inputChange}
          />
          <TextField
            variant='outlined'
            placeholder='E-mail'
            className='InputTextFields'
            name='email'
            value={inputValues.email}
            onChange={inputChange}
          />
          <TextField
            variant='outlined'
            placeholder='Repita el e-mail'
            className='InputTextFields'
            name='emailConf'
            value={inputValues.emailConf}
            onChange={inputChange}
          />
          {blankCheck ? <Button style={{margin: "40px"}} disabled onClick={formSubmit} variant="contained" disableElevation>
            Cerrar compra
          </Button>
           : 
          <Button style={{margin: "40px"}} onClick={formSubmit} variant="contained" disableElevation>
            Cerrar compra
          </Button>
          }
        </form>
        {purchaseID ?
        <Alert severity="success">
          <AlertTitle>Orden cargada con éxito</AlertTitle>
          El identificador de compra es <strong>{purchaseID}</strong>.
          Consérvelo para consultas.
        </Alert>  : 
        loadFailure ? 
        <Alert severity="error">
          <AlertTitle>Hubo un error al cargar la orden</AlertTitle>
          Revise que los dos campos de e-mail coincidan y que efectivamente haya productos en la orden.
        </Alert>  :
        spinner ? <CircularProgress /> : null}
      </div>
    </div>
  )
}

export default CartDetail