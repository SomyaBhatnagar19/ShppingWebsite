import React, { useState } from 'react';
import { Modal, Button, Toast } from 'react-bootstrap';

const Cart = () => {
  const [showModal, setShowModal] = useState(true);
  const [showToast, setShowToast] = useState(true);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 1 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
    { id: 3, name: 'Product 3', price: 25, quantity: 1 }
  ]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleAddItem = (itemId) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  return (
    <>
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000} 
        autohide
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#28a745',
          color: '#fff',
          zIndex: 9999 // Place the toast above everything else
        }}
      >
        <Toast.Body>Your cart is opened. Happy shopping!</Toast.Body>
      </Toast>

      <Modal show={showModal} onHide={toggleModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span>Cart</span> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="list-group">
            {cartItems.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  {item.name} - Rs. {item.price} x {item.quantity}
                </div>
                <div>
                  <Button variant="success" onClick={() => handleAddItem(item.id)}>+</Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button variant="danger" onClick={() => handleRemoveItem(item.id)} disabled={item.quantity <= 1}>-</Button>
                </div>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <p className="text-primary">Total: Rs. {getTotalPrice()}</p>
          <Button variant="primary">Checkout</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
