import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";

export default () => {
    return (
        
        <Switch>

            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/products">
                <ProductList />
            </Route>

            <Route exact path="/product">
                <Product />
            </Route>

        </Switch>
    );

}