import React,{useState} from "react"

export default function ItemCount(props) {
const [items, setItems]  = useState(0)




const Add = () => {
 {
     if(items < props.stock){
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
               <button  onClick={Substract} > - </button>
               {items}
               <button   onClick={Add} > + </button>
         </div> 
     ) 
    }
