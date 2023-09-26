import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//PAGES
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CategoryPage from "./pages/CategoryPage";
//

import "./App.css";

import {
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/Root/ErrorPage";
import RegisterPage from "./pages/authentication/RegisterPage";
import LoginPage from "./pages/authentication/LoginPage";
import UsersDashboard from "./pages/accounts/UsersDashboard";
import Orders from "./pages/accounts/Orders";
import OrderSuccess from "./pages/OrderSuccess";
import ChangePassword from "./pages/authentication/ChangePassword";
import Profile from "./pages/authentication/Profile";
import Address from "./pages/accounts/Address";
import Wishlist from "./pages/accounts/Wishlist";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      // loader={rootLoader}
      // action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route index element={<HomePage />} />
      <Route path="product/:productId" element={<ProductDetailsPage />} />
      <Route path="category/:categoryId" element={<CategoryPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/customer/dashboard/orders" element={<Orders />} />
      <Route path="/customer/dashboard" element={<UsersDashboard />} />
      <Route path="/customer/change-password" element={<ChangePassword />} />
      <Route path="/customer/profile" element={<Profile />} />
      <Route path="/customer/address" element={<Address />} />
      <Route path="/customer/wishlist" element={<Wishlist />} />

      <Route path="/order/success" element={<OrderSuccess />} />

      <Route path="/store" element={<StorePage />} />

      {/* <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
      </Route> */}
    </Route>
  )
);

export default App;
