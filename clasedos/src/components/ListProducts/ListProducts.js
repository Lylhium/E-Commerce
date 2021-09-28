import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import '../ListProducts/ListProducts.css'
export default function ListProducts() {
const [products, setProduct] = useState([])

const ObtenerProducts = new Promise ((resolve) =>{
      setTimeout(()=>{
        const mockProducts = [ 
       {
            id: '1',
            title: "Cacao en polvo" ,
            img: 'producto1.png' ,
            price: '$650' ,
            description: 'cacao en polvo de 500gr.',
            stock: '7',
        },
        {
              id: '2',
              title: "Spirulina en polvo" ,
              img: 'producto2.png' ,
              price: '$700' ,
              description: 'Spirulina en polvo de 500gr.',
              stock: '9',
              },
              {
              id: '3',
              title: "Te verde en Polvo" ,
              img: 'producto3.jpg' ,
              price: '$650' ,
              description: 'te verde de 500gr.',
              stock: '2',
   },
                    {
               id: '4',
               title: "Te de Manzana" ,
               img: 'producto4.jpg' ,
               price: '$700' ,
               description: 'Te de manzana de 500gr.',
               stock: '4',
       }, 
       
  ]   
     resolve(mockProducts) 
      }, 2000)  
})   

   useEffect(()=>{
       ObtenerProducts.then(  (res) =>{
       console.log("productos: ", res)
       setProduct(res)
       })
},[])


    return (
      <div>
        {products.length !== 0 ? (
        products.map( (product)=> {

                     return (
         <Product key={`item-${product.id}`} title={product.title} price={product.price} image={product.img} stock={product.stock} /> )
           })
        ) : (

          <div className="loading">  Loading . . . </div>
        )}
      </div>
    )
  }
