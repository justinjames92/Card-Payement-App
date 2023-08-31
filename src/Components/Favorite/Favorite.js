import React from 'react'
import { Row,Col } from 'react-bootstrap'
import PackageBox from '../Items/PackageBox'
import { CartContext } from "./../../Context/Context";
import {  useContext } from "react";
const Favorite = () => {
  const favoriteProducts = JSON.parse(localStorage.getItem("favoriteItems"))
  const { cart } = useContext(CartContext);

  let favouriteData= favoriteProducts.filter(i=> ! cart.some(j=>j.name===i.name));

  return (
    <>
    <Row>
    {
      favouriteData.map((item,k) => (
        <Col md={3} key={k}>
          <PackageBox
            categoryName={item.category}
            type="favorite"
            packageTitle={item.name}
            packageThumbnail={item.imageUrl}
            packagePrice={item.price}
          />
        </Col>
      ))}

  </Row>

    </>
    
  )
}

export default Favorite