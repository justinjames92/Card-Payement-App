import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import PackageBox from "./PackageBox";
import { Col, Row } from "react-bootstrap";

function PackageListing({ test }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    // listpackages();

    fetch("https://dummyjson.com/products/search?q=phone")
      .then((res) => res.json())
      .then((data) => setData(data.products));
    // axios.get("https://dummyjson.com/products/search?q=phone")
    //   .then((response) => setData(response.data.products))
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Row>
        {data.map((item) => (
          <Col md={4}>
            {/* <PackageBox {...item , test} /> */}
            <PackageBox
              title={item.title}
              thumbnail={item.thumbnail}
              price={item.price}
              dummytest={test}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PackageListing;
