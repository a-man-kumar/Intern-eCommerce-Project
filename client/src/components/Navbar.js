import React, { useState, useEffect } from "react";
import Searchbar from "./searchbar";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Card, Select } from "antd";

export const Navbar = (props) => {
  const [category, setCategory] = useState({ category: "Select Category" });
  const [productData, setProductData] = useState([{}]);
  const [productCategory, setProductCategory] = useState([{}]);

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      });
  }, []);

  console.log(props.state);
  if (props.state === true) {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
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
              <option>Select Category</option>
              {/* productCategory.map((val,key) => {

                }) */}
              <option>all products</option>
              <option>books</option>
              <option>electronics</option>
              <option>sporting goods</option>
              <option>clothing</option>
              <option>housing essentials</option>
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
        {productData
          .filter((val) => {
            if (category === "all products") return val;
            else {
              const categoriesArr = productCategory.filter((x) => {
                if (category === x.categoryName) return x;
                return "";
              });

              let result = categoriesArr.map((a) => a.id);
              if (val.categoryId === result[0]) return val;
            }
            return "";
          })
          .map((val, key) => {
            return (
              <>
                <Card
                  title={val.name}
                  extra={
                    <Link to="/ProductViewings" state={{ name: val.name }}>
                      View
                    </Link>
                  }
                  style={{
                    width: 300,
                    display: "inline-block",
                  }}
                >
                  <p>Description: {val.description}</p>
                  <p>Price: {val.price}</p>
                </Card>
              </>
            );
          })}
      </div>
    </>
  );
};
