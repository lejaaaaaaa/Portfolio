import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./dizainoDarbai.css";

const DizainoDarbai = () => {

  const navigate = useNavigate();

  const handleClose = () => {
      navigate('/');
  };

  const designs = [
    {
      id: 1,
      imgSrc: "/nuotraukos/grafinis1.png", 
      description:"Plakatas kviečia mokinius mokytis meno mokykloje. Naudojama fotomanipuliacija atspindi mokyklos siekį - mokyti mokinius žvelgti į pasaulį savomis spalvomis. Pasirinktos spalvos, geltona ir mėlyna,  simbolizuoja gyvybinguma, džiaugsmą, energingumą, kūrybingumą, harmoniją ir jausmingumą.",
    },
    {
      id: 2,
      imgSrc: "/nuotraukos/grafinis2.png", 
      description: "Plakatas sukurtas projektui „Scenos bandymai“. Tai projektas, kviečiantis tiek pradedančius, tiek pažengusius kūrėjus drąsiai žengti į sceną, eksperimentuoti ir nebijoti klysti. ",
    },
    {
      id: 3,
      imgSrc: "/nuotraukos/grafinis3.png", 
      description: "Šia iliustracija perteikiama idėja apie kūrybiškumą ir individualumą.",
    },
    {
      id: 4,
      imgSrc: "/nuotraukos/grafinis4.png", 
      description: "Meniu sukurtas užkandinei pavadinimu „Fetišas“. ",
    },
    {
      id: 5,
      imgSrc: "/nuotraukos/grafinis5.png", 
      description: "Plakate iliustravau draugus.",
    },
  ];

  const galleryRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      const gallery = galleryRef.current;

      // DESKTOPUI
      if (gallery && window.innerWidth > 768) {
        // VERTIKALU I HORIZONTALU SLINKIMA PAVERCIA
        if (event.deltaY !== 0) {
          event.preventDefault(); 
          gallery.scrollLeft += event.deltaY; // HORIZONTALIAI SLENKA
        }
      }
    };

    if (galleryRef.current) {
      galleryRef.current.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (galleryRef.current) {
        galleryRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    
    <div className="dizaino-darbai-container">
      
      <button className="closex" onClick={handleClose} >
        <svg width="53" height="14" viewBox="0 0 53 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="-0.5" x2="52.2738" y2="-0.5" transform="matrix(-0.968583 -0.248689 0.256484 -0.966549 52 13)" stroke="black"/>
          <line y1="-0.5" x2="53.3925" y2="-0.5" transform="matrix(-0.973919 0.226895 -0.234088 -0.972215 52 0)" stroke="black"/>
        </svg>
      </button>

      <h1>Grafinio Dizaino Darbai</h1>
      <hr className="line2" />

      <div className="design-gallery" ref={galleryRef}>
        {designs.map((design) => (
          <div className="design-card" key={design.id}>
            <img
              src={design.imgSrc} 
              className="design-image"
            />
            <p className="design-description">{design.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DizainoDarbai;
