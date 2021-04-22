import React from "react";

function LevelThree({ name, image }) {
    return (
    <div>
        
        {image ? (
        <div>
        
        {name} 
        {/* {image} */}

        <img src= {`/${image}`} alt='' />
        
        </div>
        ): (<div></div>)}
        
    </div>
    )
}
export default LevelThree;