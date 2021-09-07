import React from 'react';
import { BannerComponent, ProductList } from '../../ui/components';

export const ProductsPage = () => {
  const products = ['a', 'b', 'c'];
  return <div>
    {products && <div>
      <BannerComponent />
      <ProductList />
    </div>}
  </div>
}