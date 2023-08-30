import React from "react";
import { Row, Col } from "react-bootstrap";
import remove from "../../Images/delete.png";
import { useContext } from "react";
import { CartContext } from "../../Context/Context";
import getStripe from '../../lib/getStripe';

const CartItems = () => {
  const { cart, setCart } = useContext(CartContext);
  

  // console.log(cart);
// ***Checkout function using stripe***
console.log(cart.map((item) => {return({price: item.price_api, quantity: item.quantity})}), "hello")
  async function handleCheckout() {
    const stripe = await getStripe();
    const itemsInCart = cart.map((item) => {return({price: item.price_api, quantity: item.quantity})})
    const { error } = await stripe.redirectToCheckout({

      lineItems: itemsInCart,

      // lineItems: [
      //   {
      //     price: 'price_1Ni79TBmXesBWQJWVBZsfgAv',
      //     quantity: 2,
      //   },
      // ],
      
      mode: 'subscription',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  }
// ****Quantity Increment & Decrement in cart 
  const updateItemCount = (type, id) => {
    let data = [...cart];
    console.log(data);
    let selectedData = data.find((i) => i.id === id);
    let selectedIndex = data.findIndex((i) => i.id === id);
    console.log(selectedData);
    if (type === "increment") {
      selectedData.quantity = selectedData.quantity + 1;
      console.log(selectedData.quantity);
      console.log(selectedIndex);
      data[selectedIndex] = selectedData;
      console.log(selectedData);

      setCart(data);
    } else {
      if (selectedData.quantity > 0) {
        selectedData.quantity = selectedData.quantity - 1;
        data[selectedIndex] = selectedData;

        setCart(data);
      }
      if (selectedData.quantity === 0) {
        let data = [...cart];
        let removedItem = data.filter((i) => i.id !== id);
        localStorage.setItem("selectedItems", JSON.stringify(removedItem));
        setCart(removedItem);
      }
    }
  };
  const totalPrice = (val1, val2) => {
    return val1 * val2;
  };

  let subTotal = 0;
  let salesTax = 0;
  let GrandTotal = 0;
  cart.forEach((i) => {
    subTotal = subTotal + i.price * i.quantity;
    salesTax = subTotal * 0.13
    GrandTotal = salesTax + subTotal;
  });
  console.log(subTotal);

  // ***Removing a product from cart***
  const removeItem = (id) => {
    let data = [...cart];
    let removedItem = data.filter((i) => i.id !== id);
    setCart(removedItem);
    localStorage.setItem("selectedItems", JSON.stringify(removedItem));
  };
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
                    <td>
                      {" "}
                      <img
                        src={i.imageUrl}
                        className="img-fluid img-thumbnail"
                        alt=""
                      ></img>
                    </td>
                    <td>{i.name}</td>
                    <td>{i.price} $</td>
                    <td>
                      <div className="btn-group" role="group">
                        <button
                          onClick={() => updateItemCount("decrement", i.id)}
                          type="button"
                          className="btn btn-warning"
                        >
                          {" "}
                          -{" "}
                        </button>
                        <input
                          value={i.quantity}
                          min="1"
                          className="form-control"
                        />
                        <button
                          onClick={() => updateItemCount("increment", i.id)}
                          type="button"
                          className="btn btn-warning"
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </td>
                    <td>{totalPrice(i.price, i.quantity)}</td>
                    <td>
                      <img
                        onClick={() => removeItem(i.id)}
                        src={remove}
                        className="img-fluid img-thumbnail"
                        width={"25px"}
                        height={"25px"}
                        alt=""
                      ></img>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </Col>
        </Row>
      </div>

      {cart.length > 0 && (
        <div>
          <Row>
            <Col md={6}></Col>
            <Col md={6}>
              <div className="card">
                <div className="subTotal card-body">
                  <p className="card-text">Subtotal: {subTotal} $</p>
                  <p className="card-text">SalesTax: {salesTax} $</p>
                  <h5 className="card-text">GrandTotal: {GrandTotal} $</h5>
                  <a onClick={handleCheckout} className="btn btn-primary">
                    CheckOut
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default CartItems;
