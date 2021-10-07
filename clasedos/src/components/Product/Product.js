import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import  { Link } from 'react-router-dom'
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
         <a className="button2" href={`/ItemDetailPage/${props.id} ` } style={{ textDecoration: 'none',color:'black'}} >Ver</a>
         </div> 
         </div>
     ) 
    }
    
    export default  Product