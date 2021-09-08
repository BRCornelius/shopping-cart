import React, { useState } from 'react';
import './App.css';
import { BannerComponent } from './ui/components';
import { ProductsPage } from './views/Products/ProductsPage';

function App() {
  const [isCart, setIsCart] = useState(false);
  const clickFunction = () => setIsCart(!isCart)
  return (
    <div className="App">
      <BannerComponent clickFunction={clickFunction} rte={isCart}/>
      {!isCart && <ProductsPage />}
    </div>
  );
}

export default App;
