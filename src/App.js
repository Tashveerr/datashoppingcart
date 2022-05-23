import React, { useState } from 'react';
import './App.css';
import Products from './Products';
import Cart from './Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
 <div className="App">
      <h1>DATASHOPPING</h1>
      {}
       <div>
        <h3>1GB Data</h3>
        <h4>R59.99</h4>
        <img src="https://image.shutterstock.com/image-illustration/1-gb-3d-word-on-260nw-1368608132.jpg"/>
        <button>Add to Cart</button>
        </div>

        <div>
        <h3>2GB Data</h3>
        <h4>R99.99</h4>
        <img src="https://image.shutterstock.com/image-illustration/2-gb-3d-word-on-260nw-1368608129.jpg"/>
        <button>Add to Cart</button>
        </div>

        <h3>5GB Data</h3>
        <h4>R249.99</h4>
        <img src="https://image.shutterstock.com/image-illustration/5-gb-3d-word-on-260nw-1368608120.jpg"/>
        <button>Add to Cart</button>

        <div>
        <h3>8GB Data</h3>
        <h4>R449.99</h4>
        <img src="https://image.shutterstock.com/image-illustration/8-gb-3d-word-on-260nw-1368608123.jpg"/>
        <button>Add to Cart</button>
        </div>
        </div>
  );
}

export default App;