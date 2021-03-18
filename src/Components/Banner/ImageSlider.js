import React from "react";


function ImageComp({ src }){
    let ImageStyles = {
        width: 100%+ "%",
        height: "auto",

    }
    return(
        <img src={src} className="images-slider"  alt="slider-image" style={ImageStyles}></img>
    )
}

export default ImageComp;