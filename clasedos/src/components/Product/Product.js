import React from "react"
import ProductImagen from '../../assets/producto1.png'


const  Product= (props) => {

    return (
        <div className= "first-product">
    <div> 
        <img src={ ProductImagen } />
         </div>  
      
        <h3>{props.title}</h3>
        <p>{props.price} </p>
        <button>Buy</button>
    </div>
       
    )
    
    }
    
    export default  Product