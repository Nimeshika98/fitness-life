import React, { useState } from "react";
import './cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { products } from "./products";


const  Cart = () => {

    const [item, setItem] = useState(products);

  return(
    <>
    <header>
      <div className="continue-shopping">
        <img src="./images/arrow2.png" alt="arrow" className="arrow-icon"/>
        <h3>Continue Shopping</h3>
      </div>

      <div className="cart-icon">
        <img src="./images/cart.png" alt="cart" />
        <p>7</p>
      </div>
    </header>

    <section className="main-cart-section">
      <h1>shopping Cart</h1>
      <p className="total-items">You have <span className="total-items-count"> 7 </span> items in shopping cart</p>
      <div className="cart-items">
        <div className="cart-items-container">
        <Scrollbars>
            {
                item.map((curItem) =>{
                    return  <Items key={ curItem.id} {...curItem}/>
                })
            }
        </Scrollbars>

        </div>
      </div>

        <div className="card-total">
            <h3>Cart Total : <span>22300 Rs</span></h3>
            <button>Checkout</button>
        </div>
      
    </section>
    </>
  )
}

export default Cart