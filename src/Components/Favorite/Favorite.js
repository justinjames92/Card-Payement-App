import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/Context'
import { Row,Col } from 'react-bootstrap'
import PackageBox from '../Home/PackageBox'

const Favorite = () => {
  const favoriteProducts = JSON.parse(localStorage.getItem("favoriteItems"))
    console.log(favoriteProducts);
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