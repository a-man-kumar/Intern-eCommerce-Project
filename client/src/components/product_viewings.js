import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";
import "antd/dist/antd.css";
import { Button, message } from "antd";
import { Card, Divider, Row, Col } from "antd";

export default function ProductViewings(props) {
  const location = useLocation();
  const [prodid, setProdid] = useState({});

  const [productData, setProductData] = useState([{}]);

  const style = {
    background: "#D3D3D3",
    padding: "8px 0",
  };

  //fetch products from api

  React.useEffect(() => {
    if (location.state) setProdid(location.state);
  }, [location]);

  console.log(prodid.name);

  useEffect(() => {
    fetch(`/products?name=${prodid.name}`)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      });
  }, [prodid.name]);
  console.log(productData);
  return (
    <>
      <>
        <Divider orientation="left">Links</Divider>
        <Row gutter={16}>
          <Col className="gutter-row" span={1.9}>
            <div style={style}>
              <Link to="/ProductListings">Go to ProductListings</Link>
            </div>
          </Col>
          <Col className="gutter-row" span={1.9}>
            <div style={style}>
              <Link to="/Cart">Go to Cart</Link>
            </div>
          </Col>
          <Col className="gutter-row" span={1.9}>
            <div style={style}>
              <Link to="/OrderHistory">Go to OrderHistory</Link>
            </div>
          </Col>
        </Row>
      </>
      <hr></hr>
      {productData.map((val, key) => {
        return (
          <>
            <Card
              title={val.name}
              style={{
                width: 300,
              }}
            >
              <p>Description: {val.description}</p>
              <p>Price: {val.price}</p>
            </Card>
            <div>
              <Button
                onClick={() => {
                  Axios.post("/cart", {
                    productId: val.id,
                    product_name: val.name,
                    price: val.price,
                    total: val.price,
                  }).then((res) => {
                    console.log(res.val);
                    // <p1>Added to cart</p1>;
                    message.success("Added to cart");
                  });
                }}
              >
                Add to cart
              </Button>
            </div>
          </>
        );
      })}
    </>
  );
}
