import React, { useState } from "react";
import Product from "../Product/Product";

export default function ListProducts() {

 const [stock,setStock] = useState(0)
 const [date, setDate] = useState();
 const addStock = () => {
   setStock (stock + 1);
   setDate(new Date().toLocaleString());
 }
    return (
           <div>
            {console.log("clicks en add stocks")}
               <button onClick= {addStock}> ADD STOCK</button>
                <h2>{stock}</h2>
                <p>ultimo click: {date}</p>
                 <Product title="Cacao en Polvo" price="$650" />
                 <Product title="Spirulina en Polvo" price="$700" />
                 <Product title="Te verde en polvo" price="$650" />
                 <Product title="Te de Manzana" price="$700" />
                 
           </div>
    )
  }
