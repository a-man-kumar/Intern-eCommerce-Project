import React, { useState } from "react";
import Axios from "axios";

export default function AddProduct() {
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
  };

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };
  return (
    <div>
      <h2>Add a product:</h2>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="name"
          value={data.name}
          placeholder="name"
          type="text"
        ></input>
        <input
          onChange={(e) => handle(e)}
          id="description"
          value={data.description}
          placeholder="description"
          type="text"
        ></input>
        <input
          onChange={(e) => handle(e)}
          id="price"
          value={data.price}
          placeholder="price"
          type="number"
        ></input>
        <input
          onChange={(e) => handle(e)}
          id="categoryId"
          value={data.categoryId}
          placeholder="categoryId"
          type="number"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
