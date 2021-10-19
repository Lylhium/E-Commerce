//imports
import React, {useContext} from 'react';
import '../CartPage/CartPage.css'
//contexts
import { CartContext }  from '../../Context/CartContext/CartContext';



export default function CartPage(props) {
     const [cart,setCart,clear]= useContext(CartContext);

    const PrecioTotal = cart.reduce((acc,curr) => acc + curr.price , 0);

    const removeItemFromCart = (id) => {
    
        setCart(cart.filter(item => item.id !== id) 
      
        )
      }
    
    
    return (
            <div className="Contenedor">
            <u> <h2 className='cart-title'>🛒 Carrito</h2> </u>
           <br/>
           <div className= "cart-product">
            {cart.map(item => ( <div>  <img alt="imagen producto" href='imgproduct' src={`../assets/${item.img}`}/>  
            <a className=" cart-title-box"> {item.title} </a>
             <a className="cart-price-box">  $ {item.price}  </a>
             <button onClick={ () => removeItemFromCart(item.id)} className='remove'> X  </button>
                
              </div>  ))}
           </div>
           <br/>
           <div className='clear-button-position'>
           <button className="clear-button" onClick={clear}>🚮 Limpiar carrito  </button>
           </div>
           <div className='total-product-cart'> Hay un total de {cart.length} productos en el carro.</div>
          
           <div className="total-price-box">precio total: $ {PrecioTotal} </div>
  
           <div className='button-buy-position'>
           <button className="button-buy" >🤲 Comprar </button>
           </div>
          </div> 
    )  
}