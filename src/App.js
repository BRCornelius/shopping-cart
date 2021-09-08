import React, { useState } from 'react';
import './App.css';
import { BannerComponent } from './ui/components';
import { CartPage, ProductsPage } from './views';

function App() {
  const [isCart, setIsCart] = useState(false);
  const clickFunction = () => setIsCart(!isCart)
  return (
    <div className="App">
      <BannerComponent clickFunction={clickFunction} rte={isCart}/>
      {!isCart && <ProductsPage />}
      {!isCart && <CartPage />}
    </div>
  );
}

export default App;
