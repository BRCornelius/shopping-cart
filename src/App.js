import React, { useState } from 'react';
import './App.css';
import { BannerComponent } from './ui/components';
import { CartPage, ProductsPage } from './views';

function App() {
  const [isCart, setIsCart] = useState(false);
  const clickFunction = () => setIsCart(!isCart);
  let cartProducts = [];
  const checkIfExists = item => cartProducts.some(element => element.id === item.id);
  const getItemIndex = item => cartProducts.some(element => element.id === item.id);
  const updateCart = (action, item) => {
    switch(action) {
      case('add'):
        if(!checkIfExists(item)) { cartProducts.push(item)}
        break;
      case('remove'):
        cartProducts.splice(getItemIndex, 1);
        break;
      default:
        return cartProducts
    }
  }
  return (
    <div className="App">
      <BannerComponent clickFunction={clickFunction} rte={isCart} />
      {!isCart && <ProductsPage updateCart={updateCart} />}
      {isCart && <CartPage updateCart={updateCart} cart={cartProducts} />}
    </div>
  );
}

export default App;
