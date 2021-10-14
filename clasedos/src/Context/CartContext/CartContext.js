import { createContext , useState} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = () => {
    const product = { id: props.id, title: props.title, price: props.price ,img: props.image  };
    setCart(currenState => [...currenState, product])
    console.log ( 'items en el carro:',cart )

  }




 // * BONUS: Quito solo 1 elemento del carrito
 const removeItem= item => {
  if (addItem) {
    // 1. BUSCO el producto por el id.
    let product = product.find(element => element.props.id === props.id)
    if (addItem.count === 1) {
      // 1.a. Si solo tengo un elemento lo remuevo con la funcion removeItem()
      removeItem(item)
    } else {
      // 1.a. Creo una copia de mi carrito
      let cart = cart
      // 1.b. Mapeo el carrito
      cart.map(element => {
        // 1.c. Resto 1 al contador
        if (element.item.id === item.id) {
          element.count = element.count - 1
        }
        return element
      })
      // 1.d. actualizo el carrito.
      setCart([...cart])
    }
  } 
}


//eliminar items
const clear = () => {

  return setCart ([])
}



return (
         <CartContext.Provider value= {[cart, setCart,clear,addItem,removeItem]}>
              {props.children}
         </CartContext.Provider>
       );
}
