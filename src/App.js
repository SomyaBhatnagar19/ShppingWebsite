import React, {useEffect} from 'react';
import Header from './Header';
import ProductList from './ProductList';
import {useSelector} from 'react-redux';


function App() {
  const cart = useSelector((state)=>state.cart.items);

  useEffect(()=>{
    fetch('https://reduxshoppingapp-b6011-default-rtdb.firebaseio.com/Cart.json', {
      method: "PUT",
      body: JSON.stringify(cart),
    })
  },[cart]);


  return (
    <div>
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;
