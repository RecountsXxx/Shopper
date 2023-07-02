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
            <Header/>
            <div className="sidebar">
                <Routes>
                    <Route path="smartphones" element={<Smartphones />} />
                    <Route path="skincare" element={<Skincare />} />
                    <Route path="laptops" element={<Laptops />} />
                    <Route path="furniture" element={<Furniture />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;