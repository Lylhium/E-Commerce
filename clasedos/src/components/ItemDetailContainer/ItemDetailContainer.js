  /*import React,{useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemDetailContainer() {

    const [ProductInfo, setProductInfo] =  useState();

    const ObtenerProducts = new Promise ((resolve) =>{
        setTimeout(()=>{
          const mockProduct = 
         {
              id: '1',
              title: "Cacao en polvo" ,
              img: 'producto1.png' ,
              price: '$650' ,
              description: 'cacao en polvo de 500gr.',
              stock: '10'
          }
      
       resolve(mockProduct) 
        }, 2000)  
  })   

  useEffect(() =>{

ObtenerProducts.then((response) => {
         setProductInfo(response)
})

  }, [])
    return ( 
    
    <div className="Detail-Container">
    contenedor de detalles
    {console.log("infoProduct: ", ProductInfo)}
    <ItemDetail data= {ProductInfo}/>
    </div>
      );
    }
    
    export  default ItemDetailContainer;
    */