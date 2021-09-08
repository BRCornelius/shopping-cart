import React from 'react';
import { ProductList } from '../../ui/components';

export const ProductsPage = () => {
  const products = ['a', 'b', 'c'];
  return <div>
    {products && <div>
      <ProductList />
    </div>}
  </div>
}