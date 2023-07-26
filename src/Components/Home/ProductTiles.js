import * as React from "react";
import { useContext } from "react";
import { CartContext } from "./../../Context/Context";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { Link,  } from "react-router-dom";

const ProductTiles = () => {
  const { products  } =
    useContext(CartContext);
 

  const shopNow = (productTitle) => {
    console.log(productTitle);
  };

  return (
    <div>
      <Row>
        {products.map((i,k) => (
          <Col md={3} key={k}>
            <Card className="cardItems mt-2 mr-2">
              <Card.Body>
                <Card.Img
                  className="cardPics"
                  src={i.items[0].imageUrl}
                  alt="tile image"
                />
                <Card.Title>{i.title}</Card.Title>
                <Link to ={`/products/${i.title}`}>
                <button
                  onClick={() => shopNow(i.title)}
                  type="button"
                  className="btn btn-secondary"
                >
                  Shop Now
                </button>

                </Link>
              
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductTiles;
