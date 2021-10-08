//imports
import React,{useState} from "react"
import '../ItemCount/ItemCount.css'

export default function ItemCount(props) {


//const Add = () => {
// {if(items < props.stock){
//    setItems (items + 1)
//    }
//   }
//  }
//const Substract = () => {
//    if (items > 0){
//        setItems ( items -1)        
//    }    
//}
return (
    <div> 
     <button onClick={props.onSubstract} className="substract"> - </button>
     {props.items}
     <button onClick={props.onAdd} className="add"> + </button>
    </div> 
 )}
