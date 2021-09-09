import React, { useState } from 'react';
import './App.css';
import { CartContext } from './context/cart-context';
import { BannerComponent } from './ui/components';
import { checkIfExists, getItemIndex } from './utilities/cartUtils';
import { CartPage, ProductsPage } from './views';

function App() {
  const [isCart, setIsCart] = useState(false);
  const updatePath = () => setIsCart(!isCart);
  const [cartProducts, setCartProducts] = useState([]);
  const dispatchUpdateCart = (type, item) =>{
    switch(type) {
      case('add'):
        if(!checkIfExists(cartProducts, item)) { setCartProducts([...cartProducts, item]) };
        break;
      case('remove'):
        const newCart = cartProducts.splice(getItemIndex(cartProducts, item), 1);
        setCartProducts(newCart);
        break;
      default:
        return cartProducts
    }
  }

  return (
    <CartContext.Provider value={{cartProducts, dispatchUpdateCart}}>
      <div className="App">
        <BannerComponent clickFunction={updatePath} rte={isCart} />
        {!isCart && <ProductsPage />}
        {isCart && <CartPage />}
      </div>
    </CartContext.Provider>
  );
}

export default App;
