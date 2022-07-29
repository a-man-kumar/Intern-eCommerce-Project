import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./components/cart";
import HomePage from "./components/home_page";
import OrderHistory from "./components/order_history";
import { ProductListings } from "./components/product_listings";
import ProductViewings from "./components/product_viewings";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="homepage" element={<HomePage />} />
      <Route path="productlistings" element={<ProductListings />} />
      <Route path="productviewings" element={<ProductViewings />} />
      <Route path="cart" element={<Cart />} />
      <Route path="orderhistory" element={<OrderHistory />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
