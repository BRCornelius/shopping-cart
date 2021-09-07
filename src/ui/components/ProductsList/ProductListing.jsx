import React from 'react';

require('./_ProductList.css');

export const ProductListing = item => {
  const {name, description, price, currency, in_stock, vendor} = item.item;
  const inStock = in_stock ? 'Yes' : 'No';
  return <div className="listing-container">
    <div className="name-and-pricing">
      <div className="name-and-vendor">
        <h2>{name}</h2>
        <p>{vendor.name}</p>
      </div>
      <p>${price} {currency}</p>
      <p>In Stock? {inStock}</p>
      <p>ADD TO CART</p>
    </div>
    <div className="description">
      <p dangerouslySetInnerHTML={{__html: description}} />
    </div>
  </div>
}