import React, { useState } from "react";
import JSONDATA from "../MOCK_DATA.json";
import ProductViewings from "./ProductViewing";

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
            <button onClick={() => window.open("./ProductViewings")}>
              {val.product_name}
            </button>
          </div>
        );
      })}
    </div>
  );
}