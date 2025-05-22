import React, { useEffect, useRef } from "react";
import "./Apie_mane.css";

const HorizontalScrollPage = () => {
    const scrollContainer = useRef(null);

    useEffect(() => {
        const container = scrollContainer.current;

        const handleWheel = (event) => {
            // TIKRINA AR VARTOTOJAS SLENKA VERTIKALIAI
            if (event.deltaY !== 0) {
                event.preventDefault();
                container.scrollLeft += event.deltaY; // HORIZONTALUS SLINKIMAS
            }
        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div className="horizontal-page" ref={scrollContainer}>

            <section className="scroll-section1 text-section">
                <div className="content">
                    <h1>Labas, aš Lėja.</h1>
                    <p className="intro-text">Esu grafikos dizainerė ir iliustratorė.</p>
                    
                    <div className="textbox1">
                        <div class="table-container">

                            <div class="table-row">
                                <div class="table-cell"></div> {/* TUŠČIAS LANGELIS */}                               
                                <div class="table-cell table-cell-2">
                                    Todėl šiuo metu <span class="blinking-text">noriu</span> pažinti žmones, atsidurti 
                                    nepatogiose situacijose, kuriose galėčiau išbandyti save ir išmokti ką nors naujo. 
                                    Kadangi dar studijuoju ir semiuosi dėstytojų išminties, nesu jokia ekspertė ir savo 
                                    srityje, bet aš manau, kad svarbu bandyt ir klyst nei iš vis nebandyt.
                                </div>
                            </div>
                                
                            <div class="table-row">
                                <div class="table-cell"> 
                                    Man labai <span class="blinking-text">patinka </span> kūryba, todėl nenoriu savęs 
                                    apibrėžti tik dviem žodžiais – geriau išbandyti ir mokėti daug dalykų vidutiniškai 
                                    nei siekti tobulybės viename. Paklausite kodėl? Nes gebėjimas pritaikyti įvairius 
                                    įgudžius suteikia lankstumo ir originalumo sprendžiant bet kokius iššūkius.
                                </div>
                                <div class="table-cell"></div> {/* TUŠČIAS LANGELIS */}
                            </div>
                        
                        </div>
                    </div>
                </div>
                
            </section>

            <section className="scroll-section2 image-section vertical-line">
                <h1>Mano eskizų knyga</h1>

                <div className="image-row">
                    <div className="1st lin">
                        <img src="/nuotraukos/1.jpg" alt="Sketch 1" className="horizontal-image" />
                        <img src="/nuotraukos/3.jpg" alt="Sketch 2" className="horizontal-image" />
                        <img src="/nuotraukos/5.jpg" alt="Sketch 3" className="horizontal-image" />
                    </div>

                    <div className="2nd lin">
                        <img src="/nuotraukos/2.jpg" alt="Sketch 2" className="horizontal-image" />
                        <img src="/nuotraukos/4.jpg" alt="Sketch 4" className="horizontal-image" />
                        <img src="/nuotraukos/6.jpg" alt="Sketch 5" className="horizontal-image" />
                    </div> 
                </div>
                
            </section>
            
        </div>
    );
};

export default HorizontalScrollPage;
