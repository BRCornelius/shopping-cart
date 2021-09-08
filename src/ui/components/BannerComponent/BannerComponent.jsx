import React from 'react';

require('./_BannerComponent.css');

export const BannerComponent = props => {
  const {rte, clickFunction} = props
  let linkCopy = rte ? 'Products' : 'MyCart';
  let headerCopy = rte ? 'My Cart' : 'Products';
  return <div className="banner-container">
    <h3>{headerCopy}</h3>
    <button onClick={clickFunction}>{linkCopy}</button>
  </div>
}