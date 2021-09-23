import React,{useState} from "react"

export default function ItemCount(props) {
const [items, setItems]  = useState(0)
const  [stock,setStock]  = useState(5)
const [disablebutton, setdisablebutton] = useState(false)


const Add = () => {
    if(items < stock){
    setItems (items +1)
    }else {
        setdisablebutton(true)
    }
}
const Substract = () => {
    setItems (items -1)
}

    return (
         <div> 
               <button onClick={Substract} > - </button>
               {items}
               <button disabled={disablebutton}  onClick={Add} > + </button>
         </div> 
     ) 
    }
