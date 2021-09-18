import React from "react"

import ProductImagen from '../../assets/producto1.png'
import ProductImagen2 from '../../assets/producto2.png'
import ProductImagen3 from '../../assets/producto3.jpg'
import ProductImagen4 from '../../assets/producto4.jpg'

import '../Product/Product.css'

const  Product= (props) => {

    return (
        <div className= "first-product">
    <div> 
        <img src={ ProductImagen } />
         </div>  
      
        <h3>{props.title}</h3>
        <p className="pricesize">{props.price} </p>
        <button>Buy</button>
    </div>

    
       
    )
    
    }
    
    export default  Product