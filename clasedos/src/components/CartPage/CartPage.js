//imports
import React, {useContext} from 'react';
import '../CartPage/CartPage.css'
//contexts
import { CartContext }  from '../../Context/CartContext/CartContext';



export default function CartPage() {
    const [cart,setCart,clear]= useContext(CartContext);

    const PrecioTotal = cart.reduce((acc,curr) => acc + curr.price * curr.count , 0);

    const itemTotal = cart.reduce((acc,curr) => acc + curr.count,0);

    const removeItemFromCart = (id) => {
    
        setCart(cart.filter(item => item.id !== id) 
      
        )
      }
    
    
    return (
            <div className="Contenedor">
            <u> <h2 className='cart-title'>🛒 Carrito</h2> </u>
           <br/>
            {cart.map(item => ( <div className='cart-product'>  <div className='imagen'> <img alt="imagen producto" href='imgproduct' src={`../assets/${item.img}`}/> </div>  
            <div className=" cart-title-box"> {item.count}x  {item.title}  </div>
             <div  className="cart-price-box">  $ {item.price} <button onClick={ () => removeItemFromCart(item.id)} className='remove'> X  </button> </div>
            </div>  ))}
           <br/>
           <div className='clear-button-position'>
           <div className='total-product-cart'> Hay un total de {itemTotal} productos en el carro.</div>
           <button className="clear-button" onClick={clear}>🚮 Vaciar Carrito </button>
           </div>
   
           <div className="total-price-box">precio total: $ {PrecioTotal} </div>
  
           <div className='button-buy-position'>
           <button className="button-buy" >🤲 Comprar </button>
           </div>
          </div> 
    )  
}