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

const MenuList = () => {
  return (
    <Navbar className="navColor" variant="dark">
      <Container className="navColor">
        <Navbar.Brand href="#Freedom">
          Freedom <img src={logo} width={"25px"} height={"25px"}></img>
        </Navbar.Brand>

        <Nav>
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Coverage">Coverage</Nav.Link>
          <Nav.Link href="#Support">Support</Nav.Link>
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
          <img
            className="me-4"
            title="cart"
            src={cart}
            width={"25px"}
            height={"25px"}
          ></img>
          <img
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
