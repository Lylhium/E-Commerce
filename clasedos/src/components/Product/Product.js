import React,{useState, useContext} from "react";

import '../Product/Product.css'
import Counter from "../Counter/Counter";
//context
import { CartContext } from "../../Context/CartContext/CartContext";


const  Product= (props) => {
    
    const { stock } = props
    const handleOnAdd = count => addItem(props, count)


const [cart, setCart] = useContext(CartContext);

const addItem = () => {
    const product = { id: props.id ,title: props.title, price: props.price ,img: props.image };
    setCart(currenState => [...currenState, product])
    console.log ( 'items en el carro:',cart )

}

    
return (
       
    <div className="card ">
        <div className= "first-product">
                  <img alt="imagen producto" src={`../assets/${props.image} `} />
                  <div className='producto-title'> {props.title} </div>
                  <div className='producto-description'> {props.description} </div>
                  <p className="price"> $ {props.price} </p>
                  <div className="item-contador"> <Counter stock={stock} onAdd={handleOnAdd}  /> </div>    
                  <a className="button2" href={`/ItemDetailPage/${props.id} ` } style={{ textDecoration: 'none',color:'black'}}>  Ver  </a>
        </div> 
    </div>
 ) }
    
      export default  Product