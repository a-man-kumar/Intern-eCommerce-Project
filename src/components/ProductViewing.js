import React, { useState } from "react";
import JSONDATA from "../MOCK_DATA.json";
import { Link, useParams, useLocation } from "react-router-dom";

export default function ProductViewings(props) {
  const location = useLocation();
  const [prodid, setProdid] = useState({ productid: "" });

  React.useEffect(() => {
    console.log("location from: ", location);
    if (location.state) setProdid(location.state);
  }, [location]);

  return (
    <>
      {JSONDATA.filter((val) => {
        if (prodid.productid === val.id) return val;
        else return "";
      }).map((val, key) => {
        return (
          <div>
            <h1>{val.product_name}</h1>
            <h2>{val.brand}</h2>
            <h2>{val.category}</h2>
          </div>
        );
      })}
    </>
  );
}
