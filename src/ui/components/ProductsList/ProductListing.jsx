import React from 'react';

require('./_ProductList.css');

export const ProductListing = props => {
  const {item, updateCart} = props;
  const {name, description, price, currency, in_stock, vendor} = item;
  const inStock = in_stock ? 'Yes' : 'No';
  const addToCart = () => updateCart('add', item);
  return <div className="listing-container">
    <div className="name-and-pricing">
      <div className="name-and-vendor">
        <h2>{name}</h2>
        <p>{vendor.name}</p>
      </div>
      <p>${price} {currency}</p>
      <p>In Stock? {inStock}</p>
      <button onClick={addToCart}>ADD TO CART</button>
    </div>
    <div className="description">
      <p dangerouslySetInnerHTML={{__html: description}} />
    </div>
  </div>
}