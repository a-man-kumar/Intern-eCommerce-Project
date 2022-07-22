import React from "react";
import Searchbar from "./Searchbar";

export const Navbar = () => {
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
              <select placeholder="Categories">
                <option>Select Category</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Sports</option>
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
    </>
  );
};
