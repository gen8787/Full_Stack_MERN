import React, { useState } from 'react';
import './App.css';
import { Router, Link, navigate } from '@reach/router';

import CreateProduct from './components/CreateProduct';
import AllProducts from './components/AllProducts';

function App() {

  return (
    <>
    <div className="App">
      <h1>Product Manager</h1>
      <Link to="/">Add New Product</Link>
      <span> | </span>
      <Link to="/all">View All Products</Link>
      <hr/>
    <Router>
      <CreateProduct path="/"/>
      <AllProducts path="/all"/>
    </Router>
    </div>
    </>
  );
}

export default App;
