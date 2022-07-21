import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Aermazon.</p>
        <a
          className="App-link"
          href="./productListings.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Product Listings
        </a>
      </header>
    );
  }
}
