import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Card, Divider, Row, Col } from "antd";
import Axios from "axios";

export default function Cart(props) {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);
  const style = {
    background: "#D3D3D3",
    padding: "8px 0",
  };

  useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (location.state) setCartItems(location.state);
  }, [location]);

  let totalPrice = 0;

  console.log(cartItems);
  cartItems.forEach((item) => {
    console.log(item.price);
    totalPrice += item.price;
  });

  const deleteOperation = async (id) => {
    let result = await fetch("/edit_cart/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    getData();
  };

  const getData = async () => {
    fetch("/cart")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
      });
  };

  const postOperation = async (val) => {
    Axios.post("/history", {
      productId: val.id,
      product_name: val.product_name,
      price: val.price,
      quantity: 1,
      total: val.price,
    }).then((res) => {
      console.log(res.val);
    });
  };

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
              <Link to="/OrderHistory">Go to OrderHistory</Link>
            </div>
          </Col>
        </Row>
      </>
      <hr></hr>
      {cartItems.map((val, key) => {
        return (
          <>
            <Card
              title={val.product_name}
              extra={
                <>
                  <Button onClick={() => deleteOperation(val.id)}>
                    Remove
                  </Button>
                  <Link
                    to="/ProductViewings"
                    state={{ name: val.product_name }}
                  >
                    View
                  </Link>
                </>
              }
              style={{
                width: 300,
                display: "inline-block",
              }}
            >
              <p>Price: {val.price}</p>
            </Card>
          </>
        );
      })}
      <h2>Total Price: {totalPrice}</h2>
      <Button
        onClick={() => {
          cartItems.map((val, key) => {
            postOperation(val);
            deleteOperation(val.id);
          });
        }}
      >
        Checkout
      </Button>
    </>
  );
}
