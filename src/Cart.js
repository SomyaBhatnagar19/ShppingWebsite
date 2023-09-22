import React, { useState } from 'react';
import { Modal, Button, Toast } from 'react-bootstrap';
import {useDispatch, useSelector } from 'react-redux';
import { CartActions } from './store/CartSlice';


const Cart = () => {
  const [showModal, setShowModal] = useState(true);
  const [showToast, setShowToast] = useState(true);
  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state)=>state.cart.totalQuantity);
  const totalPrice = useSelector ((state)=>state.cart.totalPrice);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  

  const handleAddItem = (itemId) => {
    dispatch(CartActions.increaseItemQuantity(itemId));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(CartActions.decreaseItemQuantity(itemId))
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
            {cart.map(item => (
              <li key={item.productId} className="list-group-item d-flex justify-content-between align-cart-center">
                <div>
                  {item.name} - Rs. {item.price} x {item.quantity}
                </div>
                <div>
                  <Button variant="success" onClick={() => handleAddItem(item.productId)}>+</Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button variant="danger" onClick={() => handleRemoveItem(item.productId)} >-</Button>
                </div>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <p className="text-primary">Total: Rs. {totalPrice}</p>
          <Button variant="primary">Checkout</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
