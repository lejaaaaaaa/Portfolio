import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Pagrindinis_d/Header";
import Main from "./Pagrindinis_d/Main";
import Footer from "./Pagrindinis_d/Footer";
import HorizontalScroll from "./Apie_mane/apieMane"; // Horizontal scroll component
import DizainoDarbai from "./dizainoDarbai/dizainoDarbai";
import Maketai from "./maketai/maketai";

function App() {
    const location = useLocation();

    // Routes where the header and footer should be hidden
    const hideHeaderAndFooterRoutes = ["/dizainoDarbai", "/maketai"];
    // Routes where only the footer should be hidden
    const hideFooterRoutes = ["/apieMane", "/dizainoDarbai", "/maketai"];

    return (
        <>
            {/* Render Header only if the current route is not in the hide list */}
            {!hideHeaderAndFooterRoutes.includes(location.pathname) && <Header />}
            <Routes>
                <Route path="/" element={<Main />} /> {/* Main page */}
                <Route path="/apieMane" element={<HorizontalScroll />} /> {/* Horizontal scroll page */}
                <Route path="/dizainoDarbai" element={<DizainoDarbai />} /> {/* Dizaino darbai page */}
                <Route path="/maketai" element={<Maketai />} /> {/* Maketai page */}
            </Routes>
            {/* Render Footer only if the current route is not in the hide list */}
            {!hideFooterRoutes.includes(location.pathname) && <Footer />}
        </>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}
