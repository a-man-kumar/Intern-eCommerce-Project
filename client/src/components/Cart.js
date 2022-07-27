import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Cart(props) {
  const location = useLocation();
  const [cartItems, setCartItems] = useState({ items: [] });

  React.useEffect(() => {
    if (location.state) setCartItems(location.state);
  }, [location]);

  console.log(cartItems);

  return (
    <>
      {cartItems.items.map((val, key) => {
        return <div>{val.name}</div>;
      })}
    </>
  );
}
