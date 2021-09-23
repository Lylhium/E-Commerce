import React from "react"
import ItemCount from "../ItemCount/ItemCount"


import '../Product/Product.css'

const  Product= (props) => {

    return (
        <div className= "first-product">
         <div> 
        <img src={`../assets/${props.image} `} />
         </div>  
      
        <h3>{props.title}</h3>
          <p className="pricesize">{props.price} </p>
          <ItemCount/>
          <a className="button1">Comprar</a>
         </div> 
     ) 
    }
    
    export default  Product