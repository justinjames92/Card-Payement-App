import React from 'react'
import { useContext } from "react";
import { CartContext } from "../../Context/Context";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const CartItems = () => {
    const {selectedItems} = useContext(CartContext);
    console.log(selectedItems);
  return (
    <div>
      <h1>hello</h1>
       {/* <Row>
        {selectedItems.map((i,k) => (
          <Col md={3} key={k}>
            <Card className="cardItems mt-2 mr-2">
              <Card.Body>
                <Card.Img
                  className="cardPics"
                  src={""}
                  alt="tile image"
                />
                <Card.Title>{i.title}</Card.Title>
            
               

               
              
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}
    </div>
  )
}

export default CartItems