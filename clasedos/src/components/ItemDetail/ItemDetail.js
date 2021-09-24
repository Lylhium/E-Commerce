import React from "react";



function ItemDetail(props) {


    return ( 
    
    <div className="Item-Detail">
    {console.log("data de detalle: ", props.data)} 
    <div> 
        <img src={`../assets/${props.data.img } `} />

    </div>
    </div>
    
      );
    }
    
    
    export  default ItemDetail;
    