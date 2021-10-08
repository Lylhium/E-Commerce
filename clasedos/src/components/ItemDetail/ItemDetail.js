//imports
import React,{useState, useEffect} from "react";
import  { Link } from 'react-router-dom'
import "../ItemDetail/ItemDetail.css"

import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(props) {


   const [items, setItems]  = useState(0)

   const onAdd = () => {
      
      {if(items < props.data.stock){
         setItems (items + 1)
         }
        }
       }

   const  onSubstract = () => {
      items !== 0 && setItems (items - 1)
    
   }    
    return ( 
    <div className="Item-Detail">       
              <div className="item-image"> 
                 <img alt='imagendeproducto'src={`../assets/${props.data.img } `} />
              </div>
                 <div className='item-title-desc'>
                    <h1> {props.data.title} </h1>
                    <h2> {props.data.description} </h2>
                    <h3>{props.data.price}</h3>
                    <div className="item-contador"> <ItemCount onAdd={onAdd} onSubstract={onSubstract} items={items}/> </div> 
                 <div className='btn'>
                 <button className="button1"> <Link to='/cart' style={{ textDecoration: 'none',color:'black'}} >Comprar</Link> </button>
                 </div> 
              <div className='item-stock'>(quedan {props.data.stock} disponibles.)</div>
              <div className="descuento"> *5% de descuento Pagando en efectivo o transferencia.</div>
                <div className="thoughts"> *Sacate las dudas Antes de comprar si tenes alguna duda escribinos por Whatsapp. </div>
                    </div>
           
              </div>  
      );}

    export  default ItemDetail;
    