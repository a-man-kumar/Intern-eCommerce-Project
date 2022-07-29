import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "antd/dist/antd.css";
import { Card, Button, Divider, Row, Col } from "antd";

export default function OrderHistory() {
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  const style = {
    background: "#D3D3D3",
    padding: "8px 0",
  };

  useEffect(() => {
    fetch("/history")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  React.useEffect(() => {
    if (location.state) setOrders(location.state);
  }, [location]);

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
        </Row>
      </>
      <hr></hr>
      <div></div>
      <div>
        {orders.map((val, key) => {
          return (
            <>
              <Card
                title={val.product_name}
                extra={
                  <Link
                    to="/ProductViewings"
                    state={{ name: val.product_name }}
                  >
                    View
                  </Link>
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
      </div>
    </>
  );
}
