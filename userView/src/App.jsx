import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//PAGES
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

//

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;