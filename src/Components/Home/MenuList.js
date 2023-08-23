// @flow strict

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Images/Freedom logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import cartImage from "../../Images/add-cart.png";
import favorite from "../../Images/favorite.png";
import { useContext } from "react";
import { CartContext } from "../../Context/Context";


const MenuList = () => {
  const { cart} = useContext(CartContext);
 
console.log(cart);


  return(

  
    <Navbar className="navColor" variant="dark">
      <Container className="navColor">
        <Navbar.Brand href="/">
          FashionWorld
          <img src={logo} width={"25px"} height={"25px"} alt=""></img>
        </Navbar.Brand>

        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
        
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button className="btn btn-dark">Search</Button>
        </Form>
        <div>
          <div className="cartLength">
            <a href="/Carts">
            <img
            alt=""
              className="me-4"
              title="cart"
              src={cartImage}
              width={"25px"}
              height={"25px"}
            ></img>

            </a>
            
            <span>{cart.length}</span>
            
          </div>
          <a href="/Favorite">
          <img
          alt=""
            title="favorite"
            src={favorite}
            width={"25px"}
            height={"25px"}
          ></img>
          </a>
        
        </div>
      </Container>
    </Navbar>
  );
};

export default MenuList;
