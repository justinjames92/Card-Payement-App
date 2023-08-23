import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/Context'
import { Row,Col } from 'react-bootstrap'
import PackageBox from '../Home/PackageBox'

const Favorite = () => {
    const{favoriteProducts,title}=useContext(CartContext);
    console.log(favoriteProducts);
  return (
    <>
    <Row>
    {
      favoriteProducts.map((item,k) => (
        <Col md={3} key={k}>
          <PackageBox
            categoryName={title}
            packageTitle={item.name}
            packageThumbnail={item.imageUrl}
            packagePrice={item.price}
          />
        </Col>
      ))}
    <h1>Hello Favorites</h1>

  </Row>

    </>
    
  )
}

export default Favorite