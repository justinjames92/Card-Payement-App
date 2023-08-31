import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../../Context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function PackageBox({
  type,
  categoryName,
  packageTitle,
  packageThumbnail,
  packagePrice,
}) {
  const { products, setFavoriteProducts, favoriteProducts, cart, setCart } =
    useContext(CartContext);
  const navigate = useNavigate(); //

  // addCart function recieves the parameters on which item is Add to cart button is clicked
  const addCart = (packageTitle, categoryName) => {
    let category = products.find((x) => x.title === categoryName); //category variable finds out on which title it is clicked eg. hats, sneakers.jackets etc.
    let categoryView = category.items.find((y) => y.name === packageTitle); // categoryView finds out on which item name under the respective title is clicked.
    let addedItem = [];
    //if an item already existing  in localstorage under the key selectedItems it will be assigned to a variable addedItem
    if (JSON.parse(localStorage.getItem("selectedItems"), "[]")) {
      addedItem = JSON.parse(localStorage.getItem("selectedItems"), "[]");
    }

    addedItem.push({ ...categoryView, quantity: 1 }); //new item will be pushed to addedItem inaddition to localstorage and a key-value pair  namely quantity is also added to the category view array of objects
    setCart(addedItem); //addedItem is assigned to statevariable cart
    localStorage.setItem("selectedItems", JSON.stringify(addedItem)); //addedItem is set in localstorage
  };
  //ViewCart function navigates to Cart Page using navigate function from useNavigate hook

  const viewCart = () => {
    navigate("/Carts");
  };
  const viewFavorite =()=>{
    navigate("/favorite");
  }
  // favCart function recieves the parameters on which item is Add to Favorites button is clicked
  const favCart = (packageTitle, categoryName) => {
    console.log("hello adam");
    let category = products.find((x) => x.title === categoryName); //category variable finds out on which title it is clicked eg. hats, sneakers.jackets etc.
    let categoryView = category.items.find((y) => y.name === packageTitle); // categoryView finds out on which item name under the respective title is clicked.
    let favourite = [];
    //if an item already existing  in localstorage under the key favoriteItems it will be assigned to a variable favourite

    if (JSON.parse(localStorage.getItem("favoriteItems"), "[]")) {
      favourite = JSON.parse(localStorage.getItem("favoriteItems"), "[]");
    }
    favourite.push({ ...categoryView, quantity: 1, category:categoryName }); //new item will be pushed to favourite in addition to localstorage and a key-value pair  namely quantity is also added to the category view array of objects
    localStorage.setItem("favoriteItems", JSON.stringify(favourite)); //favourite is set in localstorage
   setFavoriteProducts(favourite); //favourite is assigned to state variable favoriteProducts
  };
console.log(favoriteProducts);
  return (
    <Card className="cardItems mt-2 mr-2">
      <Card.Body>
        <Card.Img
          className="cardPics"
          src={packageThumbnail}
          alt="Phone image"
        />
        <Card.Title>Model : {packageTitle}</Card.Title>
        <Card.Text>Price : {packagePrice} $</Card.Text>

        <br></br>

        {cart && cart.some((z) => z.name === packageTitle) ? (
          <Button
            className="mt-2"
            variant="secondary"
            onClick={() => viewCart()}
          >
            View Cart
          </Button>
        ) : (
          <Button
            className="mt-2"
            variant="secondary"
            onClick={() => addCart(packageTitle, categoryName)}
          >
            Add to cart
          </Button>
        )}
        

        {type !== "favorite" &&(




        favoriteProducts && favoriteProducts.some((z)=>z.name=== packageTitle)?
        (
          <Button
            className="mt-2"
            variant="secondary"
            onClick={() => viewFavorite(packageTitle, categoryName)}
          >
            View Favorites
          </Button>

        ):
          (<Button
            className="mt-2"
            variant="secondary"
            onClick={() => favCart(packageTitle, categoryName)}
          >
            Add to Favorites
          </Button>
        )

        
       ) }
        

        
      </Card.Body>
    </Card>
  );
}

export default PackageBox;
