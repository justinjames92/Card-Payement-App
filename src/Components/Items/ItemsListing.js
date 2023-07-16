import React from "react";

import { CartContext } from "./../../Context/Context";
import { useEffect, useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import PackageBox from "../../Components/Home/PackageBox";
function ItemsListing() {
  const { products } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [selectedOption, setSelectedOption] = useState("Hats");

  useEffect(() => {
    let filteredData = products.find((i) => i.title === selectedOption);
    setProduct(filteredData);
  }, [selectedOption]); //dependency array

  const updateItemList = (e) => {
    console.log(e);
    setSelectedOption(e.target.value);
  };
  console.log(selectedOption);
  return (
    <>
      <select onChange={updateItemList} value={selectedOption}>
        {products.map((i) => (
          <option>{i.title} </option>
        ))}
      </select>
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
    </>
  );
}

export default ItemsListing;
