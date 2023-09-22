import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Cart = () => {
  const [showModal, setShowModal] = useState(true); // Initially set to true to show the cart

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const cartItems = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 25 }
  ]; 

  return (
    <Modal show={showModal} onHide={toggleModal} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="list-group">
          {cartItems.map(item => (
            <li key={item.id} className="list-group-item">
              {item.name} - Rs. {item.price}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <p>Total: Rs. {cartItems.reduce((total, item) => total + item.price, 0)}</p>
        <button className="btn btn-primary">Checkout</button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
