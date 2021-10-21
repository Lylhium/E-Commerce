import { createContext , useState} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (count)  => {
    const product = { id: props.id ,title: props.title, price: props.price ,
    img: props.image, count: count};

    setCart(currenState => [...currenState, product])
    console.log ( 'items en el carro:',cart )

    }

//eliminar items
const clear = () => {

  return setCart ([])
}

return (
         <CartContext.Provider value= {[cart, setCart,clear,addItem]}>
              {props.children}
         </CartContext.Provider>
       );
}
