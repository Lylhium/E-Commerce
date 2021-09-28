import React from "react"
import ItemCount from "../ItemCount/ItemCount"


import '../Product/Product.css'

const  Product= (props) => {

    return (
        <div className= "first-product">
         <div> 
        <img alt="imagen producto" src={`../assets/${props.image} `} />
         </div>  
      
        <h3>{props.title}</h3>
          <p className="pricesize">{props.price} </p>
          <ItemCount stock ={props.stock}/>
          <button className="button1">Comprar</button>
         </div> 
     ) 
    }
    
    export default  Product