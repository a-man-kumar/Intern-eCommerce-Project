import React, { useState } from "react";
import JSONDATA from "../MOCK_DATA.json";
import ProductViewings from "./ProductViewing";
import { Link } from "react-router-dom";

export default function Searchbar() {
  const [SearchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search a product"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      {JSONDATA.filter((val) => {
        if (SearchTerm === "") return "";
        else if (
          val.product_name.toLowerCase().includes(SearchTerm.toLowerCase())
        )
          return val;

        return "";
      }).map((val, key) => {
        return (
          <div>
            {" "}
            <Link to="/ProductViewings" state={{ productid: val.id }}>
              {val.product_name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
