import React, { useEffect } from 'react'
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import remove from "../../Images/delete.png";

const CartItems = () => {
  const selectedItems = JSON.parse(localStorage.getItem("selectedItems"));



  const [cart, setCart] = useState(selectedItems || []);


  const updateItemCount = (type, id) => {
    let data = [...cart];
    console.log(data)
    let selectedData = data.find((i) => (i.id === id));
    let selectedIndex = data.findIndex((i) => (i.id === id));
    console.log(selectedData);
    if (type === 'increment') {
      selectedData.quantity = selectedData.quantity + 1;
      console.log(selectedData.quantity);
      console.log(selectedIndex);
      data[selectedIndex] = selectedData;
      console.log(selectedData);

      setCart(data);
    }
    else {
      if (type === 'decrement' && selectedData.quantity > 0) {

        selectedData.quantity = selectedData.quantity - 1;
        data[selectedIndex] = selectedData;

        setCart(data);
      }

    }


  }
  const totalPrice = (val1, val2) => {
    return val1 * val2
  }

  let subTotal = 0;
  let salesTax = 0;
  let GrandTotal = 0;
  cart.forEach(i => {
    subTotal = subTotal + (i.price * i.quantity);
    salesTax = subTotal * 0.13
    GrandTotal = salesTax + subTotal;

  });
  console.log(subTotal);


  const removeItem = (id) => {
    let data = [...cart]
    let removedItem = data.filter((i) => i.id !== id)
    setCart(removedItem)
    localStorage.setItem("selectedItems", JSON.stringify(removedItem));
  }






  return (
    <>
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
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((i, k) => (
                  <tr>
                    <td>     <img src={i.imageUrl} className="img-fluid img-thumbnail" alt=""></img></td>
                    <td>{i.name}</td>
                    <td>{i.price} $</td>
                    <td>
                      <div className="btn-group" role="group">
                        <button onClick={() => updateItemCount('decrement', i.id)} type="button" className="btn btn-warning"  > - </button>
                        <input value={i.quantity} min="1" className="form-control" />
                        <button onClick={() => updateItemCount('increment', i.id)} type="button" className="btn btn-warning"   > + </button>
                      </div>
                    </td>
                    <td>{totalPrice(i.price, i.quantity)}</td>
                    <td>
                      <img onClick={() => removeItem(i.id)} src={remove} className="img-fluid img-thumbnail" width={"25px"} height={"25px"} alt=""></img>
                    </td>

                  </tr>
                ))}



              </tbody>
            </table>

          </Col>


        </Row>





      </div >
      <Row>
        <Col md={6}></Col>
        <Col md={6}>
          <div className="card">

            <div className="subTotal card-body">
              <p className="card-text">Subtotal: {subTotal} $</p>
              <p className="card-text">SalesTax: {salesTax} $</p>
              <h5 className="card-text">GrandTotal: {GrandTotal} $</h5>
              <a href="#" className="btn btn-primary">CheckOut</a>
            </div>
          </div>

        </Col>
      </Row>


    </>


  )
}

export default CartItems