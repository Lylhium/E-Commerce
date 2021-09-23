import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import ProductImagen from '../../assets/producto1.png'

import '../Product/Product.css'

const  Product= (props) => {

    return (
        <div className= "first-product">
    <div> 
        <img src={ ProductImagen } />
         </div>  
      
        <h3>{props.title}</h3>
          <p className="pricesize">{props.price} </p>
          <ItemCount/>
          <a class="button1">Comprar</a>
         </div> 
     ) 
    }
    
    export default  Product