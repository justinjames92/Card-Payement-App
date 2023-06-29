import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import mobile from "../../Images/mobile.jpg";

function PackageBox({ title, price, thumbnail, dummytest }) {
  // const { title, price, thumbnail, test } = props;

  // const testthree = () => {
  //   console.log("ghghg");
  //   dummytest();
  // };
  return (
    <Container>
      <p>hellooo github</p>
      <Row className="m-auto">
        <Col>
          <Card className="cardItems">
            <Card.Body>
              <Card.Img
                className="cardPics"
                src={thumbnail}
                alt="Phone image"
              />
              <Card.Title>Model : {title}</Card.Title>
              <Card.Text>Price : {price} $</Card.Text>

              <br></br>
              <Button className="mt-2" variant="secondary" onClick={dummytest}>
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PackageBox;
