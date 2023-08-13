import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "./../../Context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function PackageBox({
  categoryName,
  packageTitle,
  packageThumbnail,
  packagePrice,
}) {
  const { products } = useContext(CartContext);
  const navigate = useNavigate();


  const [cartList, setCartList] = useState([])

  const addCart = (packageTitle, categoryName) => {
    let category = products.find((x) => x.title === categoryName);
    let categoryView = category.items.find((y) => y.name === packageTitle);
    let addedItem = [];//
    if (JSON.parse(localStorage.getItem("selectedItems"), "[]")) {
      addedItem = JSON.parse(localStorage.getItem("selectedItems"), "[]");
    }

    addedItem.push({ ...categoryView, quantity: 1 })

    setCartList(addedItem);


    localStorage.setItem("selectedItems", JSON.stringify(addedItem));

  };
  const viewCart = () => {
    navigate("/Carts");

  }


  return (
    <Card className="cardItems mt-2 mr-2">
      <Card.Body>
        <Card.Img
          className="cardPics"
          src={packageThumbnail}
          alt="Phone image"
        />
        <Card.Title>Model : {packageTitle}</Card.Title>
        <Card.Text>Price : {packagePrice} $</Card.Text>

        <br></br>

        {cartList && cartList.some((z) => z.name === packageTitle) ? (
          <Button className="mt-2" variant="secondary" onClick={() => viewCart()}>
            View Cart
          </Button>
        ) : (
          <Button
            className="mt-2"
            variant="secondary"
            onClick={() => addCart(packageTitle, categoryName)}
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
    //***design of an item using card component***
  );
}

export default PackageBox;
