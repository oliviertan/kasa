import React, { useState } from "react";
import arrow_left from "../../images/arrow-left.png"
import arrow_right from "../../images/arrow-right.png"
function Gallery({Slides}) {
    const [indexImage,setImage]=useState(0);
    const length =Slides.length
    if(length===1){
        return (
            <section className="gallery">
                <div id="gallery">
                    <img src={Slides[0]} className="displayImage"/>
                </div>
            </section>
        );
    }
    const leftSlide=()=>{
        setImage((index)=>index===0 ?length-1:index-1)
    }
    const rightSlide=()=>{
        setImage((index)=>index===length-1 ?0:index+1)
    }
    return(
        <section className="gallery">
            <div id="gallery">
                {
                    Slides.map((srcImage,index)=> <img src={srcImage} className={index==indexImage ? "displayImage":"displayNone"} key={index}/>)
                }
            </div>
            <div className="slidenmbr">
                <p>{indexImage+1}/{length}</p>
		    </div>
            <img src={arrow_left} onClick={leftSlide} className="arrow-left" alt="arrow-left" ></img>
            <img src={arrow_right}  onClick={rightSlide} className="arrow-right" alt="arrow-right"></img>
        </section>
    )
}
export default Gallery
