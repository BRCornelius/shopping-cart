import React from 'react';
import { CartProductList } from '../../ui/components';

export const CartPage = props => {
    const {cart} = props;
    return <div>
      <CartProductList cart={cart} />
    </div>
  }