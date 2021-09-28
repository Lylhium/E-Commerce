import React from "react";
import "../ItemDetail/ItemDetail.css"


function ItemDetail(props) {


    return ( 
    
    <div className="Item-Detail">
    {console.log("data del item:", props.data)} 
    <div className="item-image"> 
        <img alt='imagendeproducto'src={`../assets/${props.data.img } `} />
    </div>
   
      <h2>{props.data.title} </h2>
      <div className='item-price-detail'>{props.data.price} </div>
         <button className="button1">Agregar al Carrito</button>
      <div className='item-description'>{props.data.description}</div>
      <div className='item-stock'>(quedan {props.data.stock} disponibles.)</div>
  
    </div>
    
      );
    }
    
    
    export  default ItemDetail;
    