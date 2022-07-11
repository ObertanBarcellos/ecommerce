import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

export default () => {
    return (
        
        <Switch>

            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/products">
                <ProductList />
            </Route>

        </Switch>
    );

}