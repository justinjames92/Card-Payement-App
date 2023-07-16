import * as React from "react";

// import axios from "axios";
import PackageBox from "./PackageBox";
import { Col, Row } from "react-bootstrap";
import { CartContext } from "./../../Context/Context";
import { useContext } from "react";

function PackageListing() {
  const { products } = useContext(CartContext);
  let hatsArray = products.find((i) => i.title === "Hats");
  return (
    <div>
      <Row>
        {hatsArray.items.map((item) => (
          <Col md={3}>
            <PackageBox
              categoryName={"Hats"}
              packageTitle={item.name}
              packageThumbnail={item.imageUrl}
              packagePrice={item.price}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={12}>
          <div className="seeAllBlock">
            <a className="seeAll" href="/Products">
              See All items
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PackageListing;
