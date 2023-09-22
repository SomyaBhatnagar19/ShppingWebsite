import React, { useState } from "react";
import { Navbar, Container, Button, Badge } from "react-bootstrap";
import Cart from "./Cart"; 
import { useSelector, useDispatch } from 'react-redux';
import UiActions from "./store/ui-slice";
//icons
import ShopyIcon from "./assets/Shopy.png";
import CartIcon from "./assets/Cart.png";


const Header = () => {
  const dispatch = useDispatch();
  const CartQuantity = useSelector((state)=>state.cart.totalQuantity)
  const toggleCart = () => {
    dispatch(UiActions.toggle());
  };

  return (
    <Navbar style={{ backgroundColor: "#1d3b55", fontFamily: "cursive" }}>
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ color: "White", fontFamily: "cursive" }}
        >
          <img
            src={ShopyIcon}
            alt="icon"
            style={{ width: "5vw", height: "7vh" }}
          />
          Shopy
        </Navbar.Brand>
        <Button onClick={toggleCart} style={{ backgroundColor: "#3e5c74" }}>
          <img
            src={CartIcon}
            alt="cart-icon"
            style={{ width: "3vw", height: "5vh", marginRight: '1rem' }}
          />
          My Cart
          <Badge bg="info" className="m-2" style={{ marginLeft: "1rem" }}>
            {CartQuantity}
          </Badge>
        </Button>

        <Cart />
      </Container>
    </Navbar>
  );
};

export default Header;
