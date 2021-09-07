import React from 'react';
import { BannerComponent, ProductListContainer } from '../../ui/components';

export const ProductsPage = () => {
  const products = ['a', 'b', 'c'];
  return <div>
    {products && <div>
      <BannerComponent />
      <ProductListContainer />
    </div>}
  </div>
}