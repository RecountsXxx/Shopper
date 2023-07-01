import './App.css';
import * as React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';


import Header from './Components/Header';
import Footer from './Components/Footer';
import Smartphones from "./Categories/Smarthones";
import Furniture from "./Categories/Furniture";
import Skincare from "./Categories/Skincare";
import Laptops from "./Categories/Laptops";

function App() {
  return (
      <div className="bg-light">
          <Header></Header>
          <div className="sidebar">
              <Routes>
                  <Route>
                      <Route path="smartphones" element={<Smartphones></Smartphones>}></Route>
                      <Route path="skincare" element={<Skincare></Skincare>}></Route>
                      <Route path="laptops" element={<Laptops></Laptops>}></Route>
                      <Route path="furniture" element={<Furniture></Furniture>}></Route>
                  </Route>
              </Routes>
          </div>
          <Footer></Footer>
      </div>

  );
}

export default App;
