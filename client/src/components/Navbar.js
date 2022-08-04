import React, { useState, useEffect } from "react";
import Searchbar from "./searchbar";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Card, Select } from "antd";

export const Navbar = (props) => {
  const [category, setCategory] = useState("");
  const [productData, setProductData] = useState([{}]);
  const [validate, setValidate] = useState(true);
  const [productCategory, setProductCategory] = useState([{}]);

  useEffect(() => {
    fetch(`/products?categoryId=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      });
  }, [category]);

  console.log(props.state);
  if (props.state === true && validate) {
    fetch(`/products?categoryId=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        setValidate(false);
      });
  }

  useEffect(() => {
    fetch("/products/category")
      .then((response) => response.json())
      .then((data) => {
        setProductCategory(data);
      });
  }, []);

  return (
    <>
      <nav className="main-nav">
        {/* menu part */}
        <div className="menu-link">
          {/* categories */}
          <div>
            <select
              placeholder="Select a category"
              style={{
                margin: 16,
                padding: "16px 20px",
                border: "none",
                borderRadius: "4px",
                backgroundColor: "#f1f1f1",
              }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={""}>Select a category</option>
              {productCategory.map((cat, key) => {
                return <option value={cat.id}>{cat.categoryName}</option>;
              })}
            </select>
          </div>

          {/* search bar */}
          <div
            style={{
              display: "inline-block",
            }}
          >
            <Searchbar />
          </div>
        </div>
      </nav>
      <div>
        {productData.map((val, key) => {
          return (
            <div
              style={{
                display: "inline-flex",
              }}
            >
              <Card
                title={val.name}
                extra={
                  <Link to="/ProductViewings" state={{ name: val.name }}>
                    View
                  </Link>
                }
                style={{
                  width: 300,
                  // display: "inline-block",
                }}
              >
                <p>Description: {val.description}</p>
                <p>Price: {val.price}</p>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};
