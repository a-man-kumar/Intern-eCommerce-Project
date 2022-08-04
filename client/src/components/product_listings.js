import React, { useState } from "react";
import AddProduct from "./add_product";
import { Navbar } from "./navbar";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Col, Divider, Row } from "antd";

export const ProductListings = () => {
  const [isreloaded, setIsreloaded] = useState(false);
  const Reload = () => setIsreloaded(true);

  const style = {
    background: "#DDDDDD",
    padding: "8px 0",
  };

  return (
    <>
      <>
        <Divider orientation="left">Links</Divider>
        <Row gutter={16}>
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
      <div>
        <Navbar state={isreloaded} />

        <AddProduct isreloaded={() => Reload()} />
      </div>
    </>
  );
};
