import React, { useState, useEffect } from "react";
// import JSONDATA from "../MOCK_DATA.json";
import { Link } from "react-router-dom";

export default function Searchbar() {
  const [SearchTerm, setSearchTerm] = useState("");
  const [productData, setProductData] = useState([{}]);

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      });
  }, []);

  return (
    <div>
      <input
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
              <Link to="/ProductViewings" state={{ productid: val.id }}>
                {val.name}
              </Link>
            </div>
          );
        })}
    </div>
  );
}
