import React from 'react'
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const CartItems = () => {
 const[cart,setCart] =  useState(JSON.parse(localStorage. getItem("selectedItems")));
  console.log(cart);
  return (
    <div>
     

      <Row>
        <Col>
        <table className="table table-image">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
  {cart.map((i,k) => (
    <tr>
      <td>     <img src={i.imageUrl} className="img-fluid img-thumbnail" alt=""></img></td>
      <td>{i.name}</td>
      <td>{i.price} $CAD</td>
      <td>@mdo</td>
    </tr>
    ))}
 
  </tbody>
</table>
        </Col>
        
        {/* <div className="btn-group" role="group"> <button type="button" className="btn btn-warning"  > - -</button>  
        <input type="number" min="1"  className="form-control" />  
        <button  type="button"  className="btn btn-warning"   > + </button> 
      </div> */}
      </Row>
     

    </div>
    
    
  )
}

export default CartItems