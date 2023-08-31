import React from "react";
import { CartContext } from "./../../Context/Context";
import { useEffect, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import PackageBox from "./PackageBox";
import { useParams } from "react-router-dom";
function ItemsListing() {
  const { title } = useParams();
  const { products, setProduct, product } = useContext(CartContext);
  useEffect(() => {
    let filteredData = products.find((i) => i.title === title);
    setProduct(filteredData);
  }, [title]); //dependency array

  return (
    <Row>
      {product.items !== undefined &&
        product.items.map((item, k) => (
          <Col md={3} key={k}>
            <PackageBox
            type="listing"
              categoryName={title}
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
