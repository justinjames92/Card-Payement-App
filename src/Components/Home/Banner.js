// @flow strict

import * as React from "react";
import Card from "react-bootstrap/Card";


function Banner() {

  return (
    <>
    

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
