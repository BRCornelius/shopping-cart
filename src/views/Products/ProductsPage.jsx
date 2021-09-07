import React from 'react';
import {BannerComponent} from '../../ui/components';

export const ProductsPage = () => {
  const products = ['a', 'b', 'c'];
  return <div>
    {products && <div>
      <BannerComponent />
      {/* <ProductsList /> */}
    </div>}
  </div>
}