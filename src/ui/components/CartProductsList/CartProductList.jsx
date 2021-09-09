import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/cart-context';

export const CartProductList = () => {
  const { cartProducts } = useContext(CartContext);
  let sumTotal = cartProducts.reduce((agg, curr) => agg+=curr.price, 0);
  return <table>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th></th>
      </tr>
      {cartProducts.map(product => <tr key={product.id}>
        <td>{product.name}</td>
        <td>1</td>
        <td>{product.price}</td>
        <td></td>
      </tr>)}
      <tr>
        <td></td>
        <td></td>
        <td>{sumTotal}</td>
        <td></td>
      </tr>
    </table>
}