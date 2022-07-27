import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
        {/* logo part */}
        <div className="logo">Aermazon</div>

        {/* menu part */}
        <div className="menu-link">
          <ul>
            {/* categories */}
            <li>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select Category</option>
                {/* productCategory.map((val,key) => {

                }) */}
                <option>books</option>
                <option>electronics</option>
                <option>sporting goods</option>
                <option>clothing</option>
                <option>housing essentials</option>
              </select>
            </li>

            {/* search bar */}
            <li>
              <Searchbar />
            </li>
            <li>filters</li>
          </ul>
        </div>
      </nav>
      <div>
        {productData
          .filter((val) => {
            if (category === "Select Category") return val;
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
              <div>
                <Link to="/ProductViewings" state={{ productid: val.id }}>
                  {val.name}
                </Link>

                <h2>{val.description}</h2>
                <h2>{val.price}</h2>
                <h2>{val.categoryId}</h2>
              </div>
            );
          })}
      </div>
    </>
  );
};
