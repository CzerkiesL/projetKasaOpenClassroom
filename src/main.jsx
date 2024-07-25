import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import About from "./pages/About";
import Error from "./pages/Error";
import Footer from "./components/Footer";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:idlogement" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Error />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
