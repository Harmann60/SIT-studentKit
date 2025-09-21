import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ItemsRequired from "./pages/ItemsRequired";
import HowToReach from "./pages/HowToReach";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/items-required" element={<ItemsRequired />} />
                <Route path="/how-to-reach" element={<HowToReach />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
