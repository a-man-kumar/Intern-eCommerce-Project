import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Aermazon.</p>

        <Link to="/ProductListings">ProductListings</Link>
      </header>
    );
  }
}
