import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/cart-context';

require('./_CartProductList.css');

export const CartProductList = () => {
  const { cartProducts } = useContext(CartContext);
  let sumTotal = cartProducts.reduce((agg, curr) => agg+=curr.price, 0);
  return <>
    {cartProducts.length === 0 && <h1>You have no items in your cart</h1>}
    {cartProducts.length > 0 && <table className="table-container">
        <tr>
          <th className="column-first">Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {cartProducts.map(product => <tr key={product.id}>
          <td className="column-first">{product.name}</td>
          <td>1</td>
          <td>{product.price}</td>
          <td></td>
        </tr>)}
        <tr>
          <td className="column-first"></td>
          <td>Total</td>
          <td>{sumTotal}</td>
          <td></td>
        </tr>
      </table>}
  </>
}