//imports
import React,{ useContext} from "react";

import Counter from "../Counter/Counter";
import "../ItemDetail/ItemDetail.css"

//context
import { CartContext } from "../../Context/CartContext/CartContext";


function ItemDetail(props) {

   const { stock } = props
   const handleOnAdd = count => addItem(props, count)

   
   const [cart,setCart,clear,PrecioTotal]= useContext(CartContext);
   const addItem = () => {
      const product = {id: props.data.id, title: props.data.title, price: props.data.price ,img: props.data.img };
      setCart(currenState => [...currenState, product])
      console.log ('items en el carro:', cart )
  }


    return ( 
    <div className="Item-Detail">       
              <div className="item-image"> 
                 <img alt='imagendeproducto'src={`../assets/${props.data.img } `} />
              </div>
                 <div className='item-title-desc'>
                    <h1> {props.data.title} </h1>
                    <h2> {props.data.description} </h2>
                    <h3>${props.data.price}</h3>
                    <div className="item-contador"> <Counter stock={props.data.stock} onAdd={handleOnAdd}  /> </div> 
                 <div className='btn'>
             
                 </div> 
              <div className="descuento"> *5% de descuento Pagando en efectivo o transferencia.</div>
                <div className="thoughts"> *Sacate las dudas Antes de comprar si tenes alguna duda escribinos por Whatsapp. </div>
                    </div>
           
              </div>  
      );}

    export  default ItemDetail;
    