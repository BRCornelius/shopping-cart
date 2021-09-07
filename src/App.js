import './App.css';
import { ProductsPage } from './views/Products/ProductsPage';

function App() {
  const cart = false;
  return (
    <div className="App">
      {!cart && <ProductsPage />}
    </div>
  );
}

export default App;
