import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import Search from "./Pages/Search";
import Dashboard from "./Pages/Dashboard";
import ProductList from "./Pages/ProductList";
import EditProduct from "./Pages/EditProduct";
import AddProduct from "./Pages/AddProduct";
import Order from "./Pages/Order";




function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/productdetail" element={<ProductDetail />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/productList" element={<ProductList />}></Route>
        <Route path="/edit-product" element={<EditProduct />}></Route>
        <Route path="/add-product" element={<AddProduct />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
