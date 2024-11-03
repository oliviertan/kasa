import { Link } from 'react-router-dom'
import React from "react";
const Card=({
    imageSrc,
    title,
    id
})=>{
    return(
    <article>
        <Link to={`/logements/${id}`}>
            <div className='card'>
                <img src={imageSrc} alt={title} className='cardimg'/>
                <p className='card-title'>{title}</p>
            </div>
        </Link>
    </article>
    );
};
export default Card