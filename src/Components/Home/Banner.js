// @flow strict

import * as React from "react";
import { useContext } from "react";
import { CartContext } from "./../../Context/Context";
import Card from "react-bootstrap/Card";

// import { Row, Col } from "react-bootstrap";
// import mobile from "../../Images/mobile.jpg";
function Banner() {
  const { products, product, selectedOption, setSelectedOption } =
    useContext(CartContext);
  return (
    <>
      {/* <div className="Containerfluid bannerColor"> */}

      {/* <Row>
          <Col md={6}>
            <h1>EXPLORE</h1>
            <h1>OUR BEST </h1>
            <h5>Save $200 on the purchase of select iphone 12 Pro Max</h5>
            <h6>
              with code 12PROMAXSALE (case sensitive) until June 22, 2023*
            </h6>
            <p>
              Plus, get a $200 BONUS discount when you trade-in an eligible
              device**
            </p>
          </Col>
          <Col md={6}>
            <div className="baseImage">
              <img src={mobile} width={"100%"} height={"650px"}></img>
              <h3 className="bottom-left">Apple</h3>
              <h3 className="bottom-right">Iphone12ProMax</h3>
            </div>
          </Col>
        </Row> */}

      {/* </div> */}

      <div>
        <Card className="cardItems mt-2 mr-2">
          <Card.Body>
            <Card.Img className="cardPics" src="" alt="Phone image" />
            <Card.Title>Model :</Card.Title>
            <Card.Text>Price : </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Banner;
