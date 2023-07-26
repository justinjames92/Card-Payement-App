// @flow strict

import * as React from "react";
// import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Images/Freedom logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import cart from "../../Images/add-cart.png";
import favorite from "../../Images/favorite.png";
import { CartContext } from "./../../Context/Context";
import { useContext } from "react";
import {  useState,useEffect } from "react";

const MenuList = () => {
    const [selectedItems, setSelectedItems] = useState(JSON.parse(localStorage.getItem("selectedItems"),"[]"));

  useEffect(() => {
    let  selectedItems =   JSON.parse(localStorage.getItem("selectedItems"),"[]");
  }, [JSON.parse(localStorage.getItem("selectedItems"),"[]")]); //dependency array


  return(

  
    <Navbar className="navColor" variant="dark">
      <Container className="navColor">
        <Navbar.Brand href="/">
          FashionWorld
          <img src={logo} width={"25px"} height={"25px"} alt=""></img>
        </Navbar.Brand>

        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Products">Products</Nav.Link>
          <Nav.Link href="#Support">Cart</Nav.Link>
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
              src={cart}
              width={"25px"}
              height={"25px"}
            ></img>

            </a>
            
            <span>{selectedItems.length}</span>
            
          </div>
          <img
          alt=""
            title="favorite"
            src={favorite}
            width={"25px"}
            height={"25px"}
          ></img>
        </div>
      </Container>
    </Navbar>
  );
};

export default MenuList;
