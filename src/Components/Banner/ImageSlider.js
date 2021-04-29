import React from "react";


function ImageComp({ src }){
    let ImageStyles = {
        width: 100%+ "%",
        height: "auto",

    }
    return(
        <picture>
            <img src={src} className="images-slider"  alt="slider-image" style={ImageStyles} />
        </picture>
    )
}

export default ImageComp;