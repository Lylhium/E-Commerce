//imports
import React,{useState} from "react"
import '../ItemCount/ItemCount.css'

export default function ItemCount(props) {
const [items, setItems]  = useState(0)

const Add = () => {
 {if(items < props.stock){
    setItems (items + 1)
    }
   }
  }
const Substract = () => {
    if (items > 0){
        setItems ( items -1)        
    }    
}
return (
    <div> 
     <button className="substract" onClick={Substract} > - </button>
       {items}
     <button  className="add" onClick={Add} > + </button>
    </div> 
 )}
