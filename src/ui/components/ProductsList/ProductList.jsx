import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ProductListing } from './ProductListing.jsx';

export const ProductList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.post('https://oskca4d6h7.execute-api.us-east-1.amazonaws.com/dev/get-products', {
      headers: {"Access-Control-Allow-Origin": "*"}
    })
      .then(res => {
        setIsLoaded(true);
        setItems(JSON.parse(res.data.body))
      })
      .catch(err => {
        setIsLoaded(true);
        setError(err)
      })
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (<>
      {items.map(item => <ProductListing item={item} />)}
    </>);
  }
}