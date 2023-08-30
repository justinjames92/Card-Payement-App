import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import cartImage from "../../Images/add-cart.png";
import favorite from "../../Images/favorite.png";
import { useContext } from "react";
import { CartContext } from "../../Context/Context";

/*This is a Navbar component , this is used in all pages */

const MenuList = () => {
  const { cart } = useContext(CartContext);

  return (
    <Navbar className="navColor" variant="dark">
      <Container className="navColor">
        <Navbar.Brand href="/">FashionWorld</Navbar.Brand>

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
              title="Favorites"
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
