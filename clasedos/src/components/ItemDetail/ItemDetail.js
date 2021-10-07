//imports
import React from "react";
import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(props) {
    return ( 
    <div className="Item-Detail">
         {console.log("data del item:", props.data)} 
          
              <div className="item-image"> 
                 <img alt='imagendeproducto'src={`../assets/${props.data.img } `} />
              </div>
                 <div className='item-title-desc'>
                    <h1> {props.data.title} </h1>
                    <h2> {props.data.description} </h2>
                    <h3>{props.data.price}</h3>
                    <div className="item-contador"> <ItemCount stock ={props.data.stock}/> 
                 </div> 
                 <div className='btn'>
                 <button className='btn-buy'>Agregar al Carrito</button>
                 </div> 
              <div className='item-stock'>(quedan {props.data.stock} disponibles.)</div>
              <div className="descuento"> *5% de descuento Pagando en efectivo o transferencia.</div>
                <div className="thoughts"> *Sacate las dudas Antes de comprar si tenes alguna duda escribinos por Whatsapp. </div>
                    </div>
           
              </div>  
      );}

    export  default ItemDetail;
    