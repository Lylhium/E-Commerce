//imports
import React, {useContext} from 'react';
//contexts
import { CartContext }  from '../../Context/CartContext/CartContext';


 

    
export default function CartPage() {
    const [cart, setCart]= useContext(CartContext);
    
    const PrecioTotal = cart.reduce((acc,curr) => acc + curr.price , 0);



    return (
            <div className="Contenedor">
         
        <div className="main-title">Pagina de Carrito</div>
           <br/>
           <br/>
           <br/>
    
           <div className="main-title">precio total: {PrecioTotal} </div>
           <br/>
       
          </div>
          

     
    )  
}