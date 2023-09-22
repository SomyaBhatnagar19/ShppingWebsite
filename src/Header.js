import React, { useState } from 'react';
import { Navbar, Container, Button, Badge } from 'react-bootstrap';
import Cart from './Cart'; // Import the Cart component

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const cartItemsCount = 5; // Replace with your actual cart item count

  const toggleCart = () => {
    setShowCart(prevShowCart => !prevShowCart);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Shopy</Navbar.Brand>
        <Button onClick={toggleCart} style={{backgroundColor: '#0e416c'}}> 
           My Cart
          <Badge style={{backgroundColor: '#dcedf9'}} className="ml-1">
            {cartItemsCount}
          </Badge>
        </Button>
        {showCart && <Cart />}
      </Container>
    </Navbar>
  );
};

export default Header;
