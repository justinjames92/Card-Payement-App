import React from 'react'
import { Row,Col } from 'react-bootstrap'
import PackageBox from '../Items/PackageBox'

const Favorite = () => {
  const favoriteProducts = JSON.parse(localStorage.getItem("favoriteItems"))
  return (
    <>
    <Row>
    {
      favoriteProducts.map((item,k) => (
        <Col md={3} key={k}>
          <PackageBox
            // categoryName={title}
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