
import React, {useState,useContext} from 'react'
import Logo from '../../assets/Logo.png'
import './NavBar.css';
import  { Link } from 'react-router-dom'
//externo materialui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//externo fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons'
import 'animate.css'
//export 
import { CartContext } from '../../Context/CartContext/CartContext';


const NavBar = (props) => {

  const  [categories] = useState([
    {name:'Suplementos', 
    id: '1',
    category: '1'
  },
  {name:'Cosmetica', 
  id: '2',
  category: '2'
},

]

)
const [cart]= useContext(CartContext);
return (

<AppBar className= "animate__animated animate__bounce" position="sticky"  style={{ background: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
       <Typography variant="h6">
        <div className="CocoLogo">
            <img  src= {Logo} alt={'logoMain'}/>
        </div>
      </Typography>
        <ul className="Lista-NavBar">
            <li><Link to='/' style={{ textDecoration: 'none',color:'white'}}>  <Button color="inherit">Home</Button></Link>
            </li>
            <li>
            <Link to='/productos' style={{ textDecoration: 'none',color:'white'}}>  <Button color="inherit">Productos</Button> </Link>
       
            {categories.map ( (category)  => {
             return  <a style={{ textDecoration: 'none',color:'white'}} href={`/category/${category.id} ` }> {category.name} </a >
            })}
            </li> 
            <li><Link to='/preguntas' style={{ textDecoration: 'none',color:'white'}}> <Button color="inherit">Preguntas Frecuentes</Button></Link></li> 
            <li><Link to='/contacto' style={{ textDecoration: 'none',color:'white'}}> <Button color="inherit">Contacto</Button></Link></li> 
        </ul>

            <div className="cart-button"><Link to='/cart'style={{ textDecoration: 'none',color:'white'}}> 
      <Button variant="contained">
      <span>{cart.length}</span>
      <FontAwesomeIcon icon={faCartPlus}/> 
      </Button>
      </Link>
           </div>
      </Toolbar>
      </AppBar>
      ); }
        export default  NavBar;
