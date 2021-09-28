import React from "react";
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import ListProducts from "../components/ListProducts/ListProducts";
export default function AppRouter(){

    return (
   <BrowserRouter>
        <Switch> 
          <Route exact path="/productos">
                <div>pantalla de productos</div>
         </Route>
          <Route path="/" >
       </Route>
   </Switch>
   </BrowserRouter>

    )
}