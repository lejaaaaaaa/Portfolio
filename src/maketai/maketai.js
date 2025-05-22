import React from "react"; 
import { useNavigate } from "react-router-dom"; 
import "./maketai.css"; 

function Maketai() {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div className="maketai-container">
            <button className="closex" onClick={handleClose} >
                <svg width="53" height="14" viewBox="0 0 53 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="-0.5" x2="52.2738" y2="-0.5" transform="matrix(-0.968583 -0.248689 0.256484 -0.966549 52 13)" stroke="black"/>
                    <line y1="-0.5" x2="53.3925" y2="-0.5" transform="matrix(-0.973919 0.226895 -0.234088 -0.972215 52 0)" stroke="black"/>
                </svg>
            </button>

            <h1>Maketai</h1>
            <hr className="line" />
            
            <div className="image-scroll-container">
                <img src="/nuotraukos/portfolio.png" alt="Paveikslėlis" />
            </div>

        </div>
    );
}

export default Maketai;
