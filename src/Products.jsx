import React, { useState } from 'react';

const PAGE_PRODUCTS = 'Products';
const PAGE_CART = 'Cart';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
    name: '1GB Data Bundle',
    cost: 'R59.99',
    image:'https://image.shutterstock.com/image-illustration/1-gb-3d-word-on-260nw-1368608132.jpg'
      },
  {
    name: '2GB Data Bundle',
    cost: 'R99.99',
    image:'https://image.shutterstock.com/image-illustration/2-gb-3d-word-on-260nw-1368608129.jpg'
  },
  {
    name: '3GB Data Bundle',
    cost: 'R149.99',
    image:'https://image.shutterstock.com/image-illustration/5-gb-3d-word-on-260nw-1368608120.jpg'
  },
  {
    name: '8GB Data Bundle',
    cost: 'R349.99',
    image:'https://image.shutterstock.com/image-illustration/8-gb-3d-word-on-260nw-1368608123.jpg'
  },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(PAGE_PRODUCTS);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={PAGE_PRODUCTS}>{PAGE_PRODUCTS}</option>
        <option value={PAGE_CART}>{PAGE_CART}</option>
      </select>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(Products)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}