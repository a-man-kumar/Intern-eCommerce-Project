import React, { useState, useEffect } from "react";
// import JSONDATA from "../MOCK_DATA.json";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

export default function Searchbar() {
  const [SearchTerm, setSearchTerm] = useState("");
  const [productData, setProductData] = useState([{}]);

  useEffect(() => {
    fetch(`/products?name=${SearchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      });
  }, [SearchTerm]);
  console.log(SearchTerm);

  return (
    <div>
      <input
        style={{
          display: "flex",
          margin: 16,
        }}
        type="text"
        placeholder="Search a product"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      {productData
        .filter((val) => {
          if (SearchTerm === "") return "";
          else if (val.name.toLowerCase().includes(SearchTerm.toLowerCase()))
            return val;

          return "";
        })
        .map((val, key) => {
          return (
            <div>
              {" "}
              <Link to="/ProductViewings" state={{ name: val.name }}>
                {val.name}
              </Link>
            </div>
          );
        })}
    </div>
  );
}
