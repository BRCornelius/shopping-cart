import React from 'react';

export const CartProductList = props => {
    const {cart} = props;
    return cart.map(item => <p>{item.name}</p>)
}