import React from "react"
import ItemCount from "../ItemCount/ItemCount"


import '../Product/Product.css'

const  Product= (props) => {
  
    return (
       
        <div className="card ">
        <div className= "first-product">
        <img alt="imagen producto" src={`../assets/${props.image} `} />
        <div className='producto-title'>{props.title}</div>
        <div className='producto-description'>{props.description}  </div>
          <p className="price">{props.price} </p>
          <ItemCount stock ={props.stock}/>
          <button className="button1">Comprar</button>
          <button className="button2">Ver</button>
         </div> 
         </div>
     ) 
    }
    
    export default  Product