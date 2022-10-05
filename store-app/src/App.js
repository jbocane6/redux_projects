import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import productListing from "./containers/ProductListing";
import productDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact component={productListing} />
          <Route path="/product/:productId" exact component={productDetail} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
