import React, { useState } from "react";
 
 function Collapse({title,text}) {
    const [isopen, setIsOpen] = useState(false);

    const bouton=()=>setIsOpen(!isopen);
    return (
        <div className="collapse">
            <div className="visible_collapse">
                <h2>{title}</h2>
                <div id="bouton" onClick={bouton}>
                    {isopen ? (<i className="fa-solid fa-chevron-up"></i>) : (<i className="fa-solid fa-chevron-down"></i>)}
                </div>
            </div>
            <div className="insidecollapse">
                {isopen && <p>{text}</p>}
            </div>
        </div>

    )
}

export default Collapse
