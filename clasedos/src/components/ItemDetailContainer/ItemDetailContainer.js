//imports
import React,{useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
//firebase
import db from "../../firebase";
import {  collection, getDocs,doc,getDoc } from "@firebase/firestore";


export  default ItemDetailContainer;
    
function ItemDetailContainer() {

  const {  productId } = useParams(); 

  const [ProductInfo, setProductInfo] =  useState([])

 
  async function Getproducts (db) {
    const productsCollection = collection (db, 'products');
    const productsSnapShot = await getDocs (productsCollection);
    const ProductsList = productsSnapShot.docs.map(doc => doc.data ());
    const ProductsID = productsSnapShot.docs.map ( doc => doc.id)
    console.log ("products ID: ", ProductsID)

    return setProductInfo(ProductsList);

     }
     useEffect (() => {
       getProduct(db)
      Getproducts(db)
      } ,[productId])      

    async function getProduct(db) {
      const docRef = doc(db, 'products',"product1" )
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()) {
      console.log('docdata',docSnap.data());

      }
      return setProductInfo(docRef)
    }
                  
return ( 
     <div className="Detail-Container">
    { <ItemDetail data= {ProductInfo}/>}
     </div> );
    }
    
 