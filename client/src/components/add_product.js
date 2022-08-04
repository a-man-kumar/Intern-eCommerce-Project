import React, { useState } from "react";
import Axios from "axios";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input } from "antd";

export default function AddProduct(props) {
  const style = {
    border: "2px solid black",
    borderRadius: "4px",
    transition: "width 0.4s ease-in-out",
  };
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
  });

  const submit = (e) => {
    e.preventDefault();
    Axios.post("/products", {
      name: data.name,
      description: data.description,
      price: data.price,
      categoryId: data.categoryId,
    }).then((res) => {
      console.log(res.data);
    });
    setData({
      name: "",
      description: "",
      price: "",
      categoryId: "",
    });
    props.isreloaded();
  };

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  return (
    <div>
      <h2>Add a product:</h2>

      <form onSubmit={(e) => submit(e)}>
        <input
          style={style}
          onChange={(e) => handle(e)}
          id="name"
          value={data.name}
          placeholder="name"
          type="text"
        ></input>
        <input
          style={style}
          onChange={(e) => handle(e)}
          id="description"
          value={data.description}
          placeholder="description"
          type="text"
        ></input>
        <input
          style={style}
          onChange={(e) => handle(e)}
          id="price"
          value={data.price}
          placeholder="price"
          type="number"
        ></input>
        <input
          style={style}
          onChange={(e) => handle(e)}
          id="categoryId"
          value={data.categoryId}
          placeholder="Enter between 1 and 5"
          type="number"
        ></input>
        <button
          style={{
            backgroundColor: "#808080",
            border: "none",
            color: "white",
            padding: "6px 3px",
            textdecoration: "none",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: 3,
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
