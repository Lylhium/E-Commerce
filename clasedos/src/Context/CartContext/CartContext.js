import { createContext , useState} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  //agregar item
const addItem = () => {
  const product = { item: props.data.title, price: props.data.price};
  setCart(currenState => [...currenState, product])
  console.log ( cart )
}
//precio total de items
const PrecioTotal = cart.reduce((acc,curr) => acc + curr.price , 0);

//eliminar items
const clear = () => {

  return setCart ([])
}



return (
         <CartContext.Provider value= {[cart, setCart,clear,addItem,PrecioTotal]}>
              {props.children}
         </CartContext.Provider>
       );
}
