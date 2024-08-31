import React, { useState } from "react";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import "./Slider.scss";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
      "https://static.wixstatic.com/media/nsplsh_7073774f43516570356267~mv2.jpg/v1/crop/x_0,y_0,w_5907,h_2621/fill/w_1113,h_544,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Mike%20Von.jpg",
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((url, index) => (
                    <img src={url} alt={`Slide ${index + 1}`} key={index} />
                ))}
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastIcon />
                </div>
            </div>
        </div>
    );
};

export default Slider;
