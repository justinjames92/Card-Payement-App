import * as React from "react";
import { useContext } from "react";
import { CartContext } from "./../../Context/Context";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductTiles = () => {
  const { products, selectedOption, setSelectedOption } =
    useContext(CartContext);
  const navigate = useNavigate();

  const shopNow = (productTitle) => {
    console.log(productTitle);
    setSelectedOption(productTitle);
    // navigate("/Products");
  };
  console.log(selectedOption);

  return (
    <div>
      <Row>
        {products.map((i) => (
          <Col md={3}>
            <Card className="cardItems mt-2 mr-2">
              <Card.Body>
                <Card.Img
                  className="cardPics"
                  src={i.items[0].imageUrl}
                  alt="tile image"
                />
                <Card.Title>{i.title}</Card.Title>
                <button
                  onClick={() => shopNow(i.title)}
                  type="button"
                  class="btn btn-secondary"
                >
                  Shop Now
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductTiles;
