import React from 'react';
import { ProductList } from '../../ui/components';

export const ProductsPage = props => {
  const {updateCart} = props;
  return <div>
    <ProductList updateCart={updateCart}/>
  </div>
}