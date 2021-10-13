//imports
import React, {useContext} from 'react';
//contexts
import { CartContext }  from '../../Context/CartContext/CartContext';
import ItemDetail from "../ItemDetail/ItemDetail";
import miniProduct from '../miniProduct/miniProduct';

 

    
export default function CartPage() {
    const [cart,setCart,clear,addItem,PrecioTotal]= useContext(CartContext);
    

    return (
            <div className="Contenedor">
         
          <h2>🛒 Carrito</h2>
           <br/>
           <div  className="main-title">
          
           </div>
           <button className="button1" onClick={clear}>🚮 Limpiar carrito  </button>
          <h2> Hay un total de {cart.length} productos en el carro.</h2>
          
           <div className="main-title">precio total: $ {PrecioTotal} </div>
           <br/>
          </div> 
    )  
}