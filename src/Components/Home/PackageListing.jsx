import * as React from "react";

// import axios from "axios";
import PackageBox from "./PackageBox";
import { Col, Row } from "react-bootstrap";
import { CartContext } from "./../../Context/Context";
import { useContext } from "react";

function PackageListing() {
  const { products } = useContext(CartContext);
  let HatsArray = products.filter((i) => i.title === "Hats");
  return (
    <div>
      <Row>
        {HatsArray.map((element) =>
          element.items.map((item) => (
            <Col md={3}>
              <PackageBox
                categoryName={element.title}
                packageTitle={item.name}
                packageThumbnail={item.imageUrl}
                packagePrice={item.price}
              />
            </Col>
          ))
        )}
      </Row>
      <Row>
        <button>See All items</button>
      </Row>
    </div>
  );
}

export default PackageListing;
