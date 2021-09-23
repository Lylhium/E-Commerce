import React, { useState } from "react";
import Product from "../Product/Product";

export default function ListProducts() {

    return (
           <div>
                 <Product title="Cacao en Polvo" price="$650" />
                 <Product title="Spirulina en Polvo" price="$700" />
                 <Product title="Te verde en polvo" price="$650" />
                 <Product title="Te de Manzana" price="$700" />  
           </div>
    )
  }
