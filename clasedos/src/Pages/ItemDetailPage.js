import React from "react";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { useParams } from "react-router-dom";

export default function ItemDetailPage() {

const { productId } = useParams ()
console.log("parametros ", useParams() )



 return(
    <>
      <ItemDetailContainer/>
     
    </> 
 )    
}