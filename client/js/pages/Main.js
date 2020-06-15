import React from "react";
import { Switch, Route } from "react-router-dom";

import Products from "./Products";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Thanks from "./Thanks";

export default function Main(){
    return(
        <>
            <Switch>
                <Route exact path="/" component={Products} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/thanks" component={Thanks} />
            </Switch>
        </>
    );
}