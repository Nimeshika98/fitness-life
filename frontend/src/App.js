import React from 'react';
//import './App.css';
//import './components/cart.css';
//import Header from "./components/header";
//import Footer from "./components/footer";
import Cart from "./components/Cart";
import WishList from './components/WishList'
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewProduct from "./components/viewProduct";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div> 
      
      <WishList/>
      <Router>
      <Switch>
          <Route path="./components/Cart">
            <Cart />
          </Route>
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
