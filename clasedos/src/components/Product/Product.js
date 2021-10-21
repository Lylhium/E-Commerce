import React,{ useContext,useState} from "react";
import  { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../Product/Product.css'
import Counter from "../Counter/Counter";
//context
import { CartContext } from "../../Context/CartContext/CartContext";

const  Product= (props) => {
 
    const { stock } = props
    const handleOnAdd = count => addItem(count)

const [cart, setCart] = useContext(CartContext);

const addItem = (count)  => {
    const product = { id: props.id ,title: props.title, price: props.price ,img: props.image, count: count};
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
                  <div className="item-contador"> <Counter stock={stock} onAdd={handleOnAdd}/> </div>    
                  <Link to={`/ItemDetailPage/${props.id}`}>  <button className="button1"> Ver </button></Link>
        </div> 
    </div>
 ) }
    
      export default  Product