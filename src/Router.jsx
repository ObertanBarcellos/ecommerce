import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Resgister";
import Cart from "./pages/Cart";

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

            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/register">
                <Register />
            </Route>

            <Route exact path="/cart">
                <Cart />
            </Route>

        </Switch>
    );

}