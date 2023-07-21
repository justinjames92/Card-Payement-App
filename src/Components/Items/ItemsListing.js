import React from "react";

import { CartContext } from "./../../Context/Context";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import PackageBox from "../../Components/Home/PackageBox";
function ItemsListing() {
  const { product, selectedOption } = useContext(CartContext);
  console.log(selectedOption);
  return (
    <Row>
      {product.items !== undefined &&
        product.items.map((item) => (
          <Col md={3}>
            <PackageBox
              categoryName={selectedOption}
              packageTitle={item.name}
              packageThumbnail={item.imageUrl}
              packagePrice={item.price}
            />
          </Col>
        ))}
    </Row>
  );
}

export default ItemsListing;
