import React, { useState } from "react";
import { Navbar, Container, Button, Badge } from "react-bootstrap";
import Cart from "./Cart"; // Import the Cart component
//icons
import ShopyIcon from './assets/Shopy.png';
import CartIcon from './assets/Cart.png';
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const cartItemsCount = 5; // Replace with your actual cart item count

  const toggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <Navbar style={{ backgroundColor: '#1d3b55', fontFamily: "cursive"}}>
      <Container>
        
        <Navbar.Brand href="#home" style={{color: 'White', fontFamily: "cursive"}}><img src={ShopyIcon} alt="icon" style={{width:'5vw', height: '7vh'}}/>Shopy</Navbar.Brand>
        <Button onClick={toggleCart} style={{backgroundColor: '#3e5c74'}}>
        <img src={CartIcon} alt="cart-icon" style={{width:'3vw', height: '5vh'}}/>My Cart
  <Badge bg="info" style={{marginLeft: "1rem"}}>
    {cartItemsCount}
  </Badge>
</Button>

        {showCart && <Cart />}
      </Container>
    </Navbar>
  );
};

export default Header;
