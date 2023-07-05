import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { CartContext } from "./../../Context/Context";
import { useContext } from "react";

function PackageBox({
  categoryName,
  packageTitle,
  packageThumbnail,
  packagePrice,
}) {
  // const { title, price, thumbnail, test } = props;
  const { addCart, selectedItems } = useContext(CartContext);
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

        {selectedItems && selectedItems.some((z) => z.name === packageTitle) ? (
          <Button className="mt-2" variant="secondary">
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
  );
}

export default PackageBox;
