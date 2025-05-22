import React, { useState } from "react";
import { HashLink } from "react-router-hash-link"; 
import { Link } from "react-router-dom"; 
import "./Header.css";
import "./meniu.css";

//HEADER
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

        return (
            <header className="header">
                <Link to="/">
                    <img className="logo" src="/nuotraukos/logo.png" alt="Logo" />
                </Link>

                <HashLink smooth to="/#bendradarbiaujam" className="middle-button mobile-only no-link-style">
    Parašyk man
</HashLink>
                <div className="hamburger-menu" onClick={openMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {menuOpen && <Meniu onClose={closeMenu} />}
            </header>
        );
};


//MENIU
const Meniu = ({ onClose }) => {
    const isMobile = window.innerWidth <= 768; // TIKRINA AR EKRANAS MOBILE

    //PASPAUDUS ANT APIE MANE MENIU LANGE NUNAVIGUOJA ARBA NE I TA LANGA.
    const handleApieManeClick = () => {
        onClose();
        if (isMobile) {
            const section = document.getElementById("main_3_d");
            section?.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = "/apieMane";
        }
    };

    return (
        <div className="meniu-overlay">
            <div className="meniu-content slide-in">
                <button className="close-x" onClick={onClose}>
                    <svg width="53" height="14" viewBox="0 0 53 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="52.2738" y2="-0.5" transform="matrix(-0.968583 -0.248689 0.256484 -0.966549 52 13)" stroke="white"/>
                        <line y1="-0.5" x2="53.3925" y2="-0.5" transform="matrix(-0.973919 0.226895 -0.234088 -0.972215 52 0)" stroke="white"/>
                    </svg>
                </button>

                <h2 className="menu-item" onClick={onClose}>
                    <HashLink smooth to="/#mano-darbai" className="no-link-style">
                        Mano darbai
                    </HashLink>
                </h2>

                <h2 className="menu-item" onClick={handleApieManeClick}>
                    <span className="no-link-style">Apie mane</span>
                </h2>

                <div className="bendradarbiaujam_geles">
                    <span className="flower">
                        <img className="gele_s" src="/nuotraukos/gele sukasi.GIF" alt="Flower" /> 
                    </span>
                    
                    <h2 className="menu-item" onClick={onClose}>
                        <HashLink smooth to="/#bendradarbiaujam" className="no-link-style">
                            BENDRADARBIAUJAM?
                        </HashLink>
                    </h2>

                    <span className="flower">
                        <img className="gele_s" src="/nuotraukos/gele sukasi.GIF" alt="Flower" /> 
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
