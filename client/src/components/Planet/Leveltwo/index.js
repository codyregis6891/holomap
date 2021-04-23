import React from "react";
import Orbit from "../../Orbit/Orbit"


function LevelTwo({ name, diameter, rotation_period, orbital_period, planet_info, img }) {
    return (
        <div>
            {name} <br />
            {diameter} <br />
            {rotation_period}<br /> 
            {orbital_period}<br /> 
            {planet_info} <br />
            {img ? (<img src={`/${img}`} alt=''/>) : (<div />) }
            <Orbit/>

        </div>
    )
}

export default LevelTwo;