import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function ProductViewings(props) {
  const location = useLocation();
  const [prodid, setProdid] = useState({ productid: "" });
  const [cartItems, setCartItems] = useState([]);
  const [productData, setProductData] = useState([{}]);

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      });
  }, []);

  React.useEffect(() => {
    if (location.state) setProdid(location.state);
  }, [location]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <>
      {productData
        .filter((val) => {
          if (prodid.productid === val.id) return val;
          else return "";
        })
        .map((val, key) => {
          return (
            <div>
              <h1>{val.name}</h1>
              <h2>{val.description}</h2>
              <h2>{val.price}</h2>
              <h2>{val.categoryId}</h2>
              <button onClick={() => onAdd(val)}>Add to cart</button>
            </div>
          );
        })}

      <Link to="/Cart" state={{ items: cartItems }}>
        Go to Cart
      </Link>
    </>
  );
}
