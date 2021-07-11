import React from 'react';
//import './App.css';
//import './components/cart.css';
//import Header from "./components/header";
//import Footer from "./components/footer";
import Cart from "./components/Cart";
import WishList from './components/WishList';
import ViewProduct from "./components/ViewProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div> 
      
      <Router>
        <Switch>
          <Route exact path="/viewproduct" component={ViewProduct}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/wishlist" component={WishList}/>
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
