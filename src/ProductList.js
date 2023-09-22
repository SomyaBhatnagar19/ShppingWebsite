import React, { useState } from 'react';
import { Card, Button, Toast } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { CartActions } from './store/CartSlice';


const ProductList = () => {
  const [showToast, setShowToast] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, title: 'Product 1', description: 'This is Product 1', price: 20 },
    { id: 2, title: 'Product 2', description: 'This is Product 2', price: 30 },
    { id: 3, title: 'Product 3', description: 'This is Product 3', price: 25 }
  ];

  const dispatch = useDispatch();


  const addToCart = (product) => {
    dispatch(CartActions.addItemToCart(product));
    setShowToast(true);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card style={{ backgroundColor: '#f9f9f9' }}>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">ID: {product.id}</Card.Subtitle>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: Rs. {product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div
        style={{
          position: 'fixed',
          top: '80px', // Adjust the top position as needed
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
        }}
      >
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide
          style={{
            backgroundColor: '#28a745',
            color: '#fff',
          }}
        >
          <Toast.Body>Item added to cart!</Toast.Body>
        </Toast>
      </div>
    </div>
  );
};

export default ProductList;
