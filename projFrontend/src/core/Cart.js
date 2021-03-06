import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";
import { loadCart } from "./helper/cartHelper";
import StripeCheckout from "./StripeCheckout";

const Cart = () => {
  const [products, setproducts] = useState([]);
  const [reload, setreload] = useState(false);

  useEffect(() => {
    setproducts(loadCart());
  }, [reload]);

  const loadAllProducts = () => {
    return (
      <div className='text-center'>
        <h2>This section is for load products</h2>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setreload={setreload}
            reload={reload}
          />
        ))}
      </div>
    );
  };

  const LoadCheckout = () => {
    return (
      <div className='text-center'>
        <h2>This section is for checkout</h2>
      </div>
    );
  };

  return (
    <Base title='Cart Page' description='Ready to Checkout'>
      <div className='row text-center'>
        <div className='col-6'>{loadAllProducts()}</div>
        <div className='col-6'><StripeCheckout products={products} setreload={setreload} /></div>
      </div>
    </Base>
  );
};

export default Cart;
