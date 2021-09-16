import React, { useState } from "react";
import Product from "../Product/Product";

export default function ListProducts() {

 const [stock,setStock] = useState(0)
 const addStock = () => {
   setStock (stock + 1)
 }
    return (
           <div>
            {console.log("clicks en add stocks")}
               <button onClick= {addStock}> ADD STOCK</button>
                <h2>{stock}</h2>

                 <Product title="producto 1" price="1000" />
           </div>
    )
  }
