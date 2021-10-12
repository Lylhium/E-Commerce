import React,{useState, useContext} from "react";
import ItemCount from "../ItemCount/ItemCount"
import  { Link } from 'react-router-dom'
import '../Product/Product.css'
//context
import { CartContext } from "../../Context/CartContext/CartContext";


const  Product= (props) => {
  
    const [items, setItems]  = useState(0)

    const onAdd = () => {
       
       {if(items < props.stock){
          setItems (items + 1)
          }
         }
        }
 
    const  onSubstract = () => {
       items !== 0 && setItems (items - 1)
     

       
    }    

const [cart, setCart] = useContext(CartContext);

const addItem = () => {
    const product = { item: props.title, price: props.price , };
    setCart(currenState => [...currenState, product])
    console.log ( cart )
}
    
return (
       
    <div className="card ">
        <div className= "first-product">
                  <img alt="imagen producto" src={`../assets/${props.image} `} />
                  <div className='producto-title'> {props.title} </div>
                  <div className='producto-description'> {props.description} </div>
                  <p className="price"> $ {props.price} </p>
                  <div className="item-contador"> <ItemCount onAdd={onAdd} onSubstract={onSubstract} items={items}/> </div>    
                  <button className="button1" onClick={addItem} >  Comprar  </button>
                  <a className="button2" href={`/ItemDetailPage/${props.id} ` } style={{ textDecoration: 'none',color:'black'}}>  Ver  </a>
        </div> 
    </div>
 ) }
    
      export default  Product